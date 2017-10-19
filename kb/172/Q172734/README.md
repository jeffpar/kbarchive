---
layout: page
title: "Q172734: Static Mappings Have No NetBIOS Suffix in WINS Manager"
permalink: /kb/172/Q172734/
---

## Q172734: Static Mappings Have No NetBIOS Suffix in WINS Manager

	Article: Q172734
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you type a static mapping in the Windows Internet Name Service (WINS)
	database, you may only see one entry appear. That entry has no sixteenth
	character hexadecimal identifier.
	
	For example, you might type a unique static mapping for a computer with the
	NetBIOS name of RHINO having an IP address of 192.0.0.1. You expect to see the
	following entries:
	
	  RHINO(00h)      192.0.0.1
	  RHINO(03h)      192.0.0.1
	  RHINO(20h)      192.0.0.1
	
	However, you may see the following instead:
	
	  RHINO      192.0.0.1
	
	CAUSE
	=====
	
	WINS Manager is not configured to display the database using LAN Manager-
	compatible conventions.
	
	RESOLUTION
	==========
	
	To resolve this issue, enable the LAN Manager-compatible feature by performing
	the following steps:
	
	1. In WINS Manager, click Options, and then click Preferences.
	
	2. Click LAN Manager-Compatible to enable the option.
	
	3. Click OK.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q172384 WINS Database Displays Hyphens Instead of NetBIOS Suffix
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
