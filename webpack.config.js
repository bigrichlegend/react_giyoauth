module.exports = {
    entry: './app/git.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve:{
        root: __dirname,
        alias: {
            MyApp: 'app/components/MyApp',
            Profile: 'app/components/github/Profile.jsx',
            Repo: 'app/components/github/Repo.jsx',
            RepoList: 'app/components/github/RepoList.jsx',
            Search: 'app/components/github/Search.jsx'
        },
        extensions:['', '.js', '.jsx']
    },
    module: {
        loaders:[
            {
                loader: 'babel-loader',
                query: { presets: ['react', 'es2015'] },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};