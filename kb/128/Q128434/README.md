---
layout: page
title: "Q128434: SMTP: Err Msg: Error SMTPGet 52 a File Open Error Has Occurred"
permalink: kb/128/Q128434/
---

## Q128434: SMTP: Err Msg: Error SMTPGet 52 a File Open Error Has Occurred

	Article: Q128434
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you start up Microsoft Mail Gateway to SMTP, the following error appears:
	
	  Error SMTPGet 52 a file open error has occurred
	  NC_Incoming system error
	
	To troubleshoot this error message:
	
	1. Ensure you can either ping the server or and telnet to port 25.
	
	2. Check for open files on the gateway machine and the postoffice server
	  (especially in the MAI and ATT subdirectories).
	
	3. Delete any SMTPXXX.XXX temporary files in the SMTP directory.
	
	4. Delete XXXXXXXX.API files in the SMTP directory.
	
	5. Look in Administrator queue and return any mail for a gateway.
	
	Additional query words: tshoot troubleshooting tshooting t-shoot Admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
