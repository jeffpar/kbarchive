---
layout: page
title: "Q245979: XADM: Other Replicated Sites Shown in Mailbox Manager Policies"
permalink: /kb/245/Q245979/
---

## Q245979: XADM: Other Replicated Sites Shown in Mailbox Manager Policies

{% raw %}

	Article: Q245979
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Containers from multiple sites are displayed in the Policies tab of the Mailbox
	Manager program if the sites have names with identical first characters. For
	example, if you have sites that are named Redmond and Redmond1 and you install
	the Mailbox Manager program in the Redmond site, containers from both sites are
	displayed in the Policies tab.
	
	CAUSE
	=====
	
	To display all of the containers in the Exchange Server Administrator program,
	the Distinguished Names (DN) of all the containers are compared to the current
	site DN name so that only the containers that belong to that site are displayed.
	There is a issue in performing the comparison.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	Install the Mailbox Manager program in the site that has more characters in its
	site name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	
	Additional query words: mblean policies
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
