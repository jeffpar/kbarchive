---
layout: page
title: "Q240628: SMS: Install May Not Assign Client to a Site"
permalink: /kb/240/Q240628/
---

## Q240628: SMS: Install May Not Assign Client to a Site

	Article: Q240628
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsetup kbsms200 kbsms200bug
	Last Modified: 15-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the base client components in Systems Management Server, the
	client may not be assigned to a site and optional components my not be
	installed.
	
	CAUSE
	=====
	
	This issue can occur if the client has an IP address of 0.0.0.0 in the Windows
	NT Network Table.
	
	For example, you can experience this issue if a client uses a modem to connect
	using Point-to-Point Protocol (PPP) or has PPP installed and selected as the
	first protocol in the binding order.
	
	WORKAROUND
	==========
	
	To work around this issue, use one of the following methods:
	
	1. Remove the hardware or software that created the 0.0.0.0 address.
	
	2. Change the network binding order to make the protocol that registers a valid
	  address the first bound protocol.
	
	3. Add 0.0.0.0 to the Systems Management Server site boundaries so the client
	  can be assigned.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	
