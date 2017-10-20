---
layout: page
title: "Q257376: SMS: Unable to Reset Advertisement Counters for Secondary Sites"
permalink: /kb/257/Q257376/
---

## Q257376: SMS: Unable to Reset Advertisement Counters for Secondary Sites

{% raw %}

	Article: Q257376
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2
	Operating System(s): 
	Keyword(s): kbConfig kbMMC kbsms200 kbsms200bug kbAdvertisement kbsmsAdmin kbStatSum kbsms200preSP3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server (SMS), if you are an administrator, when you start
	the SMS Administrative console, click System Status, and then click
	Advertisement Status, when you attempt to reset counts for an advertisement that
	is staged on an existing secondary site server, the counts for the advertisement
	do not return to zero.
	
	CAUSE
	=====
	
	This issue can occur because the Offer Status Summarizer at the secondary site
	server does not recognize the changes to the site control file that it receives
	from the secondary site server's parent site.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbConfig kbMMC kbsms200 kbsms200bug kbAdvertisement kbsmsAdmin kbStatSum kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : :2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
