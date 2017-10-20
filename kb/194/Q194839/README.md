---
layout: page
title: "Q194839: XADM: Outlook Web Access Cannot Resolve Name"
permalink: /kb/194/Q194839/
---

## Q194839: XADM: Outlook Web Access Cannot Resolve Name

{% raw %}

	Article: Q194839
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1
	Operating System(s): 
	Keyword(s): exc55sp2fix exc55 exc55sp1
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Outlook Web Access may not resolve a recipient name if the first character of
	trailing byte is '0x00' on UNICODE (like 0x5800, 0x4e00, 0x5200). This symptom
	depends on only the first wide character. No matter what character length of
	recipient name, this phenomenon occurs.
	
	CAUSE
	=====
	
	Outlook Web Access converts Recipient's name to UNICODE. But Exchange Server
	mishandles the recipient name when the first UNICODE trailing bytes is 0x00.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: MAPI
	
	  File Name    Version
	  -----------------------
	  Mapi32.dll   5.5.2430.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: ambiguous name resolution smtp
	
	======================================================================
	Keywords          : exc55sp2fix exc55 exc55sp1 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5,5.5 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
