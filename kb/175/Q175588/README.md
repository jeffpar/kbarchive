---
layout: page
title: "Q175588: XFOR: Microsoft Exchange DX Returns Event ID 220 or 221"
permalink: /kb/175/Q175588/
---

## Q175588: XFOR: Microsoft Exchange DX Returns Event ID 220 or 221

{% raw %}

	Article: Q175588
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When starting the Microsoft Exchange Directory Synchronization Service (DXA),
	you may receive the following events in the Exchange Server Application Log:
	
	  Event ID: 220
	  Source: MSExchangeDX
	  Description: Multiple dirsync messages to and from <Remote Dirsync
	  Requestor Name> have been lost or delayed.
	
	  Event ID: 221
	  Source: MSExchangeDX
	  Description: An Import Reply (full export) will be done to <Remote
	  Dirsync Requestor Name> on the next reply.
	
	CAUSE
	=====
	
	The above errors can occur when there are corrupted messages located on the DXA
	queue in the Message Transfer Agent (MTA).
	
	WORKAROUND
	==========
	
	To remove corrupted DXA messages from the Exchange MTA, follow the steps
	outlined in the Microsoft Knowledge Base article, Q164506, "XFOR: How to Remove
	a Corrupted DXA Message from Exchange MTA."
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
