const Values = [
  "Spring18 Sp5 NoCP,Row Level Compression Drill Through ON,Drill Through",
  "Spring18 Sp5 NoCP,Row Level Compression Drill Through OFF,Drill Through",
  "Spring18 Sp4 NoCP,Row Level Compression Drill Through OFF,Drill Through",
  "Winter18 Sp5 NoCP,Row Level Compression Drill Through OFF,Drill Through",
  "Winter18 Sp4 NoCP,Row Level Compression Drill Through OFF,Drill Through"
];
let Formatted_List = [];
Values.forEach(value => {
  parts = value.split(",");
  RunID_split = parts[0].split(" ");
  Release = RunID_split[0];
  Sprint = RunID_split[1];
  Issue = parts[2];
  row = { Release, Sprint, Issue };

  Formatted_List.push(row);
});

function getValues() {
  Filtered_List = Formatted_List.filter(item => {
    return item.Release == "Spring18";
  }).map(item => {
    return item.Sprint;
  });
}
Filtered_List = Formatted_List.filter(item => {
  return item.Release == "Spring18" && item.Sprint == "Sp5";
}).map(item => {
  return item.Issue;
});
//. remove duplicate entries

console.log(Filtered_List);
