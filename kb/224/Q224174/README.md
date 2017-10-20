---
layout: page
title: "Q224174: XADM: Administrator Program Inaccurate When Mailbox Is Over 2 GB"
permalink: /kb/224/Q224174/
---

## Q224174: XADM: Administrator Program Inaccurate When Mailbox Is Over 2 GB

{% raw %}

	Article: Q224174
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In the Microsoft Exchange Server Administrator program, under Mailbox Resources,
	you can check the size of a mailbox. If a mailbox exceeds 2 GB in size, the
	Exchange Server Administrator program shows the size as being 2 GB. However, the
	"Total no. Items" column correctly reflects the number of messages in the
	mailbox.
	
	CAUSE
	=====
	
	The Exchange Server information store does not report the correct size of the
	mailbox back to the Exchange Server Administrator program when it exceeds 2 GB.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Gapi32.dll | 5.5.2560.0 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2560.0 | 
	+-------------------------+
	| Store.exe  | 5.5.2560.0 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
