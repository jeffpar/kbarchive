---
layout: page
title: "Q128512: SMTP: -MR Option Ignored When You Use It with -MD"
permalink: /kb/128/Q128512/
---

## Q128512: SMTP: -MR Option Ignored When You Use It with -MD

	Article: Q128512
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use both the -MD and -MR options when you run the Microsoft Mail Gateway
	to SMTP, the -MR option does not work. Messages come into the gateway; however,
	the receive log is not updated to reflect the incoming messages.
	
	CAUSE
	=====
	
	The receive log is written when the gateway delivers the message to the correct
	mailbag. If you use the -MD option but the mailer portion is not working, the
	message is never delivered to the receiver's mailbag and the log file is never
	written to.
	
	RESOLUTION
	==========
	
	When you run the SMTP gateway, do not use the -MD and -MR command-line options
	at the same time.
	
	Use the -MR option on the External Mail program (EXTERNAL.EXE) so that when the
	External Mail program delivers messages, it will then record information to the
	receive log file.
	
	MORE INFORMATION
	================
	
	The -MR option turns on the receive logging function of the gateway: any message
	that comes into the gateway and is passed to the gateway postoffice will be
	logged into the receive log file (MAILDATA\LOG\RECV.LOG) on the gateway
	postoffice.
	
	The -MD option disables the mailer portion of SMTPPUT.EXE: all incoming messages
	will be put into INQUEUE3.MBG and left there for the External Mail program to
	process. It is the External Mail program's responsibility to deliver the mail to
	the correct mailbag.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
