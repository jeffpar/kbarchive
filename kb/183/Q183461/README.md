---
layout: page
title: "Q183461: Multimedia Properties Window Closes When You Click Devices Tab"
permalink: /kb/183/Q183461/
---

## Q183461: Multimedia Properties Window Closes When You Click Devices Tab

	Article: Q183461
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbmm
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
	
	When you click the Devices tab in the Multimedia tool in Control Panel,
	Multimedia Properties may close, and you may be unable to add, remove, or view
	the properties of any multimedia device drivers.
	
	CAUSE
	=====
	
	This issue can occur if Netscape Communicator Professional Edition is installed
	on your computer, and the Nsmlaw32.dll file is incorrectly registered in your
	registry.
	
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
	
	To resolve this issue, use Registry Editor to delete the Nsmlaw32.dll value in
	the following registry key:
	
	HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\currentVersion\ 
	drivers.desc
	
	Use Registry Editor to delete the Msacm.nsmlaw value in the following registry
	key:
	
	HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\currentVersion\
	Drivers32
	
	MORE INFORMATION
	================
	
	These registry values are created only when Netscape Communicator Professional
	Edition is installed in Microsoft Windows NT version 3.5 or 3.51. When you
	upgrade Windows NT 3.5 or 3.51 to Windows NT 4.0, these registry values are
	retained.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: navigator gold
	
	======================================================================
	Keywords          : kb3rdparty kbmm 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
