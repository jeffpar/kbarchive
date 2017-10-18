---
layout: page
title: "Q183253: Problems After Using Rdisk When Cloned w/System Preparation Tool"
permalink: kb/183/Q183253/
---

## Q183253: Problems After Using Rdisk When Cloned w/System Preparation Tool

	Article: Q183253
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the System Preparation Tool for Windows NT 4.0 to duplicate a Windows
	NT installation from one computer to another and you then use the Rdisk.exe tool
	to repair the registry of the computer that contains the duplicated
	installation, you may experience various security, permissions, and access
	problems.
	
	CAUSE
	=====
	
	This issue can occur if the Repair folder on the computer on which Windows NT is
	duplicated contains the security identifiers (SIDs) of the computer from which
	you obtained the duplicate installation.
	
	RESOLUTION
	==========
	
	To prevent this issue from occurring, update the SIDs in the Repair folder on
	the computer on which Windows NT is duplicated immediately after you use the
	System Preparation Tool for Windows NT 4.0. To do so, click Start, click Run,
	type "rdisk /s" (without quotation marks) in the Open box, and then click OK.
	
	For additional information about the Rdisk.exe tool, please see the following
	article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q122857
	  TITLE : RDISK /S and RDISK /S- Options in Windows NT
	
	MORE INFORMATION
	================
	
	When you use the System Preparation Tool for Windows NT 4.0 to duplicate a
	Windows NT installation from one computer to another, the Repair folder on the
	computer on which Windows NT is duplicated contains the SIDs of the computer
	from which you obtained the duplicate installation. If you attempt to use the
	Emergency Repair Disk (ERD) process to repair the registry of the computer on
	which Windows NT is duplicated, the SIDs of the computer from which you obtained
	the duplicate installation could overwrite the new, unique SIDs in the registry.
	This results in duplicate SIDs in the registry, and can lead to various
	security, permissions, and access problems.
	
	Additional query words: clone ghost image sysprep
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
