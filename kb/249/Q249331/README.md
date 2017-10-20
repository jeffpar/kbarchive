---
layout: page
title: "Q249331: Advertisements Received by Clients Outside Targeted Collections"
permalink: /kb/249/Q249331/
---

## Q249331: Advertisements Received by Clients Outside Targeted Collections

{% raw %}

	Article: Q249331
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbsms200 kbsms200bug kbsms200fix kbsms200sp2fix
	Last Modified: 24-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advertisements targeted at Secondary Site Client Collections are not modified to
	reflect the deltas in the target collection. Therefore, advertisements may still
	be available to clients that you have removed from the intended target
	collection.
	
	CAUSE
	=====
	
	This issue occurs because Secondary Site Collection Evaluator does not correctly
	handle a collection member delta. This prevents Offer Manager on the Secondary
	Site from finding out a collection member has been removed from a collection.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0 SP1. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	The hotfix listed in this article is a preventative fix that stops the problem
	from occurring in the future. However, the hotfix is not corrective. If you
	suspect you already have the problem, contact Microsoft Product Support Services
	to discuss options to resolve the current symptoms before you apply this
	hotfix.
	
	To install the hotfix, perform the following steps on your Systems Management
	Server site server:
	
	1. Stop the SMS_SITE_COMPONENT_MANAGER and SMS_EXECUTIVE services.
	
	2. Copy the updated Basesvr.dll file to the SMS\Bin\I386 folder.
	
	3. Start the SMS_SITE_COMPONENT_MANAGER and SMS_EXECUTIVE services.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsms200 kbsms200bug kbsms200fix kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200SP1
	Version           : winnt:2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
