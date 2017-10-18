---
layout: page
title: "Q294440: Error Message: Operating System Was Unable to Load Your Profile"
permalink: kb/294/Q294440/
---

## Q294440: Error Message: Operating System Was Unable to Load Your Profile

	Article: Q294440
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 17-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you do not have a user profile, and you attempt to log on, you may receive
	the following error message:
	
	  The operating system was unable to load your profile. Please contact your
	  network administrator (2).
	
	CAUSE
	=====
	
	This issue can occur if the Default User profile is missing.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Log on to the computer using an account that has Administrator permissions.
	
	2. Create a folder called "Default User" in %SystemRoot%\Profiles.
	
	3. Copy the contents of the Administrator profile (if it is not in use) to the
	  Default User folder.
	
	  If the Administrator profile is in use, use any other working profile except
	  the All Users profile.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
