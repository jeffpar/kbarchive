---
layout: page
title: "Q185986: XADM: Attached DBCS Message Not Displayed Properly"
permalink: /kb/185/Q185986/
---

## Q185986: XADM: Attached DBCS Message Not Displayed Properly

{% raw %}

	Article: Q185986
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you attach a message that contains double-byte character set (DBCS)
	characters to another message, and then use a DBCS e-mail client to send the
	messages to a computer that is running the U.S. version of Microsoft Exchange
	Server, the attached message may not be displayed properly when you open the
	messages in another DBCS e-mail client. Depending on the specific DBCS clients
	you use to send and receive the messages, the DBCS characters may be displayed
	as question marks (?) or they may be unreadable.
	
	CAUSE
	=====
	
	This problem occurs when the server uses the wrong codepage to convert the
	messages. When this occurs, the DBCS characters in the attached message may be
	converted to single-byte character set (SBCS) instead. This may cause the
	characters to be displayed incorrectly when you open the message in a DBCS
	e-mail client.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	Additional query words: ascii ansi unicode
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
