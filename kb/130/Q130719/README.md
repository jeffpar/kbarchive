---
layout: page
title: "Q130719: FIX: &quot;Unable to Create File Buffer&quot; 32-Bit ODBC Error"
permalink: /kb/130/Q130719/
---

## Q130719: FIX: &quot;Unable to Create File Buffer&quot; 32-Bit ODBC Error

{% raw %}

	Article: Q130719
	Product(s): Microsoft C Compiler
	Version(s): 1.50 1.51 1.52 1.52a | 2.00 2.10
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVCkbbuglist kbfixlist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a long period of successful operation, an application generates the
	following ODBC error when that application uses the MFC database classes such
	that the 32-bit ODBC cursor library:
	
	  General error: Unable to create file buffer
	  State:S1000,Native:0,Origin:[Microsoft][ODBC Cursor Library]
	
	CAUSE
	=====
	
	The ODBC cursor library generates temporary files for its own use. To ensure
	that the temporary file names are unique, the 32-bit ODBC cursor library
	generates temporary file names that include a hex number. That number is
	incremented every time a new filename is generated. Here is an example of
	filenames that are genrated by the cursor library for its temporary files:
	
	  CTT1111.TMP
	  CTT1112.TMP
	  CTT1113.TMP
	
	When the hex number embedded in the filename wraps from FFFF to 0, the error is
	generated:
	
	  CTTFFFD.TMP
	  CTTFFFE.TMP
	  CTTFFFF.TMP
	  CTT0.TMP <-- This temporary filename causes the error
	
	RESOLUTION
	==========
	
	To avoid the error, create a file named CTT0.TMP, and place it in the directory
	that the cursor library uses to generate its temporary files. Temporary files
	are created in the current working directory with the 32-bit cursor library. The
	cursor library will see the existing file with that name and skip over it to the
	next filename (CTT1.TMP).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been corrected in the ODBC cursor
	library that ships with Visual C++ 4.0 and 4.1 (ODBCCR32.DLL, version
	2.50.3006).
	
	MORE INFORMATION
	================
	
	This problem applies only to the 32-bit ODBC components. However, the 16-bit MFC
	programs can thunk to the 32-bit components when running on Windows NT if you've
	set up a 32-bit data source rather than a 16-bit data source.
	
	The error described in this article can appear for other reasons. Please see the
	following article in the Microsoft Knowledge Base:
	
	  Q115516 PRB: S1000: "Unable to create file buffer" ODBC Error
	
	In general, other reasons produce a failure immediately upon trying to use the
	ODBC components. The problem described in this article produces a failure after
	a long period of successful operation. For example, doing a large number of
	requeries can cause the error.
	
	Additional query words: 2.50 2.51 2.52 2.52a 3.00 3.10 3.20
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : 1.50 1.51 1.52 1.52a | 2.00 2.10
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
