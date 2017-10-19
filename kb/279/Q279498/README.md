---
layout: page
title: "Q279498: SMS Sender Reschedules Send Request with No Instruction File"
permalink: /kb/279/Q279498/
---

## Q279498: SMS Sender Reschedules Send Request with No Instruction File

	Article: Q279498
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbScheduler kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the SMS_LAN_SENDER component receives a send request from the Scheduler
	tool, it does not determine whether there is a valid instruction file in the
	Schedule.box\Tosend folder before trying to send the package file. After sending
	the package file, SMS_LAN_SENDER tries to send the instruction file. If the file
	does not exist, SMS_LAN_SENDER reschedules the send request to try again later.
	
	This can cause the package file to be resent to the destination site without a
	corresponding instruction file, and a zero-byte file to be created on the
	destination site. If the package file is large, this could quickly consume the
	drive space on a remote site.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbScheduler kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
