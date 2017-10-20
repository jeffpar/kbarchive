---
layout: page
title: "Q139759: FIX: CDatabase::ExecuteSQL() Fails with UNICODE Build"
permalink: /kb/139/Q139759/
---

## Q139759: FIX: CDatabase::ExecuteSQL() Fails with UNICODE Build

{% raw %}

	Article: Q139759
	Product(s): Microsoft C Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVC kbVC410fix
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Trying to run a program that contains a call to CDatabase::ExecuteSQL() that has
	been built for UNICODE results in a CDBException being thrown with an error
	message from the ODBC driver. The message depends on the SQL Statement and the
	ODBC driver. For example, trying to execute an INSERT statement on a data source
	that uses the Microsoft Access ODBC driver results in the following error
	message:
	
	  
	
	  Invalid SQL statement;
	    expected 'DELETE', 'INSERT', 'PROCEDURE', 'SELECT', or 'UPDATE'.
	  State:37000,Native:-3500,Origin:
	    [Microsoft][ODBC Microsoft Access 7.0 Driver]
	
	CAUSE
	=====
	
	The SQL string passed to CDatabase::ExecuteSQL() is a UNICODE string, and the
	ODBC API expects all arguments that are strings to be ASCII strings.
	
	RESOLUTION
	==========
	
	To work around this bug, you have to convert the string yourself, and then cast
	the resultant ASCII string to an LPCTSTR when you pass it to
	CDatabase::ExecuteSQL(). The cast is necessary because CDatabase::ExecuteSQL()
	expects a wide character string.
	
	For example, using the following code to delete all the records in a table will
	fail in an MFC 4.0 program:
	
	     CString   strSQL = _T("DELETE FROM Table1");
	     MyDatabase.ExecuteSQL(strSQL);
	
	To make the code work, you need to use code similar to this code:
	
	     #include <winnls.h>  // add this include for WideCharToMultiByte()
	     .
	     .
	     .
	     CString   strSQL = _T("DELETE FROM Table1");
	     char*     szAscii = new char[strSQL.GetLength() + 1];
	
	     WideCharToMultiByte(CP_ACP,0,strSQL,-1,
	       szAscii,strSQL.GetLength() + 1,NULL,NULL);
	     MyDatabase.ExecuteSQL((LPCTSTR)szAscii);
	     delete [] szAscii;
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	MORE INFORMATION
	================
	
	In general, you can use the MFC ODBC classes in UNICODE programs. The MFC ODBC
	classes will handle the UNICODE/ASCII conversions for ODBC API calls.
	CDatabase::ExecuteSQL() is missing this conversion support.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC kbVC410fix 
	Technology        : kbAudDeveloper kbMFC
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
