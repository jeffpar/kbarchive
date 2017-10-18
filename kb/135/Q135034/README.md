---
layout: page
title: "Q135034: SMTP: Postmaster Account Important to Track Mail Errors"
permalink: kb/135/Q135034/
---

## Q135034: SMTP: Postmaster Account Important to Track Mail Errors

	Article: Q135034
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
	
	When the defined Smarthost for the SMTP Gateway recognizes problems with mail
	transfer or with delivering messages, a mail warning or status report will be
	sent to the Postmaster account of the Microsoft Mail system.
	
	If no Postmaster account is present, the address gets replaced with chevrons
	(<>) so that the message gets delivered to the Admin account on the
	Microsoft Mail for PC Networks postoffice, instead of being bounced between
	systems.
	
	MORE INFORMATION
	================
	
	By creating a Postmaster account on the Microsoft Mail system, these messages
	will be delivered to that account for observation. These messages can then be
	used to help determine the cause of problems with the message transfer between
	systems.
	
	
	Additional query words: 3.00 failure error report
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
