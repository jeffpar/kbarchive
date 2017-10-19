---
layout: page
title: "Q194208: Unable to Install GSNW on Windows NT Server 4.0"
permalink: /kb/194/Q194208/
---

## Q194208: Unable to Install GSNW on Windows NT Server 4.0

	Article: Q194208
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you try to install Gateway Services for NetWare (GSNW) on your Windows NT
	Server, you may receive the following error:
	
	  Please remove any existing Gateway Service for NetWare component and
	  reboot your machine before installing the latest version of GSNW.
	
	No GSNW, SAP, or RIP for IPX components are installed on the system.
	
	CAUSE
	=====
	
	Some registry entries from the Novell intraNetWare Client are conflicting with
	GSNW installation.
	
	RESOLUTION
	==========
	
	GSNW and the intraNetWare Client do not work together. If you choose to have
	GSNW, remove intraNetWare and then install GSNW.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	If intraNetWare has already been removed and the problem continues, remove the
	following entries in the registry before reinstalling GSNW:
	
	  
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\NetWareWorkstation
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\NWIP
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
