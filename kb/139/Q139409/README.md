---
layout: page
title: "Q139409: SFM Causes STOP 0xA on Multi-Processor DEC Alpha Computers"
permalink: /kb/139/Q139409/
---

## Q139409: SFM Causes STOP 0xA on Multi-Processor DEC Alpha Computers

	Article: Q139409
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you configure Services for Macintosh on a DEC Alpha multi-processor
	computer and reboot, the computer stops with the following error:
	
	  STOP 0x0000002E.
	
	After you configure Services for Macintosh on a DEC Alpha single-processor
	computer and reboot, Services for Macintosh fails to start, but your computer
	continues to boot.
	
	CAUSE
	=====
	
	You have a network adapter driver supporting loopback installed and the ATalk
	protocol driver incorrectly handles loopback AARP packets.
	
	The following are examples of the network drivers supporting loopback packets:
	
	  DE422
	  DE200
	  DE201
	  Microsoft Loopback driver
	
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Remove the network adapter and restart the computer.
	
	  This causes AppleTalk to fail loading, however, Windows NT starts properly.
	
	2. Log on and install the updated SFMATALK.SYS driver.
	
	3. Shut down Windows NT and turn your computer off.
	
	4. Reinstall the network adapter and reboot.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A fix
	to this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: prodnt SFMATALK.SYS fail failed ntmp
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
