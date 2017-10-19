---
layout: page
title: "Q147130: FIX: Building an .OCX Always Runs Regsvr32"
permalink: /kb/147/Q147130/
---

## Q147130: FIX: Building an .OCX Always Runs Regsvr32

	Article: Q147130
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 4.2
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC500fix kbGrpDSTools
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you build an .ocx, Regsvr32.exe is always called whether or not the
	compilation succeeds. If you start the build by pressing F5 (Build:Debug :Go),
	and there are compiler errors, after Regsvr32.exe is run, the debugger will be
	launched if you have an existing copy of your debug executable. This same
	problem occurs on any project that uses a custom build option for the project.
	Note that having custom build settings for individual files in the project will
	not effect this behavior.
	
	RESOLUTION
	==========
	
	Remove the custom build command, and add a custom tool to the Tools menu. In the
	case of the .ocx file, Regsvr32 is already registered as a Tool. You can run
	Regsvr32 as a separate step when necessary.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a default .ocx project by selecting OLE ControlWizard as the project
	  type.
	
	2. Successfully build the .ocx file.
	
	3. Introduce a compiler error into your source code.
	
	4. Press F5 to build your application. After the failed build, Regsvr32 is
	  launched followed by the debugger.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbide kbVC kbVC500fix kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC32bitSearch
	Version           : 4.0 4.1 4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
