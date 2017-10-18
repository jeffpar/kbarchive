---
layout: page
title: "Q217033: FIX: /Og May Cause Incorrect Floating Point Calculation Result"
permalink: kb/217/Q217033/
---

## Q217033: FIX: /Og May Cause Incorrect Floating Point Calculation Result

	Article: Q217033
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCompiler kbVC600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Code compiled with the /Og option can cause incorrect calculation for doubles.
	In some cases, it loads only half of a double's bytes into memory causing
	incorrect results in later calculations.
	
	RESOLUTION
	==========
	
	Disable global optimizations.
	
	Global optimizations can be disabled for the entire project, or for a particular
	source file by removing /Og from either the project's release build compiler
	settings or an individual file's release build compiler settings.
	
	NOTE: /O1 (minimize size), and /O2 (maximize speed) are composite switches that
	include /Og. If you are using /O1 or /O2 disable global optimizations by adding
	/Og- to the appropriate compiler settings.
	
	Global optimization can also be disabled on a function by function basis through
	the use of #pragma optimize as follows:
	
	  #ifndef _DEBUG  // current build is not a debug build<BR/>
	  #pragma optimize("g", off) // disable global optimization<BR/>
	  #endif // _DEBUG<BR/><BR/>
	  void SomeFunction()<BR/>
	
	  *** Body of SomeFunction Here ***
	  return;
	
	  #ifndef _DEBUG // current build is not a debug build<BR/>
	  #pragma optimize("g", on) // re-enable global optimization<BR/>
	  #endif // _DEBUG<BR/>
	
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
	Keywords          : kbservicepack kbCompiler kbVC600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
