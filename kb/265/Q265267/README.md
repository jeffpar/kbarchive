---
layout: page
title: "Q265267: XIMS: Chat Server Causes AV w/Chat Server Extension, MIC Client"
permalink: /kb/265/Q265267/
---

## Q265267: XIMS: Chat Server Causes AV w/Chat Server Extension, MIC Client

{% raw %}

	Article: Q265267
	Product(s): Microsoft Exchange
	Version(s): 2.0,2.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550sp4Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP1, 5.5 SP2, 5.5 SP3 
	- Microsoft Commercial Internet System versions 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you implement a chat-specific server extension filter that cancels a chat
	server event, an Exchange Server 5.5 chat server may cause an access violation
	when Microsoft Comic Chat client 2.0 or earlier tries to join an existing
	channel that supports only the Microsoft Internet Chat (MIC) Protocol.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Exchange Server 5.5 Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550sp4Fix 
	Technology        : kbAudDeveloper kbExchangeSearch kbZNotKeyword2 kbMCISSearch kbMCIS200 kbMCIS250 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :2.0,2.5,5.5 SP1,5.5 SP2,5.5 SP3
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
