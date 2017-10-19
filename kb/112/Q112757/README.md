---
layout: page
title: "Q112757: FIX: Problems When Using an Oracle Data Source"
permalink: /kb/112/Q112757/
---

## Q112757: FIX: Problems When Using an Oracle Data Source

	Article: Q112757
	Product(s): Microsoft C Compiler
	Version(s): 1.50 1.51 1.52 | 2.2
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVCkbbuglist kbfixlist
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, version 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application built to access an Oracle data source using the Microsoft
	Foundation Classes (MFC) may crash or throw a CDBException exception or generate
	oracle error ora-02019.
	
	CAUSE
	=====
	
	Two known Oracle-driver-specific problems are:
	
	- AppWizard and ClassWizard generate an incorrect GetDefaultSQL() function for
	  an Oracle data source table.
	
	- A stack overflow may occur when connecting to an Oracle data source. (This
	  behavior is specific to 16-bit applications.)
	
	RESOLUTION
	==========
	
	There is a bug in the wizards that causes them to generate an incorrect
	GetDefaultSQL() function when using an Oracle data source. Looking at the
	CRecordset's GetDefaultSQL() function you will see that an at sign ("@") has
	been placed between the table owner and the table name. For example, you may
	see:
	
	     CString CMyRecordSet::GetDefaultSQL()
	     {
	         return "Dan@Customer";
	     }
	
	Change the "@" to a period (.).
	
	An application may also crash because of a stack overflow. The Oracle drivers use
	a large amount of stack space. If the stack overflows, it will write into the
	main data segment and cause undefined behavior after returning to the
	application. This may be resolved by increasing the stack size of your
	application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.0
	
	Additional query words: 1.50 1.51 1.52 2.50 2.51 2.20 4.00 hang GPF assertion gp-fault datasource
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : 1.50 1.51 1.52 | 2.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
