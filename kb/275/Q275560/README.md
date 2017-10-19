---
layout: page
title: "Q275560: PRB: DLL Breakpoints Are Skipped or Disabled"
permalink: /kb/275/Q275560/
---

## Q275560: PRB: DLL Breakpoints Are Skipped or Disabled

	Article: Q275560
	Product(s): Microsoft C Compiler
	Version(s): 3.0,6.0
	Operating System(s): 
	Keyword(s): kbDebug kbOSWinCEsearch kbDSupport kbGrpDSETK
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Embedded Toolkit for Visual C++ 5.0 
	- Microsoft Windows CE Toolkit for Visual C++ 6.0 
	- Microsoft eMbedded Visual C++ version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While debugging a C++ application in the eMbedded Visual C++ 3.0 development
	environment, the following things may occur:
	
	- Some debug breakpoints in dynamic-link libraries (DLLs) may be skipped.
	
	- A message or warning dialog box may appear indicating that some breakpoints
	  have been disabled and cannot be set.
	
	CAUSE
	=====
	
	To enable breakpoints in DLLs, the paths to the DLLs on both the development
	computer and the Windows CE target device must be set properly in the project
	settings.
	
	RESOLUTION
	==========
	
	To set these paths for your Windows CE project, follow these steps:
	
	1. On the Project menu, click Settings. Click the Debug tab, and then click
	  Additional DLLs.
	
	2. In Local Name, specify the path of the debug DLL that resides on the
	  development (host) computer.
	
	3. In Remote Name, specify the path of the corresponding DLL on the target
	  device.
	
	  For example, if debugging an application with a DLL named Util.dll, you can
	  set breakpoints in the DLL by using settings that resemble the following:
	
	  Local Name : C:\Program Files\MyProject\WCEDbg\Util.dll
	  Remote Name : \Windows\Util.dll
	
	Note that in order for debugging to be accurate, the remote DLL must be an exact
	copy of the DLL on the development computer (except for certain debug
	information which is automatically stripped when the DLL is transferred to the
	target device).
	
	REFERENCES
	==========
	
	For additional information about debugging on Windows CE, see "Debugging a
	Windows CE Application" in the eMbedded Visual Tools 3.0 online documentation.
	
	Additional query words: Debug eVT DLL Workspace Project Settings
	
	======================================================================
	Keywords          : kbDebug kbOSWinCEsearch kbDSupport kbGrpDSETK 
	Technology        : kbVCsearch kbAudDeveloper kbWinCETKVCSearch kbWinCEETKSearch kbWinCESearch kbVCeMb kbWinCETK600VC kbWinCEETKVC500
	Version           : :3.0,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
