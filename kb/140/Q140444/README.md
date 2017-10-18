---
layout: page
title: "Q140444: FIX: UNC File Names Cause Remote Debugging to Fail"
permalink: kb/140/Q140444/
---

## Q140444: FIX: UNC File Names Cause Remote Debugging to Fail

	Article: Q140444
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 4.2
	Operating System(s): 
	Keyword(s): kbDebug kbide kbVC500fix
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A remote debugging session hosted on Windows NT with the target located on a
	computer running Windows 95 using TCP/IP may fail to acknowledge breakpoints. In
	addition, pressing CTRL+BREAK interrupts the debugging session leaving you with
	assembler code rather than source code in the source window.
	
	CAUSE
	=====
	
	On the host computer, the Debug tab in the Project Settings dialog box has two
	executable location fields:
	
	- Executable for debug session {full executable name as it appears to the host
	  PC}.
	
	- Remote executable path and file name {full executable name as it appears to
	  the remote PC}.
	
	Using a UNC file specification for these fields results in the same entry in both
	fields. For example:
	
	  \\server\share\myproj\myprog.exe
	
	RESOLUTION
	==========
	
	To work around this problem, map a drive to the share and use the mapped file
	name. For example, from the host computer:
	
	  p: = \\server\share
	
	  Executable for debug session: p:\myproj\myprog.exe
	
	  Remote executable path and file name: c:\myproj\myprog.exe
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbDebug kbide kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : 4.0 4.1 4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
