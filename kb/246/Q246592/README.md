---
layout: page
title: "Q246592: SMS: Tracer Tool May Cause Watched Service to Hang"
permalink: kb/246/Q246592/
---

## Q246592: SMS: Tracer Tool May Cause Watched Service to Hang

	Article: Q246592
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbtool kbsms200 kbsms200bug
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Systems Management Server Tracer tool to view log files for a
	specific Systems Management Server service, the service you are viewing may stop
	responding if logging is enabled.
	
	CAUSE
	=====
	
	The Tracer tool may cause a sharing violation error message when the service you
	are viewing attempts to open the log to insert additional entries. The service
	then enters a retry loop waiting to gain access to the log file, which
	effectively disables the service.
	
	WORKAROUND
	==========
	
	To work around this behavior, use an alternative tool to view the log files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
