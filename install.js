var err = initInstall("Kamus Pengecek Ejaan Bahasa Indonesia", "id@ewesewes.net", "1.0");
if (err != SUCCESS)
    cancelInstall();

var fProgram = getFolder("Program");
err = addDirectory("", "id@ewesewes.net",
		   "dictionaries", fProgram, "dictionaries", true);
if (err != SUCCESS)
    cancelInstall();

performInstall();

