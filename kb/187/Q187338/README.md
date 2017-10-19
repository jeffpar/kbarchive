---
layout: page
title: "Q187338: Windows Hangs During the Logon Process"
permalink: /kb/187/Q187338/
---

## Q187338: Windows Hangs During the Logon Process

	Article: Q187338
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kb3rdparty win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you attempt to log on to your computer, the computer may stop responding
	(hang) for 3-5 minutes. When you complete the logon process, your computer
	behaves normally.
	
	CAUSE
	=====
	
	This behavior can occur if the Compaq Insight Management Desktop Agents For
	Windows 95/NT tool (Cpqalert.exe) is running.
	
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
	
	To work around this behavior, locate and delete the "Cpqalert.exe" value from the
	following registry key:
	
	 HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\RunServices
	
	Note that this workaround disables the Compaq Insight Management Desktop Agents
	For Windows 95/NT tool. Contact Compaq Technical Support for information about
	an update to this product.
	
	
	======================================================================
	Keywords          : kb3rdparty win95 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
