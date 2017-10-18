---
layout: page
title: "Q226823: SMS: Product Callback Messages May Result in Further Product Den"
permalink: kb/226/Q226823/
---

## Q226823: SMS: Product Callback Messages May Result in Further Product Den

	Article: Q226823
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms kbsms200 kbsms200bug
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you receive a callback on a product that was initially denied, you are
	presented with another denial message on the software metering client.
	
	
	WORKAROUND
	==========
	
	This behavior is related to the number of times the license metering service has
	been run on the site server. This problem will no longer occur following a site
	server cycle (15 minutes) after the initial denial message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	
