---
layout: page
title: "Q192085: MHS: Incorrect Date Recorded in Sent.log and Recv.log Files"
permalink: /kb/192/Q192085/
---

## Q192085: MHS: Incorrect Date Recorded in Sent.log and Recv.log Files

	Article: Q192085
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): kbYear2000
	Last Modified: 19-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send or receive a message through the Microsoft Mail Gateway to MHS,
	the date recorded in the Sent.log or Recv.log file may be incorrect. If the
	message is sent or received between the years 2000 and 2009, the two- digit year
	recorded in the Sent.log or Recv.log file is 10. For example, if the message is
	sent on January 1, 2000, the date recorded is 1/1/10.
	
	CAUSE
	=====
	
	The Inpost.exe and Outpost.exe components do not properly record the sent and
	received dates in the Sent.log and Recv.log files for the years 2000 through
	2009.
	
	RESOLUTION
	==========
	
	To resolve this problem, contact Microsoft Product Support Services to obtain
	the following fix.
	
	This fix should have the following time stamp:
	
	  Inpost.exe    3/6/98    4:34p   73,289 bytes (version 3.0.10)
	  Outpost.exe   6/6/95   11:44p   73,643 bytes (version 3.0.10)
	
	This hotfix has been posted to the following Internet location as Mhsgy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/gateways-public/All-Y2K/
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Mail Gateway to
	MHS version 3.2. A supported fix is now available, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Contact Microsoft Product Support Services for more
	information.
	
	
	Additional query words: inpost outpost
	
	======================================================================
	Keywords          : kbYear2000 
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS320
	Version           : MS-DOS:3.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
