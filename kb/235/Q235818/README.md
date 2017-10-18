---
layout: page
title: "Q235818: SMS: Network Discovery May Time Out On Slow Network"
permalink: kb/235/Q235818/
---

## Q235818: SMS: Network Discovery May Time Out On Slow Network

	Article: Q235818
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200fix kbDiscovery
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While performing Network Discovery, computers on slow links are not discovered.
	
	The NetDisc.Log contains the following:
	
	ADM: ICMP: Address <155.14.182.1> did not respond to a ping.	
	ADM: ICMP: Address <155.14.192.129> did not respond to a ping.	
	
	The machines can be reached by Ping.
	
	CAUSE
	=====
	
	Network Discovery will Ping a computer, and then attempt communication with
	other protocols. This can increase network traffic, resulting in time-outs of
	other ICMP requests.
	
	RESOLUTION
	==========
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200fix kbDiscovery 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
