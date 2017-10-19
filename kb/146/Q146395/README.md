---
layout: page
title: "Q146395: XCLN: Some Inbox Rules will not Fire on Bcc'd Mail"
permalink: /kb/146/Q146395/
---

## Q146395: XCLN: Some Inbox Rules will not Fire on Bcc'd Mail

	Article: Q146395
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
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In a Microsoft Exchange client for Windows or Macintosh, when a rule is defined
	that activates on mail sent directly to an individual, mail that the individual
	receives by being on the Bcc line will not activate the rule. This also applies
	when the "Sent directly to me" and/or "Copied (Cc) to me" boxes are checked.
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Example:
	
	John Doe has a Inbox Assistant rule which looks like:
	
	  CONDITION
	  TO: John Doe; Sent directly to me; Copied (Cc) to me
	  ACTIONS
	  MOVE TO: My Mail
	
	Case #1: If John receives a message that was sent directly to him or he received
	it by being on the Cc line, the message will be moved.
	
	Case #2: If John receives a message by being on the Bcc line, the message will
	not be moved.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange500Mac kbExchange400Mac kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
