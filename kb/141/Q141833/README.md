---
layout: page
title: "Q141833: Performance Monitor Reports Wrong Percent of Free Disk Space"
permalink: kb/141/Q141833/
---

## Q141833: Performance Monitor Reports Wrong Percent of Free Disk Space

	Article: Q141833
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
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
	
	Performance Monitor reports the percent of free disk space incorrectly when used
	on a system with a different number of physical disks than the system where the
	workspace was originally created.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Go to a machine with one physical disk.
	
	2. Using Performance Monitor, create a workspace in the alert log.
	
	3. Add the counter %freespace to that log and make it <20% for drive 'C',
	  parent '0'.
	
	4. Save the workspace.
	
	5. Load the saved workspace in Performance Monitor on a system with two or more
	  physical drives.
	
	The % of disk space is reported as 0% instead of the correct value and the parent
	physical disk is reported as '--' instead of '0'. Performance monitor continues
	to generate event log entries at the specified interval reporting disk space at
	0%.
	
	CAUSE
	=====
	
	Performance monitor does not correctly translate workspace settings for disk
	space between two machines with a different number of physical disks.
	
	WORKAROUND
	==========
	
	Create the workspace on each machine that has a different number of physical
	disks. Performance monitor will then report correct percent of free disk space
	for that system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
