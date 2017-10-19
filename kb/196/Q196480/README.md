---
layout: page
title: "Q196480: Problems After You Install Winzip Version 6.3 or 7.0"
permalink: /kb/196/Q196480/
---

## Q196480: Problems After You Install Winzip Version 6.3 or 7.0

	Article: Q196480
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg win95
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry  Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	While you are running Windows Explorer, a Microsoft Office version 7.0 for
	Windows 95 program, or a Microsoft Office 97 program, you may receive the
	following error message:
	
	  Explorer
	  This program has performed an illegal operation and will be shut down.
	
	If you then click Details, you may receive the following error message:
	
	  Explorer caused an invalid page fault in module <unknown>
	  at:<address>
	
	CAUSE
	=====
	
	This problem can occur if all of the following conditions exist:
	
	- You installed Winzip version 6.3 or 7.0 on your Windows 95-based computer.
	
	- You installed Internet Explorer version 4.0 but did not install the Windows
	  Desktop Update component.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To resolve this issue, use Registry Editor to delete the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\ 
	     AlwaysUnloadDLL
	
	MORE INFORMATION
	================
	
	The third-party product discussed here is manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
