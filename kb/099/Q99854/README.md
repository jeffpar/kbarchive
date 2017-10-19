---
layout: page
title: "Q99854: SMTP: Err Msg: 500 Huh?"
permalink: /kb/099/Q99854/
---

## Q99854: SMTP: Err Msg: 500 Huh?

	Article: Q99854
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Versions 2.1 and 3.0 of Microsoft Mail Gateway to SMTP may display this
	message:
	
	  500 Huh?
	
	CAUSE
	=====
	
	This error message indicates that an unknown SMTP command was received by the
	gateway. After sending this error message, the SMTP Gateway usually closes the
	connection.
	
	RESOLUTION
	==========
	
	Check the SMTPGATE.LOG file to find the command that the SMTP did not
	understand. Then, contact the sending host to ascertain why the command was
	given.
	
	Additional query words: 2.10 3.00 alert errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300 kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	
