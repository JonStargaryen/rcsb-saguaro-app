# rcsb-saguaro-app

RCSB Saguaro Web Application is an open-source library built on the top of the [RCSB Saguaro 1D Feature Viewer](https://rcsb.github.io/rcsb-saguaro)
and designed to display protein features at the [RCSB Web Site](https://www.rcsb.org). The package collects protein annotations from the 
[1D Coordinate Server](https://1d-coordinates.rcsb.org) and the main [RCSB Data API](https://data.rcsb.org) and generates preconfigures Protein 
Feature Summaries. The package allows access to RCSB Saguaro methods to add or change displayed data. 

<!---
<div id="pfvSelect" ></div>  
<div id="pfv" ></div>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@rcsb/rcsb-saguaro-app@1.3.0/build/dist/app.js"></script>
<script type="text/javascript">
RcsbFvWebApp.setBoardConfig({
    trackWidth:540,
    rowTitleWidth:170
});
RcsbFvWebApp.buildInstanceFv("pfv", "4Z35.A");
</script>
--->

### Node Module Instalation
`npm install @rcsb/rcsb-saguaro-app`

### CDN JavaScript
`<script src="https://cdn.jsdelivr.net/npm/@rcsb/rcsb-saguaro-app@1.3.0/build/dist/app.js" type="text/javascript"></script>`

### JavaScript Examples
* [PDB Instance Chain View](https://rcsb.github.io/rcsb-saguaro-app/examples/instance.html)
* [Include Custom Tracks](https://rcsb.github.io/rcsb-saguaro-app/examples/add_new_tracks.html)
* [Board Configuration](https://rcsb.github.io/rcsb-saguaro-app/examples/board_configuration.html)

The full collection of examples can be edit and modified at [CODEPEN](https://codepen.io/collection/XjrBRP?grid_type=list)

### Library Documentation
TypeScript classes documentation can be found [here](https://rcsb.github.io/rcsb-saguaro-app/globals.html).

### Main Class and Methods
**RcsbFvWebApp** calss provides a collection of methods to display preconfigured features over PDB and UniProt sequences 
as displayed at [RCSB PDB](https://www.rcsb.org) web site. Additionally, it allows to configure board size and set up feature 
click events. 

- **RcsbFvWebApp.buildUniprotFv**(elementId: string, upAcc: string)
- **RcsbFvWebApp.buildEntityFv**(elementId: string, entityId: string)
- **RcsbFvWebApp.buildInstanceFv**(elementId: string, instanceId: string)
- **RcsbFvWebApp.buildUniprotEntityFv**(elementId: string, upAcc: string, entityId: string)
- **RcsbFvWebApp.buildUniprotEntityInstanceFv**(elementId: string, upAcc: string, entityId: string, instanceId: string)

- **RcsbFvWebApp.setBoardConfig**(boardConfigData: [RcsbFvBoardConfigInterface](https://rcsb.github.io/rcsb-saguaro/interfaces/rcsbfvboardconfiginterface.html))
- **RcsbFvWebApp.getRcsbFv**(elementId: string)

Contributing
---
All contributions are welcome. Please, make a pull request or open an issue.

License
---

The MIT License

    Copyright (c) 2019 - now, RCSB PDB and contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
