---
layout: page
title: "Q164544: SMS: Processor Name Is Not Consistent for All Platforms"
permalink: kb/164/Q164544/
---

## Q164544: SMS: Processor Name Is Not Consistent for All Platforms

	Article: Q164544
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
	
	Microsoft Windows NT inventory (INVWIN32) and Microsoft DOS inventory (INVDOS)
	do not report the same processor name for a client computer. For example, if the
	processor on the client computer is an Intel 486, INVWIN32 reports it is as
	80486DX, whereas INVDOS reports it is as 486DX-33.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server version 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms WinNT
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
