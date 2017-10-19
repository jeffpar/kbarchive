---
layout: page
title: "Q170823: PRB: CDBException Thrown Opening Recordset on Stored Procedure"
permalink: /kb/170/Q170823/
---

## Q170823: PRB: CDBException Thrown Opening Recordset on Stored Procedure

	Article: Q170823
	Product(s): Microsoft C Compiler
	Version(s): 2.0 2.1 2.2 4.0 4.0a 4.1 4.2 4.2
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVC
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.0a, 4.1, 4.2b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++ for Windows, 16-bit edition, version 1.52 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the "Call" syntax to invoke a stored procedure when opening a
	recordset, an exception might be thrown. Depending upon the version of Visual
	C++, whether or not you have DB Tracing enabled and the DBMS in use, you might
	see one of the following errors:
	
	  
	
	  Version:        4.X
	  Message Box:    <See below for DBMS specific error message>
	  Output Window:  <See below for DBMS specific error message>
	               State:37000,Native:<DBMS specific>,Origin:[<vendor>]
	                 [<driver name/version>][<DBMS--optional>]
	               Error: ODBC failure on SQLPrepare->
	
	  
	
	  Version:        2.X
	  Message Box:    Internal application error.
	  Output Window:  <See below for DBMS specific error message>
	               State:37000,Native:<DBMS specific>,Origin:[<vendor>]
	                 [<driver name/version>][<DBMS--optional>]
	               Error: ODBC failure on SQLPrepare.
	
	  
	
	  Version:        1.5X
	  Message Box:    Internal application error.
	  Output Window:  <See below for DBMS specific error message>
	               State:37000[<vendor>][<driver name/version>]
	               [<DBMS--optional>]
	
	DBMS specific error information:
	
	DBMS                 Error String                   Native Code
	------------------------------------------------------------------
	SQL Server:  Incorrect syntax near the keyword 'EXEC'.     156
	
	Access:      Syntax error in FROM clause.                -3506
	(and other
	desktop
	drivers)
	
	
	NOTE: If you are using Visual C++ 1.5X and connecting to a 16-bit SQL Server
	datasource, an exception may not be thrown but the desired result set is not
	returned.
	
	CAUSE
	=====
	
	While this line of code may appear to be a perfectly valid way to invoke a
	stored procedure, there is a small error:
	
	  m_pSet->Open(CRecordset::snapshot, "{ Call szCallTest}");
	
	The space between the "{" and the "C" cause MFC to misinterpret the Call
	statement as the name of a table. MFC makes a case insensitive comparison
	between any SQL provided in the Open() call and the literal constant szCall,
	which is defined as _T("{call "). If the comparison fails, the provided SQL is
	incorrectly incorporated into a SELECT statement that is executed instead of the
	stored procedure call.
	
	RESOLUTION
	==========
	
	Make sure that there are no extra spaces between the first curly brace and the
	"Call" key word.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbAudDeveloper kbMFC
	Version           : 2.0 2.1 2.2 4.0 4.0a 4.1 4.2 4.2
	Issue type        : kbprb
	
	=============================================================================
	
