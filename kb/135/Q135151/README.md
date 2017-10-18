---
layout: page
title: "Q135151: PCMCIA Devices Not Activated When Resuming Dell Latitude XP"
permalink: kb/135/Q135151/
---

## Q135151: PCMCIA Devices Not Activated When Resuming Dell Latitude XP

	Article: Q135151
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
	
	When you use the Suspend command on a Dell Latitude XP laptop computer connected
	to a port replicator, PCMCIA devices may not reactivate when you resume the
	system.
	
	CAUSE
	=====
	
	This problem can occur if the computer contains a BIOS version of A05 or
	earlier. BIOS versions A05 and earlier do not send an Advanced Power Management
	(APM) resume event to reenumerate PCMCIA devices when the computer is connected
	to a port replicator.
	
	RESOLUTION
	==========
	
	To avoid this problem, do not use the Suspend command when the computer is
	connected to a port replicator.
	
	To resolve the problem, please contact Dell Technical Support to inquire about
	obtaining an updated BIOS.
	
	
	Additional query words: docking
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
