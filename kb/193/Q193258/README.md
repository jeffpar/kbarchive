---
layout: page
title: "Q193258: XADM: DBCS Text in Bulleted List Not Displayed Properly"
permalink: /kb/193/Q193258/
---

## Q193258: XADM: DBCS Text in Bulleted List Not Displayed Properly

{% raw %}

	Article: Q193258
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1
	Operating System(s): 
	Keyword(s): exc55sp2fix exc55 exc55sp1
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you send a message that contains a bulleted list of double-byte character set
	(DBCS) text to a computer that is running the U.S. version of Microsoft Exchange
	Server, and then the message is replied to, some of the DBCS text may not be
	displayed correctly when you view the reply in an e- mail client. Note that this
	problem only occurs when the reply is received using Post Office Protocol
	version 3 (POP3).
	
	CAUSE
	=====
	
	This problem occurs when the DBCS text is not converted properly when the
	information store converts the message from Rich Text Format (RTF) to Hypertext
	Markup Language (HTML).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Information Store
	
	  File Name    Version
	  -----------------------
	  Mdbmsg.dll   5.5.2397.0
	  Store.exe    5.5.2397.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	Additional query words: rtf/html
	
	======================================================================
	Keywords          : exc55sp2fix exc55 exc55sp1 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5,5.5 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
