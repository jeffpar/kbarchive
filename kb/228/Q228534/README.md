---
layout: page
title: "Q228534: XFOR: DBCS Attachment Name Disappears When Sending a Mail by Mea"
permalink: /kb/228/Q228534/
---

## Q228534: XFOR: DBCS Attachment Name Disappears When Sending a Mail by Mea

{% raw %}

	Article: Q228534
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP2
	Operating System(s): 
	Keyword(s): exc55sp2 EXC55SP3Fix
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a message with double-byte character set (DBCS) attachment name to
	a Lotus cc:Mail post office (PO) using the Microsoft Exchange Connector for
	Lotus cc:Mail (CCMC), the DBCS attachment name disappears. If you use
	single-byte character set (SBCS) attachment name instead of DBCS, the attachment
	name is kept correctly.
	
	CAUSE
	=====
	
	Exchange Server 5.5 Service Pack 1 CCMC kept DBCS attachment names correctly.
	However Exchange Server 5.5 Service Pack 2 CCMC breaks the behavior.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Connector for Lotus cc:Mail
	
	+------------------------+
	| File name | Version    | 
	+------------------------+
	| Ccmc.exe  | 5.5.2598.0 | 
	+------------------------+
	| Ccmsg.dll | 5.5.2598.0 | 
	+------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 2. This problem was first corrected in Exchange Server
	5.5 Service Pack 3.
	
	Additional query words: QFE Lost
	
	======================================================================
	Keywords          : exc55sp2 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2
	Version           : winnt:5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
