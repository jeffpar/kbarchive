---
layout: page
title: "Q222621: XADM: Buffer Is Not Cleared in Exchange LDAP Service"
permalink: /kb/222/Q222621/
---

## Q222621: XADM: Buffer Is Not Cleared in Exchange LDAP Service

{% raw %}

	Article: Q222621
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 EXC55SP3Fix
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use Telnet to connect to Transmission Control Protocol (TCP) port 3389,
	you may experience either of the following symptoms:
	
	- If you send an invalid Lightweight Directory Access Protocol (LDAP) command,
	  the Exchange Server computer may store all the data you send in a buffer
	  until you end the connection, rather than clearing the buffer after the
	  invalid command is sent. This could eventually cause the server to run out of
	  memory.
	
	- If you send an LDAP bind request with a Distinguished Name that is longer
	  than 1 KB, the directory service may stop unexpectedly.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Directory
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Dsamain.exe | 5.5.2575.0 | 
	+--------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: denial of service memory leak
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2
	Version           : winnt:5.5,5.5 SP1,5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
