# Scatter

A very simple scatter plot.


```
brand   | model  |  price |   kmpl | type      |   bhp  |
:-------|:-------|-------:|-------:|:----------|-------:|
Tata    | Nano   |    199 |   23.9 | Hatchback |    38  |
Suzuki  | Alto800|    248 |   22.7 | Hatchback |    47  |
Hyundai | EON    |    302 |   21.1 | Hatchback |    55  |
Nissan  | Datsun |    312 |   20.6 | Hatchback |    67  |
...     | ...    |    ... |    ... | ...       |   ...  |
Suzuki  | Ciaz   |    725 |   20.7 | Sedan     |    91  |
Skoda   | Rapid  |    756 |   15.0 | Sedan     |   104  |
Hyundai | Verna  |    774 |   17.4 | Sedan     |   106  |
VW      | Vento  |    785 |   16.1 | Sedan     |   104  |
```

Make simple visualisations

```vis
data:
  url: "data/cars.csv"
mark: point
encoding:
  x:
    type: quantitative
    field: kmpl
  y:
    type: quantitative
    field: price
```
