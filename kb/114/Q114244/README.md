---
layout: page
title: "Q114244: Unable to Upgrade Service Pack 2 On Magneto Optical Drives"
permalink: kb/114/Q114244/
---

## Q114244: Unable to Upgrade Service Pack 2 On Magneto Optical Drives

	Article: Q114244
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When upgrading Windows NT version 3.1 to Service Pack 2 on a Magneto Optical
	drive or any removable drive, the Update program reports there is not enough
	space available when there is space left on the disk.
	
	CAUSE
	=====
	
	The Win32 API that determines drive type informs the Update program that the
	drive is DRIVE_REMOVABLE; the Update program considers it to be a floppy, so the
	free space check ends up incorrect.
	
	RESOLUTION
	==========
	
	No resolution is available at this time.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt ntas sp2
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
