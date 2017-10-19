---
layout: page
title: "Q246165: BUG: CDatabase::ExecuteSQL() Function Does Not Throw Exception w"
permalink: /kb/246/Q246165/
---

## Q246165: BUG: CDatabase::ExecuteSQL() Function Does Not Throw Exception w

	Article: Q246165
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbMDAC kbODBC kbVC600 kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDACNoSweep
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the CDatabase::ExecuteSQL function is called on a stored procedure that
	creates multiple result sets, and an error is encountered, an exception may not
	be thrown. Note, however, that the exception is thrown only if the error is
	encountered while processing the first result set. If the error happens after
	processing the first result set, the exception is not thrown.
	
	The More Information section has an example of a stored procedure that does not
	cause an exception to be thrown. This stored procedure creates two result sets
	and calls RAISERROR between them.
	
	CAUSE
	=====
	
	The implementation of the ExecuteSQL function of the CDatabase class throws an
	exception if an error is encountered during the execution of the SQLExecDirect
	function. The function loops through all the remaining result sets by calling
	SQLMoreResults, and then exits if it reaches the last result set or if it
	encounters an error. The function does not, however, throw an exception if an
	error is encountered in a call to SQLMoreResults.
	
	RESOLUTION
	==========
	
	For a workaround, see the "More Information" section.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To reproduce this error with a SQL Server 6.5 or 7.0 database:
	
	1. Create the following stored procedure in the PUBS Database:
	
	  CREATE PROCEDURE get_author_titles @au_id id
	  AS
	  BEGIN
	  SELECT * FROM authors where au_id = @au_id
	  if @@ROWCOUNT = 0
	  RAISERROR ('No author found',15,10)
	  else
	  SELECT title_id FROM titleauthor WHERE au_id = @au_id
	  END
	
	2. Create an MFC AppWizard application with database header support. Create a
	  menu handler.
	
	3. Paste the following code into the handler:
	
	  	CDatabase db;
	  	db.OpenEx(_T("DSN=Pubs;UID=sa;PWD=;"));
	  	try {
	  		db.ExecuteSQL(_T("EXEC get_author_titles '998-72-3567'"));
	  		db.ExecuteSQL(_T("EXEC get_author_titles '998-72-3568'"));
	  	}
	  	catch (CDBException* pEx)
	  	{
	  		TCHAR buff[80];
	  		pEx->GetErrorMessage(buff,80);
	  		AfxMessageBox(buff);
	  		pEx->Delete();
	  	}
	
	4. Change the connect string to point to your SQL Server.
	
	5. Compile and run the application. Run the code above.
	
	Notice that an exception is not thrown when db.ExecuteSQL is called for the
	second time with an invalid parameter.
	
	Workaround
	----------
	
	1. Create a CDatabase-derived class called CMyDatabase.
	
	2. Add the following function to the class. This function will override the
	  CDatabase::ExecuteSQL function. The code adds only the two lines indicated to
	  the implementation of the CDatabase::ExecuteSQL function:
	
	  void CMyDatabase::ExecuteSQL(LPCTSTR lpszSQL)
	  {
	  	USES_CONVERSION;
	  	RETCODE nRetCode;
	  	HSTMT hstmt;
	
	  	ASSERT_VALID(this);
	  	ASSERT(AfxIsValidString(lpszSQL));
	
	  	AFX_SQL_SYNC(::SQLAllocStmt(m_hdbc, &hstmt));
	  	if (!CheckHstmt(nRetCode, hstmt))
	  		AfxThrowDBException(nRetCode, this, hstmt);
	
	  	TRY
	  	{
	  		OnSetOptions(hstmt);
	
	  		// Give derived CDatabase classes option to use parameters.
	  		BindParameters(hstmt);
	
	  		AFX_ODBC_CALL(::SQLExecDirect(hstmt,
	  			(UCHAR*)T2A((LPTSTR)lpszSQL), SQL_NTS));
	
	  		if (!CheckHstmt(nRetCode, hstmt))
	  			AfxThrowDBException(nRetCode, this, hstmt);
	  		else
	  		{
	  			do
	  			{
	  				SWORD nResultColumns;
	
	  				AFX_ODBC_CALL(::SQLNumResultCols(hstmt, &nResultColumns));
	  				if (nResultColumns != 0)
	  				{
	  					do
	  					{
	  						AFX_ODBC_CALL(::SQLFetch(hstmt));
	  					} while (CheckHstmt(nRetCode, hstmt) &&
	  						nRetCode != SQL_NO_DATA_FOUND);
	  				}
	  				AFX_ODBC_CALL(::SQLMoreResults(hstmt));
	  			} while (CheckHstmt(nRetCode, hstmt) &&
	  				nRetCode != SQL_NO_DATA_FOUND);
	  			// ******** FIX ***********
	  			if (!CheckHstmt(nRetCode, hstmt))
	  				AfxThrowDBException(nRetCode, this, hstmt);
	  			// *******END FIX *********
	  		}
	  	}
	  	CATCH_ALL(e)
	  	{
	  		::SQLCancel(hstmt);
	  		AFX_SQL_SYNC(::SQLFreeStmt(hstmt, SQL_DROP));
	  		THROW_LAST();
	  	}
	  	END_CATCH_ALL
	
	  	AFX_SQL_SYNC(::SQLFreeStmt(hstmt, SQL_DROP));
	  	
	  }
	
	3. Add the following #include to the MyDatabase.cpp implementation file:
	
	  #include "atlconv.h"
	
	  This code ensures that some of the macros that are used in the implementation
	  will be defined.
	
	4. Change the code in the menu handler that was created previously to use the
	  new class instead of the CDatabase class:
	
	  CMyDatabase db;
	  ...
	
	5. Insert the following #include in the implementation file where your menu
	  handler is defined:
	
	  #include "MyDatabase.h"
	
	6. Recompile and run the code.
	
	Notice that the code throws an exception when the second SQL statement is
	executed as expected.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbMDAC kbODBC kbVC600 kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDACNoSweep 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	
	=============================================================================
	
