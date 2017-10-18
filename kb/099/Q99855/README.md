---
layout: page
title: "Q99855: SMTP: Err Msg: 503 Bad Command Sequence"
permalink: kb/099/Q99855/
---

## Q99855: SMTP: Err Msg: 503 Bad Command Sequence

	Article: Q99855
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
	
	Versions 2.1 and 3.0 of Microsoft Mail Gateway to SMTP may display this error
	message:
	
	  "503 Bad command sequence"
	
	CAUSE
	=====
	
	This error message indicates that an SMTP command was received out of sequence.
	After sending this error message to the calling host, the SMTP Gateway waits for
	another command.
	
	RESOLUTION
	==========
	
	Check the SMTPGATE.LOG file to find the offending command that caused the error.
	Then, contact the sending host to determine why the command was given.
	
	Additional query words: 2.10 3.00 alert errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300 kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	
