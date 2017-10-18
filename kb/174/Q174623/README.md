---
layout: page
title: "Q174623: Error Message After Upgrading Windows NT for Second Processor"
permalink: kb/174/Q174623/
---

## Q174623: Error Message After Upgrading Windows NT for Second Processor

	Article: Q174623
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade Windows NT to support a second processor, you may receive
	either of the following error messages:
	
	- If the Operating System is on a file allocation table (FAT) partition, you
	  receive the following error message:
	
	  Windows NT could not start because the following file is
	  corrupt:%winnt%\system32\drivers\fastfat.sys
	
	- If the Operating System is on a NTFS file system (NTFS) partition:
	
	  Windows NT could not start because the following file is
	  corrupt:%winnt%\system32\drivers\ntfs.sys.
	
	CAUSE
	=====
	
	This behavior can be caused by a file mismatch between the files from Windows NT
	and those from an installed Service Pack.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods:
	
	If You Have Not Yet Restarted After the Upgrade
	-----------------------------------------------
	
	Reapply the latest Service Pack before you restart the computer.
	
	If You Have Already Restarted After the Upgrade
	-----------------------------------------------
	
	Refer to the following article.
	
	For additional information about which files to replace, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q156358 How to Manually Add Support for a Second Processor
	
	Additional query words: hal.dll
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
