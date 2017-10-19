---
layout: page
title: "Q221911: FIX: Memory Leak in Visual C++ Integrated Debugger"
permalink: /kb/221/Q221911/
---

## Q221911: FIX: Memory Leak in Visual C++ Integrated Debugger

	Article: Q221911
	Product(s): Microsoft C Compiler
	Version(s): 2000,6.0
	Operating System(s): 
	Keyword(s): kbDebug kbide kbOSWin2000 kbVC600bug kbVS600 kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT Task Manager shows an increase in memory usage every time the
	Visual C++ integrated debugger is started using F5 and then stopped. When the
	system exhausts the virtual memory limit, the application and debugger crashes
	displaying the following 3 message boxes:
	
	   - Microsoft Visual C++ "Could not execute: Path not found (win 32 error3)"
	
	- Microsoft Visual C++ "DM0025: Error attaching to Process"
	
	- Sample.exe- Application Error "The application failed to initialize properly
	  (0xc000012d)
	  Click on OK to terminate the application"
	
	RESOLUTION
	==========
	
	The memory can be freed before the system runs out of virtual memory by closing
	the Visual C++ IDE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a default MFC application using the AppWizard and build it.
	
	2. Start Windows NT Task Manager, click the Performance tab and watch MEM Usage.
	
	3. Start the integrated debugger by pressing F5.
	
	4. Note MEM Usage.
	
	5. Stop the debugger.
	
	6. Repeat steps 3-5.
	
	NOTE: Mem Usage has increased by quite some amount. If the virtual memory limit
	is reached then the errors messages described above are seen.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Vidyanand
	N. Rajpathak, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDebug kbide kbOSWin2000 kbVC600bug kbVS600 kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : :2000,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
