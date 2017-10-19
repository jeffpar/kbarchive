---
layout: page
title: "Q130783: STOP Msg: 0x0000003F NO_MORE_SYSTEMS_PTES Repetitive I/O on MIPS"
permalink: /kb/130/Q130783/
---

## Q130783: STOP Msg: 0x0000003F NO_MORE_SYSTEMS_PTES Repetitive I/O on MIPS

	Article: Q130783
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform repetitive reads and writes to your floppy disk on a MIPS
	computer, the STOP Message appears:
	
	  STOP: 0x0000003F 0x00000000,0x00000000,0x00000000,0x00000000)
	  NO_MORE_SYSTEMS_PTES
	
	CAUSE
	=====
	
	During repetitive floppy disk I/O, the Memory Descriptor List (MDL) becomes
	corrupted and supplies erroneous information leading Windows NT to believe that
	no more Page Table Entries (PTES) exist.
	
	
	NOTE: You can observe the decrease in PTES on the system during the floppy disk
	I/O by monitoring the counter "Free System Page Table Entries" for the Memory
	object in Performance Monitor.
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade to Windows NT 3.51 (if you have not already
	done so) and install the latest U.S. Service Pack for Windows NT version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem has been corrected in the latest U.S. Service Pack for
	Windows NT version 3.51. For information on obtaining the Service Pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: nec express risc server r96
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
