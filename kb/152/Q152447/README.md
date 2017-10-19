---
layout: page
title: "Q152447: WINMSD Reports Incorrect Free Space on 4.1-GB NTFS Volume"
permalink: /kb/152/Q152447/
---

## Q152447: WINMSD Reports Incorrect Free Space on 4.1-GB NTFS Volume

	Article: Q152447
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If you create a 4.1-gigabyte (GB) Windows NT File System (NTFS) volume on a
	computer running Windows NT 3.51, the WINMSD utility drive details section
	incorrectly reports the free space on a volume that is 4.1 GB or greater.
	
	NOTE: This problem is also likely to occur in Windows NT 3.51; however, Microsoft
	has not tested this.
	
	MORE INFORMATION
	================
	
	The drive details section of WINMSD calculates the free, used, and total space
	of the volume as 32-bit integers. This causes the numbers to "wrap around" when
	the volume size is larger than 4.099 GB in size. This causes the reported space
	of the volume to be smaller than the actual space available. The reported space
	will be the difference between 4.099 GB and the actual space available on the
	volume.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available. This problem has been resolved in
	Windows NT version 4.0
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.5 3.51
	
	=============================================================================
	
