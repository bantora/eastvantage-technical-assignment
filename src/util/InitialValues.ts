import type { User } from "../api/random-user/types";

export const UserValues: User = {
  results: [
    {
      gender: "",
      name: {
        title: "",
        first: "",
        last: "",
      },
      location: {
        street: {
          number: 0,
          name: "",
        },
        city: "",
        state: "",
        country: "",
        postcode: 0,
        coordinates: {
          latitude: "",
          longitude: "",
        },
        timezone: {
          offset: "",
          description: "",
        },
      },
      email: "",
      login: {
        uuid: "",
        username: "",
        password: "",
        salt: "",
        md5: "",
        sha1: "",
        sha256: "",
      },
      dob: {
        date: "",
        age: 0,
      },
      registered: {
        date: "",
        age: 0,
      },
      phone: "",
      cell: "",
      id: {
        name: "",
        value: "",
      },
      picture: {
        large: "",
        medium: "",
        thumbnail: "",
      },
      nat: "",
    },
  ],
  info: {
    seed: "",
    results: 0,
    page: 0,
    version: "",
  },
};
