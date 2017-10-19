---
layout: page
title: "Q105273: System Hangs When Booting with IBM Token Ring RPL"
permalink: /kb/105/Q105273/
---

## Q105273: System Hangs When Booting with IBM Token Ring RPL

	Article: Q105273
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	If your system boots using a first generation RPL chip in an IBM Token Ring
	card, the system may stop responding (hang).
	
	CAUSE
	=====
	
	This problem occurs due to a timing problem between the RPL chip and the MS-DOS
	6 code used to pause the system during startup.
	
	RESOLUTION
	==========
	
	To work around this problem, upgrade to a later generation RPL chip or add the
	following command to your CONFIG.SYS file:
	
	  SWITCHES=/F
	
	If you are using MS-DOS 6.2 and DoubleSpace, you need to add the SWITCHES=/F
	command to your DBLSPACE.INI file as well. To do so, type "dblspace /switches=f"
	(without the quotation marks) at the MS-DOS command prompt and then press
	ENTER.
	
	NOTE: You need to contact the system administrator to have the CONFIG.SYS file
	updated in the RPL chip.
	
	MORE INFORMATION
	================
	
	An RPL chip is inserted in an IBM Token Ring card and provides remote boot
	ability.
	
	
	Additional query words: 6 6.00 6.20 token ring fru25f8923
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
