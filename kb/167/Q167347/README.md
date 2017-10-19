---
layout: page
title: "Q167347: FIX: /Og Causes C1001, main.c, line 379 for Recursive Call"
permalink: /kb/167/Q167347/
---

## Q167347: FIX: /Og Causes C1001, main.c, line 379 for Recursive Call

	Article: Q167347
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbcode kbtool kbCompiler kbVC500bug kbVC600 kbVS97sp3fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compile a file, such as the following sample, with global optimization
	enabled, the following error occurs:
	
	  Text1.cpp(9) : fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'E:\utc\src\\P2\main.c', line 379) Please choose the Technical
	  Support command on the Visual C++ Help menu, or open the Technical Support
	  help file for more information
	
	RESOLUTION
	==========
	
	Remove the global optimizations for the source file or use the optimize pragma
	to remove the optimization for the function which is causing the error.
	
	NOTE 1: If you are optimizing to minimize size (/O1) or maximize speed (/O2) then
	global optimization (/Og) is enabled as these options consist of several
	optimizations which includes global optimization.
	
	NOTE 2: The default compiler options /GZ (Catch Release-Build Errors in Debug
	Build) and /ZI(Program Database for "Edit and Continue") are incompatible with
	/Og option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /* Command Line Options: /Og
	  */ 
	
	  #include <d3drm.h>
	  class A {
	  public:
	    void Recursive(D3DVECTOR p1, D3DVECTOR p2, D3DVECTOR q1,
	                D3DVECTOR q2, D3DVECTOR& ret);
	  };
	
	  void A::Recursive(D3DVECTOR p1, D3DVECTOR p2, D3DVECTOR q1,
	                D3DVECTOR q2, D3DVECTOR& ret)
	  {
	  Recursive(q1, q2, p1, p2, ret);
	  }
	
	======================================================================
	Keywords          : kbcode kbtool kbCompiler kbVC500bug kbVC600 kbVS97sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
