//This is used for the recently ended actions UI.

/*
 *Returns Recently ended actions.
 *@customFunction
**/
function RecentlyEndedActions(e) {
  let a = 10*e;
  let FetchData = UrlFetchApp.fetch("https://api.hypixel.net/skyblock/auctions")
  let DeCoded = JSON.parse(FetchData);
  let AhTable = [];
  for (var i=a;i<(a+10);++i) {
    AhTable.push(DeCoded["auctions"][i]['auctioneer'],DeCoded["auctions"][i]['claimed'],DeCoded["auctions"][i]['end'],DeCoded["auctions"][i]['item_name'],DeCoded["auctions"][i]['tier'],DeCoded["auctions"][i]['highest_bid_amount']," ")
  };
  console.log(DeCoded)
  return AhTable;
};

