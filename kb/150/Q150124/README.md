---
layout: page
title: "Q150124: Cannot Access CD-ROM After Installing SP4"
permalink: /kb/150/Q150124/
---

## Q150124: Cannot Access CD-ROM After Installing SP4

	Article: Q150124
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You are unable to access the CD-ROM drive after installing Service Pack 4.
	Windows NT reports ATAPI driver load fail.
	
	You may get the following event message 3 times:
	
	  Event ID: 15
	  Source: ATAPI
	  Description: The device, \device\scsiport0 is not ready for access yet.
	
	CAUSE
	=====
	
	This is caused by code changes in the ATAPI driver.
	
	
	WORKAROUND
	==========
	
	To obtain access to the CD-ROM drive you must install the old (original) ATAPI
	driver, which can be found on the Windows NT Setup Disk #3.
	
	STATUS
	======
	
	This problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt qfe sp ide
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
