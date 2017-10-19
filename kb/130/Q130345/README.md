---
layout: page
title: "Q130345: How to Retreive Database Properties in a Program"
permalink: /kb/130/Q130345/
---

## Q130345: How to Retreive Database Properties in a Program

	Article: Q130345
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro introduces several database properties available to databases.
	These properties include comments and stored procedures. This article describes
	how to determine database properties from a Visual FoxPro program.
	
	MORE INFORMATION
	================
	
	The DISPLAY DATABASE and LIST DATABASE commands can view several database
	properties at once. These commands can direct output to the console, to a
	printer, or to a text file. The example in this article retrieves individual
	components of a database.
	
	Comment
	-------
	
	A database comment can be obtained by using the DBGETPROP() function. The
	following example shows how to return the comment of a database by using
	DBGETPROP():
	
	     cResult=DBGETPROP('mydata', 'DATABASE', 'Comment')
	
	The parameters are:
	
	- mydata is the table name.
	
	- DATABASE specifies that the property is a database property.
	
	- Comment is the property desired.
	
	Version
	-------
	
	The version number of a database can be obtained by using DBGETPROP() function.
	The following example shows how to return the version number of a database by
	using DBGETPROP():
	
	     cResult=DBGETPROP('mydata', 'DATABASE', 'Version')
	
	The parameters are:
	
	- mydata is the table name.
	
	- DATABASE specifies that the property is a database property.
	
	- Version is the property desired.
	
	Path
	----
	
	The path to the database can be obtained by using the DBC() function. The
	following example shows how to return the path of a database by using DBC():
	
	     SET DATABASE TO alldata        &&Assumes a database named "alldata"
	     cResult=DBC()
	
	Stored Procedures
	-----------------
	
	Stored procedures contained within a database can be obtained by using the
	DISPLAY PROCEDURES or COPY PROCEDURES command. There is no way to store the
	contents of stored procedures in a memory variable. DISPLAY and COPY PROCEDURES
	can both be used to copy stored procedures to a text file or to the printer. The
	following example uses COPY PROCEDURES to copy the stored procedures to a file
	named STORCODE.TXT:
	
	     OPEN DATABASE alldata
	     COPY PROCEDURES TO storcode.txt
	
	Tables
	------
	
	A list of tables contained within a database can be obtained by using the DISPLAY
	TABLES or LIST TABLES command to display the list to the console, a printer, or
	a text file. Here's an example:
	
	     OPEN DATABASE alldata
	     LIST TABLES TO FILE tblfile.txt NOCONSOLE
	
	Views
	-----
	
	A list of views contained within a database can be obtained by using the DISPLAY
	VIEWS or LIST VIEWS command to display the list to the console, a printer, or a
	text file. Here's an example:
	
	     OPEN DATABASE alldata
	     LIST VIEWS TO FILE viewfile.txt NOCONSOLE
	
	Named Connections
	-----------------
	
	A list of named connections contained within a database can be obtained by using
	the DISPLAY CONNECTIONS or LIST CONNECTIONS command to display the list to the
	console, a printer, or a text file. Here's an example:
	
	     OPEN DATABASE alldata
	     LIST CONNECTIONS TO FILE connfile.txt NOCONSOLE
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
