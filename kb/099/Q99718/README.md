---
layout: page
title: "Q99718: SMTP: Determining Total Time-Out Period with -Q and -W"
permalink: kb/099/Q99718/
---

## Q99718: SMTP: Determining Total Time-Out Period with -Q and -W

	Article: Q99718
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	Version 3.0 of Microsoft Mail Gateway to SMTP allows you to specify the
	how many attempts (-Qnnn) the SMTPGATE program makes to connect to a
	SMTP host and the wait time between such attempts (-Wnnn).
	
	The -Q attempts option works in conjunction with the -W wait option. The
	SMTPGATE.EXE tries to connect to the SMTP host once. If it fails to
	connect, it waits the time specified with the -W option to make its
	next attempt to connect. These attempts continue at time intervals
	specified with the -W option as long as the connections continue to fail or
	the connection attempts value is reached as specified with the -Q option.
	
	
	Example
	-------
	
	
	Assume the default -Q value of 180, and the -W value of 60 seconds is used,
	then:
	
	The SMTP Gateway tries sending the message up to 180 times at 60 second
	intervals for a total time of 180 minutes or three hours. The message is
	then returned to the sender as undeliverable.
	
	The connection attempts option (-Qnnn) specifies the maximum number of
	attempts the SMTPGATE program makes to connect to an SMTP host before
	stopping. The default value is 180.
	
	The wait option (-Wnnn) specifies how much time elapses between checks
	for outgoing SMTP mail on the local area network. It is specified in
	seconds. The default value is 120.
	
	
	Microsoft Mail Gateway to SMTP Administrator's Guide, version 3.0.
	
	Additional query words: 3.00 undeliverable timeout
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
