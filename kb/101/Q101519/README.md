---
layout: page
title: "Q101519: INF: How to Use SQLDataSources()"
permalink: kb/101/Q101519/
---

## Q101519: INF: How to Use SQLDataSources()

	Article: Q101519
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	SQLDataSources() enumerates ODBC data source names and is implemented by the
	ODBC Driver Manager. The 'description' it returns through szDescription is the
	driver description (as opposed to data source description). This article
	discusses how this 'description' can be used, and also why the 'description' is
	not a description of the data source, as the name of this function implies.
	
	MORE INFORMATION
	================
	
	The driver description given to a driver by a driver developer is recorded in
	the ODBC drivers section in the ODBCINST.INI file. For example, the description
	for the dBase driver is "dBase Files (*.dbf)." When a data source called
	Isamdata is set up for this driver, the following entry is made to the ODBC.INI
	file under the ODBC data sources section:
	
	     [ODBC Data Sources]
	     Isamdata = dbase Files (*.dbf)
	
	SQLDataSources() returns "dbase Files (*.dbf)" in szDescription for the Isamdata
	Data Source. An application can use this by allowing the user to choose
	File->Open (using the GetOpenFileName() function in the Windows Common Dialog
	Library) for ISAM files.
	
	The application can call SQLDataSources() to get the driver descriptions for the
	ODBC data sources, and put the string "(dbase Files)" in the File Name edit
	control of the Dialog Box. It can then parse the "*.dbf" part from szDescription
	so that the 'List Files of Type' list box can then be used to limit the files
	displayed (OPENFILENAME.lpstrFilter for Windows programmers), in this case only
	*.dbf files. The application can then make a SQLDriverConnect() call to connect
	to the data source, and make the appropriate ODBC calls to get data from the
	ISAM file chosen by the user.
	
	It is therefore recommended that driver developers use such descriptions for
	their drivers for ISAM-type files.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
