---
layout: page
title: "Q139737: STOP 0xC0000221 After Upgrading to SP3 on Compaq Proliant"
permalink: kb/139/Q139737/
---

## Q139737: STOP 0xC0000221 After Upgrading to SP3 on Compaq Proliant

	Article: Q139737
	Product(s): Microsoft Windows NT
	Version(s): 3.10
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After applying Windows NT 3.1 Service Pack 3, the following STOP message appears
	on Compaq Proliant computers:
	
	  STOP: 0xC0000221
	  UNKNOWN_HARD_ERROR
	
	CAUSE
	=====
	
	This problem occurs if you install Compaq Support Software Diskette (SSD)
	updates before you install Windows NT 3.1 Service Pack 3, your computer uses the
	4mmdat.sys driver, and you do not reinstall the Compaq SSD update after you
	install Windows NT 3.1 Service Pack 3.
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- Gain access to the Windows NT installation from MS-DOS or other means, and
	  replace the 4mmdat.sys file with the one from the original distribution
	  media.
	
	- Try using the emergency repair disk (ERD) the you created before you
	  installed the service pack.
	
	- Try to install Windows NT over the existing installation to go back to
	  Windows NT 3.1. Then install the service pack and Compaq SSD.
	
	- Install Windows NT into a new directory to you can run Windows NT and restore
	  the old installation from tape.
	
	Compaq recommends that you install SSD 1.05b after you install Windows NT 3.1
	Service Pack 3 to avoid this stop message.
	
	For more information on Compaq SSDs or compatibility with Microsoft Windows NT
	service packs, contact Compaq Technical Support at (800) 652-6672.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search kbWinNTW310Search
	Version           : 3.10
	
	=============================================================================
	
