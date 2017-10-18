---
layout: page
title: "Q222005: BUG: LNK2001 When Building Applications for MIPS Palm-size PC Th"
permalink: kb/222/Q222005/
---

## Q222005: BUG: LNK2001 When Building Applications for MIPS Palm-size PC Th

	Article: Q222005
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbMFC kbHWMIPS kbVC600bug kbGrpDSVCCompiler
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++ 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Building a MIPS-based Palm-size PC application that uses floating-point
	comparisons may generate errors similar to the following:
	
	  project.obj : error LNK2001: unresolved external symbol __ltd
	  project.obj : error LNK2001: unresolved external symbol __gtd
	  project.obj : error LNK2001: unresolved external symbol __eqd
	
	CAUSE
	=====
	
	The new version of the MIPS compiler for the Palm-size PC incorrectly makes
	calls to floating-point comparison functions in later versions of the Windows CE
	C run time.
	
	RESOLUTION
	==========
	
	Use the /QMOC switch to call the earlier versions of the Windows CE
	floating-point comparison functions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following code fragment generates the errors listed in the SYMPTOMS section:
	
	      double  a, b;
	
	      if ( a < b ) return -1;
	      if ( a > b ) return 1;
	      if ( a==b ) return 0;
	
	Additional query words: kbWinCE201
	
	======================================================================
	Keywords          : kbCompiler kbMFC kbHWMIPS kbVC600bug kbGrpDSVCCompiler 
	Technology        : kbVCsearch kbAudDeveloper kbWinCETKVCSearch kbWinCESearch kbWinCETK600VC
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
