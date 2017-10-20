---
layout: page
title: "Q269017: Add Printer Wizard in My Computer Is Not Available"
permalink: /kb/269/Q269017/
---

## Q269017: Add Printer Wizard in My Computer Is Not Available

{% raw %}

	Article: Q269017
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to add a printer by using the Add Printer Wizard in My
	Computer, the Add Printer icon may be unavailable, and you therefore cannot use
	it to add a printer.
	
	CAUSE
	=====
	
	This behavior can occur when the Spooler service is configured to log on with a
	specific account, not as the System account.
	
	RESOLUTION
	==========
	
	To resolve this issue, configure the Spooler service to log on as the System
	account.
	
	MORE INFORMATION
	================
	
	1. In Control Panel, double-click Services.
	
	2. Select the Spooler service, and then click Startup.
	
	3. In the Log On As group, click System Account and select the Allow Service to
	  Interact with Desktop check box.
	
	4. Click OK, and then restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
