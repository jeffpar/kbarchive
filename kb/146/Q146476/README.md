---
layout: page
title: "Q146476: XCLN: Not Create a Rule w/ Reply Template If Signed &amp; Sealed"
permalink: /kb/146/Q146476/
---

## Q146476: XCLN: Not Create a Rule w/ Reply Template If Signed &amp; Sealed

	Article: Q146476
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a reply template with the Inbox Assistant included with the
	Microsoft Exchange client, you may get the following errors when you close the
	Inbox Assistant:
	
	  Changes to the rule could not be saved. The client was unable to successfully
	  complete all of the requested operations.
	
	  Changes to the rule could not be saved. The client operation failed.
	
	At this point you can only remove the rule or not use the reply template.
	
	CAUSE
	=====
	
	This error will occur when the global security settings of message encryption
	and digital signature are turned on for the client.
	
	The Inbox Assistant cannot use a reply template when encryption and/or digital
	signatures are turned on as the default client settings. This does not prevent a
	user from setting message security preferences in the Compose New Message
	dialog.
	
	WORKAROUND
	==========
	
	To work around this error, turn off the default settings:
	
	1. From the Tools menu choose Options.
	
	2. Choose Security and take the check marks out of both "Encrypt message
	  contents and attachments" and "Add digital signature to message".
	
	If message security is then desired:
	
	1. From the Compose New Message dialog, click on File, then Properties, then
	  Security
	
	2. Place check marks in the desired selections.
	
	This will enable message security for the individual outbound message, however,
	it will not reset the global default for the client.
	
	Turning off the default security settings will in no way affect the receiving of
	secure message in the Inbox.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange, version 4.0
	Windows, Windows NT, and Windows 95 clients. We are researching this problem and
	will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
