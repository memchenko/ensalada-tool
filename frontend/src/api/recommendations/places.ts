import { useQuery, useMutation } from "react-query";
import isEmpty from "lodash/isEmpty";

import { API_URL } from "../constants";
import { Categories } from "../../shared/types/places";

export enum RequestKeys {
  GetPlaces,
}

const allCategories = Object.values(Categories);

export const usePlaces = (categories: Categories[]) => {
  const PATH = `${API_URL}/recommendations/places`;
  const finalCategories = isEmpty(categories) ? allCategories : categories;
  const url = `${PATH}?categories[]=${finalCategories.join("&categories[]=")}`;

  return useQuery([RequestKeys.GetPlaces], {
    queryFn: () => {
      return fetch(url);
    },
  });
};

export const useCreatePlace = () => {
  return useMutation({
    mutationFn: () => {
      return Promise.reject();
    },
  });
};
