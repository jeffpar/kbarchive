---
layout: page
title: "Q213261: SMS: Software Metering Usage Is Not Reported for Some Clients"
permalink: /kb/213/Q213261/
---

## Q213261: SMS: Software Metering Usage Is Not Reported for Some Clients

	Article: Q213261
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Software Metering summary window in the Systems Management Server
	Administrator Console does not show software usage for some clients.
	
	CAUSE
	=====
	
	When the Systems Management Server client software for software metering is
	installed on a client, and the date and time on the client is significantly
	behind (earlier than) the current date and time of the site server, the client's
	Software Metering Agent does not upload offline software usage logs to the
	Software Metering server.
	
	WORKAROUND
	==========
	
	To work around this behavior, follow these steps:
	
	1. Remove the Systems Management Server software from the client.
	
	For additional information about removing Systems Management Server software from
	a client, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q199078 SMS: How to Remove a Systems Management Server 2.0 Client
	
	2. Synchronize the client date and time with the site server's date and time.
	
	3. Reinstall the Systems Management Server software on the client computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	
	=============================================================================
	
