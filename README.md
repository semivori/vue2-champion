# vue2-champion

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## Store

### State
- config: {
    teams: 8,
    laps: 1,
}
- matches: [
    {
        id: 1,
        hc_id: 1,
        ac_id: 2,
        round: 1,
        score: [2,3],
    }    
]
- teams: [
    {
        id: 1,
        name: FC Dons,
        user_id: 1,
        priority: 1,
    }
]
- users: [
    {
        id: 1,
        name: vlad
    }
]

### Getters

- getTeam
- getMatch
- getUser
- getRounds
- getRoundMatches
- getTable