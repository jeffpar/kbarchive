---
layout: page
title: "Q171768: WinNT Err: Registry Structure Not Set Properly"
permalink: /kb/171/Q171768/
---

## Q171768: WinNT Err: Registry Structure Not Set Properly

	Article: Q171768
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you check the Log Settings in the Event Viewer you may receive the
	following error message:
	
	  Registry Structure is not set Properly
	
	In addition, you may also receive the error message:
	
	  System | Application | Security Event Log is full.
	
	CAUSE
	=====
	
	Registry corruption is usually the cause for this error message.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	1. Use an updated Emergency Repair Disk (ERD) and choose to inspect registry
	  files then choose to replace SYSTEM configuration.
	
	  For additional information on using the ERD, please see the following
	  Microsoft Knowledge Base articles:
	
	  Q156328 Description of Windows NT Emergency Repair Disk
	
	  Q103280 Using an Emergency Repair Disk Created by Windows NT
	
	  Q113976 Using Emergency Repair Disk With Fault Tolerant Partitions
	
	2. If there is no current ERD, try the repair process search for the Repair
	  information. Otherwise, a tape restore containing a recent backup of the
	  registry will be needed to restore the SYSTEM hive.
	
	
	Additional query words: corrupted logs eventviewer
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
