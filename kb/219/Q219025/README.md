---
layout: page
title: "Q219025: BUG: ODBC Query of VFP View Returns SQL_NO_DATA_FOUND"
permalink: /kb/219/Q219025/
---

## Q219025: BUG: ODBC Query of VFP View Returns SQL_NO_DATA_FOUND

{% raw %}

	Article: Q219025
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,6.0
	Operating System(s): 
	Keyword(s): kbvfp600bug kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250
	Last Modified: 20-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the ODBC Visual FoxPro (VFP) driver, a query to a Visual FoxPro view
	returns SQL_NO_DATA_FOUND from SQLExtendedFetch() and SQLFetch() as in the
	following code:
	
	     sr = SQLAllocHandle( SQL_HANDLE_STMT, hdbc, & hstmt );
	
	     sr = SQLPrepare( hstmt, ( unsigned char * ) "select * from listview", SQL_NTS );
	
	     // This call to SQLNumResultCols breaks the SQLExtendedFetch call.
	     sr = SQLNumResultCols( hstmt, & colcount );
	
	     sr = SQLExecute( hstmt );
	
	     sr = SQLBindCol( hstmt, 1,  SQL_C_SLONG, & wineid, 4, & StrLen_or_Ind1 );
	
	     sr = SQLBindCol( hstmt, 2, SQL_C_CHAR, winename, 51, & StrLen_or_Ind2 );
	
	     // This returns 100 == SQL_NO_DATA_FOUND - but there is data!!!
	     sr = SQLExtendedFetch( hstmt, SQL_FETCH_NEXT, 1, & RowCountPtr, & RowStatusArray );
	
	     SQLFreeStmt( hstmt, SQL_DROP );
	
	CAUSE
	=====
	
	Calling SQLNumResultCols(), SQLColAttributes(), and SQLDescribeCol() in between
	SQLPrepare() and SQLExecute() when querying a view, causes SQLExecute() to
	return an empty cursor on the view.
	
	RESOLUTION
	==========
	
	Use either of the following:
	
	- Do not call SQLNumResultCols(), SQLColAttributes(), or SQLDescribeCol() until
	  after the call to SQLExecute().
	
	-or-
	
	- Call SQLExecDirect() and execute SQLNumResultCols(), SQLColAttributes(),
	  SQLDescribeCol() following this call.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: VFPODBC
	
	======================================================================
	Keywords          : kbvfp600bug kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP600
	Version           : WINDOWS:2.5,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
