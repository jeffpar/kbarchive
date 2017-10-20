---
layout: page
title: "Q96562: Running Windows 3.1 with Advanced Power Management Systems"
permalink: /kb/096/Q96562/
---

## Q96562: Running Windows 3.1 with Advanced Power Management Systems

{% raw %}

	Article: Q96562
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When POWER.EXE is loaded on advanced power management (APM) machine, the Windows
	Power Control Panel may show incorrect information.
	
	CAUSE
	=====
	
	This problem occurs when you are running Windows 3.1 on a system with BIOS chips
	that support APM, and Windows 3.1 is not configured for APM.
	
	RESOLUTION
	==========
	
	To correct this problem, run Windows Setup from your Windows 3.1 disks and
	select MS-DOS System With APM as the computer type.
	
	This allows Windows power management services to take over power management from
	POWER.EXE. On computers without APM support, you can safely run POWER.EXE with
	Windows.
	
	Additional query words: 6.22 6.00 3.10 win31 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
