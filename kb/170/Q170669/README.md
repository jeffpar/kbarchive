---
layout: page
title: "Q170669: Creating C:&#92;Program Folder Causes Add/Remove Program to Fail"
permalink: kb/170/Q170669/
---

## Q170669: Creating C:&#92;Program Folder Causes Add/Remove Program to Fail

	Article: Q170669
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create a folder called C:\Program, if you then go to Control Panel,
	double-click Add/Remove Programs, and select an installed program to remove or
	update, you get the following error message:
	
	  An error occurred while trying to remove "program_name"
	  Uninstallation has been cancelled
	
	If you rename the folder called Program to, for example, Program2, you see the
	following message:
	
	  This change may impact one or more registered programs. Do you want to
	  continue?
	
	CAUSE
	=====
	
	In the registry under
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Uninstall
	  \...
	
	any programs whose uninstall string value starts with C:\Progra~1 or "C:\Program
	Files\..." will fail to be removed if a C:\Program folder exists.
	
	These examples will fail:
	
	  UninstallString:reg_sz:c:\Program Files\My_program\setup setup
	
	  UninstallString:reg_sz:"c:\Program Files\My_program\setup" setup
	
	  UninstallString:reg_sz:c:\Progra~1\My_program\setup setup
	
	RESOLUTION
	==========
	
	Perform the following steps to remove the desired application:
	
	1. Rename the C:\Program folder.
	
	2. Click the Start button, point to Settings, click Control Panel, and then
	  double-click Add/Remove Programs.
	
	3. Click the application you want to remove, and then click Remove.
	
	4. Click OK.
	
	5. Rename the folder in step 1 back to its original name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
