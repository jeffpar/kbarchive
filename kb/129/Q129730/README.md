---
layout: page
title: "Q129730: Event Viewer Displays DHCP Events 1010, 1016, and 1014"
permalink: /kb/129/Q129730/
---

## Q129730: Event Viewer Displays DHCP Events 1010, 1016, and 1014

{% raw %}

	Article: Q129730
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The System Log lists the following events:
	
	- DHCP Event 1010 The DHCP server encountered the following error when cleaning
	  up the user database
	
	  -or-
	
	- DHCP Event 1016 The DHCP server encountered the following error when backing
	  up the user database with a hex data status of "2d 4e 00 00 (0x4e2d =
	  20013)"
	
	  -or-
	
	- DHCP Event 1014 The JET Database call returned the following Error with a hex
	  data status of "ff fd ff ff (0xfffffdff = -513)."
	
	
	CAUSE
	=====
	
	This event happens when you move the Dynamic Host Configuration Protocol (DHCP)
	database and its backup directories from the default location. When the DHCP
	server is initially installed, its database is stored in
	%SystemRoot%\SYSTEM32\DHCP and the backup directory is set to
	%SystemRoot%\SYSTEM32\DHCP\BACKUP\JET. The DHCP database remembers all attached
	database directories and files in the SYSTEM.MDB file. If the database and
	backup directories are moved, the backup fails because it tries to backup the
	database from the old and new locations, but cannot find the database file in
	the old location.
	
	WORKAROUND
	==========
	
	To resolve this problem, upgrade to Windows NT Workstation and Server version
	3.51.
	
	To work around this problem when you move the database:
	
	1. Copy the original Windows NT SYSTEM.MD_ file from the Windows NT compact disc
	  to your hard drive.
	
	2. Run the %SystemRoot%\SYSTEM32\EXPAND.EXE program to expand SYSTEM.MD_ to
	  SYSTEM.MDB.
	
	3. Copy SYSTEM.MDB to the new database location.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 We are
	researching this problem and will post new information in the Microsoft
	Knowledge Base as it becomes available. This problem was corrected in Windows NT
	version 3. This problem was corrected in Windows NT Workstation or Server
	version 3.51. 51 prodnt
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	

{% endraw %}
