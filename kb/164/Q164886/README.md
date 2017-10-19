---
layout: page
title: "Q164886: SMS: Invdos.exe Fails to Set the Resync Flag"
permalink: /kb/164/Q164886/
---

## Q164886: SMS: Invdos.exe Fails to Set the Resync Flag

	Article: Q164886
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinvkbfixlist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The 16-bit Inventory Agent (Invdos.exe) does not set the resynchronization
	(resync) flag when reporting inventory if there has been a site or domain
	change, or if the /F switch (which forces full inventory to be reported) is
	used.
	
	WORKAROUND
	==========
	
	To work around this problem, delete the history file that corresponds to the
	computers Systems Management Server Unique ID. This file is located in the
	SMS\Site.srv\Inventry.box\History directory on the Systems Management Server
	site server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server version 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms invdos raw mif
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
