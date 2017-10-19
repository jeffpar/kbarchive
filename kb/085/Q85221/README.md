---
layout: page
title: "Q85221: HOW TO: Debug a Dynamic-Link Library (DLL) in Windows"
permalink: /kb/085/Q85221/
---

## Q85221: HOW TO: Debug a Dynamic-Link Library (DLL) in Windows

	Article: Q85221
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kbDebug kbide kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbHOWTOma
	Last Modified: 14-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Visual Workbench Integrated Debugger, used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The process of developing a dynamic-link library (DLL) with Visual C++ usually
	includes debugging. To do so, you must build a debugging version of the DLL and
	call it from an application. However, it is not necessary to build the debugging
	version of the calling application or to build the caller with Visual C++. The
	following five steps demonstrate debugging a DLL. Note that it is not within the
	scope of this article to provide detailed instructions for building the DLL.
	
	1. Build the DLL with debugging information.
	
	2. Specify the fully-qualified path to the calling application. In Visual C++
	  for Windows and Visual C++ 32-bit Edition version 1.0, choose Debug from the
	  Options menu and enter the information under Calling Program. In Visual C++
	  2.x and 5.0, choose Settings from the Project menu; in Visual C++ 4.0, choose
	  Settings from the Build menu. Select the Debug tab, and enter the information
	  under Executable For Debug Session.
	
	3. Set a breakpoint in the source code of the DLL function to debug. To do this,
	  place the cursor on the line in the source code to contain the breakpoint and
	  press F9.
	
	4. Choose Restart from the Debug menu. If the calling program does not contain
	  debugging information, a dialog box appears asking you to confirm your
	  choice. Choose OK and the program starts execution.
	
	5. After you perform the necessary steps to execute the function that contains
	  the breakpoint, execution stops on the specified line of code.
	
	Additional query words: symbolic
	
	======================================================================
	Keywords          : kbDebug kbide kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbHOWTOmaster 
	Technology        : kbVCsearch kbAudDeveloper
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
