---
layout: page
title: "Q257700: SMS: Advertisements Do Not Run If DC Is Unavailable"
permalink: /kb/257/Q257700/
---

## Q257700: SMS: Advertisements Do Not Run If DC Is Unavailable

{% raw %}

	Article: Q257700
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbClient kbsms200 kbsms200bug kbsms120 kbsms120bug kbAdvertisement kbsms200preSP3fix kb
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If no domain controller is available or if the domain controller is located
	across a slow link from a Systems Management Server (SMS) 2.0 client that is
	running on a site server, an advertised program may not run as scheduled.
	
	Because this issue occurs only on site servers, this problem most often occurs on
	site servers in remote offices that do not have a local domain controller.
	
	CAUSE
	=====
	
	When a domain controller is unavailable, the Client service does not record the
	process ID for Odpsys32.exe in the client's local registry. Therefore,
	Smsapm32.exe refuses a named-pipe connection from Odpsys32.exe because it cannot
	confirm that it has been started by the Client service. Any scheduled software
	distribution does not occur.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this behavior, make sure that a fast, reliable connection to a
	domain controller is available.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbsms200 kbsms200bug kbsms120 kbsms120bug kbAdvertisement kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
