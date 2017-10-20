---
layout: page
title: "Q100703: SMTP: Err Msg: ERROR MMFF Protocol Error"
permalink: /kb/100/Q100703/
---

## Q100703: SMTP: Err Msg: ERROR MMFF Protocol Error

{% raw %}

	Article: Q100703
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Mail Gateway to SMTP displays the following error message:
	
	  "ERROR MMFF protocol error
	  NC_incoming: protocol error"
	
	This error indicates that the SMTP Gateway program SMTPGET.EXE was unable to
	successfully build the Microsoft Mail File Format (MMFF) file. SMTPGET.EXE looks
	in the SMTP outgoing queue and creates the file SMTP\FROM_NC.API, which includes
	the message body and all attachments to be sent out to the SMTP host.
	
	CAUSE
	=====
	
	An incorrect MMFF file can occur if:
	
	- The original MAI file is corrupt.
	
	- A problem occurred on the Mail Postoffice server during the SMTPGET process.
	
	- A problem occurred on the network between the SMTP gateway computer and the
	  Mail Postoffice server as SMTPGET.EXE was trying to execute.
	
	RESOLUTION
	==========
	
	To correct this problem, delete or rename the SMTP\FROM_NC.API file on the
	gateway postoffice, then send the message again. If the error occurs frequently,
	check the server or network for possible problems.
	
	Additional query words: 2.10 3.00 errmsg alert
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300 kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	

{% endraw %}
