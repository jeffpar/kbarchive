---
layout: page
title: "Q237838: XADM: Exchange Corrupts JPN cc:Mail Subject on Way to Internet"
permalink: /kb/237/Q237838/
---

## Q237838: XADM: Exchange Corrupts JPN cc:Mail Subject on Way to Internet

{% raw %}

	Article: Q237838
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 13-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you set up an Exchange Server computer to be the SMTP gateway of a Japanese
	Lotus cc:Mail post office, if a cc:Mail user sends a Japanese message to an
	Internet address, all Japanese characters become question marks (?) at the
	receiver side.
	
	CAUSE
	=====
	
	When the message is exported from Lotus cc:Mail to Exchange Server, all content
	is converted to UNICODE. But the native code page information (CPID) is not
	saved, so the default Windows NT CPID is used instead.
	
	When the message is converted from UNICODE to the native code page by Internet
	Mail (IMAIL), all the message properties are converted to the default CPID.
	
	If the computer running Windows NT Server is running the English version, all
	Japanese characters are converted to question marks.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : winnt:5.5,5.5 SP1,5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
