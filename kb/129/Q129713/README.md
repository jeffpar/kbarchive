---
layout: page
title: "Q129713: SMTP: Err Msg: Error Translating Message to SMTP..."
permalink: /kb/129/Q129713/
---

## Q129713: SMTP: Err Msg: Error Translating Message to SMTP...

{% raw %}

	Article: Q129713
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message sometimes appears in the SMTPGATE.LOG file:
	
	  Error translating message to smtp: protocol error
	
	CAUSE
	=====
	
	The SMTP gateway could not successfully translate the message to SMTP format.
	The message may be corrupted.
	
	When the Microsoft Mail Gateway to SMTP determines that there is a message ready
	to go out of the gateway, it extracts the message from the mailbag and converts
	it to the Microsoft Mail File Format (MMFF), in a file called FROM_NC.API. This
	file is then converted to SMTP format as two files--one for the envelope
	information (SMTP_OUT.822) and one for the message headers and body
	(SMTP_OUT.TXT). If there is a problem converting the FROM_NC file to
	SMTP_OUT.822 or to SMTP_OUT.TXT, the message is appended to the file OUTBAD.API,
	and the above error is written to the SMTPGATE.LOG file.
	
	RESOLUTION
	==========
	
	Examine the OUTBAD.API file for possible corruption. The file will be in MMFF
	format, as defined in the Microsoft Mail Software Development Kit "File Format
	API for Gateways and Applications" manual. You can also examine the OUTBAD.API
	file (by viewing it or using the debug program) to get the originator's name,
	and ask the originator to send the mail again.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q98159 SMTP: Err Msg: ERROR Translating Message to SMTP...
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
