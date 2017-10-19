---
layout: page
title: "Q96126: SMTP: Error in Documentation for -BR Parameter"
permalink: /kb/096/Q96126/
---

## Q96126: SMTP: Error in Documentation for -BR Parameter

	Article: Q96126
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 63 of the "Microsoft Mail Gateway to SMTP Administrator's Guide"
	incorrectly describes the Break (Relative) Time Option as having the following
	format:
	
	  -brdd:hh:mm
	
	The correct format of the -BR option is:
	
	  -brhh:mm
	
	Note: The gateway does not break when the time specified in the -BR time occurs;
	it breaks on the next check for outgoing mail, which is configured with the
	-Wnnn (Wait Option) parameter. The default wait period is 120 seconds (2
	minutes).
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
