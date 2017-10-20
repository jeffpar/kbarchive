---
layout: page
title: "Q131088: XCLN: Message Finder and Filter Don't Display Bcc'd Messages"
permalink: /kb/131/Q131088/
---

## Q131088: XCLN: Message Finder and Filter Don't Display Bcc'd Messages

{% raw %}

	Article: Q131088
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange MS-DOS client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The message finder (choose Find from the Tools menu) and filter (choose Filter
	from the View menu) do not display messages that were blind carbon copied
	(Bcc'd) when you select Copied (Cc) To Me.
	
	CAUSE
	=====
	
	The message finder and filter do not treat Bcc'd messages in the same manner as
	Cc'd messages. Therefore, Bcc'd messages are not displayed during the message
	find or filter. While both messages are carbon copies, the Bcc'd message does
	not have the Bcc'd user's name in the header--only the names of the sender,
	original recipient (the name on the To line), and Cc's appear. Since the Bcc'd
	recipient's name does not appear in the message, the Finder and Filter cannot
	display the message.
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400DOS kbExchange500DOS kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	
	=============================================================================
	

{% endraw %}
