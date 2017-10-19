---
layout: page
title: "Q105289: SMTP: Gateway Hangs Using Novell LAN Workplace for DOS"
permalink: /kb/105/Q105289/
---

## Q105289: SMTP: Gateway Hangs Using Novell LAN Workplace for DOS

	Article: Q105289
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	SYMPTOMS
	========
	
	The Microsoft Mail Gateway to SMTP may hang during message transmission when
	using Novell's TCP/IP product for the PC (LAN Workplace for DOS). This error
	appears:
	
	  ERROR write: (9) Bad file number
	
	The following lines appear in the log file as errors when you use the -CD and
	-LACSY options with SMTPGATE. (NOTE: Each error appears on one on one long line
	in the log file; they are broken here due to formatting restrictions.)
	
	  [rx] 451 net hang reading from SMTP_GATEWAY_MACHINE: Connection timed out
	  during HELO with SMTPSMART_HOST.
	
	  14:34:25 - ERROR Invalid response to MAIL: 451 net hang reading from
	  SMTP_GATEWAY_MACHINE: Connection timed out during HELO with
	  SMTP_ROUTER/HOST_MACHINE.
	
	CAUSE
	=====
	
	The way LAN Workplace for DOS handles IP fragmentation causes the SMTP Gateway
	layer to hang because it is waiting for a good packet of information to process
	and has no time-out limit for waiting.
	
	RESOLUTION
	==========
	
	To avoid this problem, either:
	
	- Upgrade to the latest version of LAN Workplace for DOS and apply all the
	  necessary patches.
	
	-or-
	
	- Configure LAN Workplace for DOS to use the smallest packet size available:
	  632. The default size is 2048.
	
	Additional query words: 3.00 ErrMsg ERROR write: (9) Bad file number
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
