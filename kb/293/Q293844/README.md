---
layout: page
title: "Q293844: SMS: Troubleshooting &quot;outstanding devices in our presence&quot; when"
permalink: /kb/293/Q293844/
---

## Q293844: SMS: Troubleshooting &quot;outstanding devices in our presence&quot; when

{% raw %}

	Article: Q293844
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200fix kbDiscovery kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Network Discovery may become stuck and begin to repeat the following two log
	statements:
	
	- DC: Protocol module <AD_ADM.dll> reports it is still busy while
	  checking idle state.
	
	- ADM: Returning busy from idle status due to outstanding devices in our
	  presence.
	
	CAUSE
	=====
	
	Network Discovery is waiting for an "outstanding" device.
	
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
	Systems Management Server 2.0 Service Pack 4.
	
	
	Additional query words: prodsms netdisc outstanding
	
	======================================================================
	Keywords          : kbsms200 kbsms200fix kbDiscovery kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200SP2 kbSMS200SP3
	Version           : :2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
