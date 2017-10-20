---
layout: page
title: "Q247647: XIMS: Colon in Display Name Causes SMTP: to Be Added to Address"
permalink: /kb/247/Q247647/
---

## Q247647: XIMS: Colon in Display Name Causes SMTP: to Be Added to Address

{% raw %}

	Article: Q247647
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp2 exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 12-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A message is not delivered to a mailbox or custom recipient address.
	
	CAUSE
	=====
	
	A colon (:) in the display name of the intended address causes the Outlook Web
	Access (OWA) component to add "SMTP:" to the address.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this issue, remove the colon from the display name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Exchange Server 5.5 Service Pack 4.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2 exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5 SP2,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
