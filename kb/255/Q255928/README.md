---
layout: page
title: "Q255928: &quot;STOP 0x1e&quot; After Installing Norton AntiVirus Updates"
permalink: /kb/255/Q255928/
---

## Q255928: &quot;STOP 0x1e&quot; After Installing Norton AntiVirus Updates

	Article: Q255928
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install a Symantec Norton AntiVirus updated driver, you may receive
	any of the following error messages on a blue screen:
	
	  0000001e : c0000005 00000085 00000000 00000085
	
	  0000001e : c0000005 f1145494 00000000 0000013c
	
	Note that the parameters in the error message may vary.
	
	CAUSE
	=====
	
	This behavior can occur if you install an updated driver with the following time
	stamp:
	
	  File name     Time stamp
	  --------------------------------------
	  Navex15.sys   Mon Feb 14 15:22:04 2000
	
	RESOLUTION
	==========
	
	Symantec recommends that you revert to an earlier version of the driver or
	install a later version from Symantec.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
