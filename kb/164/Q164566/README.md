---
layout: page
title: "Q164566: XCLN: Message Marked Private Can't Be Edited"
permalink: /kb/164/Q164566/
---

## Q164566: XCLN: Message Marked Private Can't Be Edited

{% raw %}

	Article: Q164566
	Product(s): Microsoft Exchange
	Version(s): MS-DOS:5.0; WINDOWS:5.0; Win95:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange MS-DOS client, version 5.0 
	- Microsoft Exchange Windows 3.x client, version 5.0 
	- Microsoft Exchange Windows NT client, version 5.0 
	- Microsoft Exchange Client for Windows 95, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you read a message in Microsoft Exchange Client that was sent to you with
	its sensitivity set to Private, you cannot edit the text of the original message
	when you forward it to someone else.
	
	MORE INFORMATION
	================
	
	The forwarded message will maintain its private status.
	
	If you have an Inbox Assistant rule set to auto-forward messages, a private
	message will not be forwarded unless you do the following:
	
	1. On the Tools menu, click Inbox Assistant.
	
	2. Set the rule, then click the Advanced button.
	
	3. Select the Sensitivity check box and select Private.
	
	This will forward the private messages only. You need to set another rule in
	order to forward other messages.
	
	This is not foolproof and should not be used as a security procedure because the
	recipient of the message can always copy all of the text and paste it into
	another message and then forward it to someone. It just forces a recipient to
	think about it before forwarding it.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange500DOS kbExchange500NT
	Version           : MS-DOS:5.0; WINDOWS:5.0; Win95:5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
