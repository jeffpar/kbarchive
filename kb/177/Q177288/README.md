---
layout: page
title: "Q177288: Err Msg: The Procedure Entry Point SUnMapLS_IP_EBP_8 Could..."
permalink: kb/177/Q177288/
---

## Q177288: Err Msg: The Procedure Entry Point SUnMapLS_IP_EBP_8 Could...

	Article: Q177288
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	If you attempt to install the ATI Technologies 3D Rage video driver for
	Microsoft Windows 95 in Windows NT, you may receive the following error
	message:
	
	  The drivers were not successfully installed. You may not have the
	  required privilege to install a new driver.
	
	When you restart Windows NT, you may receive the following error message:
	
	  Atikey32.exe - Entry Point Not Found. The procedure entry point
	  SUnMapLS_IP_EBP_8 could not be located in the dynamic link library
	  KERNEL32.DLL.
	
	CAUSE
	=====
	
	The ATI Technologies 3D Rage video driver for Windows 95 is not compatible with
	Windows NT. Even though the ATI driver installation program cannot complete the
	video driver installation, an entry is created in the Run key in the registry.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT. Microsoft cannot
	guarantee that problems resulting from the incorrect use of Registry Editor can
	be solved. Use Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To resolve this problem, use the following steps:
	
	1. Use Registry Editor to delete the AtiKey32 value in the following registry
	  key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run
	
	2. Restart your computer.
	
	MORE INFORMATION
	================
	
	You may want to contact ATI Technologies for information about obtaining a
	Windows NT 4.0 video driver for your ATI Technologies display adapter.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	
	=============================================================================
	
