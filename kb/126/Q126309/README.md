---
layout: page
title: "Q126309: WinNT 3.5 Does Not Automatically Share CD-ROM and Floppy Drives"
permalink: /kb/126/Q126309/
---

## Q126309: WinNT 3.5 Does Not Automatically Share CD-ROM and Floppy Drives

	Article: Q126309
	Product(s): Microsoft Windows NT
	Version(s): 3.5 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 3.5, 3.51 and 4.0 differ from Windows NT 3.1 in that an
	administrative shares are no longer automatically created for CD-ROM drives and
	floppy drives.
	
	MORE INFORMATION
	================
	
	Administrative shares were originally intended for backup purposes. Each
	administrative share is periodically polled by the server for the amount of free
	disk space on the volume so that the administrator can be warned if the disk is
	nearing its capacity.
	
	Because issues do not apply to CD-ROM or floppy drives, an administrative share
	is no longer created for these devices.
	
	Additional query words: prodnt cdrom admin share
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 4.0
	
	=============================================================================
	
