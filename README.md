# surpriseApi
The purpose of the API is to return a random response, according to the parameters passed by the client.
- ( name & birth year)


# Pre-requisites
- Install [Node.js](https://nodejs.org/en/)
- recomanded to use nodemon for automatic restarting of application. https://nodemon.io/
- 
# Getting started
- Clone the repository
```
git clone  <git lab template url> <project_name>
```
- Install dependencies
```
npm install
```
- Build and run the project
```
node app.js / nodemon app.js
```
  Navigate to `http://localhost:3000`



- API  endpoints

  - **chuck-norris-joke Endpoint** : https://api.chucknorris.io/jokes/random ,
  - **kanye-quote  Endpoint** : https://api.kanye.rest ,
  - **joke  Endpoint** : https://v2.jokeapi.dev/joke/Any?type=single ,
  


## Project Structure
The folder structure of this app is explained below:

| Name                     | Description |
| ------------------------ | ------------------------------------------------------------------- |
| **/routes**              | Contain all surprise routes and stats route                         |          
| **/services**            | Contain validation.js and Stats.js                                  |
| **/services/surpris**    | Contain all the api's class                                         |
| **/app.js**              | Entry point to express app                                          |            





### Running the build the project

```
1) Navigate to the directory of the Projet
2) open Terminal and Run nodemon app.js
3) Browse to the server: =>  http://localhost:3000
      3.1)  /surprise?name=<first name>%<last name>&birth_year=<year>
      3.2)  /stats
4) you can repeat it and change the properties
5) when you want to stop- ctrl+c 
```
### Example of inputs:
```
ChuckNorris/Name-sum - http://localhost:3000/surprise?name=yarden&birth_year=1994  (0<birth_year<2000)
Kanye West/ Name-sum - http://localhost:3000/surprise?name=yarden&birth_year=2002   (birth_year>2000 and not start with 'aAzZ')
joke / Kanye West - http://localhost:3000/surprise?name=QQyarden&birth_year=2009     (birth_year>2000 and not start with 'qQ')
```

## Integrate new Surprise
In case of adding new surprise- you need to follow the next steps:\

``` Create the Surprise in a new moduld ( url , type and result)
    The "surprises" are all inherited from parent SurpriseFrame so make sure you follow that structure.
    put the new surprise in the diractory ./routes/surprise
    Add to surpriseRoute -  a pradicate that check all the condtions that are required to choose this surprise
    use module.export in the end of the new surprise
    Add to Stats module to "this.stats=" this class object and the type is needed

```


## Authors

* **Yarden Toledano** - 



