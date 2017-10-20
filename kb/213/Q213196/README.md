---
layout: page
title: "Q213196: SMS: Software Metering Client Suspends Metering on Client"
permalink: /kb/213/Q213196/
---

## Q213196: SMS: Software Metering Client Suspends Metering on Client

{% raw %}

	Article: Q213196
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbClient kbsms kbsms200 kbsmsMeter
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Software Metering Client Agent suspends software metering operations on the
	client when the computer's hard disk is nearly full. This behavior is
	independent of the roll that the computer has.
	
	MORE INFORMATION
	================
	
	If the free disk space on the software metering client falls below 200 KB, the
	client suspends software metering functions without writing a log file entry.
	Once the client is in suspend mode, it checks every 60 seconds to see if the
	free disk space available has risen above 200 KB. If at least this much space
	again becomes available, the client resumes operation and writes the following
	log file entry:
	
	  
	
	  Drive space now available - Resuming Client
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbsms kbsms200 kbsmsMeter 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
