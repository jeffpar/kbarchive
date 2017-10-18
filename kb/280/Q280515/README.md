---
layout: page
title: "Q280515: SMS: The Client.lkp File Is Not Updated"
permalink: kb/280/Q280515/
---

## Q280515: SMS: The Client.lkp File Is Not Updated

	Article: Q280515
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you review the Inbox Manager log (the SMS\Logs\Inboxmgr.log file) on a
	Systems Management Server (SMS) 2.0 site server, you may see that the Client.lkp
	file is not being updated. This is indicated by the following error report in
	the log file:
	
	  Copying X:\SMS\inboxes\clidata.src\client.lkp to
	  \\SERVER\CAP_XYZ\clidata.box\client.lkp, Failed, Win32 Error = 32
	
	Because the Client.lkp file is used by clients to determine whether or not they
	should resynchronize inventory, the clients that you expect to send a full
	inventory may not do so.
	
	CAUSE
	=====
	
	This issue can occur if the SMS clients have the Client.lkp file open when Inbox
	Manager tries to update the file.
	
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
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
