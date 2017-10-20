---
layout: page
title: "Q226329: XFOR: Connector for Lotus Notes Access Violation in Lsmexout"
permalink: /kb/226/Q226329/
---

## Q226329: XFOR: Connector for Lotus Notes Access Violation in Lsmexout

{% raw %}

	Article: Q226329
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
	
	When you are running the Exchange Notes Connector for Lotus Notes, the Lsmexout
	process may stop. When this occurs, you receive an access violation error
	message. This behavior occurs if the Connector program tries to export a message
	from Microsoft Exchange Server to Lotus Notes, and the e-mail address of one of
	the message recipients is more than 383 characters in length. Usually, a message
	recipient is not this large, but may be because of some other previous
	processing failure that is possibly outside the scope of Microsoft Exchange
	Server.
	
	CAUSE
	=====
	
	This problem occurs because additional checks have been added to determine the
	length of a message recipient's e-mail address before attempting to convert it.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Exchange Notes Connector
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Lsmexif.dll | 5.5.2587.0 | 
	+--------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: accvio
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
