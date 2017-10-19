---
layout: page
title: "Q150936: FIX: VC4 Debugger Fails to Stop on Breakpoints w/ Long Names"
permalink: /kb/150/Q150936/
---

## Q150936: FIX: VC4 Debugger Fails to Stop on Breakpoints w/ Long Names

	Article: Q150936
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS NT:4.0,4.1;
	Operating System(s): 
	Keyword(s): kbfile kbpatch kbDebug kbide kbVC400bug kbVC410bug kbVC420fix kbfix
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Visual C++ integrated debugger fails to stop at the breakpoints it
	has previously set in a project.
	
	CAUSE
	=====
	
	The integrated debugger in Visual C++ version 4.1 fails to stop at breakpoints
	when a file in the project or a subdirectory in the path to the project uses
	long filenames.
	
	This problem was apparently not observed when debugging the project with Visual
	C++ version 4.0 although the problem may be encountered in certain situations.
	The problem became more apparent on upgrading to Visual C++ version 4.1.
	
	RESOLUTION
	==========
	
	A patch for Visual C++ version 4.1 is available to correct this problem. The
	patch can be found in the Microsoft Software Library as file VC41A.EXE.
	
	For more information on the availability of the patch, see the following article
	in the Microsoft Knowledge Base:
	
	  Q150937 PATCH: Visual C++ Version 4.1 Patch
	
	The following file is available for download from the Microsoft Software
	Library:
	
	~ Vc41a.exe (http://support.microsoft.com/download/support/mslfiles/Vc41a.exe)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This bug was corrected in Visual C++ 32-bit
	Edition version 4.2.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbpatch kbDebug kbide kbVC400bug kbVC410bug kbVC420fix kbfix 
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : WINDOWS NT:4.0,4.1;
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
