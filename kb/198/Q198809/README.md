---
layout: page
title: "Q198809: XIMS: Invisible Users Become Visible When Joining a Channel"
permalink: /kb/198/Q198809/
---

## Q198809: XIMS: Invisible Users Become Visible When Joining a Channel

{% raw %}

	Article: Q198809
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When performing a WHO command from a Chat client to the Microsoft Exchange Chat
	Service, when an invisible user joins a channel, that user is listed in the WHO
	output. The client issuing the WHO command is not an IRC operator, and is not a
	member of any channels.
	
	STATUS
	======
	
	This is by design. When an invisible user joins a 'public' channel or is in a
	common channel with the user executing the WHO command, the user will appear in
	the WHO list.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
