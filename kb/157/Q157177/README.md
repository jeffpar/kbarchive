---
layout: page
title: "Q157177: Server Takes a Very Long Time to Shut Down"
permalink: kb/157/Q157177/
---

## Q157177: Server Takes a Very Long Time to Shut Down

	Article: Q157177
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbdisplay
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It takes a very long time for Windows NT 3.51 or Windows NT 3.51 with Service
	Pack 4 to shut down (up to 30 minutes has been observed). This will happen even
	with all the running services stopped manually prior to shut down. This problem
	was observed on a Compaq Proliant 4500R with Pentium 166 processor and with an
	on-board video adapter with Cirrus Logic chip set running the Compaq OEM version
	of Microsoft Windows NT 3.51 and the Compaq OEM version of Service Pack 4 for
	Microsoft Windows NT 3.51.
	
	CAUSE
	=====
	
	The OEM version of Microsoft Service Pack 4 for Windows NT 3.51, included in the
	Compaq OEM version of Microsoft Windows NT 3.51 compact disc licensed to Compaq,
	does not include the latest drivers for video adapters with the Cirrus Logic
	chip set.
	
	The Cirrus.sys driver included with Service Pack 4 with the Compaq OEM version of
	Microsoft Windows NT 3.51 compact disc has the following size and date:
	
	  cirrus.sys        29152    9/15/95
	
	The Cirrus.sys driver from Service Pack 4 for Microsoft Windows NT 3.51
	downloaded from the Microsoft FTP server has the following size and date:
	
	  cirrus.sys        30432    3/6/96 or later
	
	RESOLUTION
	==========
	
	Rename the <winntroot>\system32\drivers\cirrus.sys file and copy the
	Cirrus.sys file with the different size and date from Service Pack 4 downloaded
	from the Microsoft FTP server.
	
	Additional query words: shutdown shut down prodnt cirrus
	
	======================================================================
	Keywords          : kbdisplay 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
