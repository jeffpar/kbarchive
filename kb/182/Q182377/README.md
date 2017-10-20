---
layout: page
title: "Q182377: XFOR: OnJoin and OnPart Messages Not Displayed with Chat Client"
permalink: /kb/182/Q182377/
---

## Q182377: XFOR: OnJoin and OnPart Messages Not Displayed with Chat Client

{% raw %}

	Article: Q182377
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange Chat client to connect to a Microsoft
	Internet Chat Server, OnJoin and OnPart messages are not displayed.
	
	CAUSE
	=====
	
	The Microsoft Internet Chat Service (ICS) has the ability to set OnJoin and
	OnPart messages on individual channels. The OnJoin message is displayed to a
	client upon joining (/JOIN) a channel, and the OnPart message is displayed when
	leaving (/PART) the channel.
	
	The Microsoft Exchange Chat client uses a proprietary protocol known as MIC to
	communicate with the ICS, and this protocol does not support the OnJoin and
	OnPart messages.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Chat Service,
	which ships with Exchange Server version 5.5. Microsoft is researching this
	problem and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	MORE INFORMATION
	================
	
	Any chat client that uses the IRC protocol can see these messages.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
