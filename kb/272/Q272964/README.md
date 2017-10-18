---
layout: page
title: "Q272964: SMS: Network Discovery Seems to Be Stuck or Looping"
permalink: kb/272/Q272964/
---

## Q272964: SMS: Network Discovery Seems to Be Stuck or Looping

	Article: Q272964
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbDiscovery kbsms200preSP3fix kbsms200SP3fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may be reported in the Netdisc.log file every 30
	seconds. It may appear that Network Discovery is looping:
	
	  ADM: Returning busy from idle status due to outstanding devices in our
	  presence.
	
	If this message is followed by the following message, the problem is probably not
	the problem that is described in this article:
	
	  ADM: Returning busy from idle status due to <NAME> thread being busy.
	
	CAUSE
	=====
	
	An Internet Control Message Protocol (ICMP) response that is compliant with
	Request for Comments (RFC) 1812 is not handled properly by the Network Discovery
	ICMP module (which is RFC 792-based).
	
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
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP2
	Version           : :2.0,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
