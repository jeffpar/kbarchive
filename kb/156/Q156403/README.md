---
layout: page
title: "Q156403: SMS: Invmac Doesn't Report Mac or IP Address with Open Transport"
permalink: kb/156/Q156403/
---

## Q156403: SMS: Invmac Doesn't Report Mac or IP Address with Open Transport

	Article: Q156403
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Macintosh inventory records do not display the network adapter card hardware
	address or IP address of a Macintosh client running Macintosh operating system
	version 7.5.3 with Macintosh Open Transport 1.0 or 1.1.
	
	CAUSE
	=====
	
	Macintosh Open Transport is installed on Apple Power Macintoshes to support PCI
	network adapters and to support streams-based protocols such as Macintosh
	TCP/IP. With the introduction of Macintosh Open Transport, the method the
	Systems Management Server InvMac component uses to determine the network adapter
	card address and the TCP/IP address is no longer available.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. A supported fix is now available for SMS 1.2, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. Unless you are severely impacted by this
	specific problem, Microsoft recommends that you wait for the next Service Pack
	that contains this fix. Contact Microsoft Technical Support for more
	information.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
