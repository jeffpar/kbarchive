---
layout: page
title: "Q252773: XADM: Delete All Custom Forms Deletes Contact Distribution List"
permalink: /kb/252/Q252773/
---

## Q252773: XADM: Delete All Custom Forms Deletes Contact Distribution List

{% raw %}

	Article: Q252773
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an Exchange Server administrator chooses to delete all custom forms in the
	Microsoft Exchange Server Administrator program, the distribution list in the
	Contacts folder is also deleted.
	
	CAUSE
	=====
	
	A new message class, IPM.DistList, was added for the Microsoft Outlook 2000
	distribution list feature, but the Exchange Server Administrator program does
	not recognize this new message class and treats it as a custom form.
	
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
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
