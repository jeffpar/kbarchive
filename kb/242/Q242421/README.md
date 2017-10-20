---
layout: page
title: "Q242421: SMS: Offer Summarizer May Process .sum Files Out of Order"
permalink: /kb/242/Q242421/
---

## Q242421: SMS: Offer Summarizer May Process .sum Files Out of Order

{% raw %}

	Article: Q242421
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200bug kbsms200fix kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a backlog of .sum files occurs in the Inboxes\OfferSum.box folder, Offer
	Summarizer does not necessarily process the oldest .sum file before any of the
	others. This results in a situation in which the summary counts do not match the
	detailed status messages.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, follow these steps on your Systems Management Server
	(SMS) site servers:
	
	1. Stop the SMS Executive, SMS Site Component Manager, SMS SQL Monitor, and Win
	  Management services.
	
	2. Replace the Basesvr.dll file in the <SMS_root>\Bin\<Platform>
	  folder with the file obtained from the hotfix.
	
	3. Restart the services you stopped in step 1.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200bug kbsms200fix kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
