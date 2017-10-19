---
layout: page
title: "Q104549: Cannot Restore Backup After Upgrading to U.S. Service Pack 2"
permalink: /kb/104/Q104549/
---

## Q104549: Cannot Restore Backup After Upgrading to U.S. Service Pack 2

	Article: Q104549
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you create a backup tape and restrict the access to only the owner and
	administrative accounts, you cannot access (restore) the tape under U.S. Service
	Pack 2 from either the owner or administrative accounts. If you attempt to
	access the tape, the following error message appears:
	
	  This tape has been secured. You do not have the proper privileges.
	
	CAUSE
	=====
	
	Prior to U.S. Service Pack 2, the security key was compressed in ANSI. In U.S.
	Service Pack 2, the compression was switched to Unicode.
	
	WORKAROUND
	==========
	
	To work around this problem you can reinstall Windows NT or remove U.S. Service
	Pack 2 by using the Emergency Repair disk. Before choosing to use these
	workarounds, see the Status section below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in U.S. Service Pack 2 for Windows
	NT and Windows NT Advanced Server version 3.1. This problem was corrected in the
	latest U.S. Service Pack for Windows NT and Windows NT Advanced Server version
	3.1. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search kbWinNTW310Search
	Version           : :3.1
	
	=============================================================================
	
