---
layout: page
title: "Q99853: SMTP: Err Msg: WARNING Getline: NL with No CR"
permalink: /kb/099/Q99853/
---

## Q99853: SMTP: Err Msg: WARNING Getline: NL with No CR

	Article: Q99853
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Versions 2.1 and 3.0 of Microsoft Mail Gateway to SMTP may display the following
	error message:
	
	  "WARNING getline: NL with no CR"
	
	This error message indicates that the SMTP Gateway program has received a message
	that does not use CRLF to delineate SMTP header fields. RFC 822 "Standard for
	the Format of ARPA INTERNET Text Messages," section 3.1.2 "Structure of Header
	Fields" specifies that header fields should end with CRLF.
	
	This is only a warning message. Mail continues to be processed even if you make
	no changes to the SMTP gateway.
	
	Additional query words: 2.10 3.00 alert errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300 kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	
