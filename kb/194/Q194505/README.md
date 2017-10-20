---
layout: page
title: "Q194505: XADM: NDR When Message Contains 8-Bit Subject"
permalink: /kb/194/Q194505/
---

## Q194505: XADM: NDR When Message Contains 8-Bit Subject

{% raw %}

	Article: Q194505
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
	
	When you use the Microsoft information store version 5.5.2402.0 or later, and
	message contains an 8-bit subject, it may be returned with a non-delivery report
	(NDR). If the message is delivered to users on the same server, this never
	happens.
	
	CAUSE
	=====
	
	There was a failure in mapping the 8-bit character string to a wide- character
	(Unicode) string.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Information Store
	
	  File Name    Version
	  -----------------------
	  Gapi32.dll   5.5.2410.0
	  Mdbmsg.dll   5.5.2410.0
	  Store.exe    5.5.2410.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix exc55 exc55sp1 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5,5.5 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
