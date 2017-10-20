---
layout: page
title: "Q264524: SMS: DDR Backlog Because DDM Does Not Delete Read-Only DDRs"
permalink: /kb/264/Q264524/
---

## Q264524: SMS: DDR Backlog Because DDM Does Not Delete Read-Only DDRs

{% raw %}

	Article: Q264524
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbDiscovery kbsms200preSP3fix kbsms200SP3fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Discovery Data Manager (DDM) is processing Data Discovery Records (DDRs),
	it may be unable to properly delete the DDRs after inserting them into the
	database or forwarding them to the parent site in the hierarchy. Because the
	files are not properly deleted, they are processed repeatedly, causing
	unnecessary CPU usage and network traffic. This problem can compound quickly in
	a site hierarchy because several child sites might be forwarding replica DDRs
	repeatedly to the parent site along with legitimate DDRs. Large backlogs of DDR
	files may result in the DDM inbox.
	
	CAUSE
	=====
	
	DDM is unable to delete DDRs because they have a read-only attribute set.
	
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
	Keywords          : kbsms200 kbsms200bug kbDiscovery kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
