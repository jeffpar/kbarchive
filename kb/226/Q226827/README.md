---
layout: page
title: "Q226827: SMS: Offline Software Metering Server May Affect Client Behavior"
permalink: kb/226/Q226827/
---

## Q226827: SMS: Offline Software Metering Server May Affect Client Behavior

	Article: Q226827
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
	
	You experience an abnormal number of product denials when one or more of your
	software metering servers is unavailable on the network for a brief period of
	time. You may also notice an imbalance of licenses on your site if software
	metering servers remain unavailable during a license balancing cycle. You may
	also notice a performance degradation on the client computer when no software
	metering server is available.
	
	CAUSE
	=====
	
	The software metering client attempts to communicate with its current server,
	but the communication fails. Instead of retrying the connection for the number
	of times configured on your site server, the client immediately looks for
	another available software metering server. Product denials may result, until
	the next license balancing cycle. When the software metering server that the
	client could not reach again becomes available, a license imbalance occurs.
	
	Further, if a client is unable to communicate with any software metering server,
	it continues trying until a software metering server responds.
	
	
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
	
