---
layout: page
title: "Q198130: PRB: FLL Causes Error After Recompilation"
permalink: kb/198/Q198130/
---

## Q198130: PRB: FLL Causes Error After Recompilation

	Article: Q198130
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0; WINNT:6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVC600 kbvfp300 kbvfp500 kbvfp600
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After building an FLL in Visual C++ 6.0, you may get one of the following error
	messages when calling a function in the FLL from Visual FoxPro:
	
	  API Caused an Exception
	
	-or-
	
	  The error occurs when loading the debug build of the FLL, but not with the
	  release build.
	
	CAUSE
	=====
	
	The project has been compiled in Visual C++ version 6.0 with debug information
	using the new "Edit and Continue" format. This is why a release build of the FLL
	works and a debug build that uses "Edit and Continue" for the debug information
	format fails. The default setting for a debug build in Visual C++ 6.0 is to use
	a "Program database for Edit and Continue." This causes tokens to be inserted in
	the compiled program that are not recognized by FoxPro.
	
	NOTE: It appears that the errors occur only when compiling on Windows NT.
	
	RESOLUTION
	==========
	
	Use one of the following workarounds:
	
	- Compile the project as a release build.
	
	- Change the project settings. In the Project Settings dialog box, click the
	  C/C++ tab. Select General in the Category box, and change the selection in
	  the Debug Info: box from "Program database for Edit and Continue" to "Program
	  Database."
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Locate the HOME()+"Api\Samples" folder.
	
	2. In Visual C++ 6.0, start a new Win32 Dynamic Link Library project named
	  Reverse.
	
	3. Add Reverse.C (found in HOME()+"Api\Samples\") to the project.
	
	4. In the Project Settings, make sure the /MDd compiler switch is used. Add
	  winapims.lib (found in HOME()+"Api\Samples\") to the Object/library modules
	  setting.
	
	5. On the Build menu of Visual Studio, click "Set Active Configuration," and
	  select Win32 Debug.
	
	6. Click Rebuild All on the Build menu.
	
	7. SET LIBRARY TO the newly-compiled Reverse.Dll.
	
	8. In the Command window, type "? reverse('test')" (without the double quotation
	  marks), and note that one of the two error messages listed above appears.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Mike
	Stewart, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbVC600 kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVCsearch kbVFPsearch kbAudDeveloper kbVC32bitSearch kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a kbVCPE600 kbVCEE600 kbVCLE600
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0; WINNT:6.0
	Issue type        : kbprb
	
	=============================================================================
	
