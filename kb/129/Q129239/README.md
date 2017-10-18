---
layout: page
title: "Q129239: SMTP: Err Msg: Warning SMTP Output Retry Count Exceeded..."
permalink: kb/129/Q129239/
---

## Q129239: SMTP: Err Msg: Warning SMTP Output Retry Count Exceeded...

	Article: Q129239
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message sometimes appears in the SMTPGATE.LOG file:
	
	  Warning SMTP output retry count exceeded saving to m:\SMTP\outbad.api
	
	CAUSE
	=====
	
	Once an outgoing message is detected by the Microsoft Mail Gateway to SMTP, the
	gateway then tries to connect to the UNIX Smarthost to send the message. By
	default, the gateway will try 180 times before timing out. Once it has timed
	out, it will write the above error message into the SMTPGATE.LOG file. Then it
	will save the message in the M:\SMTP\OUTBAD.API file.
	
	RESOLUTION
	==========
	
	This error usually indicates that there is something wrong with either the
	network or the UNIX Smarthost. Use a Ping or Telnet command to ensure that the
	UNIX Smarthost is up and running. Also check that the SMTP Deamon is running on
	the UNIX Smarthost. If the error occurs frequently, check the network with a
	protocol analyzer.
	
	MORE INFORMATION
	================
	
	You can use the -Q command-line option to change the default of 180 times that
	the gateway will try to connect to the UNIX Smarthost. For more information on
	the -Q option, see the following article in the Microsoft Knowledge Base:
	
	  Q99718 SMTP: Determining Total Time-Out Period with -Q and -W
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
