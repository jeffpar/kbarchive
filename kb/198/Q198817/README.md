---
layout: page
title: "Q198817: CHAT: Channel with Keys Set May Block Sysop"
permalink: /kb/198/Q198817/
---

## Q198817: CHAT: Channel with Keys Set May Block Sysop

	Article: Q198817
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you connect to a Chat Server through an Internet Relay Chat (IRC) client
	using the Sysop account, an attempt to type a channel without providing a
	keyword may fail. This failure will generate the following error message:
	
	  Cannot join channel.
	
	CAUSE
	=====
	
	The channel is a persistent one, where ownerkey, and memberkey are set. In the
	persistent channel, when the ownerkey is set, an owner may have created the
	memberkey. Also, the system-wide SysopIsOwner flag does not apply to this type
	of channel. It applies only to the dynamic channels.
	
	Consequently, the SysopIsHost flag must be set on the persistent channel
	otherwise the Sysop can only join as a member. When joining as a member, the
	Sysop may be blocked from the channel if there is a memberkey set.
	
	WORKAROUND
	==========
	
	To work around this problem, set SysopIsHost on the channel.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
