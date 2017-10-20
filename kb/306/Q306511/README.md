---
layout: page
title: "Q306511: SMS: Advertisements Set for Next Logon Run Immediately"
permalink: /kb/306/Q306511/
---

## Q306511: SMS: Advertisements Set for Next Logon Run Immediately

{% raw %}

	Article: Q306511
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbenv kbtool kbui kbsms200 kbsms200bug
	Last Modified: 20-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you schedule an advertisement for a package with a dependency and the
	advertisement is scheduled to run at the next logon, this process works
	correctly. However, if before the next logon, another advertisement (which might
	be totally unrelated to the first advertisement) is sent to the same computer
	and is started before the first advertisement starts (because the computer has
	not yet been restarted), the second advertisement runs normally. After this
	occurs, the advertisement that is scheduled for the next logon will incorrectly
	start even though a new logon has not yet happened. This occurs even though
	advertisements should run according to the schedule that is set when the
	advertisement is configured.
	
	CAUSE
	=====
	
	This problem is caused by the trigger list for Advertised Program Manager being
	incorrectly re-evaluated when the second advertisement starts.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbtool kbui kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
