---
layout: page
title: "Q150076: BUG: C4003: Not Enough Parameters for SubclassWindow Macro"
permalink: kb/150/Q150076/
---

## Q150076: BUG: C4003: Not Enough Parameters for SubclassWindow Macro

	Article: Q150076
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,1.52a,2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbCompiler kbCPPonly kbMFC kbVC100bug kbVC150bug kbVC151bug kbVC152bug kbVC200
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 1.52a, 2.0, 2.1, 2.2, 4.0, 4.1, 4.2 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling a Microsoft Foundation Class (MFC) application that uses the
	Windowsx.h header file and calls CWnd::SubclassWindow(), you may get the
	following error:
	
	  warning C4003: not enough actual parameters for macro 'SubclassWindow' error
	  C2059: syntax error : ')'
	
	CAUSE
	=====
	
	The Windowsx.h file is a header that includes message cracker macros to help
	programmers write more portable Windows-based applications. The header file
	contains a preprocessor macro named SubclassWindow. The macro bears the same
	name as the CWnd::SubclassWindow() member function. The macro has two
	parameters; the member function has only one parameter. The preprocessor tries
	to expand the symbol SubclassWindow when it is found.
	
	RESOLUTION
	==========
	
	You can un-define the macro as follows:
	
	     #undef SubclassWindow
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	REFERENCES
	==========
	
	Win32 SDK Books Online.
	MFC Class Library Reference.
	
	Additional query words: 1.00 1.50 1.51 1.52 2.00 2.10 2.20 4.00 4.10
	
	======================================================================
	Keywords          : kberrmsg kbCompiler kbCPPonly kbMFC kbVC100bug kbVC150bug kbVC151bug kbVC152bug kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbGrpDSMFCATL 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC220 kbVC410 kbVC420 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC152 kbVC152a kbVCNET kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,1.52a,2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
