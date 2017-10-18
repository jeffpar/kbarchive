---
layout: page
title: "Q132886: Compaq Screen Does Not Wake Up After EnergyStar Shutdown"
permalink: kb/132/Q132886/
---

## Q132886: Compaq Screen Does Not Wake Up After EnergyStar Shutdown

	Article: Q132886
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to "wake up" your computer after Advanced Power Management (APM)
	has shut down the screen, the screen may remain in sleep mode. To re-activate
	the screen you must turn the computer off and back on.
	
	CAUSE
	=====
	
	This problem can occur with Compaq computers using the Cirrus Logic 54xxx video
	chip set because of a conflict between APM and the computer's BIOS.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following methods:
	
	- Do not enable APM in the computer's CMOS settings.
	
	- Do not inform Windows 95 that the monitor is EnergyStar compliant.
	
	- Disable APM in Device Manager in Windows 95.
	
	- Contact Compaq about obtaining a BIOS upgrade.
	
	MORE INFORMATION
	================
	
	The following computers are known to exhibit this problem:
	
	- Compaq Presario 520
	
	- Compaq Presario 522
	
	- Compaq Presario 524
	
	- Compaq Presario 526
	
	- Compaq Presario 528
	
	- Compaq Prolinea 466
	
	NOTE: These computers do not have a flash (programmable) BIOS, so the BIOS
	chip(s) must be replaced. To perform this task, please contact Compaq Technical
	Support.
	
	
	Additional query words: energy star
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
