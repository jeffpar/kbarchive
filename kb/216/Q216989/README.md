---
layout: page
title: "Q216989: XFOR: Chat Service May Truncate Complete Chat Room List"
permalink: /kb/216/Q216989/
---

## Q216989: XFOR: Chat Service May Truncate Complete Chat Room List

{% raw %}

	Article: Q216989
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP2
	Operating System(s): 
	Keyword(s): exc55sp2 EXC55SP3Fix
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Chat Service version 5.5 Service Pack 2 may fail to send
	a complete listing of all the chat rooms present on the server when either a IRC
	or IRCX chat client requests the list. The chat room list may be truncated to
	only include a partial listing of all available chat rooms on the server.
	
	This problem may also exhibit itself in the NAMES, WHO, WHOIS, and LISTX
	commands.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Chat Service
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Chatsvc.exe | 5.5.2532.0 | 
	+--------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange Chat
	Service that is included with Microsoft Exchange Server version 5.5 Service Pack
	2. This problem was first corrected in Exchange Server 5.5 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2
	Version           : winnt:5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
