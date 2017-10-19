---
layout: page
title: "Q166168: HOWTO: Use RUNDLL32 to Debug Control Panel Applets"
permalink: /kb/166/Q166168/
---

## Q166168: HOWTO: Use RUNDLL32 to Debug Control Panel Applets

	Article: Q166168
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbDebug kbide kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the RUNDLL32 application that is provided with Windows NT and
	Windows 95 to debug Control Panel applets. Use the following debug settings (set
	by selecting Build/Settings in Visual C++ version 4.x, or by selecting
	Project/Settings in Visual C++ version 2.x and 5.0):
	
	Executable For Debug Session: C:\winnt\system32\rundll32.exe
	
	  - or -
	
	                             C:\windows\rundll32.exe
	Working Directory:
	Program Arguments: shell32.dll,Control_RunDLL [path and name of
	                                              CPL file]
	Remote Executable Path and File Name:
	
	The two choices for "Executable For Debug Session" are for both Windows NT and
	Windows 95. You must type in the name "Control_RunDLL" exactly, and you must use
	the full path and name of the Control Panel applet (.CPL file). You do not have
	to provide information for "Working Directory" and "Remote Executable Path and
	File Name."
	
	MORE INFORMATION
	================
	
	The technique described here is subject to change in future versions of Windows
	and is provided for debugging purposes only. If you want your application to
	launch control panel applications programmatically, you should use the
	Control.exe program.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q135068 How to Start a Control Panel Applet in Windows 95
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDebug kbide kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC410 kbVC420 kbVC500 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
