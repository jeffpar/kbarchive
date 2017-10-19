---
layout: page
title: "Q216181: FIX: Incorrect Code Generated with /Og Optimization"
permalink: /kb/216/Q216181/
---

## Q216181: FIX: Incorrect Code Generated with /Og Optimization

	Article: Q216181
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbVC600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With global optimization (/Og) enabled, the Visual C++ 6.0 compiler may generate
	incorrect code for functions that pass a structure by value. This manifests
	itself as a structure which appears to have incorrect values after being passed
	into the function.
	
	CAUSE
	=====
	
	Visual C/C++ functions make local copies of its arguments to be referenced
	during a function's execution. Under a few circumstances, global optimization
	can cause the stack space for the copy of the structure to be allocated without
	copying the field values.
	
	RESOLUTION
	==========
	
	Disable global optimizations. Global optimizations can be disabled for the
	entire project, or for a particular source file by removing /Og from either the
	project's release build compiler settings or an individual file's release build
	compiler settings.
	
	NOTE: /O1 (minimize size) and /O2 (maximize speed) are composite switches that
	include /Og. If you are using /O1 or /O2 then disable global optimizations by
	adding /Og to the appropriate compiler settings.
	
	Global optimization can also be disabled on a function by function basis via the
	use of #pragma optimize, as in the following example:
	
	  #ifndef _DEBUG  // current build is not a debug build
	  #pragma optimize("g", off) // disable global optimization
	  #endif // _DEBUG
	
	  void SomeFunction()
	  {
	  *** Body of SomeFunction Here ***
	  return;
	  }
	
	  #ifndef _DEBUG // current build is not a debug build
	  #pragma optimize("g", on) // re-enable global optimization
	  #endif // _DEBUG
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbVC600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
