---
layout: page
title: "Q281930: SMS: ODP Schedule Times Are Reset to One-Hour Default"
permalink: /kb/281/Q281930/
---

## Q281930: SMS: ODP Schedule Times Are Reset to One-Hour Default

{% raw %}

	Article: Q281930
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Systems Management Server (SMS) Advertised Programs Manager (Smsapm32.exe)
	starts, the Offer Data Provider (ODP) schedule times are reset to their default
	of 1 hour until the next Client Configuration Installation Manager (CCIM) cycle
	is run. If the SMS ODP schedules have been changed from their default of 1 hour,
	they are not reset to their expected values until the next CCIM interval (the
	default interval is 23 hours).
	
	This problem affects SMS 2.0 Service Pack 2 (SP2) and Service Pack 3 (SP3) only.
	
	CAUSE
	=====
	
	When Smsapm32.exe starts, it incorrectly overrides any user-configured or
	administrator-configured ODP refresh times. Therefore, if clients have been
	configured not to check for new advertised programs for long periods (for
	example, to reduce network bandwidth), the configured schedule is not used until
	the next scheduled CCIM interval (the default interval is 23 hours).
	
	
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
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200SP2 kbSMS200SP3
	Version           : :2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
