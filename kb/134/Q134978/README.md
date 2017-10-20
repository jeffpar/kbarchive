---
layout: page
title: "Q134978: How to Extract the Full Path of a Table in Database Container"
permalink: /kb/134/Q134978/
---

## Q134978: How to Extract the Full Path of a Table in Database Container

{% raw %}

	Article: Q134978
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The DBF() function returns the full path of a table that is currently open.
	Using the FULLPATH() and DBGETPROP() functions, the full path to a table in a
	database can be determined without opening the table because the relative path
	of the table to the location of the database is stored in the database.
	
	MORE INFORMATION
	================
	
	The following commands display the full path of the Customer table in the
	Testdata database. In this example, the table is in the same directory as the
	database:
	
	     OPEN DATABASE SYS(2004)+'SAMPLES\DATA\TESTDATA'
	     ? FULLPATH( DBGETPROP( 'CUSTOMER' , 'TABLE' , 'PATH' ) , DBC() )
	
	Use the following commands to create a table in a different directory from the
	database, and then obtain the path of the table using the functions described.
	
	     SET DEFAULT TO SYS(2004)+'SAMPLES\MAINSAMP'
	     CREATE DATABASE test
	     CREATE TABLE data\testtbl (field1 C (50))
	     CLOSE ALL
	     OPEN DATABASE test
	     ? FULLPATH( DBGETPROP( 'TESTTBL' , 'TABLE' , 'PATH' ) , DBC() )
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
