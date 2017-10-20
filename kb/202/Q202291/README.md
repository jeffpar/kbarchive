---
layout: page
title: "Q202291: SMS: Remote Control Agent Takes Heavy CPU Use If Logging Enabled"
permalink: /kb/202/Q202291/
---

## Q202291: SMS: Remote Control Agent Takes Heavy CPU Use If Logging Enabled

{% raw %}

	Article: Q202291
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug
	Last Modified: 09-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT clients may notice slow response to their desktop when the SMS 2.0
	Remote Control Agent has been set up to do detailed logging to file. Turning on
	detailed-level logging for the Remote Control Agent uses significant CPU
	cycles.
	
	Note: This level of logging is not turned on by default. The default level of
	logging for the Remote Control Agent does not impact system performance.
	
	WORKAROUND
	==========
	
	Turn on logging to the Remote Control Agent only for troubleshooting purposes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	For additional information about expected CPU utilization during a remote
	control session, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q198635 SMS: Expected CPU Utilization During a Remote Control Session
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
