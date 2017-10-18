---
layout: page
title: "Q138942: HOWTO: Debug a Windows Shell Extension"
permalink: kb/138/Q138942/
---

## Q138942: HOWTO: Debug a Windows Shell Extension

	Article: Q138942
	Product(s): Microsoft C Compiler
	Version(s): WINNT:2.0,2.1,2.2,4.0,4.1,4.2,5.0;
	Operating System(s): 
	Keyword(s): kbDebug kbide kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To debug a Windows Shell Extension using Microsoft Visual C++, you must specify
	the Windows shell as the "Executable For Debug Session" in Project Settings
	(Build Settings if using Microsoft Developer Studio 4.0), and re- start it by
	using the Visual C++ debugger.
	
	MORE INFORMATION
	================
	
	Steps to Debug a Windows Shell Extension
	----------------------------------------
	
	1. Bring the Shell Extension up in the Visual C++ environment, and set the shell
	  as the "Executable For Debug Session." To specify the shell, click the Debug
	  tab after clicking Build Settings in the Project menu, and enter <path to
	  explorer>\Explorer.exe.
	
	2. On the Start menu on the Windows Taskbar, click Shut Down. While holding down
	  the CTRL+ALT+SHIFT key combination, click the No button in the Shut Down
	  Windows dialog box. This will terminate the shell.
	
	  NOTE: this only shuts down the shell. Any other applications that are running
	  will continue to run after the shell exits.
	
	3. Start the Visual C++ debugger, and debug the Shell Extension.
	
	It may seem confusing when you start the Explorer under the debugger, and you
	don't see what you might normally think of as the Explorer. This is due to the
	fact that the Taskbar and Start button are part of the Explorer program. To
	debug a Context Menu for a file, once the Explorer is running under the
	debugger, it will still be necessary to start an instance of the Windows
	Explorer from the Start menu.
	
	Windows 95 NOTE: Once you finish debugging, double-click anywhere on the desktop
	to restart the shell. This will bring up a Task dialog box. On the File menu,
	click Run, and then enter the path to Explorer.exe. Explorer.exe and "the shell"
	are the same thing.
	
	
	Windows NT 4.0 NOTE: Once you finish debugging, press CTRL+ALT+DEL to bring up
	the Windows NT task manager. On the File menu, click New Task (Run...), and then
	enter the path to Explorer.exe.
	
	REFERENCES
	==========
	
	Visual C++ 4.0 Books Online - Extending the Windows 95 Shell.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDebug kbide kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC410 kbVC420 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : WINNT:2.0,2.1,2.2,4.0,4.1,4.2,5.0;
	Issue type        : kbhowto
	
	=============================================================================
	
