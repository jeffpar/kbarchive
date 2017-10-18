---
layout: page
title: "Q110508: HOWTO: Create Tables with Foundation Database Classes"
permalink: kb/110/Q110508/
---

## Q110508: HOWTO: Create Tables with Foundation Database Classes

	Article: Q110508
	Product(s): Microsoft C Compiler
	Version(s): 1.5 1.51 1.52 2.0 2.1
	Operating System(s): 
	Keyword(s): kbprogramming kbDatabase kbMFC kbODBC kbVC
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft Foundation Classes (MFC) version 2.5 and later use the Open Database
	Connectivity (ODBC) API (application programming interface) to access and
	manipulate data. Before a table can be created, ODBC requires that a "data
	source" be configured to allow access to data. A data source is a set of data
	that can be located in a variety of databases (for example, FoxPro, Access, SQL
	Server, and so forth) in various locations (for example, local or network). Once
	a data source is configured/named, the programmer only needs to specify the name
	of the data source to connect to the data. To create a table for the data
	source, use the CDatabase::ExecuteSQL() function and pass it a string that uses
	the CREATE TABLE SQL statement.
	
	For additional information about programmatically configuring a data source,
	please see the following article(s) in the Microsoft Knowledge Base:
	
	  Q110507 HOWTO: Configure ODBC Data Sources on the Fly
	
	NOTE: The information contained within this article is duplicated in the
	'Programming with MFC Encyclopedia' shipped with Visual C++ 4.0. The article can
	be found by searching for "SQLConfigDataSource" and selecting the article titled
	'FAQ: Programatically Configuring an ODBC Data Source'.
	
	MORE INFORMATION
	================
	
	To create a data source, the ODBC Administrator program, which is normally found
	in Windows Control Panel as an icon labeled "ODBC", is typically used.
	
	Many data sources, such as FoxPro data source, specify directories for databases.
	That is, a directory is the data source and each table is contained in a
	separate file (in the case of dBASE or FoxPro, each table is a .DBF file). Other
	data sources, such as Microsoft Access and SQL Server data sources, require that
	something exists before a data source can be established. For example, when
	using the SQL Server ODBC driver, you would of course need a SQL server
	established. The Microsoft Access ODBC driver requires that a .MDB file exists
	before it can create a data source. When creating an Access ODBC data source
	through the ODBC Administrator program, you are given two choices; you can
	select a .MDB file or you can create a .MDB file. There isn't a programmatic way
	of creating the .MDB file from your application. Therefore, if your application
	requires that you place data into an Access data source (.MDB file), you most
	likely will want to have an empty .MDB file that you can use or copy whenever
	you need it.
	
	Once you have the data source established, creation of tables can easily be done
	by using the CDatabase::ExecuteSQL() function and the CREATE TABLE SQL
	statement. For example, if you had a database object called myDB, you could use
	the following MFC code to create a table:
	
	     myDB.ExecuteSQL("CREATE TABLE OFFICES (OfficeID TEXT(10)"
	                     ", OfficeName TEXT(10))")
	
	The code above creates a table called "OFFICES" in the ACCESS data source
	connected to by myDB; the table contains two fields "OfficeID" and
	"OfficeName".
	
	NOTE: The field types specified in the CREATE TABLE SQL statement may vary
	according to the ODBC driver that you are using. For example, the Btrieve ODBC
	driver will require "STRING" in place of the "TEXT" type shown in the CREATE
	TABLE statement above. The MSQUERY program is one way to discover what field
	types are available for a data source. In MSQUERY, select File, choose
	Table_Definition, select a table from a data source, and look at the type shown
	in the "Type" combo box.
	
	REFERENCES
	==========
	
	For more information about data sources, see the "Database Classes Encyclopedia"
	in the online books.
	
	Additional query words: 2.50 2.51 2.52 3.00 3.10
	
	======================================================================
	Keywords          : kbprogramming kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbAudDeveloper kbMFC
	Version           : 1.5 1.51 1.52 2.0 2.1
	Issue type        : kbhowto
	
	=============================================================================
	
