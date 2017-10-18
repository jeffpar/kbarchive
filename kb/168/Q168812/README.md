---
layout: page
title: "Q168812: Dr Watson Exception Violation C0000005 Occurs After Install SP3"
permalink: kb/168/Q168812/
---

## Q168812: Dr Watson Exception Violation C0000005 Occurs After Install SP3

	Article: Q168812
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT 4.0 Service Pack 3 you may get a Dr. Watson error
	in Spools.exe and Services.exe. The error message occurs after you log on to the
	computer. It can also cause the system to stop responding before logging on.
	This, and several other error messages, can be attributed to Starfish Internet
	monitoring agent that installs a file called Nmsocknt.dll.
	
	CAUSE
	=====
	
	Nmsocknt.dll makes calls to User32.dll, Kernel32.dll, and Wsock32.dll that
	effectively stops all networking services.
	
	RESOLUTION
	==========
	
	Rename the Nmsocknt.dll found in the %SystemRoot% directory to Nmsocknt.xxx. You
	must perform this at a command prompt because Windows NT Explorer will display
	an access violation. Then shutdown and restart your Windows NT computer to
	resume normal operation.
	
	MORE INFORMATION
	================
	
	The third-party product discussed here is manufactured by Starfish Software, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Please contact http://starweb.starfishsoftware.com/products/iu97/iu97 for further
	updates.
	
	
	Additional query words: Windows NT SP3 Starfish Dr.Watson C0000005 nmsocknt.dll
	
	======================================================================
	Keywords          : kb3rdparty kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
