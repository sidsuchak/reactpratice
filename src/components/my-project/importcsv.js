import Papa from "papaparse"

export default function Importcsv() {
  return (
    <div className="App">
      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={(file) => {
          const files = file.target.files;
          console.log(files);
          if (files) {
            console.log(files[0]);
            Papa.parse(files[0], {
              complete: function(results) {
                console.log("Finished:", results.data);
              }}
            )
          }
        }}
      />
    </div>
  );
}