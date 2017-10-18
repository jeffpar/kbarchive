---
layout: page
title: "Q138872: FIX: TRACE() Message Appears When Closing DAO Objects"
permalink: kb/138/Q138872/
---

## Q138872: FIX: TRACE() Message Appears When Closing DAO Objects

	Article: Q138872
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbDAOsearch kbDatabase kbMFC kbVC kbVC420fix
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MFC DAO classes provide warning messages to the debug output window when
	appropriate. This tracing can be turned off by disabling the database tracing by
	using the Tracer utility. However, two possible problems exist:
	
	- An MFC AppWizard-generated DAO application may display the following TRACE
	  message in the Output Window of the debugger:
	
	  Warning: call Close before destructing Recordset
	
	  This message can safely be ignored. The destructor for the CDaoRecordset class
	  will clean up properly.
	
	- A bug in the debug tracing will incorrectly display the offending module and
	  line of code for _UNICODE builds. There are some TRACE calls in Daocore.cpp
	  in the AfxDaoCheck and AfxDaoTrace functions, which incorrectly use a %s
	  specifier with ANSI strings. This doesn't work in a _UNICODE build, so you
	  are likely to get random characters. These calls should use %hs to force
	  ANSI. As a workaround, rebuild the debug versions of the MFC libraries to use
	  %hs instead of %s. The release versions of the MFC libraries are unaffected
	  by this because TRACE calls are eliminated from release builds.
	
	The information is located in the Readme for Microsoft Visual C++.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual C++ version 4.2.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbDAOsearch kbDatabase kbMFC kbVC kbVC420fix 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
