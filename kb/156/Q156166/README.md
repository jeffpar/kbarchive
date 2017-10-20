---
layout: page
title: "Q156166: SMTP: Troubleshooting Error SMTPGET: 20 - Insufficient Memory"
permalink: /kb/156/Q156166/
---

## Q156166: SMTP: Troubleshooting Error SMTPGET: 20 - Insufficient Memory

{% raw %}

	Article: Q156166
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Mail Gateway to SMTP displays the error messages:
	
	- Error SMTPGET: 20 - Insufficient memory
	
	-or-
	
	- Error SMTPPUT: 20 - Insufficient memory
	
	CAUSE
	=====
	
	The causes of this error message are many. Follow the steps listed below to
	troubleshoot the error.
	
	WORKAROUND
	==========
	
	Verify that the following conditions are met to ensure proper operation of the
	SMTP gateway:
	
	1. The gateway computer must have at least 375 KB of free conventional memory
	  before starting.
	
	2. The gateway must have at least 40 KB of free contiguous memory, (in the
	  Idling line after the word "largest").
	
	3. The Smtpgate.exe file must be located on the gateway computer, not on the
	  server.
	
	4. Delete a zero length From_NC.api file from the M:\SMTP subdirectory.
	
	5. If P1 files are found in the P1 subdirectory on the postoffice, run the
	  external program to deliver the messages.
	
	6. Have at least one instance of the external program running.
	
	7. It is recommended that the gateway include the -MD parameter on the command
	  line. This will prevent the gateway from performing the Mailer function.
	
	8. Check Network.glb and key/mbg pair for corruption. Check XTN files for zero
	  byte files.
	
	9. The FILES= entry in the Config.sys file should be set to at least 40.
	
	10. Return the last message in the queue, as it could be corrupted.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
