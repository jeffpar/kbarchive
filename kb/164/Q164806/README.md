---
layout: page
title: "Q164806: CHKNTFS Does Not Exclude FAT Partitions from AUTOCHK on Boot"
permalink: kb/164/Q164806/
---

## Q164806: CHKNTFS Does Not Exclude FAT Partitions from AUTOCHK on Boot

	Article: Q164806
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusagekbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The CHKNTFS /x command does not exclude AUTOCHK from running on FAT partitions.
	
	RESOLUTION
	==========
	
	Use the updated Chkntfs.exe from Service Pack 3 to disable AUTOCHK on FAT
	partitions at restart.
	
	The following command now signifies the partition as being FAT when run against a
	FAT partition:
	
	  CHKNTFS /x DRIVE:
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Chkntfs.exe is a utility included in Service Pack 2 that can be used to schedule
	and stop the running of AUTOCHK on a partition during startup.
	
	The original intent of CHKNTFS was to exclude only the NTFS volumes. (FAT volumes
	are small and do not take very long to check compared to large NTFS volumes.)
	
	Additional query words: prodnt chkdsk
	
	======================================================================
	Keywords          : kbusage kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
