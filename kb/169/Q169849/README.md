---
layout: page
title: "Q169849: XWEB: MAPI Clients Message Status Not Automatically Updating"
permalink: /kb/169/Q169849/
---

## Q169849: XWEB: MAPI Clients Message Status Not Automatically Updating

{% raw %}

	Article: Q169849
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbtshoot kbusage
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you run a Microsoft Outlook Web Access Client and read a message, Outlook or
	Microsoft Exchange Client will not show the message as read until that client
	reads a message.
	
	CAUSE
	=====
	
	Exchange Client only updates the read/unread status of messages when it makes a
	change to a message. As a result, if a message is read by a Web client, it will
	continue to show up as unread in Outlook or Exchange Client until that client
	makes a change (reads a message). This behavior is by product design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtshoot kbusage 
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
