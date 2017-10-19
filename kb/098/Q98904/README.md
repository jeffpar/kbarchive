---
layout: page
title: "Q98904: Power and Advanced Power Management May Suspend Defrag Process"
permalink: /kb/098/Q98904/
---

## Q98904: Power and Advanced Power Management May Suspend Defrag Process

	Article: Q98904
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Although Microsoft Defragmenter (Defrag) sorts directories and files, no
	detectable system activity occurs while Defrag is running. The Power and
	Advanced Power Management (APM) utilities may assume the system is idle and
	therefore suspend the system. Pressing the ESC key causes an interrupt, making
	the system resume its activities.
	
	MORE INFORMATION
	================
	
	Defrag does not query for currently active Power or APM services. If the system
	goes into an idle state while Defrag is running, you should press the ESC key.
	Do NOT reboot or turn the machine off; doing so can lead to data corruption.
	
	To prevent Power from interrupting Defrag, disable Power and APM services before
	running Defrag. Microsoft recommends that you run your laptop computer from an
	AC outlet when you run Defrag.
	
	Additional query words: 6.22 6.00 6.20 power.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
