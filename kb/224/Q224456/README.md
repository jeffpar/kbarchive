---
layout: page
title: "Q224456: XFOR: Properties Changed After Member Moves to Different Channel"
permalink: /kb/224/Q224456/
---

## Q224456: XFOR: Properties Changed After Member Moves to Different Channel

{% raw %}

	Article: Q224456
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a user leaves a channel and then joins a different channel on the same
	Microsoft Exchange Chat Service computer, the object identifier (OID) associated
	with his or her member record does not change. If you send a command that
	modifies a channel member's properties before he or she leaves the original
	channel, but the command is not received by the server until after the user
	joins the new channel, the user's properties are still modified. For example, if
	you use the MODE +O command to give operator privileges to a user in a channel,
	but the user moves to a different channel before the command is received by the
	server, the user is still given operator privileges when the command is
	received.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Chat Server
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Chatsvc.exe | 5.5.2503.0 | 
	+--------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	After you apply the fix, if the channel specified in the command is not the same
	as the channel that the user is currently a member of, the user's properties are
	not modified.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
