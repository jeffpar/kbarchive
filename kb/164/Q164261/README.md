---
layout: page
title: "Q164261: Ntbackup Causes Cache to Grow During Restore"
permalink: kb/164/Q164261/
---

## Q164261: Ntbackup Causes Cache to Grow During Restore

	Article: Q164261
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a restore of a big file with the Windows NT Backup tool you may see
	that the performance of the user interface and applications suffers. This
	happens in both the Restore and the Verify phase. You will see the problem with
	files bigger than physical memory.
	
	When you take a look at this in Performance Monitor, you will find that the cache
	is very large (from 50 percent to 90 percent of physical memory) and the process
	working sets have shrunk.
	
	MORE INFORMATION
	================
	
	The CreateFile API has a flag, FILE_FLAG_SEQUENTIAL_SCAN, that is especially
	useful when copying files. It tells Cache Manager not to try to increase the
	file cache when requests for this handle arrive. Hence, Memory Manager does not
	have to shrink the applications working set to accommodate the bigger cache.
	
	Although Windows NT Backup uses this flag during Backup, it does not do so in the
	Restore phase.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
