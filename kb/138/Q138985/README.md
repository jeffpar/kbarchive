---
layout: page
title: "Q138985: FIX: 'Syntax error in query' with Parameterized LIKE Queries"
permalink: /kb/138/Q138985/
---

## Q138985: FIX: 'Syntax error in query' with Parameterized LIKE Queries

	Article: Q138985
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVCkbbuglist kbfixlist
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.10, 2.20 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using a parameterized query that uses the LIKE keyword with the 2.0 ODBC
	Desktop drivers, the following error message may appear:
	
	  Syntax error in query expression.
	
	CAUSE
	=====
	
	This is a result of a bug in the 2.0 Microsoft 32-bit ODBC Desktop drivers.
	
	RESOLUTION
	==========
	
	The only option when using the 2.0 desktop drivers is to use the LIKE keyword
	without any parameterization. Instead of using the Requery() function, call the
	Close() and Open() member functions of the CRecordset class to make the changes
	in the query.
	
	This bug is fixed in the 3.0 Microsoft ODBC Desktop drivers, so another option is
	to upgrade from the 2.0 desktop drivers to the 3.0 desktop drivers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in the 32-bit Microsoft
	ODBC Desktop Drivers version 3.0.
	
	Additional query words: 2.00 2.10 2.20 3.00 3.10 3.20
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
