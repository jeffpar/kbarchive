---
layout: page
title: "Q155850: PRB: &quot;Error Retrieving Record&quot; with SQL Statement in Open()"
permalink: kb/155/Q155850/
---

## Q155850: PRB: &quot;Error Retrieving Record&quot; with SQL Statement in Open()

	Article: Q155850
	Product(s): Microsoft C Compiler
	Version(s): 4.00 4.10 4.20
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVC kbprb
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following exception is thrown in a MFC database application that specifies a
	SQL statement in the call to CRecordset::Open():
	
	  Error retrieving record
	
	The message appears in a message box as well as in the Output window of the
	Visual C++ debugger.
	
	The following debug messages are also displayed in the debug window if database
	tracing is on:
	
	  Warning: <type name> converted from SQL type <type number>.
	
	  Error: fetching row from server.
	
	  Error in row
	
	  Error in assignment on column number <#> (<column name>)
	
	CAUSE
	=====
	
	The Microsoft Access ODBC driver returns these errors if a column is bound to an
	unsupported data type. The error message returned is specific to the 32-bit
	Microsoft Access ODBC driver that ships with Visual C++ 4.x.
	
	MORE INFORMATION
	================
	
	One reason for this error is that a developer has specified a SQL statement as
	the second argument for the CRecordset::Open() function. In this case, the
	columns listed in the SQL SELECT statement must match the order by which the RFX
	functions are called in the CRecordset's DoFieldExchange(). The first RFX
	function maps to the first column returned in the recordset, the second RFX
	function maps to the second column, and so on. The exception is thrown when the
	RFX functions are out of order. Paying attention to the exception can save
	developers a lot of debugging time.
	
	A different error message can be returned for other drivers, and is documented in
	the following KB article.
	
	  Q123977 PRB: "Unexpected column data types were returned from query"
	
	Additional query words: 4.00 4.10 4.20 kbdsd
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC kbprb 
	Technology        : kbAudDeveloper kbMFC
	Version           : 4.00 4.10 4.20
	Issue type        : kbprb
	
	=============================================================================
	
