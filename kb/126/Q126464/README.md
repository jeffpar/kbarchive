---
layout: page
title: "Q126464: Repair Disk Utility Does Not Update SAM and Security Hives"
permalink: kb/126/Q126464/
---

## Q126464: Repair Disk Utility Does Not Update SAM and Security Hives

	Article: Q126464
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you restore the SAM and Security hives from an updated Emergency Repair
	Disk, the versions that were saved when you installed Windows NT are restored.
	
	CAUSE
	=====
	
	Repair Disk Utility (RDISK.EXE) does not save the Windows NT Registry SAM and
	Security hives.
	
	WORKAROUND
	==========
	
	To avoid losing information in the future, use one of the following methods:
	
	- Use Windows NT Backup (NTBACKUP.EXE) and select the option to backup the
	  Registry.
	
	  NOTE: Using NTBackup is the only supported method for creating a backup of
	  your system registry.
	
	  -or-
	
	- Back up the Sam.* and Security.* files in the %Systemroot%\System32\Config
	  directory.
	
	  -or-
	
	- Use Regback.exe from the correct version of the Windows NT Resource Kit for
	  the version of NT being used.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Server versions 3.51 and 4.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: security account manager prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
