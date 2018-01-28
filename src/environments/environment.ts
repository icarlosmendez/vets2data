// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyAII-sV00NAOL7oUMJpurcVKRzXvFSAjf8',
        authDomain: 'vets2data.firebaseapp.com',
        databaseURL: 'https://vets2data.firebaseio.com/',
        projectId: 'vets2data',
        storageBucket: 'vets2data.appspot.com',
        messagingSenderId: '279296452878'
    }
};
