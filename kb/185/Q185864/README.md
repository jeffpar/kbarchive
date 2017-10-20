---
layout: page
title: "Q185864: PRB: Access Violation in ODBC Cursor Library in MFC Application"
permalink: /kb/185/Q185864/
---

## Q185864: PRB: Access Violation in ODBC Cursor Library in MFC Application

{% raw %}

	Article: Q185864
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbDatabase kbMFC kbODBC kbVC kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDACNoSweep
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An MFC application that uses Open Database Connectivity (ODBC) may crash
	randomly on a PUSH DWORD PTR instruction in ODBC Cursor Library version
	3.50.36.9. The application error is:
	
	  The instruction at "0x6a9b7c1a" referenced memory at "0x026a6000".
	  The memory could not be "read".
	
	When stepping through the assembly code in the debugger, the access violation is
	on a PUSH DWORD PTR instruction in Odbccr32.dll. This access violation occurs at
	random times.
	
	
	CAUSE
	=====
	
	An internal Cursor Library (Odbccr32.dll) function is performing a PUSH DWORD
	PTR instruction instead of acquiring a byte. As a result three more bytes are
	being read than necessary. This occurs as parsing is performed on the SQL string
	that was passed to the cursor library.
	
	RESOLUTION
	==========
	
	If you use the MFC database classes, there are two possible workarounds:
	
	- Do not use the cursor library.
	
	- Override the MFC code to add three spaces to the end of each SQL statement
	  before calling the ODBC SQLPrepare() function.
	
	It might not be necessary to use the ODBC Cursor Library. If you mainly add,
	update, or delete records then you should use dynasets because dynasets do not
	use the Cursor Library and they give the best performance for these scenarios.
	If you are fetching data frequently, then you can use snapshots without using
	the Cursor Library. You can avoid using the Cursor Library by specifying FALSE
	for the last argument (bUseCursorLib) of CDatabase::Open(), or use the
	CDatabase::OpenEx() member function which doesn't load the Cursor Library by
	default.
	
	Use the Cursor Library where you need to modify records and need the fetching
	advantages of a snapshot. To use the Cursor Library, you must override the two
	areas in MFC where SQLPrepare() is called. You need to add three spaces to the
	end of the SQL string that gets passed to SQLPrepare. To do this, create a new
	CRecordset-derived class and perform the following steps:
	
	1. Copy the code in the CRecordset class (present in dbcore.cpp) for the
	  following member functions into your new CRecordset-derived class:
	
	        CRecordset::Open()
	        CRecordset::Update()
	        CRecordset::PrepareAndExectue()
	        CRecordset::BuildUpdateSQL()
	        CRecordset::UpdateInsertDelete()
	        CRecordset::Delete()
	
	2. Make the following modifications to BuildUpdateSQL() and PrepareAndExecute()
	  in the new CRecordset class.
	
	  a. For BuildUpdateSQL(), replace this statement:
	
	   
	           AFX_ODBC_CALL(::SQLPrepare(m_hstmtUpdate,
	               (UCHAR*)T2A((LPTSTR)(LPCTSTR)(m_strUpdateSQL), SQL_NTS));
	        
	
	     with this code:
	
	           AFX_ODBC_CALL(::SQLPrepare(m_hstmtUpdate,
	               (UCHAR*)T2A((LPTSTR)(LPCTSTR)(m_strUpdateSQL+"   ")),
	               SQL_NTS));
	       
	
	     This adds three spaces to the SQL statement.
	
	  b. For PrepareAndExectue(), replace this statement:
	
	   
	           LPCSTR lpszWSQL = T2CA(m_strSQL);
	       
	
	     with this code:
	
	   
	           CString strSQLTmp = m_strSQL + "   "; // Added three spaces.
	           LPCSTR lpszWSQL = T2CA(strSQLTmp);
	       
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	
	Additional query words: gpf general protection fault snapshot VC++ VC kbDatabase kbODBC kbMFC kbVC500 kbDSupport
	
	======================================================================
	Keywords          : kberrmsg kbDatabase kbMFC kbODBC kbVC kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDACNoSweep 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
