---
layout: page
title: "Q164901: SMS: Inventory DLL Fails to Update After Upgrade from SMS 1.1"
permalink: kb/164/Q164901/
---

## Q164901: SMS: Inventory DLL Fails to Update After Upgrade from SMS 1.1

	Article: Q164901
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory kbMaintMan smsinv smsmaintmankbfixlist
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade a Systems Management Server site server from Systems Management
	Server version 1.1 to version 1.2, the Systems Management Server Maintenance
	Manager server fails to update the _invwn32.dll file in the site server's
	SMS\Logon.srv\<Platform>.bin\00000409 directory.
	
	CAUSE
	=====
	
	This problem occurs because the _invwn32.dll file is never unloaded from memory.
	Because the file is always in use, the service is unable to update it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server version 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbInventory kbMaintMan smsinv smsmaintman kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
