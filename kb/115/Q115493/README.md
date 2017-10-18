---
layout: page
title: "Q115493: SMTP: How SMTPGATE Processes Incoming SMTP Messages"
permalink: kb/115/Q115493/
---

## Q115493: SMTP: How SMTPGATE Processes Incoming SMTP Messages

	Article: Q115493
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	The following steps outline how SMTPGATE.EXE processes incoming SMTP
	messages. The files created and used by SMTPGATE.EXE are also described.
	
	
	1. From the RFC 821 information, we extract MAIL FROM and RCPT TO lines up to
	  the DATA command and put them in the SMTP_IN.ENV file.
	
	2. From the RFC822 information, we append all header lines, the message text,
	  and attachments after the DATA command and put them in the SMTP_IN.822 file.
	
	3. The gateway translates the header part of the SMTP_IN.822 file.
	
	4. At the same time, it copies the header (filtering out the Receive lines if
	  the -T switch is not on) to the API_OUT.TMP temporary file. The gateway
	  closes API_OUT.TMP and records its size.
	
	5. API_OUT.TMP is reopened and appended with the body of SMTP_IN.822.
	
	6. The gateway creates the TO_NC.API file.
	
	7. The API_OUT.TMP file is copied into TO_NC.API.
	
	8. The body of SMTP_IN.822 is appended to the TO_NC.API file and the attached
	  files are UU decoded.
	
	9. SMTP spawns SMTPPUT.EXE, which uses TO_NC.API as its input file for the
	  Microsoft Mail postoffice. For more information on errors, query on
	  ERROR:SMTPPUT here in the Microsoft Knowledge Base.
	
	Additional query words: 3.00 smtpgate files
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
