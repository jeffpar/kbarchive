---
layout: page
title: "Q187297: PRB: Run-time Error Message 3024 Using SQL and DAO Against Oracl"
permalink: /kb/187/Q187297/
---

## Q187297: PRB: Run-time Error Message 3024 Using SQL and DAO Against Oracl

	Article: Q187297
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbDAOsearch kbDAO350 kbOracle kbVBp500 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to run Structured Query Language (SQL) against an Oracle database
	through Data Access Objects (DAO), you can encounter the following error:
	
	  Run-Time Error 3024
	  Couldn't find file C:\Program Files\DevStudio\VB\<schema name>.mdb.
	
	This error occurs when you try to specify a schema name in your SQL statement and
	you use DAO with Oracle. The <schema name> in the error message is
	whatever schema name you specified for the Oracle object you reference.
	
	RESOLUTION
	==========
	
	If you add the dbSQLPassThrough option to the OpenRecordset method, the sample
	code in the MORE INFORMATION section of this article runs without error. You can
	use brackets ([ ]) around the table name in the SQL string to avoid the error as
	well:
	
	     sql = "SELECT * FROM [scott.emp]"
	
	Also, you can use an advanced data access technology, such as ActiveX Data
	Objects (ADO) to avoid this error.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The error message is generated because DAO tries to find an .mdb file in the
	local directory that matches the schema name you specified for the Oracle object
	in your SQL.
	
	Sample Code
	-----------
	
	  sql = "SELECT * FROM scott.emp"
	  Set wks = Workspaces(0)
	  Set con = wks.OpenDatabase("dseOracle", False, False, _
	      & "ODBC;UID=scott;PWD=tiger;")
	  Set rss = con.OpenRecordset(sql, dbOpenSnapshot)
	
	This code generates the error because DAO tries to find the scott.mdb file.
	
	REFERENCES
	==========
	
	For information on how to acquire ADO and the new Microsoft Oracle ODBC driver,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q175018 HOWTO: Acquire and Install the Microsoft Oracle ODBC Driver
	
	For information on how to use ADO with Oracle, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q176936 INFO: Visual Basic 5.0 Accessing an Oracle Database Using ADO
	
	For more information on using DAO with Visual Basic, please see:
	
	  "Hitchhiker's Guide to Visual Basic & SQL Server," William Vaughn, 784
	  pages, Microsoft Press, 1997
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Sam Carpenter, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbDAOsearch kbDAO350 kbOracle kbVBp500 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
