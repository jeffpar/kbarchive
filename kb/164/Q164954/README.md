---
layout: page
title: "Q164954: PRB: &quot;Syntax Error in Number in Query Expression&quot;"
permalink: /kb/164/Q164954/
---

## Q164954: PRB: &quot;Syntax Error in Number in Query Expression&quot;

{% raw %}

	Article: Q164954
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbMFC kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbDSupport
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, version 1.52 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a floating-point error occurs in your program before a call to a database
	function such as CRecordset::Open(), CDaoRecordset::Open(), or
	CdbRecordset::Open(), which uses the Access Jet database engine, the call may
	incorrectly generate the following error:
	
	  Syntax error in number in query expression
	
	
	RESOLUTION
	==========
	
	To solve this problem, fix the floating-point error in your code or call
	_fpreset() before the call to Open().
	
	MORE INFORMATION
	================
	
	This error may be incorrectly generated when opening an Access database, using
	either ODBC or DAO. The error occurs if the filter string or WHERE clause
	contains a numeric value, and a floating-point error has occurred somewhere in
	your program.
	
	Sample Code
	-----------
	
	     /* Compile options needed: none
	       */ 
	
	      /* The following code generates the error message:
	       * "Syntax error in number in query expression".
	       *
	       * To avoid the error, comment out the line that generates the
	       * floating-point error (LINE 1), or remove the comment from the line
	       * containing the call to _fpreset() (LINE 2).
	      */ 
	
	     /* CMySet is derived from CDaoRecordset for the Student table from the
	      * STDREG32.MDB database, which is included with the DAOENROL sample.
	      */ 
	      CMySet rs;
	
	      // Cause a floating-point error to occur.
	      double x = 12345.6789;
	      double y = 0.0;
	      double z = x / y;       // LINE 1: comment out to avoid error
	
	     //  _fpreset();             // LINE 2: remove comment to avoid error
	      try
	      {
	          rs.m_strFilter = "StudentID = 1001";
	          rs.Open();
	      }
	      catch( CDaoException* e )
	      {
	          AfxMessageBox( e->m_pErrorInfo->m_strDescription );
	          e->Delete();
	      }
	      rs.Close();
	
	Additional query words: FindFirst Jet
	
	======================================================================
	Keywords          : kbMFC kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
