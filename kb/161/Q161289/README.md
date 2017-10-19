---
layout: page
title: "Q161289: SMS: Network Adapter IRQ Is Not Inventoried on Windows 95"
permalink: /kb/161/Q161289/
---

## Q161289: SMS: Network Adapter IRQ Is Not Inventoried on Windows 95

	Article: Q161289
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinvkbfixlist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When inventorying a client computer running Windows 95, the hardware scan will
	not report the interrupt request (IRQ) of the network adapter card installed on
	the client; it is reported with a value of "<null>" in the NetCard group
	of the Personal Computer Properties window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. A supported fix is now available, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	Additional query words: prodsms 1.20 NIC interface win95
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
