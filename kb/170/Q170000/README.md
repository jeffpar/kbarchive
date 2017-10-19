---
layout: page
title: "Q170000: SMS: Stop 0E Error on Windows 95 While Running Inventory"
permalink: /kb/170/Q170000/
---

## Q170000: SMS: Stop 0E Error on Windows 95 While Running Inventory

	Article: Q170000
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Microsoft Windows 95 system, configured with the Microsoft NetWare
	client, executes the Systems Management Server Inventory agent, a Stop 0x0E blue
	screen error may occur at approximately 29 percent to 34 percent through the
	inventory process. After pressing a key to continue, the blue screen error may
	occur again. Once past this part of the process, inventory will continue
	normally and complete. Network connectivity is still available. The Smssafe.tmp
	file and eventually the Sms.ini file may show that Novell network card Info
	failed.
	
	This may appear after applying Systems Management Server Service Pack 2, but has
	been exhibited in all revisions of Systems Management Server 1.2.
	
	CAUSE
	=====
	
	The DOS inventory component Nwgetnet.exe fails on some systems configurations,
	causing the blue screen error to occur. The behavior appears to fail most often
	on systems with one or more of the following:
	
	  Pentium Processors
	  Xircom CE2 PCMCIA network card driver installed
	  Chips and Technologies video driver display
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server 1.2 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsms Novell Redirector NWLINK
	
	======================================================================
	Keywords          : kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
