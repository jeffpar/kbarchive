---
layout: page
title: "Q230288: XFOR: NDR from IMS Has Incorrect 3-Byte Reason Code"
permalink: /kb/230/Q230288/
---

## Q230288: XFOR: NDR from IMS Has Incorrect 3-Byte Reason Code

{% raw %}

	Article: Q230288
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Exchange Message Transfer Agent (MTA) transfers a
	NonDeliveryReasonCode of 3-byte integer. The field is defined in X.411
	specifications as a 1 byte integer. Some X.400 MTAs cannot handle the extra
	bytes and may stop processing information.
	
	
	CAUSE
	=====
	
	The NonDeliveryReasonCode being passed is incorrectly set to -1, which is not a
	valid code.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Internet Mail Service
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Msexcimc.exe | 5.5.2594.0 | 
	+---------------------------+
	| Imcmsg.dll   | 5.52594.0  | 
	+---------------------------+
	
	
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
