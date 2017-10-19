---
layout: page
title: "Q301056: HOW TO: Debug a Migration DLL During a Windows 2000 Upgrade"
permalink: /kb/301/Q301056/
---

## Q301056: HOW TO: Debug a Migration DLL During a Windows 2000 Upgrade

	Article: Q301056
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDSupport kbAudDeveloper kbHOWTOmaster
	Last Modified: 23-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Requirements
	- Debugging a Migration DLL
	
	   - Debugging on Windows 95 and Windows 98
	- Debugging on Windows 2000
	
	- Troubleshooting
	
	- REFERENCES
	
	SUMMARY
	=======
	
	A migration dynamic-link library (DLL) allows an application that is installed
	on Microsoft Windows 95 or Microsoft Windows 98 to function correctly after a
	user has upgraded to Microsoft Windows 2000. This article covers how to debug a
	migration DLL during a Windows 2000 upgrade.
	
	Requirements
	------------
	
	The following items describe the recommended hardware, software, network
	infrastructure, skills and knowledge, and service packs you need:
	
	- Windows 95 or Windows 98
	
	- Windows 2000
	
	- Microsoft Visual C++
	
	Debugging a Migration DLL
	-------------------------
	
	There are two parts to debugging a migration DLL:
	
	1. Debugging on Windows 95 and Windows 98
	
	2. Debugging on Windows 2000
	
	Different techniques can be used to enable debugging during both the Windows 95
	or Windows 98 and Windows 2000 sides of Setup.
	
	Debugging on Windows 95 and Windows 98
	--------------------------------------
	
	On the Windows 95 and Windows 98 side of Setup, it is easiest to set breakpoints
	and step through the code using by Microsoft Visual C++. This process is
	complicated by the fact that there are other system migration DLLs with the same
	name, Migrate.dll, and the same exported functions. At times the Visual C++
	debugger accidentally breaks into another migration DLL, causing Windows NT
	Setup to fail. The use of message boxes below prevents this problem.
	
	The following steps were created using Visual C++ version 5.0, but are adaptable
	to other versions.
	
	To debug on Windows 95 or Windows 98 by using message boxes, follow these steps:
	
	1. Determine what migration DLL code you need to break into and step through. At
	  those places, add code to display message boxes. Do not set breakpoints in
	  the integrated development environment (IDE).
	
	2. On the Project menu, click Settings.
	
	3. In the Project Settings dialog box, click the Debug tab.
	
	4. Under Executable for Debug Session, on the source for the Windows 2000
	  installation, type the path to Winnt32.exe.
	
	5. Under Program Arguments, type "/#u:testdlls" (without the quotation marks).
	  This is very important, because it causes Windows 2000 Setup to run in the
	  same process space as the migration DLL, making debugging possible.
	
	6. In the Project Settings dialog box, click the Link tab. Make sure that
	  Generate debug information is selected.
	
	7. In the Debug category of the Link tab, select Microsoft under Debug Info.
	  This is important for the Windows 2000 side of the debugging process.
	
	8. On the Build menu, click Start Debug and then click Go (or press F5).
	
	9. The upgrade starts, and you can specify the folder for the migration DLL when
	  the Upgrade Modules dialog box appears during Setup.
	
	10. When the migration DLL is processed, the message boxes are displayed. Return
	  to the Visual C++ IDE and set breakpoints in the code following the message
	  box. Only set breakpoints in the current function.
	
	11. Before continuing Setup, unset any breakpoints to avoid Visual C++
	  inadvertently breaking into other migration DLLs.
	
	Debugging on Windows 2000
	-------------------------
	
	During the Windows 2000 side of the debugging process, Visual C++ can no longer
	be used as the debugger. Instead, Windbg.exe can be used to attach to the Setup
	process. It is possible to maximize a command window that is at the bottom of
	Windows NT GUI-Mode Setup. From the command prompt, run Windbg.exe and attach to
	Setup.exe. Windbg.exe can be installed from following Microsoft Developer
	Network (MSDN) Web site:
	
	  http://msdn.microsoft.com/developer/sdk/platform.htm
	
	To debug on Windows 2000, follow these steps:
	
	1. To know when Setup.exe has loaded the migration DLL, you may want to place a
	  message box in InitializeNT(). This halts Setup and allows you to attach to
	  the process and set breakpoints.
	
	2. When Setup reaches the message box, type "Windbg.exe" (without the quotation
	  marks) at the command prompt.
	
	NOTE: It is critical that you load the source code for the migration DLL before
	you attach to the process. Otherwise, Setup stops responding (hangs).
	
	3. On the View menu, click Options.
	
	4. On the Symbols tab, type in the full path to the location of the .pdb file.
	  This is the program database that Visual C++ creates, and it contains debug
	  information.
	
	5. On the Debug menu, click Attach to Process, and then select Setup.exe.
	
	6. Go to the source code that is open and use F9 or the menu to set breakpoints
	  in the migration DLL.
	
	   - If the breakpoints are purple, Windbg.exe cannot properly interpret the
	     symbol information. Check over all of the above steps. Look at the Command
	     window. It should list the folder that you typed in the Symbols tab, and
	     it should say (Symbols Loaded). If it indicates that symbols cannot be
	     loaded, make sure that you are pointing to the correct path of the .pdb
	     file.
	
	   - Red breakpoints indicate success. When all breakpoints have been correctly
	     set, you must restart the process that was temporarily halted by attaching
	     to it. Click Debug and then click Restart, or use the toolbar. When Setup
	     hits a breakpoint, you can step through your code.
	
	Troubleshooting
	---------------
	
	When you debug on Windows 2000, do not close Windbg.exe or stop debugging at any
	time during the process. Windbg.exe automatically unloads and closes the process
	that it was debugging (in this case, Setup.exe).
	
	REFERENCES
	==========
	
	For help with steps to test areas that need migrating, see the following MSDN
	Web site:
	
	  How to Test and Debug a Migration DLL
	  http://msdn.microsoft.com/library/techart/msdn_migdbg.htm
	
	For more information on the Migration Extension Interface Reference, see the
	Win32 Platform SDK documentation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbAudDeveloper kbHOWTOmaster 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	
