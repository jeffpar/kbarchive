---
layout: page
title: "Q202000: SMS: Discovery and Inventory for NetWare Servers in SMS 2.0"
permalink: /kb/202/Q202000/
---

## Q202000: SMS: Discovery and Inventory for NetWare Servers in SMS 2.0

	Article: Q202000
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbBindery kbCAP kbDiscovery kbNDS kbOSNovell
	Last Modified: 21-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server version 2.0, there currently is no method for
	retrieving inventory data from NetWare servers. Discovery of NetWare servers is
	also limited.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	MORE INFORMATION
	================
	
	Systems Management Server 2.0 is not able to discover NetWare servers running
	only NetWare Directory Services (NDS). If the server is a Bindery server or is
	running in Bindery emulation mode, Systems Management Server will be able to
	retrieve discovery data such as logon points, client access points (CAPs), and
	distribution points.
	
	Additional query words: prodsms sms20 nwroles novel novell
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbBindery kbCAP kbDiscovery kbNDS kbOSNovell 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	
