---
layout: page
title: "Q94332: System Restarts When DoubleSpace Commands Are Issued"
permalink: /kb/094/Q94332/
---

## Q94332: System Restarts When DoubleSpace Commands Are Issued

{% raw %}

	Article: Q94332
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	If DBLSPACE /RATIO or other DoubleSpace commands cause the system to restart,
	load DBLSPACE.SYS before your network drivers in the CONFIG.SYS file.
	
	
	MORE INFORMATION
	================
	
	Setup installs DBLSPACE.SYS before any network drivers, so this problem should
	not occur unless you have moved the DBLSPACE.SYS driver in the CONFIG.SYS file.
	
	Additional query words: 6.00 6.20 Autoreboot reboot warmboot coldboot cold warm boot re-boot re-start
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
