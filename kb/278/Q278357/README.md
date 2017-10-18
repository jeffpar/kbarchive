---
layout: page
title: "Q278357: Adjusting the Sender's Retry Delay Can Cause Errors on Retry"
permalink: kb/278/Q278357/
---

## Q278357: Adjusting the Sender's Retry Delay Can Cause Errors on Retry

	Article: Q278357
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200bug kbsms200fix kbSender kbsms200preSP3fix kbsms200preSP4fix kbSMSSender
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Standard Sender's retry delay value is set to a value longer than five
	minutes, the sender does not send a package if a network error occurs while the
	package is being sent.
	
	CAUSE
	=====
	
	This issue occurs because the default sender heartbeat time-out period is five
	minutes. If the sender thread waits for more than the heartbeat time-out period,
	it acts as if the connection to the remote server has been permanently lost.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	WORKAROUND
	==========
	
	Do not set the "Delay before retrying" setting in Standard Sender properties to
	a value that is longer than five minutes.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The Retry Delay value is available on the Advanced tab in Standard Sender
	properties. Use this value to extend the time that the sender waits after a
	network error has occurred before trying to resend data to another SMS site
	server.
	
	In typical operation, if a transient network error occurs while a package file is
	being transmitted from one site to another, the sender recovers automatically
	and begins resending the package file after waiting one minute (the default
	setting).
	
	If the sender is configured to wait more than five minutes before attempting to
	resend the package file, the sender acts as if the connection has been lost and
	does not perform the retry attempt. When this occurs, the following entries
	appear in the Sender.log file:
	
	  Heartbeat is expired.
	  Can't re-establish the connection.
	
	Later, when the sender creates another sending thread, the following error may be
	reported in the Sender.log file:
	
	  Cannot create/open the remote file \\<server>\SMS_SITE\2_4O7PRI.PCK,
	  Win32 error = 32.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200bug kbsms200fix kbSender kbsms200preSP3fix kbsms200preSP4fix kbSMSSender 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
