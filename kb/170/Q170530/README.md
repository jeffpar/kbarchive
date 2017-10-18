---
layout: page
title: "Q170530: FIX: AppWizard Project Cannot Open Include File .rc2"
permalink: kb/170/Q170530/
---

## Q170530: FIX: AppWizard Project Cannot Open Include File .rc2

	Article: Q170530
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbcode kberrmsg kbtool kbwizard kbMFC kbVC500bug kbVC600fix kbGrpDSTools kbNoUpdate
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The AppWizard, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you build an AppWizard-generated project, the resource compiler reports the
	following error if the default code page is anything other than 1252 (for
	example, you have an Eastern European or Asian system locale):
	
	  <project\project.rc>(118) : fatal error RC1015: cannot open include
	  file
	  'res\\XXXXXXX.rc2'.
	
	This error only occurs when the project name contains characters greater than
	0x7F hex.
	
	CAUSE
	=====
	
	The Resource Script for the project that AppWizard generates is hard-coded to
	specify the code page as 1252 and the language as US English. When the Resource
	Compiler attempts to load an .rc2 file with a name that has characters greater
	than 0x7F hex, but the code page 1252 has been specified, the Resource Compiler
	will not be able to open the .rc2 file.
	
	RESOLUTION
	==========
	
	To work around this problem, do the following in the project's .rc file:
	
	- Replace all references to code_page(1252) with the proper code_page.
	
	- Replace all references to "Language 9,1" with the proper language,
	  sub-language code pair.
	
	There are three places in a typical .rc file to change these values:
	
	1. In the TEXTINCLUDE section, TEXTINCLUDE 3 has a reference to the code_page
	  and Language:
	
	        3 TEXTINCLUDE DISCARDABLE
	        BEGIN
	            "#define _AFX_NO_SPLITTER_RESOURCES\r\n"
	            "#define _AFX_NO_OLE_RESOURCES\r\n"
	            "#define _AFX_NO_TRACKER_RESOURCES\r\n"
	            "#define _AFX_NO_PROPERTY_RESOURCES\r\n"
	           "\r\n"
	           "#if !defined(AFX_RESOURCE_DLL) || defined(AFX_TARG_ENU)\r\n"
	           "#ifdef _WIN32\r\n"
	           "LANGUAGE 9, 1\r\n"
	           "#pragma code_page(1252)\r\n"
	           "#endif\r\n"
	           "#include ""res\\appwizdll.rc2"" // Non-Microsoft Visual C++
	                                            // edited.
	                "\r\n"
	           "#include ""afxres.rc""    // Standard components\r\n"
	           "#endif"
	            "\0"
	        END
	
	2. Immediately after the TEXTINCLUDE section, a set of preprocessor definitions
	  has a reference to the code_page and Language:
	
	        #if !defined(AFX_RESOURCE_DLL) || defined(AFX_TARG_ENU)
	        #ifdef _WIN32
	        LANGUAGE 9, 1
	        #pragma code_page(1252)
	        #endif
	
	3. At the end of the .rc file, there is a last set of preprocessor definitions
	  with a reference to the code_page and Language:
	
	        #if !defined(AFX_RESOURCE_DLL) || defined(AFX_TARG_ENU)
	        #ifdef _WIN32
	        LANGUAGE 9, 1
	        #pragma code_page(1252)
	        #endif
	        #include "res\\appwizdll.rc2"  // Non-Microsoft Visual C++ edited
	                                       // resources.
	        #include "afxres.rc"    // Standard components
	        #endif
	
	To make these changes, open the project's .rc file clicking Open on the File menu
	and selecting Open As type of "Text" instead of "Auto." Visual C++ will close
	the resource editor if it is open for this project.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	version 6.0.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jason Strayer, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kberrmsg kbtool kbwizard kbMFC kbVC500bug kbVC600fix kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbAppWizard
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
