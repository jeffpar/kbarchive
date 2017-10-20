---
layout: page
title: "Q217768: XADM: Storage Warnings Incomplete for Swedish Clients"
permalink: /kb/217/Q217768/
---

## Q217768: XADM: Storage Warnings Incomplete for Swedish Clients

{% raw %}

	Article: Q217768
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 EXC55SP3Fix
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use English versions of either Microsoft Outlook or the Exchange Client,
	you may receive a message if you have exceeded your mailbox limit. An excerpt of
	this message is shown below:
	
	  Your mailbox has exceeded one or more size limits set by your administrator.
	  Your mailbox size is xxx KB.
	
	This message is localized for the Swedish Exchange Client and Outlook. However,
	the line containing the size of the mailbox is missing from the Swedish version.
	
	CAUSE
	=====
	
	The localized version of the Mdbsz.dll file did not have the correct information
	to display this information.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+------------------------+
	| File name | Version    | 
	+------------------------+
	| Mdbsz.dll | 5.5.2539.0 | 
	+------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Exchange Server 5.5 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2
	Version           : winnt:5.5,5.5 SP1,5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
