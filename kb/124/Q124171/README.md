---
layout: page
title: "Q124171: NETADMIN Causes GP Faults When Accessing File Permissions"
permalink: kb/124/Q124171/
---

## Q124171: NETADMIN Causes GP Faults When Accessing File Permissions

	Article: Q124171
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft LAN Manager, version 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you remotely administer an OS/2 LAN Manager system or another Windows NT
	system using NETADMIN.EXE (included in LAN Manager version 2.2) from a computer
	running Windows NT version 3.5, the following error message appears:
	
	  NETADMIN caused a General Protection Fault in module
	  NETADMIN.EXE at 0003:41AC
	
	CAUSE
	=====
	
	This problem occurs when you choose File Permissions from the NETADMIN Accounts
	menu while the focus is on Windows NT system or OS/2 LAN Manager server.
	
	WORKAROUND
	==========
	
	To work around this problem, modify the file permissions using the Windows NT
	File Manager.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt gpfault prodnt gpf
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbLanManSearch kbLanMan220
	
	=============================================================================
	
