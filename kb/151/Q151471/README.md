---
layout: page
title: "Q151471: Processes Do Not Respond When NTFS Encounters an Error"
permalink: kb/151/Q151471/
---

## Q151471: Processes Do Not Respond When NTFS Encounters an Error

	Article: Q151471
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under stress conditions, such as during remote backup, the Windows NT file
	system (NTFS) may fail to unlock a file or directory control block. Any
	processes accessing the NTFS volume that the control block is on may continue to
	run in a reduced functional state or they may stop responding.
	
	CAUSE
	=====
	
	When checking the compressed state of a file or directory, an error is
	encountered, and NTFS does not unlock the file or directory control block.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: 3.51 prodnt hang hangs freezes cheyenne arcserve backup hanging
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
