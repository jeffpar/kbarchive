---
layout: page
title: "Q241556: XADM: OpenMsgStore Function Is Not Thread Safe"
permalink: /kb/241/Q241556/
---

## Q241556: XADM: OpenMsgStore Function Is Not Thread Safe

{% raw %}

	Article: Q241556
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a program is running multiple threads that both run OpenMsgStore repeatedly,
	a deadlock may occur after some time.
	
	CAUSE
	=====
	
	This issue can occur if a thread (T1) is holding a critical section object (CS1)
	and is waiting for another critical section (CS2) that is being held by another
	thread (T2) that is waiting for the critical section (CS1), which leads to a
	deadlock situation.
	
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
	
	Additional query words: MAPI
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
