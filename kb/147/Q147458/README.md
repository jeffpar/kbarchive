---
layout: page
title: "Q147458: End of Media Crossing During Windows NT Tape Backup"
permalink: /kb/147/Q147458/
---

## Q147458: End of Media Crossing During Windows NT Tape Backup

	Article: Q147458
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Windows NT backup program Ntbackup.exe stops responding while spanning
	tapes, just after you insert a new tape. This can occur when you are performing
	either a differential or a full tape backup.
	
	CAUSE
	=====
	
	The tape backup is hitting the end of media. Fixing this would require fixing
	the contents of the catalog. The problem is not specific to any tape drive
	hardware, but is effected by the data backed up.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
