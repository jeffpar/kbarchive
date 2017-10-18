---
layout: page
title: "Q200702: SMS: RC Can Not Initiate Session After Virtual Memory Error"
permalink: kb/200/Q200702/
---

## Q200702: SMS: RC Can Not Initiate Session After Virtual Memory Error

	Article: Q200702
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200bug
	Last Modified: 08-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error when attempting to remote control a Windows
	NT 3.51 client, if that client's virtual memory is exhausted such that the user
	has received a Windows NT out-of-virtual memory error prior to the session
	establishment attempt:
	
	  Error: Remote control can not initiate another session with a NT 3.51 client
	  after a failed attempt when the clients virtual memory was filled and
	  released.
	
	WORKAROUND
	==========
	
	Reboot the NT 3.5x Client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms rc32
	
	======================================================================
	Keywords          : kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
