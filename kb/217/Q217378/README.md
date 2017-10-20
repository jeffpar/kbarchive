---
layout: page
title: "Q217378: XFOR: Chat Service Stops Unexpectedly, Unable to Change Nickname"
permalink: /kb/217/Q217378/
---

## Q217378: XFOR: Chat Service Stops Unexpectedly, Unable to Change Nickname

{% raw %}

	Article: Q217378
	Product(s): Microsoft Exchange
	Version(s): winnt:2.0,5.5
	Operating System(s): 
	Keyword(s): MCIS_MSG exc55 EXC55SP3Fix
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 Service Packs 1, 2 
	- Microsoft Commercial Internet System version 2.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you connect to a chat server that is running the Microsoft Exchange or
	Microsoft Commercial Internet System (MCIS) Chat Service, you may experience
	either of the following symptoms:
	
	- If you repeatedly send the AUTH command to the server, the Chat Service may
	  stop unexpectedly.
	
	- If you attempt to change your nickname, an error message indicating that you
	  are attempting to change the nickname too frequently may be displayed.
	
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
	| Chatsvc.exe | 5.5.2541.1 | 
	+--------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Chat Service that is
	included with the Microsoft products listed at the beginning of this article.
	This problem was first corrected in Exchange Server 5.5 Service Pack 3.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : MCIS_MSG exc55 EXC55SP3Fix 
	Technology        : kbAudDeveloper kbZNotKeyword8 kbExchangeSearch kbZNotKeyword2 kbMCISSearch kbMCIS200 kbExchange550SP1
	Version           : winnt:2.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
