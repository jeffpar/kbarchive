---
layout: page
title: "Q100725: PRB: SQL Server Driver GP-Faults with More Than 50 Datatypes"
permalink: /kb/100/Q100725/
---

## Q100725: PRB: SQL Server Driver GP-Faults with More Than 50 Datatypes

{% raw %}

	Article: Q100725
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	An ODBC application using a SQL Server driver earlier than version 1.01.2920
	causes a general protection fault (GP-fault) when you attempt to connect to a
	SQL Server database with more than 50 user-defined data types.
	
	
	SYMPTOMS
	========
	
	When an ODBC application tries to connect to a SQL Server data source that has
	more than 50 user-defined data types, it causes a general protection fault in
	the module SQLSRVR.DLL. SQL Server has two different kinds of data types: system
	defined and user-defined. System-defined data types are those that are defined
	by SQL Server, such as CHAR, INT, DATETIME, and so on. User-defined datatypes
	allow the user to define their own data types in terms of the system data types.
	For example, you can have a data type called EMPID which maps to CHAR(5).
	
	User-defined data types are specific to a database and are not server wide. Thus,
	the ODBC application may be able to connect to a different database on the same
	SQL Server, if that database has less than 50 user-defined data types. Visual
	Basic users can encounter this problem when the Visual Basic application calls
	the OpenDataBase function. Microsoft Access 1.0 users can encounter this problem
	when they try to attach to a table.
	
	RESOLUTION
	==========
	
	This problem has been corrected in SQL Server driver version 1.01.2920, and is
	available from your primary support provider. To install the new driver, run the
	setup program from the update disk and reinstall the SQL Server driver. After
	installing the driver, make sure you run the INSTCAT.SQL script that is
	contained in the update disk.
	
	Additional query words: 1.01.2807 ODBC VB data type gpf
	
	======================================================================
	Keywords          :  
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
