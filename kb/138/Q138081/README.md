---
layout: page
title: "Q138081: HOWTO: Load an Executable File into the Visual C++ Debugger"
permalink: /kb/138/Q138081/
---

## Q138081: HOWTO: Load an Executable File into the Visual C++ Debugger

	Article: Q138081
	Product(s): Microsoft C Compiler
	Version(s): WINNT:4.0,5.0;
	Operating System(s): 
	Keyword(s): kbVC400 kbVC500 kbVC600
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, included with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you have the Visual C++ developer studio (Msdev.exe) running, you can load an
	executable file for the purpose of debugging without loading the associated
	workspace.
	
	MORE INFORMATION
	================
	
	To load the .exe file, click Open Workspace on the File menu, and enter the name
	of the executable including the .exe suffix. The .pdb file must either be at the
	location specified by the executable file or must be in the same directory as
	the executable file. Source files can be loaded by clicking Open on the File
	menu. When you finish debugging, you will be asked if you want to save the
	workspace information. This way the files you've loaded will be reloaded in
	future debugging sessions.
	
	As in versions 2.0, 2.1, and 2.2, versions 4.0 and 5.0 executables can also be
	debugged if loaded as a command line option as in this example:
	
	  MSDEV Test.exe
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : WINNT:4.0,5.0;
	Issue type        : kbhowto
	
	=============================================================================
	
