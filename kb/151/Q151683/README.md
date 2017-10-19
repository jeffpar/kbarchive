---
layout: page
title: "Q151683: FIX: MFC ODBC Exceptions Using the SQL Server 6.5 Driver"
permalink: /kb/151/Q151683/
---

## Q151683: FIX: MFC ODBC Exceptions Using the SQL Server 6.5 Driver

	Article: Q151683
	Product(s): Microsoft C Compiler
	Version(s): 2.00 2.10 2.20 4.00 4.10
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVC
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	There are two bugs in the MFC code that are exposed when using the MFC ODBC
	classes with the Microsoft SQL Server ODBC driver version 2.65.0201 that ships
	with Microsoft SQL Server 6.5. Setting synchronous mode works around this
	problem.
	
	The bugs mentioned above can lead to exceptions being thrown for no valid reason.
	Specifically, CDBExceptions can be thrown that contain no information about what
	led to the exception. With DB tracing enabled, one of the following trace
	messages may be displayed in the output window of Visual C++/MSDEV:
	
	  Error: SQLNumResultCols failed during IsOpen()
	
	  Error: failure updating record.
	
	The CDBException contains an m_nRetCode value of 2 (SQL_STILL_EXECUTING).
	
	CAUSE
	=====
	
	Version 2.65.0201 of the Microsoft SQL Server ODBC driver can return
	SQL_STILL_EXECUTING from two ODBC API functions that previous versions of the
	driver implemented as synchronous. This change in the driver has led to the
	exposure of two bugs in the MFC ODBC classes. MFC wraps ODBC API function calls
	in one of two wrapper macros: AFX_SQL_SYNC for those calls that are expected to
	return only when completed; and AFX_SQL_ASYNC for those calls that can return
	SQL_STILL_EXECUTING. There are two places in the MFC ODBC classes where the
	wrong macro is used (Visual C++ 4.1 source code shown):
	
	    CRecordset::IsOpen()
	    {
	      ...
	      AFX_SQL_SYNC(::SQLNumResultCols(m_hstmt, &nCols));
	      if (!Check(nRetCode))
	      {
	        ...
	        {
	    #ifdef _DEBUG
	          TRACE0("Error: SQLNumResultCols failed during IsOpen().\n");
	      ...
	    }
	
	    CRecordset::ExecuteSetPosUpdate();
	    {
	      ...
	      AFX_SQL_SYNC(::SQLSetPos(m_hstmt,1,wPosOption,SQL_LOCK_NO_CHANGE));
	      if (!Check(nRetCode))
	      {
	        TRACE0("Error: failure updating record.\n");
	        AfxThrowDBException(nRetCode, m_pDatabase, m_hstmt);
	      }
	      ...
	    }
	
	Both SQLNumResultCols() and SQLSetPos() can return SQL_STILL_EXECUTING. While the
	bug in IsOpen() may appear to be more serious, since IsOpen() is called
	frequently in the MFC code, it is less likely that the driver will return
	SQL_STILL_EXECUTING for this API function than for SQLSetPos().
	
	RESOLUTION
	==========
	
	It is recommended that you set the synchronous mode to "on" for all connections
	that use this version of the SQL Server ODBC driver. Since most applications do
	not actually need to do asynchronous processing, this is the most direct
	solution. By setting synchronous mode, you guarantee that every ODBC API
	function will return only when completed.
	
	To set the synchronous mode to on, use the CDatabase::SetSynchronousMode()
	function or make a call to the ODBC API function SQLSetStmtOption(). The MFC
	database classes set the synchronous mode to "off" by default, so you must be
	careful to avoid conflicts with MFC. Two suggested ways to set synchronous mode
	to on are:
	
	- Create a CDatabase object, open it on the desired datasource, set the
	  synchronous mode to on using CDatabase::SetSynchronousMode(TRUE), and pass a
	  pointer to this CDatabase object to the constructors of your recordsets. Only
	  those recordsets that are created off this CDatabase object will inherit its
	  synchronous nature. Note that you must manage the cleanup of this database
	  object yourself.
	
	-or-
	
	- Override the virtual CRecordset::OnSetOptions() to set the synchronous mode
	  to on by calling SQLSetStmtOption() following the call to the base class
	  OnSetOptions(). Do not set the mode prior to the base class OnSetOptions
	  where synchronous mode is set to off.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 32-bit Edition
	version 4.2.
	
	MORE INFORMATION
	================
	
	Note that the responsibility for this problem does not lie with the SQL Server
	ODBC driver, but with the MFC ODBC classes. The ODBC 2.0 specification states
	that SQLSetPos and SQLNumResultCols can return SQL_STILL_EXECUTING.
	
	REFERENCES
	==========
	
	For more information, please see: ODBC 2.0 Programmer's Reference and SDK Guide
	(available Online).
	
	Additional query words: kbVC400bug 2.00 2.10 2.20 4.00 4.10 4.20 vcfixlist420 MfcDatabase
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbAudDeveloper kbMFC
	Version           : 2.00 2.10 2.20 4.00 4.10
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
