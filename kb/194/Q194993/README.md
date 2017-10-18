---
layout: page
title: "Q194993: Calling Card Settings Ignored by Phone Dialer"
permalink: kb/194/Q194993/
---

## Q194993: Calling Card Settings Ignored by Phone Dialer

	Article: Q194993
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT 4.0 Phone Dialer tool may not use the calling card settings as
	defined in the Telephony tool in Control Panel.
	
	CAUSE
	=====
	
	This behavior can occur if you have selected Canada in the "I am in this
	country/region" box.
	
	RESOLUTION
	==========
	
	Set the country/region to United States Of America. To do so, follow these
	steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Telephony.
	
	3. In the "I am in this country/region" box, click United States Of America.
	
	4. Click OK.
	
	
	MORE INFORMATION
	================
	
	Note that this is an issue only with Phone Dialer. This does not occur with
	Dial-Up Networking or other TAPI-based programs.
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
