---
layout: page
title: "Q141981: SMTP: How to Identify if ADPROC.EXE Has Replaced SMTPGET.EXE"
permalink: /kb/141/Q141981/
---

## Q141981: SMTP: How to Identify if ADPROC.EXE Has Replaced SMTPGET.EXE

{% raw %}

	Article: Q141981
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	- Microsoft Mail Gateway to AT T, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install the Gateway Address Pre-Processor version 2.0 for AT&T
	Mail, the setup program will replace the SMTPGET.EXE in your mail executable
	directory.
	
	The following information shows how you can check to see if the SMTPGET.EXE was
	replaced during setup.
	
	MORE INFORMATION
	================
	
	To determine if the SMTPGET.EXE has been replaced, run the following command in
	the mail executable directory:
	
	  SMTPGET -ver
	
	If the above command returns the following results, the SMTPGET.EXE has been
	replaced with the SMTPGET.EXE from AT&T Pre-Processor 2.0 for AT&T
	Mail.
	
	  Module: ADPROC.EXE
	  Version: 2.00 RELEASE
	  SMTP Address Processor for the Microsoft Mail SMTP Gateway and
	  the Microsoft Mail to AT&T Gateway.
	  Copyright AT&T, All Rights Reserved.
	  10-0-0 No output file specified in command line.
	
	If the above command returns the following results, the SMTPGET.EXE is the file
	provided with the Microsoft Mail to SMTP Gateway 3.x.
	
	  FFAPI: Gateway Get Proc: 094(0)
	  Revision: 3.00.1072 Release (Mail: 3.0.1100 Coll: 3.0.1100)
	  Microsoft (R) Mail for PC Networks.
	  Copyright (C) 1991 Microsoft Corp. All Rights Reserved.
	  10 - No output file specified in command line.
	
	AT&T supports Microsoft Mail Gateway Address Pre-Processor 2.0 for AT&T
	Mail. Their support center number is 1-800-624-5672.
	
	
	Additional query words: 3.x at&t smtp
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateATT100 kbMailGateSMTP300
	Version           : MS-DOS:3.0; :1.0
	
	=============================================================================
	

{% endraw %}
