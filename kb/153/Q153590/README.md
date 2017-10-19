---
layout: page
title: "Q153590: XFOR: Sent Time Incorrect on Incoming SMTP Messages"
permalink: /kb/153/Q153590/
---

## Q153590: XFOR: Sent Time Incorrect on Incoming SMTP Messages

	Article: Q153590
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 31-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Microsoft Exchange client receives an SMTP message in which the time
	zone in the header is in lowercase, and the time zone in the header matches that
	of the client computer, the time zone is ignored and Greenwich Mean Time (GMT)
	is assumed. This causes the Sent time to be incorrect.
	
	Example:
	
	  Incorrect Time Stamp:
	
	  Machine TZ is Eastern Standard Time (EST)
	  Header date filed is = Mon, 10 Jun 1996 14:10:45 est
	  Sent time in client shows - Sent: Monday, June 10, 1996 10:10 AM
	
	  Correct Time Stamp:
	
	  Machine TZ is Eastern Standard Time (EST)
	  Header date filed is = Mon, 10 Jun 1996 14:10:45 EST
	  Sent time in client shows - Sent: Monday, June 10, 1996 2:10 PM
	
	CAUSE
	=====
	
	The Internet Mail Connector (IMC) does not recognize the lowercase time zone
	value in the header as valid. The IMC then behaves as if the time zone is GMT,
	and converts the message on that basis.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Server
	U.S. Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	This happens regardless of the time zone selected. Also, if the time zone of the
	computer is Eastern Standard Time (EST) but the date in the header is Central
	Standard Time, the problem does not occur. It only occurs if the time zone in
	the header matches that of the local computer.
	
	
	Additional query words: time zone
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
