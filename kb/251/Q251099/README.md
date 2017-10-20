---
layout: page
title: "Q251099: Slow Performance in License Metering Administration Tool"
permalink: /kb/251/Q251099/
---

## Q251099: Slow Performance in License Metering Administration Tool

{% raw %}

	Article: Q251099
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbtool kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200preSP3fix kbsms200SP3fix
	Last Modified: 02-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click either of the tabs in the Summary window in the License Metering
	Administration tool, every record in the database is read before the information
	is displayed. This can lead to excessive memory use, high CPU utilization, and
	network traffic, and can take a long time to display the data.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	
	Additional query words: prodsms licmtr
	
	======================================================================
	Keywords          : kbtool kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
