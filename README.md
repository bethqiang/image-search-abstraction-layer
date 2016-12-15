# Image Search Abstraction Layer

An API endpoint that allows you to search for images and browse recent search queries.

> Pass a search string and an optional offset query in the URL to get a set of image information relating to your search string. Image information includes title, URL, text snippet, thumbnail image URL, and the page's URL.

> Paginate through the responses by adding a `?offset=num` parameter to the URL, where `num` is a multiple of 10.

> Get a list of the 10 most recently searched strings by hitting the `/api/latest` endpoint.

### Example Image Search:

[https://img-search-api-bq.herokuapp.com/api/search?q=cats](https://img-search-api-bq.herokuapp.com/api/search?q=cats) will result in 10 items, each of which will have title, url, snippet, thumbnail, and context fields.

```
{
  title: "Cats scared of Cucumbers Compilation - Cats Vs Cucumbers - Funny ...",
  url: "https://i.ytimg.com/vi/cNycdfFEgBc/maxresdefault.jpg",
  snippet: "Cats scared of Cucumbers ...",
  thumbnail: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQIpKVlrysjWTWyDxnvCg12eSyOy2CcISl-ZyHcTmhmhp-zL78Mq7s0_4Li",
  context: "https://www.youtube.com/watch?v=cNycdfFEgBc"
}
```

[https://img-search-api-bq.herokuapp.com/api/search?q=cats&offset=10](https://img-search-api-bq.herokuapp.com/api/search?q=cats&offset=10) will return the next "page," or the next set of 10 results.

### Example Latest Search:

[https://img-search-api-bq.herokuapp.com/api/latest](https://img-search-api-bq.herokuapp.com/api/latest) will result in the most recent 10 searches, each of which will have query and when fields.

```
{
  query: "cats",
  when: "2016-12-15T20:50:00.467Z"
}
```

Developed for a Free Code Camp project. Original project idea link: [https://www.freecodecamp.com/challenges/image-search-abstraction-layer](https://www.freecodecamp.com/challenges/image-search-abstraction-layer)