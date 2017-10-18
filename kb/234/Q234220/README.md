---
layout: page
title: "Q234220: Cannot Dual Boot Windows 95/98 and Windows NT on HP 6330"
permalink: kb/234/Q234220/
---

## Q234220: Cannot Dual Boot Windows 95/98 and Windows NT on HP 6330

	Article: Q234220
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): win95 win98
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT in a dual-boot configuration on a Hewlett-Packard
	(HP) Pavilion 6330, selecting "Previous operating system" or "Windows" on the
	Windows NT Boot menu may cause the computer to stop responding (hang).
	
	Using the SYS command to restore Windows 95/98 boot functionality and then using
	the Windows NT boot disks to restore dual booting does not resolve the issue.
	
	CAUSE
	=====
	
	This behavior can occur if your HP 6330 computer uses an older BIOS version.
	BIOS version 1.05 is confirmed to cause this issue.
	
	RESOLUTION
	==========
	
	To resolve this issue, upgrade the computer's BIOS. BIOS version 1.08 dated
	11/18/98 has been tested and resolves this issue.
	
	To obtain information about updating your computer's BIOS, please contact
	Hewlett-Packard.
	
	
	
	Additional query words: pavilion ntldr multi
	
	======================================================================
	Keywords          : win95 win98 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
