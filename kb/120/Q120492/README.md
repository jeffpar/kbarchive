---
layout: page
title: "Q120492: Periodic Polling Causes Problems with Removable Media"
permalink: /kb/120/Q120492/
---

## Q120492: Periodic Polling Causes Problems with Removable Media

	Article: Q120492
	Product(s): Microsoft Windows NT
	Version(s): 3.10
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10
	
	WINDOWS
	
	kbhw kbbug3.10 kbfix3.10.sp3
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Removable storage media (for example, CD Juke Box or tapes) may be damaged or
	get stuck in the drive or changer mechanism.
	
	CAUSE
	=====
	
	In Windows NT 3.1, the Server Service periodically polls all drives for
	available free space and logs an event if drive space is low.
	
	
	On removable media drives, this polling can cause a conflict with the disk or
	cartridge drive/changer. If the changer is ejecting the cartridge when a
	periodic poll is received, the conflict may damage the tape or CD, or jam the
	tape cartridge or CD in the unit.
	
	RESOLUTION
	==========
	
	To correct this behavior Microsoft has modified the Windows NT Server Service
	(SRVSVC.DLL) to only poll fixed disks. Removable media, CD-ROMs, and RAM disks
	are not polled. The new Server Service no longer creates an x$ administrative
	share (where "x" is the media drive letter) for removable media drives.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in Windows NT
	Workstation and Windows NT Server version 3.5. This problem has also been
	corrected in the latest U.S. Service Pack for Windows NT and Windows NT Advanced
	Server version 3.1. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt 3.10 robot optical
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10
	
	=============================================================================
	
