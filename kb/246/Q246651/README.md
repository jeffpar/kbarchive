---
layout: page
title: "Q246651: SMS: Package Resent Continuously If Distribution Set to None"
permalink: /kb/246/Q246651/
---

## Q246651: SMS: Package Resent Continuously If Distribution Set to None

{% raw %}

	Article: Q246651
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbenv kbClient kbConfig kbsms200 kbsms200bug kbsms120 kbsms120bug kbAdvertisement kbPac
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you enable the "Update Packages on a Schedule" option on a package and set
	the "Recurrence pattern" value to None, the package is resent every 2-10 minutes
	or when the SMS_EXECUTIVE service is restarted.
	
	WORKAROUND
	==========
	
	To work around this problem, do not enable the "Update Packages on a Schedule"
	option for a package and set its schedule to None.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbClient kbConfig kbsms200 kbsms200bug kbsms120 kbsms120bug kbAdvertisement kbPackage kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
