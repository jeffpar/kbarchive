---
layout: page
title: "Q100315: Steps Performed by the Emergency Repair Disk"
permalink: kb/100/Q100315/
---

## Q100315: Steps Performed by the Emergency Repair Disk

	Article: Q100315
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	The following steps are performed by the Emergency Repair Disk:
	
	1. Runs CHKDSK on the partition containing Windows NT system files. On Intel x86
	  machines, also runs CHKDSK on the system partition (this is optional and must
	  be enabled manually).
	
	2. Verifies that each file in the installation is good, through a checksum
	  algorithm. If files are missing or corrupt they are restored from the
	  installation disks.
	
	3. Replaces the default system and security (SAM) Registry hives, subject to
	  user confirmation.
	
	4. Reinstalls Boot Loader (that is, the boot sector, BOOT.INI, NTLDR, etc.)
	
	Note: The Emergency Repair disk is machine specific, and should only
	be used on a system on which it was created.
	
	Additional query words: tshoot repair
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
