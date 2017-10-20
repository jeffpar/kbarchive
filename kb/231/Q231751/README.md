---
layout: page
title: "Q231751: XADM:Can't Renew Signing Key After Applying SP2 for Exchange 5.5"
permalink: /kb/231/Q231751/
---

## Q231751: XADM:Can't Renew Signing Key After Applying SP2 for Exchange 5.5

{% raw %}

	Article: Q231751
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP2
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After applying Service Pack 2 (SP2) for Microsoft Exchange Server 5.5, you
	cannot renew certificates from the Key Management Server. Clients receive e-mail
	saying the request failed, and error 5006 is received on the server.
	
	CAUSE
	=====
	
	A missed case caused the Key Management Server component to return an error
	code.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: KM Server
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Kmserver.exe | 5.5.2602.0 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 2. This problem was first corrected in Exchange Server
	5.5 Service Pack 3.
	
	MORE INFORMATION
	================
	
	Even after the fix is applied, you will need to recover these accounts because
	accounts that fail to renew generate a new signing key and send that to the
	server. Then, when they fail to renew, they are never given back that signing
	key. So now the client still has the first signing key (1) and the server has
	the new signing key (2). After the fix is applied and the account tries to renew
	again, it signs its request with signing key 1, but the server is expecting
	signing key 2. The account must be recovered to get the same signing key to the
	client and the server. After the recovery, the client and server are in sync,
	and any renewal or recovery works fine.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2
	Version           : winnt:5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
