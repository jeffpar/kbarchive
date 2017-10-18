---
layout: page
title: "Q107087: SMTP: Err Msg: Warning No Return Path"
permalink: kb/107/Q107087/
---

## Q107087: SMTP: Err Msg: Warning No Return Path

	Article: Q107087
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Mail Gateway to SMTP displays this warning:
	
	  WARNING No return path
	  [tx] 250 Sender OK
	
	CAUSE
	=====
	
	The name provided in the "mail from" received by the sending host is incomplete
	or contains a null value:
	
	  [rx] mail from:<>
	
	RESOLUTION
	==========
	
	None necessary: this message is informational only and requires no action by the
	Mail Administrator. The Gateway continues to process mail.
	
	MORE INFORMATION
	================
	
	The example below shows an address without a beginning "<" and an ending
	">". This log file was created using the undocumented -CD option which tells
	the Gateway to display debug information.
	
	  >Incoming SMTP connection from [192.245.59.139]
	  [tx] 220 All set, fire away
	  [rx] hello fake.host.com
	  [tx] 250 Hi there, pleased to meet you
	  [rx] mail from:jdoe
	  >WARNING No return path
	  [tx] 250 Sender OK
	
	Additional query words: 2.10 3.00 2.1 3.0 warning
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300 kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	
