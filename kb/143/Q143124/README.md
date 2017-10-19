---
layout: page
title: "Q143124: Inventory Reports Non-IBM MCA System as IBM PS/2 Model 70/80"
permalink: /kb/143/Q143124/
---

## Q143124: Inventory Reports Non-IBM MCA System as IBM PS/2 Model 70/80

	Article: Q143124
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinvkbfixlist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The PC BIOS/Category property of a non-IBM microchannel computer is displayed as
	an IBM PS/2 Model 70/80 in Systems Management Server.
	
	CAUSE
	=====
	
	INVDOS collects the BIOS version and revision information of client computers
	for Systems Management Server. When Systems Management Server detects that the
	BIOS of a client computer supports the micro-channel bus and the system model
	number is not available, the client computer is identified as an IBM PS/2 Model
	70/80.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. A fix to this problem is in development, but has not been
	regression-tested and may be destabilizing in production environments. Microsoft
	does not recommend implementing this fix at this time. Contact Microsoft
	Technical Support for more information on the availability of this fix.
	
	Additional query words: prodsms 1.10
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv kbfixlist
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	Issue type        : kbbug
	
	=============================================================================
	
