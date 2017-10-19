---
layout: page
title: "Q192084: X400: Incorrect Date on Message Sent Through X.400 Gateway"
permalink: /kb/192/Q192084/
---

## Q192084: X400: Incorrect Date on Message Sent Through X.400 Gateway

	Article: Q192084
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): kbYear2000
	Last Modified: 12-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a message through the Microsoft Mail Gateway to X.400, you may
	experience one or more of the following symptoms:
	
	- When you view the message in a Microsoft Mail for PC Networks client, the
	  date on the message may appear incorrectly. This problem also occurs if the
	  MS Mail (PC) postoffice returns the message because it cannot be delivered,
	  and then you view the returned message in an MS Mail (PC) client. For
	  example, if the message is sent on January 1, 2000, the date appears as "a
	  700:00 relative to GMT" (without quotation marks) instead of "Jan 01 1:00:00
	  2000 -08:00 relative to GMT."
	
	- When you view the date on the message in the Inbox, the date may appear
	  incorrectly. For example, if the message is sent on January 1, 2000, the date
	  appears as "12/10/09" (without quotation marks) instead of "1/1/00."
	
	This problem is not likely to occur before the year 2000.
	
	CAUSE
	=====
	
	The Microsoft Mail Gateway to X.400 does not properly convert two-digit years to
	four digits for the year 2000.
	
	RESOLUTION
	==========
	
	To resolve this problem, contact Microsoft Product Support Services to obtain
	the following fix.
	
	This fix should have the following time stamp:
	
	  X400gate.exe 7/23/98 4:18p 516,884 bytes (version 3.2.24)
	
	This hotfix has been posted to the following Internet location as X400gy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/gateways-public/All-Y2K/
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Mail Gateway to
	X.400 version 3.2. A supported fix is now available, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Contact Microsoft Product Support Services for more
	information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbYear2000 
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
