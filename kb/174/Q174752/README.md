---
layout: page
title: "Q174752: XCLN: Windows CE Inbox Client Requires Full Transfer of POP3 Msg"
permalink: /kb/174/Q174752/
---

## Q174752: XCLN: Windows CE Inbox Client Requires Full Transfer of POP3 Msg

{% raw %}

	Article: Q174752
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may receive the following error when you attempt to access a portion of a
	nested MIME message from a Microsoft Windows CE Inbox client:
	
	  Error getting the message: Error retrieving from POP3 server.
	  [Service error: 29]
	
	To configure the Microsoft Windows CE Inbox client to accept all lines of a POP3
	message, follow these steps:
	
	1. From the Service menu, choose Properties.
	
	2. Choose Inbox Folder Preferences for Mail.
	
	3. Under Transfer Limit, select All lines in message.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : 5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
