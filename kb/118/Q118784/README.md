---
layout: page
title: "Q118784: SMTP: Time on Gateway Screen and Log File"
permalink: kb/118/Q118784/
---

## Q118784: SMTP: Time on Gateway Screen and Log File

	Article: Q118784
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail Gateway to SMTP shows the current time at the top of the
	first column (top right corner) of the Gateway PC screen, and in the first
	column of the log file m:\log\smtpgate.log.
	
	The Gateway gets the time from the Microsoft C library routine Time(). The MS-DOS
	Time command (type TIME at the MS-DOS prompt) uses the same routine and gives
	you the same time that the Gateway displays in the log file or on screen.
	
	The Gateway also uses this routine to date/time-stamp messages, such as when it
	inserts a date in the in box to show the time of receipt of a message.
	
	
	Additional query words: 2.10 3.00 time clock
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300 kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	
