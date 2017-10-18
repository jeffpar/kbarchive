---
layout: page
title: "Q201003: RRAS Services Do Not Start Correctly with Kixtart"
permalink: kb/201/Q201003/
---

## Q201003: RRAS Services Do Not Start Correctly with Kixtart

	Article: Q201003
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP3 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you restart a computer running Microsoft Windows NT Server 4.0 Service Pack
	3 with Routing and Remote Access Service (RRAS), RRAS does not automatically
	start. Error messages 711 and 20054 are displayed in the event log, and you may
	see a screen that pertains to the Rasman.dll service.
	
	CAUSE
	=====
	
	This behavior may occur if you run Kixtart 3.40 from a logon script.
	
	RESOLUTION
	==========
	
	To resolve this problem, use Kixtart 3.48 or later. You can also manually start
	RRAS using the Services tool in Control Panel.
	
	STATUS
	======
	
	Kixtart is aware of the problem, which occurs only in version 3.40.
	
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp3 kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : winnt:4.0,4.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	
