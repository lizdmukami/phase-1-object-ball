function gameObject(){
    return{
    home:{
            teamName: "Brooklyn Nets",
            colors: ['White', 'Black',],
            players:
            {
                        alanAnderson: {
                    
                            number: 0,
                            shoe: 16,
                            points: 22,
                            rebounds: 12,
                            assists: 12,
                            steals: 3,
                            blocks: 1,
                            slamDunks: 1
                        },
                        ReggieEvans: {
                            
                            number: 30,
                            shoe: 14,
                            points: 12,
                            rebounds: 12,
                            assists: 12,
                            steals: 12,
                            blocks: 12,
                            slamDunks: 7
                        },
                        BrookLopez: {
                            
                            number: 11,
                            shoe: 17,
                            points: 17,
                            rebounds: 19,
                            assists: 10,
                            steals: 3,
                            blocks: 1,
                            slamDunks: 1
                        },
                        MasonPlumlee: {
                            
                            number: 1,
                            shoe: 19,
                            points: 26,
                            rebounds: 12,
                            assists: 6,
                            steals: 3,
                            blocks: 8,
                            slamDunks: 5
                        },
                        JasonTerry: {
                            
                            number: 31,
                            shoe: 15,
                            points: 19,
                            rebounds: 2,
                            assists: 2,
                            steals: 4,
                            blocks: 11,
                            slamDunks: 1
                        },
                    },
        },
    away : {
        teamName: "Charlotte Hornets",
        colors: ['Turquoise', 'Purple',],
        players:{
                    JeffAdrien: {
                        
                        number: 4,
                        shoe: 18,
                        points: 10,
                        rebounds: 1,
                        assists: 1,
                        steals: 2,
                        blocks: 7,
                        slamDunks: 2
                    },
                    BismakBoyombo: {
                        
                        number: 0,
                        shoe: 16,
                        points: 12,
                        rebounds: 4,
                        assists: 7,
                        steals: 7,
                        blocks: 15,
                        slamDunks: 10
                    },
                    DeSagnaDiop: {
                        
                        number: 2,
                        shoe: 14,
                        points: 24,
                        rebounds: 12,
                        assists: 12,
                        steals: 4,
                        blocks: 5,
                        slamDunks: 5
                    },
                    BenGordon: {
                        
                        number: 8,
                        shoe: 15,
                        points: 33,
                        rebounds: 3,
                        assists: 2,
                        steals: 1,
                        blocks: 1,
                        slamDunks: 0
                    },
                    BrendanHaywood: {
                        
                        number: 33,
                        shoe: 15,
                        points: 6,
                        rebounds: 12,
                        assists: 12,
                        steals: 22,
                        blocks: 5,
                        slamDunks: 12
                    },
                },
            }
         }
    }
    console.log(gameObject())

    function homeTeamName() {
        let object = gameObject()
        return object['home']['teamName']
      }
      
      console.log(homeTeamName())
    
      function numPointsScored(location, playerName) {
         let object = gameObject()
        return object[location]['players'][playerName]['points']
      }
      
      console.log(numPointsScored("home", "alanAnderson"))  

      function shoeSize(location, playerName) {
        let object = gameObject()
        return object[location]['players'][playerName]['shoe']
      }
      
      console.log(shoeSize("home", "alanAnderson"))  

      function teamColors(team) {
        let object = gameObject()
        return object['home'][team, 'colors']
      }
      
      console.log(teamColors("Brooklyn Nets"))  

      function teamName() {
        let object = gameObject()
        let h = object['home']['teamName']
        let aw = object['away']['teamName']
        return `[ '${h}', '${aw}']`
      }
      
      console.log(teamName())

      function playerStats(playerName) {
        let object = gameObject()
       return object["home"]['players'][playerName]
     }
     
     console.log(playerStats("alanAnderson"))  

