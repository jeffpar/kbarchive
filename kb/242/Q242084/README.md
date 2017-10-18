---
layout: page
title: "Q242084: STOP 0xC0000244 Error Message When Browsing PDC"
permalink: kb/242/Q242084/
---

## Q242084: STOP 0xC0000244 Error Message When Browsing PDC

	Article: Q242084
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to browse a primary domain controller (PDC), you may receive a STOP
	0xC0000244 error message.
	
	CAUSE
	=====
	
	This behavior can occur when the PDC is set to audit logon security and the
	event logs have become full.
	
	RESOLUTION
	==========
	
	To resolve this issue, set the event log on the PDC to Overwrite Events As
	Needed:
	
	1. Start Event Viewer.
	
	2. On the Log menu, click Log Settings.
	
	3. In the Change Settings for list, click the appropriate log type.
	
	4. Click Overwrite Events as Needed, and then click OK.
	
	Additional query words: nt 4.0 blue screen stop 0xC0000244
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
