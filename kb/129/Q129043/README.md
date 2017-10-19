---
layout: page
title: "Q129043: Repair Fails When Mirrored Drive is Two Gigabytes or Larger"
permalink: /kb/129/Q129043/
---

## Q129043: Repair Fails When Mirrored Drive is Two Gigabytes or Larger

	Article: Q129043
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Setup to repair a mirrored partition (two gigabytes or larger) on a
	boot drive, one of the following error messages appears:
	
	  Repair information file contains an error in line 236. Setup will be unable
	  to repair this system.
	
	  -OR-
	
	  Setup cannot configure your computer to start Windows NT. This may indicate a
	  problem with the hard disk containing your C: drive or C: may be severely
	  corrupted. Setup cannot continue. Press F3 to exit.
	
	The repair process cannot complete.
	
	CAUSE
	=====
	
	This error occurs when the following conditions are met:
	
	- The boot drive is two gigabytes or larger. The partition size does not
	  matter, nor does it matter if there are single or multiple partitions on the
	  boot drive.
	
	- Windows NT is installed on the boot drive. It does not matter if it is
	  installed on the primary partition.
	
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 3.50 prodnt ft gb gigabyte gig
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	
