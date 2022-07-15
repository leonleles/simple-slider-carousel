import { useEffect, useState } from "react";

import { PageContainer } from "../../components/page-container";
import { PageSection } from "../../components/page-section";
import { SliderCarousel } from "../../components/slider-carousel";
import { SliderCarouselGrid } from "../../components/slider-carousel-grid";
import { SliderCarouselItemGroup } from "../../components/slider-carousel-item-group";
import { pokemonApi } from "../../services/pokemon-api";

import "./styles.scss";

export const ExamplePokemonPage: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);

  useEffect(() => {
    pokemonApi
      .get("/pokemon", {
        params: {
          limit: 33,
        },
      })
      .then((response) => {
        const { data } = response;

        setPokemonList(data.results);
      });
  }, []);

  return (
    <PageContainer>
      <h1 className="example-pokemon-page-title">Example Pokemon Page</h1>

      {pokemonList && (
        <PageSection>
          <SliderCarousel>
            {pokemonList.map((pokemon) => {
              const paths = pokemon.url.split("/");
              return (
                <SliderCarouselItemGroup key={pokemon.name}>
                  <SliderCarouselGrid
                    title={pokemon.name}
                    imageSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${paths[6]}.png`}
                  />
                </SliderCarouselItemGroup>
              );
            })}
          </SliderCarousel>
        </PageSection>
      )}

      {pokemonList && (
        <PageSection>
          <SliderCarousel>
            {pokemonList.map((pokemon) => {
              const paths = pokemon.url.split("/");

              return (
                <SliderCarouselItemGroup key={pokemon.name}>
                  <SliderCarouselGrid
                    title={pokemon.name}
                    imageSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${paths[6]}.png`}
                  />
                </SliderCarouselItemGroup>
              );
            })}
          </SliderCarousel>
        </PageSection>
      )}
    </PageContainer>
  );
};
