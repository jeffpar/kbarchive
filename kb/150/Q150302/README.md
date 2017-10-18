---
layout: page
title: "Q150302: Overlapped I/O to Tape Results In Data Corruption"
permalink: kb/150/Q150302/
---

## Q150302: Overlapped I/O to Tape Results In Data Corruption

	Article: Q150302
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
	
	Data corruption occurs when you write data to the Windows NT 3.51 tape drivers
	using overlapped I/O. The Windows NT backup program NTBackup.exe does not
	support overlapped I/O, so this problem only affects developers writing
	third-party backup software for Windows NT.
	
	CAUSE
	=====
	
	The data corruption occurs because the tape drivers do not zero out the
	QueueSortKey in the SCSI Request Block (SRB) before submitting the SRB to the
	SCSIPort driver. As a result, random values are placed in the QueueSortKey,
	causing overlapped writes to be committed to tape out of order.
	
	RESOLUTION
	==========
	
	Change the tape drivers to set the QueueSortKey to zero before submitting write
	requests to the SCSIPort driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in <product and version>.
	This problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.51 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
