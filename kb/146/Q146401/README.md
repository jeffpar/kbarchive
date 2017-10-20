---
layout: page
title: "Q146401: XCLN: Bcc Addressee Stripped from Message"
permalink: /kb/146/Q146401/
---

## Q146401: XCLN: Bcc Addressee Stripped from Message

{% raw %}

	Article: Q146401
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange MS-DOS client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Bcc field headers are stripped from all messages when they are sent out
	using Microsoft Exchange client, version 4.0. Users who received the message
	because they were specified on the Bcc line will not see the other users
	specified on this line. This functionality is designed into the product.
	
	MORE INFORMATION
	================
	
	There is one exception to this functionality. When you run Microsoft Exchange
	MS-DOS client, version 4.0, and you include yourself in the Bcc list of
	recipients, the entire Bcc list is present when you receive your own message.
	However, the Bcc list does not appear in the message that the other Bcc list
	recipients receive.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400DOS kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	

{% endraw %}
