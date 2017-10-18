---
layout: page
title: "Q96203: SMTP: Break Absolute Option (-BT) Stops Gateway Immediately"
permalink: kb/096/Q96203/
---

## Q96203: SMTP: Break Absolute Option (-BT) Stops Gateway Immediately

	Article: Q96203
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the Microsoft Mail Gateway to SMTP version 3.0 command line includes the
	-BThh:mm (Break Absolute Time) option switch, the program may stop immediately
	after it starts. This problem occurs when the specified tile is earlier than the
	current time on the system clock. This is not an error in the gateway program
	because the default absolute date is the current system date.
	
	When you use the -BT option with the SMTP gateway, use the -BDmm-dd-yy option as
	well. Doing so allows the absolute break time to specify a time after midnight.
	
	Note: The gateway does not break at the time specified in the -BT option; it
	breaks on the check for outgoing mail that follows the specified time. Use the
	-Wnnn (wait option) to specify the delay between checks for outgoing mail; the
	default wait period is 120 seconds (2 minutes).
	
	Example
	-------
	
	At 11:00 a.m. on January 14, 1993, you want to set the SMTP gateway to run until
	1:00 a.m. on January 15, 1993. If you enter the following command, the gateway
	stops immediately because 1:00 a.m. on January 14, 1993 has already passed:
	
	  SMTPGATE -DM -BT01:00
	
	However, if you enter the following command, the gateway runs until after 1:00
	a.m. on January 15, 1993, as desired:
	
	  SMTPGATE -DM -BT01:00 -BD01-15-93
	
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
