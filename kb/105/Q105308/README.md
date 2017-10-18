---
layout: page
title: "Q105308: Windows NT May Cause APC Smart UPS Battery to Discharge"
permalink: kb/105/Q105308/
---

## Q105308: Windows NT May Cause APC Smart UPS Battery to Discharge

	Article: Q105308
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Windows NT is booted, if an American Power Conversions (APC) Smart UPS is
	installed, its battery may be discharged or the UPS function may be shutdown.
	
	CAUSE
	=====
	
	During the boot sequence, Windows NT writes configuration/detection code to the
	COM Port to determine baud rate, FIFO information, and for mouse detection. The
	string written to the port may contain the letter "D," which the Smart UPS
	interprets as a command to discharge the battery. The string may also contain
	the letter "S," which will cause the Smart UPS to shutdown.
	
	The Smart UPS interprets the string incorrectly only if it has already been
	placed in the "Smart Mode" prior to starting Windows NT. The user must have
	already placed the UPS in the Smart Mode using the software supplied by American
	Power Conversions; otherwise the Smart UPS will be unaffected by the signal
	Windows NT sends to the COM Ports.
	
	RESOLUTION
	==========
	
	The Smart UPS can be used successfully by temporarily disconnecting the cable
	from the COM Port during the Windows NT boot sequence. The user can also reset
	(power off, then on) the UPS to return to the default UPS mode. NOTE: This also
	has the effect of interrupting power to the computer.
	
	
	American Power Conversions is currently working on a Windows NT driver that will
	take full advantage of the Smart UPS unit's capabilities.
	
	The Smart UPS is manufactured by American Power Conversions, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	products' performance or reliability.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
