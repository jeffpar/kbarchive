---
layout: page
title: "Q232573: SMS: Logon Discovery in Multiple-Site Environments"
permalink: kb/232/Q232573/
---

## Q232573: SMS: Logon Discovery in Multiple-Site Environments

	Article: Q232573
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 26-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a Systems Management Server (SMS) hierarchy that contains several sites
	managing a single Microsoft Windows NT domain, you should enable Logon Discovery
	on only one site.
	
	When a Logon Point receives a Data Discovery Record (DDR), it replicates that DDR
	to all site servers that manage the domain.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	To ensure that SMS does not create network saturation issues, disable Network
	Logon Discovery for all but one site in the hierarchy. When you are using
	Windows Network Logon Discovery in a multiple-site environment, this can cause a
	great deal of network traffic. Symptoms of network saturation include slow
	network response and possibly Error 53 ("The network path is not found") error
	messages.
	
	Additional query words: prodsms smstshoot disc tshoot bandwith network problems
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
