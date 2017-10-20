---
layout: page
title: "Q238080: PRB: ATL Consumer Receives DB_S_ERRORSOCCURRED on Move"
permalink: /kb/238/Q238080/
---

## Q238080: PRB: ATL Consumer Receives DB_S_ERRORSOCCURRED on Move

{% raw %}

	Article: Q238080
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 3.7
	Operating System(s): 
	Keyword(s): kbATL210 kbDatabase kbDriver kbODBC kbSQLServ kbConsumer kbODBC210 kbGrpDSVCDB kbGrpDSM
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for SQL Server, version 3.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When accessing Text data from a SQL Server Table by using Microsoft OLE DB
	Provider for ODBC Drivers, an ATL Consumer receives the following HRESULT after
	a Move operation:
	
	   HRESULT:   0x00040EDAL ( DB_S_ERRORSOCCURRED )
	
	CAUSE
	=====
	
	The SQL Server Text field is a long binary field. The Microsoft SQL Server ODBC
	driver performs a SQLGetData operation to retrieve long binary or blob data
	retrieval. The Microsoft SQL Server ODBC driver performs an SQLFetch operation
	on all the bound columns and then performs the SQLGetData operation on the Text
	fields. The driver supports retrieving data by using SQLGetData for unbound
	columns only; that is, the driver returns SQL_GD_BOUND for its
	SQL_GETDATA_EXTENSIONS attribute. The driver cannot retrieve data from a column
	if the number of the column specified in the current call is less than the
	number of the column specified in the preceding call. Therefore, if the Text
	fields are not the last columns in the table, a call to SQLGetData results in
	the following error message:
	
	  DIAG [S1002] [Microsoft][ODBC SQL Server Driver]Invalid Descriptor Index (0)
	
	As a result, the HRESULT is returned as 0x00040EDAL ( DB_S_ERRORSOCCURRED ).
	
	RESOLUTION
	==========
	
	Use one of the following two workarounds:
	
	- Use Microsoft OLEDB Provider for SQL Server instead of the SQL Server ODBC
	  driver through Microsoft OLEDB Provider for ODBC Drivers.
	
	-or-
	
	- Place the Text fields at the end of the SQL query.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Table, for example, TextTable, in a SQL Server database with one or
	  more Text fields and with one or more non-Text fields after them.
	
	2. Create an MFC Dialog Application.
	
	3. Insert an ATL Consumer object, for example, CTextTable, for the SQL Server
	  Table using the Microsoft OLE DB Provider for ODBC Drivers.
	
	4. Insert a button, for example, Button, in the dialog box.
	
	5. Using the class wizard, insert an event handler, for example, OnButton1, to
	  handle pressing of the Button1.
	
	6. Inside the OnButton1 event handler, insert the following code:
	
	  HRESULT hr;
	  CTextTable varTextTable;
	  hr = varTextTable.Open();
	  hr = varTextTable.MoveFirst();
	  varTextTable.Close();
	
	7. Insert a breakpoint on line 4.
	
	8. Compile and run the application in debug mode.
	
	Note that after running line 4, the HRESULT returned is 0x00040EDAL (
	DB_S_ERRORSOCCURRED ). The status value returned for each of the Text fields is
	DBSTATUS_E_UNAVAILABLE.
	
	REFERENCES
	==========
	
	Please see the following references for more information:
	
	- Microsoft OLE DB 2.0 Programmer's Reference
	
	- Microsoft Data Access SDK 2.5
	
	Additional query words:
	
	======================================================================
	Keywords          : kbATL210 kbDatabase kbDriver kbODBC kbSQLServ kbConsumer kbODBC210 kbGrpDSVCDB kbGrpDSMDAC 
	Technology        : kbSQLServSearch kbAudDeveloper kbODBCSearch kbODBCSQLServ370
	Version           : :3.7
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
