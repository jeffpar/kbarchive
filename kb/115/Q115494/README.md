---
layout: page
title: "Q115494: SMTP: Troubleshooting the SMTP Gateway"
permalink: /kb/115/Q115494/
---

## Q115494: SMTP: Troubleshooting the SMTP Gateway

	Article: Q115494
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Follow these steps to troubleshoot SMTP Gateway problems:
	
	1. Stop the Gateway.
	
	2. Rename the current log file, found in m:\log\smtpgate.log.
	
	3. Restart the Gateway, using the debug options -CD (debug class of messages)
	  and -LACSY (full logging).
	
	4. Recreate the error situation.
	
	5. Check the log file for errors. Check the Microsoft Knowledge Base for
	  information on errors found in the log file.
	
	Additional query words: SMTP troubleshoot pcmailfaq
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
