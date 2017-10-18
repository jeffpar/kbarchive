---
layout: page
title: "Q128061: INFO: Visual FoxPro Setup in Windows and Windows for Workgroups"
permalink: kb/128/Q128061/
---

## Q128061: INFO: Visual FoxPro Setup in Windows and Windows for Workgroups

	Article: Q128061
	Product(s): Microsoft FoxPro
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbsetup kbvfp
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	As a 32-bit application, Visual FoxPro requires a 32-bit operating environment.
	Therefore, the Win32s subsystem is installed when the Visual FoxPro setup is run
	in Windows or Windows for Workgroups. This article briefly describes the Win32s
	subsystem and provides Knowledge Base references that answer frequently asked
	questions.
	
	MORE INFORMATION
	================
	
	Win32s provides a set of DLLs and a virtual device driver (VxD) that allow
	Win32-based applications to run on top of Windows or Windows for Workgroups.
	
	The Visual FoxPro setup detects the current operating system and installs the
	Win32s subsystem if Windows (or Windows for Workgroups) is running. A WIN32S
	directory containing the Win32s Dynamic Link Libraries (DLL) is created in your
	SYSTEM or WINDOWS\SYSTEM directory. The WIN32S.EXE and WIN32S16.DLL are
	installed in your WINDOWS\SYSTEM directory, and the [386 enh] section of the
	SYSTEM.INI is modified to include Win32s drivers.
	
	For general information about Win32s, please see the following articles in the
	Microsoft Knowledge Base:
	
	
	  Q83520 General Overview of Win32s
	
	  Q121091 How to Determine Which Version of Win32s Is Installed
	
	  Q121092 PRB: Local Reboot (CTRL+ALT+DEL) Doesn't Work Under Win32s
	
	
	If you are experiencing difficulties installing Win32s or cannot start Visual
	FoxPro in Windows or Windows for Workgroups, please see the following articles
	in the Microsoft Knowledge Base:
	
	  Q106715 Troubleshooting Win32s Installation Problems
	
	  Q122326 BUG: Win32s Setup May Fail if BUFFERS or FILES Set Too Small
	
	  Q117153 PRB: Display Problems with Win32s and the S3 Driver
	
	
	NOTE: Win32s requires a 10 MB or larger permanent Windows swap file.
	
	If you need to reinstall the Win32s subsystem, remove it first. You can't simply
	delete the WIN32S directory because deleting it does not remove references to
	the subsystem. For a step-by-step procedure, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q120486 How to Remove Win32s.
	
	Additional query words: install exception error crash swapfile
	
	======================================================================
	Keywords          : kbsetup kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : :3.0
	Issue type        : kbinfo
	
	=============================================================================
	
