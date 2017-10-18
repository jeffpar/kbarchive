---
layout: page
title: "Q96560: POWER.EXE and Advanced Power Management (APM) Support"
permalink: kb/096/Q96560/
---

## Q96560: POWER.EXE and Advanced Power Management (APM) Support

	Article: Q96560
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
	
	You can install the Power program (POWER.EXE) even if your BIOS does not support
	the Advanced Power Management (APM) specification. After you install POWER.EXE
	in the CONFIG.SYS file, the POWER command (without any switches) provides status
	information.
	
	On systems without APM support, POWER displays the following:
	
	  Power Management Status
	  -----------------------
	  Setting = ADV:REG
	  CPU: idle 90% of the time
	
	On systems with APM support, POWER displays the following additional information
	reported by the BIOS:
	
	  Power Management Status
	  -----------------------
	  Setting = ADV:REG
	  CPU: idle 90% of the time
	  AC Status: OFFLINE
	  Battery status: High
	  Battery life (%): 90
	
	MORE INFORMATION
	================
	
	POWER.EXE detects whether your system has an APM-compliant BIOS and then adapts
	accordingly.
	
	When POWER.EXE detects that your system is idle, it saves power by issuing a CPU
	HALT instruction. HALT stops CPU execution until the next hardware interrupt
	occurs (this is usually the timer interrupt, which occurs 52 times per second).
	On systems without an APM-compliant BIOS, testing reveals a 5% power savings.
	
	If your system has an APM-compliant BIOS, POWER.EXE communicates with the BIOS.
	Depending on the frequency of the idle signals from POWER, the APM-compliant
	BIOS can save power by shutting down the display or hard disk, switching the
	processor to a slower speed, or suspending the system entirely.
	
	
	Additional query words: 6.22 6.00 five percent 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
