---
layout: page
title: "Q142671: Backup Fails on Certain Directories Due to Lack of Permissions"
permalink: /kb/142/Q142671/
---

## Q142671: Backup Fails on Certain Directories Due to Lack of Permissions

	Article: Q142671
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you log on with an account that has Backup Operator permissions, when you
	run a backup across the network from a Windows NT 4.0 computer you may receive
	the following error in the backup.log file stating you do not have permissions
	to back up some directories:
	
	  You do not have permission to access portions of data. Please see the owner
	  or administrator to get permission. Directory F:\data
	
	
	CAUSE
	=====
	
	An account with Backup Operator permission should have the built-in ability to
	back up files that it does not have permissions to access. However, this ability
	does not work properly in Windows NT 4.0.
	
	
	RESOLUTION
	==========
	
	Microsoft has updated RDR.SYS to open remote files in the correct context.
	
	This update is available from Microsoft support channels or directly from the
	following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa
	  /nt40/hotfixes-postSP1/NTBackup-fix
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The built-in ability of the backup operator works properly locally.
	
	Additional query words: prodnt perms
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
