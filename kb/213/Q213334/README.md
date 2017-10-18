---
layout: page
title: "Q213334: SMS: &quot;All Systems By System Name&quot; Reports Only One NIC"
permalink: kb/213/Q213334/
---

## Q213334: SMS: &quot;All Systems By System Name&quot; Reports Only One NIC

	Article: Q213334
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbinterop kbClient kbConfig kbDatabase kbsms200 kbDiscovery kbInventory kbQuery kbRepor
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the results of the All Systems By System Name report, you may
	notice that all computers report only one network adapter even though some of
	the reported computers have more than one network adapter installed. You may
	also note that the Internet Protocol (IP) address reported can be from either
	network adapter rather than consistently coming from one or the other (either
	the first or the second network adapter).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Crystal Reports included with
	Microsoft Systems Management Server 2.0.
	
	MORE INFORMATION
	================
	
	Crystal Reports is offered with Systems Management Server 2.0 to provide a
	method of reporting information regarding the site hierarchy. Crystal Reports
	offers the ability to create your own reports yet also provides many reports by
	default. Crystal Reports is a product offered and supported by Seagate
	Technology.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbClient kbConfig kbDatabase kbsms200 kbDiscovery kbInventory kbQuery kbReport kbsmsUtil 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
