---
layout: page
title: "Q198958: XCON: Messages Remain in Queue and Are Resent at MTA Startup"
permalink: /kb/198/Q198958/
---

## Q198958: XCON: Messages Remain in Queue and Are Resent at MTA Startup

	Article: Q198958
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 05-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On extremely rare occasions, the message transfer agent (MTA) continues to
	resend a message after every successive restart until the message age exceeds
	the Held-For-Transmit Timer for the object, resulting in the non-delivery report
	(NDR) shown below:
	
	  ----Original Message-----
	  From: System Administrator
	  Sent: Tuesday, December 15, 1998 9:44 PM
	  Subject: Undeliverable: RE: Test Message
	  Importance: High
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject: RE: Test Message Sent: 10/29/98 1:37 PM
	
	  The following recipient(s) could not be reached:
	
	  User, Test on 12/15/98 9:44 PM The maximum time for delivering the message
	  expired MSEXCH:MSExchangeMTA:NorthAmerica:Test01
	
	CAUSE
	=====
	
	After a messages is transferred from the MTA, the MTA sometimes fails to delete
	a .dat file, (usually the file is locked), from the Mtadata folder, which leads
	to the object remaining in the queue. Thus, the next time the MTA is restarted,
	the message is resent.
	
	STATUS
	======
	
	This problem no longer occurs in Microsoft Exchange Server 5.5 Service Pack 1 or
	later.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
