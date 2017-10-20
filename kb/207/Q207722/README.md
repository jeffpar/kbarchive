---
layout: page
title: "Q207722: SMS: Retaining Status Summaries After Advertisement Done"
permalink: /kb/207/Q207722/
---

## Q207722: SMS: Retaining Status Summaries After Advertisement Done

{% raw %}

	Article: Q207722
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbStatSum
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you delete an advertisement, the status summary for the advertisement is
	also deleted. This prevents a build-up of obsolete status summaries. However,
	you may want to maintain the status summaries after you are done using the
	advertisement for a variety of reasons, such as:
	
	- You expect status information to continue to arrive from child sites.
	
	- You want to collect status information on advertisements over time.
	
	- The advertisement was a pilot project, and you want to analyze the summary
	  data as you plan the full rollout.
	
	MORE INFORMATION
	================
	
	To stop an advertisement but maintain the status summary for the advertisement,
	do either of the following:
	
	- Set the expiration time for the advertisement to a time in the past, as
	  follows:
	
	  1. Open the SMS Administrator console and expand Site Database. Then expand
	     Advertisements.
	
	  2. Right-click the advertisement you want to modify, and then click
	     Properties on the shortcut menu.
	
	  3. Click the Schedule tab.
	
	  4. Set the Advertisement Will Expire to a time in the past. As little as a
	     minute before the present is sufficient.
	
	  The advertisement and its status summary continue to exist but the
	  advertisement no longer runs on clients.
	
	- Disable the program, as follows:
	
	  1. Open the SMS Administrator console and expand Site Database. Then expand
	     Packages, expand the package you want to modify, and expand Programs.
	
	  2. Right-click the program you want to modify, and then click Properties on
	     the shortcut menu.
	
	  3. Click the Advanced tab.
	
	  4. Select the Disable this program on computers where it is advertised
	     checkbox.
	
	  This prevents any advertisement from running the program. The advertisement
	  and its status summary continue to exist in the Administrator Console, but
	  the advertisement for the program no longer runs on clients.
	
	Additional query words: prodsms smsstat
	
	======================================================================
	Keywords          : kbsms200 kbStatSum 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
