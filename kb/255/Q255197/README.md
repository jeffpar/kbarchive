---
layout: page
title: "Q255197: Cannot Add a Printer Port, Access Violation in Spools.exe Occurs"
permalink: kb/255/Q255197/
---

## Q255197: Cannot Add a Printer Port, Access Violation in Spools.exe Occurs

	Article: Q255197
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are attempting to add LPR ports or local ports on a computer running
	Microsoft Windows NT 4.0, an access violation may occur in Spools.exe. Also,
	when you click New Port, nothing happens.
	
	CAUSE
	=====
	
	This behavior can occur when the "Allow Service to Interact with Desktop" check
	box in the Spooler service is not selected.
	
	RESOLUTION
	==========
	
	To resolve this problem, select the "Allow Service to Interact with Desktop"
	check box in the Spooler service. Follow these steps:
	
	1. Open Control Panel, and then double-click Services.
	
	2. Click the Spooler service from the list, and then click Startup.
	
	3. In the Log On As group, click System Account, and then click to select the
	  "Allow Service to Interact with Desktop" check box.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
