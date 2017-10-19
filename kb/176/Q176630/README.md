---
layout: page
title: "Q176630: SMSINST: How to Use a Custom Progress Dialog"
permalink: /kb/176/Q176630/
---

## Q176630: SMSINST: How to Use a Custom Progress Dialog

	Article: Q176630
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): smsinst
	Last Modified: 09-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Most of the dialog boxes associated with a Systems Management Server Installer
	generated script can be customized directly by using the Installer user
	interface (UI). The Progress Bar dialog box that is displayed while files are
	being copied cannot be customized directly through the Installer UI.
	
	MORE INFORMATION
	================
	
	Sample code for a Custom Progress Bar DLL is included with the Systems
	Management Server Installer. This source code is located by default in the
	following folder:
	
	  \Program Files\Microsoft SMS Installer\DLL\Progress
	
	This source code is currently 16-bit only and must be compiled with a 16- bit
	compiler. Microsoft Visual C version 1.52c can open Progress.mak and compile it
	with no changes. To use this 16-bit DLL, you must specify the DLL in the Custom
	Progress Bar DLL dialog box of Installation Properties, on the Screen tab. You
	must also specify "Windows 3.1x, 95 and NT (Win16/Win32)" as your destination
	platform in the Installation Properties, on the Global tab. If you specify
	"Windows 95 and NT (True Win32)", you will receive the following error message
	when you compile your script:
	
	  The custom progress bar DLL must match the installation EXE type (Win16 or
	  Win32).
	
	The error occurs because the True Win32 (32-bit) installation executable file
	cannot directly call a 16-bit DLL.
	
	
	Additional query words: prodsms abort exit kbhowto smsutil
	
	======================================================================
	Keywords          : smsinst 
	Technology        : kbSMSSearch kbSMSI100
	Version           : WINDOWS:1.0
	Issue type        : kbinfo
	
	=============================================================================
	
