---
layout: page
title: "Q235206: SMS: BackOffice Resource Kit 4.5 Lists Incorrect File Locations"
permalink: /kb/235/Q235206/
---

## Q235206: SMS: BackOffice Resource Kit 4.5 Lists Incorrect File Locations

	Article: Q235206
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbdocerr kbClient kbServer kbsms200 kbsms200bug
	Last Modified: 28-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft BackOffice 4.5 Resource Kit Books Online incorrectly documents the
	location of the Hardware Inventory Agent log (Hinv.log) file and the Client
	Component Installation Manager log (Ccim.log) file. The Microsoft BackOffice 4.5
	Resource Kit Books Online incorrectly list these files as residing on the site
	server in the \Sms\Logs folder.
	
	WORKAROUND
	==========
	
	To work around this issue, note that the Hinv.log and Ccim.log files actually
	reside on client computers in the Windows\Ms\Sms\Logs folder.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbdocerr kbClient kbServer kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
