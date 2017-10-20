---
layout: page
title: "Q283472: SMS: Event ID 7031 Occurs When Installing Secondary Site Server"
permalink: /kb/283/Q283472/
---

## Q283472: SMS: Event ID 7031 Occurs When Installing Secondary Site Server

{% raw %}

	Article: Q283472
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbtool kbServer kbsms200 kbsms200bug kbsms200fix kbUpgrade
	Last Modified: 17-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install a secondary site server on a Windows 2000-based server that is
	also running Terminal Services in Remote Administrator mode, an event ID 7031
	message may be reported in the application event log on the computer immediately
	after you install the server. The following event description is reported:
	
	  The SMS_BOOTSTRAP service terminated unexpectedly. It has done this 1
	  time(s). The following corrective action will be taken in 0 milliseconds. No
	  action.
	
	A second, similar event message is reported when you remove the secondary site.
	These events are reported by the Service Control Manager.
	
	WORKAROUND
	==========
	
	This event message can be safely ignored. This message does not represent an
	error condition and does not impair secondary site server operation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbtool kbServer kbsms200 kbsms200bug kbsms200fix kbUpgrade 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : :2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
