---
layout: page
title: "Q145924: XCLN: Insert Message View Shows Incorrect List"
permalink: /kb/145/Q145924/
---

## Q145924: XCLN: Insert Message View Shows Incorrect List

{% raw %}

	Article: Q145924
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0 RC2
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances, when you insert a message into a newly composed
	message, the Insert Message dialog box shows the incorrect view.
	
	CAUSE
	=====
	
	If you enable and then remove an Inbox filter, when you attempt to insert a
	message into a new message, the list of available messages is that of the
	filtered Inbox and not of the actual Inbox. The problem is the views do not get
	refreshed timely when doing an Insert Message.
	
	RESOLUTION
	==========
	
	You can change focus to another folder, then change back to the Inbox. This
	forces a refresh of the Folder view, and the correct view will then be used.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange version
	4.0 Windows clients. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: views clients
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0 RC2
	
	=============================================================================
	

{% endraw %}
