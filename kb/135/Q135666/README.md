---
layout: page
title: "Q135666: FIX: Assertion Failure in CFieldExchange::GetColumnType()"
permalink: kb/135/Q135666/
---

## Q135666: FIX: Assertion Failure in CFieldExchange::GetColumnType()

	Article: Q135666
	Product(s): Microsoft C Compiler
	Version(s): 2.0 2.1 2.2 4.0 4.1 4.2
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbVC
	Last Modified: 02-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the MFC database classes with the Microsoft SQL Server ODBC driver
	versions 2.50.0121 or 2.50.0126 may cause an assertion failure after a call to
	SQLNumResultCols() in the CFieldExchange::GetColumnType() function.
	
	CAUSE
	=====
	
	This error is caused by a bug in the ODBC driver that is exposed when the cursor
	library is used, and happens after calling CRecordset::Requery() and then trying
	to edit more than one record.
	
	The following code in Dbrfx.cpp produces the assertion:
	
	  #ifdef _DEBUG
	    SWORD nResultColumns;
	    AFX_SQL_ASYNC(m_prs,
	                  ::SQLNumResultCols(m_prs->m_hstmt, &nResultColumns));
	    ASSERT(nColumn >= 1 && (long)nColumn <= (long)nResultColumns);
	  #endif //_DEBUG
	
	::SQLNumResultCols returns 0 in nResultColumns, which causes an assertion on the
	next line. This is due to a bug in the driver which sets the number of columns
	in the result set to 0. The subsequent call to ::SQLDescribeCol will also fail
	with SQL State S1002 "Invalid Column number" regardless of the column number
	specified.
	
	RESOLUTION
	==========
	
	To work around this problem, use a dynaset instead of a snapshot or get the
	2.65.0240 version of the SQL Server driver that is included with Visual C++
	5.0.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug with the ODBC 2.5 components. This bug
	has been fixed in the 2.65.0240 version of the SQL Server driver that is
	included with Visual C++ 5.0.
	
	Additional query words: kbVC400bug DBRFX.CPP line 2185 line 2231
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbVC500fix 
	Technology        : kbAudDeveloper kbMFC
	Version           : 2.0 2.1 2.2 4.0 4.1 4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
