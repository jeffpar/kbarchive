---
layout: page
title: "Q129772: FIX: &quot;Attempt to load required component ODBC32.DLL failed&quot;"
permalink: /kb/129/Q129772/
---

## Q129772: FIX: &quot;Attempt to load required component ODBC32.DLL failed&quot;

{% raw %}

	Article: Q129772
	Product(s): Microsoft C Compiler
	Version(s): 2.00 2.10
	Operating System(s): 
	Keyword(s): kbsetup kbDatabase kbMFC kbODBC kbVC
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error occurs when trying to access an ODBC data source from a
	32-bit application under Win32s:
	
	  Attempt to load required component ODBC32.DLL failed.
	
	CAUSE
	=====
	
	There are two main causes for this:
	
	- The ODBC components weren't installed because the ODBC setup program wasn't
	  executed from the WIN32S\ODBC directory of the Visual C++ version 2.0 or 2.1
	  CD.
	
	- The \WIN32S\ODBC directory on the Visual C++ version 2.1 CD contains an
	  incorrect version of the ODBC32.DLL file (the thunking driver manager). The
	  incorrect version does not load under Win32s.
	
	RESOLUTION
	==========
	
	Ensure that the ODBC setup program from the WIN32S\ODBC directory has been
	executed.
	
	Additionally, after installing from the Visual C++ version 2.1 CD, you'll need to
	copy the ODBC3216.DLL file located in the WIN32S\ODBC directory (this is the
	correct thunking ODBC driver manager for Win32s) to the WINDOWS\SYSTEM directory
	and rename it to ODBC32.DLL to replace the incorrect ODBC32.DLL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	32-bit Edition, versions 2.2.
	
	
	Additional query words: 2.00 2.10 3.0 3.00 3.1 3.10
	
	======================================================================
	Keywords          : kbsetup kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbAudDeveloper kbMFC
	Version           : 2.00 2.10
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
