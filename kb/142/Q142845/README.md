---
layout: page
title: "Q142845: How to Use SQL Functions in &#42;.IDC Scripts"
permalink: /kb/142/Q142845/
---

## Q142845: How to Use SQL Functions in &#42;.IDC Scripts

	Article: Q142845
	Product(s): Internet Information Server
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how you can add SQL Server back-end functions to *.IDC
	(Internet Database Connector) files when using ODBC with the Internet Server.
	
	MORE INFORMATION
	================
	
	Files with the .IDC file extension can contain SQL commands that can manipulate
	an ODBC DataSource. Files with the .HTX file extension contain information that
	should be presented to the browser upon completion of the .IDC file execution.
	
	The following is an example *.IDC file called EXAMPLE.IDC. This file calls
	EXAMPLE.HTX upon completion of the SQL commands:
	
	     Datasource: ODBC DataSource
	     Username: sa
	     Template: example.htx
	     RequiredParameters: Field1, Field2
	     SQLStatement:
	     +INSERT INTO Table
	     +(Field1, Field2, Field3, SQLField)
	     +VALUES('%Field1%', '%Field2%', '%Field3%', GETDATE());
	
	Explanation of Fields in the Above EXAMPLE.IDC
	----------------------------------------------
	
	DataSource:
	
	  The datasource line needs to contain the name of the ODBC data source listed
	  in the Control Panel ODBC applet.
	
	Username:
	
	  Username is the name you use to log on to SQL Server.
	
	Template:
	
	  Template specifies the *.HTX file that is displayed when the query is
	  successful.
	
	RequiredParameters:
	
	  The parameters listed after this keyword need to contain values in order for
	  the *.IDC file to run.
	
	SQLStatement:
	
	  This contains the SQL statement as you would input it from the command line
	  to the SQL Server. The only difference between this and a SQL statement is
	  that each line begins with a plus sign (+).
	
	Explanation of SQL Statement
	----------------------------
	
	INSERT INTO:
	
	  SQL commands that insert data into a table.
	
	Table:
	
	  The name of the table where the data is to be placed.
	
	Field1, Field2, Field3, SQLfield:
	
	  These are the names of the fields where you want to place the data in the
	  VALUES statement.
	
	VALUES statement:
	
	  These are the values the get inserted into the table "Table". These are
	  obtained from the name= statements in the <form> section on the HTML
	  page where the data was entered.
	
	Additional query words: prodiis1 internet www http odbc idc
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis100
	Version           : 1.00
	
	=============================================================================
	
