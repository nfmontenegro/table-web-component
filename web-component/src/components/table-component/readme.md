# my-component



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description | Type     | Default     |
| ---------------- | ----------------- | ----------- | -------- | ----------- |
| `currentPage`    | `current-page`    |             | `number` | `1`         |
| `data`           | `data`            |             | `any`    | `undefined` |
| `invokeCallback` | `invoke-callback` |             | `any`    | `undefined` |
| `limit`          | `limit`           |             | `number` | `undefined` |
| `tHeads`         | --                |             | `any[]`  | `[]`        |
| `total`          | `total`           |             | `number` | `undefined` |


## Dependencies

### Depends on

- [search-component](../search-component)
- [pagination-component](../pagination-component)

### Graph
```mermaid
graph TD;
  table-component --> search-component
  table-component --> pagination-component
  style table-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
