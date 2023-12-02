import { MagnifyingGlass } from "phosphor-react-native";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";

import { CardMovies } from "../../components/CardMovies";

import { api } from "../../services/api";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;

}

export function Home () {
  const [discoveryMovies, setDiscoveryMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResultMovies, setSearchResultMovies] = useState<Movie[]>([]);
  const [noResult, setNoResult] = useState(false);



  useEffect(() => {
    loadMoreData();
  }, [loadMoreData, page]);

// Função da API para listar os filmes
  const loadMoreData = async () => {
      setLoading(true);
      
     const response = await api.get("/movie/popular",  {
      params: {
        page,
      },
    });

    
    setDiscoveryMovies([...discoveryMovies, ...response.data.results]);
    setPage (page +1);
    setLoading(false);
  };
  // Função da API para listas os filmes
  
  // Requisição API da tela de busca
  const searchMovies = async (query: string) => {
    setLoading(true);
    const response = await api.get("/search/movie",  {
      params: {
        query,
      },
    });

    if(response.data.length == 0) {
      setNoResult(true)
    } else {
      setSearchResultMovies (response.data.results)
    }
    setLoading(true);
  };
  
  
  
  
  //Função da tela de busca
  const handleSearch = (text: string) => {
      setSearch(text);
      if(text.length > 2) {
          searchMovies(text);
      } else {
          setSearchResultMovies ([]);
      }

  };

  //Função para mostrar detalhes do filme ao clicar
  const navigation = useNavigation();

  const renderMovieItem = ({ item }: { item: Movie }) => (
    <CardMovies
      data={item}
      onPress={() => navigation.navigate("Details", { movieId: item.id })}
    />
  );

  const movieData = search.length > 2 ? searchResultMovies : discoveryMovies;


  return (
    // Toda a home dividida por Views
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerText}>PerigosoFlix</Text>
        <View style={styles.containerInput}>
          <TextInput 
            placeholder="Buscar" 
            style={styles.input}
            value={search}
            onChangeText={handleSearch}
            />
          <MagnifyingGlass color="#FFF" size={25} weight="light" />
          </View>

        </View>
        
        <ScrollView>
        <View>
        
          <FlatList 
            data={movieData}
            numColumns={3}
            renderItem={renderMovieItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              padding: 35,
              paggingBottom: 100,
            }}
              onEndReached={() => loadMoreData}
              onEndReachedThreshold={0.5}
              
          />
          {loading && <ActivityIndicator size={50} color="#0296e5" />}
        
        </View>
        </ScrollView>
    </View>
  );
// Toda a home dividida por Views
}