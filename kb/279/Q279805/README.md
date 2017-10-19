---
layout: page
title: "Q279805: XFOR: Incorrect Time Is Displayed in Read Receipt from GroupWise"
permalink: /kb/279/Q279805/
---

## Q279805: XFOR: Incorrect Time Is Displayed in Read Receipt from GroupWise

	Article: Q279805
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 21-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you request a read receipt for a message that you sent to a Novell GroupWise
	recipient, the read receipt may indicate that the message was read seven hours
	later than it was actually read. For example, if the message was read at 4:00
	P.M., the read receipt may indicate that the message was read at 11:00 P.M. This
	problem may occur even though all of the e-mail clients and servers that are
	involved are located in the same time zone and are set to the same system time.
	
	WORKAROUND
	==========
	
	Because the time that is displayed in the read receipt is seven hours later than
	the correct time, rather than earlier than the correct time, the time that is
	displayed is usually later than the current time when you receive the read
	receipt. This makes it relatively easy to determine if the problem that this
	article describes is occurring, because the time that is displayed in the read
	receipt cannot possibly be correct. If you determine that you are experiencing
	this problem, you can work around this problem and calculate the correct time by
	subtracting seven hours from the time that is displayed in the read receipt.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	
	Additional query words: wrong off notification
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
