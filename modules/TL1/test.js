const parser = require("pegjs");

let data = `   FH_172.30.0.200 2023-06-11 20:01:23
M  CTAG COMPLD
   total_blocks=1
   block_number=1
   block_records=1


--------------------------------------------------------------------------------
DEVNAME	DEVIP	DT	DEVER
AN5516-01_10.0.1.200-DOMPEDRO	10.0.1.200	AN5116-06B	V104R002
--------------------------------------------------------------------------------


;`;

console.log(parser.generate(data));
