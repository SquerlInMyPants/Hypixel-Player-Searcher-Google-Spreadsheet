/*
Returns UUID
@CustomFunction
**/
function GetUUID(UserName) {
  var fetchapi = UrlFetchApp.fetch("https://api.mojang.com/users/profiles/minecraft/"+UserName);
  var table = JSON.parse(fetchapi);
  return table['id'];
};

/*
 * Gets all the usernames.
 * @CustomFunction
**/
function GetUserNames(UUID) {
    var Fetchapi = UrlFetchApp.fetch("https://api.mojang.com/user/profiles/"+UUID+"/names");
    var FetchTable = JSON.parse(Fetchapi);
    var Names = [];

    for (var i = 0; i<FetchTable.length; ++i) {
      if (i<14) {
        Names[i] = FetchTable[i]["name"] ;
      };
    };
    return Names;
};


/*
 * Gets Epotch
 * @CustomFunction
**/
function Epotch(UUID) {
    var Fetchapi = UrlFetchApp.fetch("https://api.mojang.com/user/profiles/"+UUID+"/names");
    var FetchTable = JSON.parse(Fetchapi);
    var Names = [];

    for (var i = 0; i<FetchTable.length; ++i) {
      if (i<14) {
        Names[i] = FetchTable[i]['changedToAt'] ;
      };
    };
    return Names;
};
