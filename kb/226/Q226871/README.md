---
layout: page
title: "Q226871: SMS: SWMServer Clock Displays Counter with a Negative Number"
permalink: /kb/226/Q226871/
---

## Q226871: SMS: SWMServer Clock Displays Counter with a Negative Number

	Article: Q226871
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms kbsms200 kbsms200bug
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Software Metering console Live Status window, the application
	that is started will show a counter of -37 seconds.
	
	WORKAROUND
	==========
	
	To work around this problem, synchronize both servers to the same time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	This happens when the software metering server's time setting is ahead of the
	site server's setting. If you advance the software metering server clock, this
	creates a larger negative number.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	
