---
layout: page
title: "Q157679: SMS: Logon Servers Inventoried Under Wrong Domain"
permalink: kb/157/Q157679/
---

## Q157679: SMS: Logon Servers Inventoried Under Wrong Domain

	Article: Q157679
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbConfig kbInventory kbSCMan smssetup smsinv smsconfig smssiteconfigm
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When a new domain is added to a site and the Use Detected Servers option is used,
	the Logon Server's inventory will mistakenly show that it belongs to the site
	server's domain instead of its own.
	
	CAUSE
	=====
	
	This problem is caused by the Microsoft Systems Management Server Site
	Configuration Manager passing the wrong domain during the new logon server's
	client setup process.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.2. This problem has been corrected in the latest U.S. Service
	Pack for Systems Management Server version 1.2. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	Additional query words: prodsms sms inventory
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbConfig kbInventory kbSCMan smssetup smsinv smsconfig smssiteconfigman 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	
