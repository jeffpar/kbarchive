---
layout: page
title: "Q213279: SMS: Component Status Summarizer Does Not Clear Daily Buckets"
permalink: kb/213/Q213279/
---

## Q213279: SMS: Component Status Summarizer Does Not Clear Daily Buckets

	Article: Q213279
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
	
	After you have corrected the date and time on a site server (the site server was
	previously set to a future date), you notice that statistics for site components
	do not correspond to actual events.
	
	CAUSE
	=====
	
	The information contained in the site server's daily status buckets was created
	at the time when the server was incorrectly set to a future date and time. The
	Status Summarizers determine when the site server was last running by scanning
	the data store for the latest LastContacted field, and the Status Summarizers
	use this value for a starting point to determine if counters need to be cleared.
	Because this time is in the future and not in the past, the tallies are not
	cleared.
	
	WORKAROUND
	==========
	
	To work around this issue, wait for each future date threshold to be crossed, at
	which time, the buckets are zeroed and the statistics become accurate again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For a variety of reasons, it is important to maintain consistent date and times
	on your Systems Management Server site servers, as well as on all clients.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	
