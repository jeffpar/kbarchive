---
layout: page
title: "Q226838: SMS: Online Client Does Not Release Original License"
permalink: kb/226/Q226838/
---

## Q226838: SMS: Online Client Does Not Release Original License

	Article: Q226838
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms kbsms200 kbsms200bug
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a software metering server is not available and the online client switches
	to the next available server, the original license still remains in use. An
	additional license is allocated on the second, available server, and it is this
	server that releases the license when the product is closed. The first server
	still responds as if the license is in use long after the system has
	re-established contact.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	
