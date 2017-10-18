---
layout: page
title: "Q128446: Lotus ScreenCam version 1.1 Causes GP Fault in Windows NT"
permalink: kb/128/Q128446/
---

## Q128446: Lotus ScreenCam version 1.1 Causes GP Fault in Windows NT

	Article: Q128446
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Lotus ScreenCam version 1.1 under Windows NT, a general protection
	(GP) fault may occur.
	
	CAUSE
	=====
	
	ScreenCam uses unsupported methods to access Windows DLLs. These access methods
	address incorrect or non-existing memory locations under Windows NT.
	
	MORE INFORMATION
	================
	
	Lotus ScreenCam 1.1 ships with the following products:
	
	- Lotus Smart Suite
	
	- Lotus Notes
	
	- Lotus 1-2-3 for Windows
	
	- Freelance Graphics
	
	- Approach
	
	- Ami Pro
	
	- Organizer
	
	For more information, contact Lotus.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 3.10 prodnt gpf embedded OLE
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
