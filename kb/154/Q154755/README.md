---
layout: page
title: "Q154755: PCAnywhere 32 7.0 May Delete Files on NTFS Partition"
permalink: kb/154/Q154755/
---

## Q154755: PCAnywhere 32 7.0 May Delete Files on NTFS Partition

	Article: Q154755
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you double-click the Inst32.exe file in the PCAnywhere 32 version 7.0 folder
	after PCAnywhere 32 7.0 is installed, all files on the NTFS partition that are
	not in use at the time are deleted.
	
	RESOLUTION
	==========
	
	If this has already occurred, reinstall Windows NT and restore from your most
	recent backup.
	
	To prevent this from occurring, use any of the following methods:
	
	- Delete the Inst32.exe file in the PCAnywhere 32 folder. This file is not
	  needed after PCAnywhere 32 is installed.
	
	- Install the patch for PCAnywhere 32 version 7.0. This patch is available from
	  Symantec Corporation.
	
	
	- Upgrade to the latest version of PCAnywhere 32.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	Issue type        : kbprb
	
	=============================================================================
	
