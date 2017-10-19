---
layout: page
title: "Q245228: SMS: Liccli95.exe May Hang Windows 95/98 Clients"
permalink: /kb/245/Q245228/
---

## Q245228: SMS: Liccli95.exe May Hang Windows 95/98 Clients

	Article: Q245228
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Software Metering server is busy handling other requests and a client
	that is running Microsoft Windows 95 or Microsoft Windows 98 tries to connect to
	the server, the client may receive a "pipe busy" error message in the Liccli.log
	file. The client retries 15 times; the client computer may not be useable during
	this time.
	
	CAUSE
	=====
	
	Liccli95.exe may use all the computer resources so that users cannot perform any
	work. This behavior does not occur with Microsoft Windows NT-based computers
	because the "Pipe busy" condition is handled differently.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
