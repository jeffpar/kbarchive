---
layout: page
title: "Q140534: FIX: &quot;Data Truncated Column&quot; Erroneously Reported"
permalink: kb/140/Q140534/
---

## Q140534: FIX: &quot;Data Truncated Column&quot; Erroneously Reported

	Article: Q140534
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVC kbVC400fix
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ for Windows* use 1699 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following ODBC error message occurs each time the application moves to a
	another record (X represents the column number):
	
	  Warning: ODBC Success With Info, Data truncated column X.
	  State:01004,Native:0,Origin:[Microsoft][ODBC Single-Tier Driver]
	
	CAUSE
	=====
	
	The message occurs when you use CLongBinary field variables with database
	tracing enabled. Database tracing is enabled by running Tracer.exe and selecting
	the DB Tracing check box.
	
	In the RFX_LongBinary() function, the following code returns the SQL_SUCCESS_INFO
	warning:
	
	     case CFieldExchange::Fixup:
	     // Give empty buffer to find size of entire LongBinary
	     AFX_SQL_ASYNC(pFX->m_prs, ::SQLGetData(pFX->m_prs->m_hstmt,
	          (unsigned short int)nField, SQL_C_DEFAULT, &w, 0, plLength));
	
	The RFX routine determines the size of the binary field by calling SQLGetData()
	with a zero-length buffer. The variable plLength provides the length of the
	binary field after the call. Because a zero-length buffer is passed to
	SQLGetData(), ODBC returns a warning indicating that there may be a problem.
	
	
	RESOLUTION
	==========
	
	Ignore the warning.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem is fixed in Visual C++ 4.0, and no
	reports were made for Visual C++ 2.x.
	
	NOTE: Visual C++ 4.0 is a 32-bit product; therefore, the bug is not fixed in any
	version of 16-bit Visual C++.
	
	Additional query words: 2.50 2.51 2.52
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC kbVC400fix 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
