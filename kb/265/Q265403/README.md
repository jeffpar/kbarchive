---
layout: page
title: "Q265403: XFOR: Outbound X.400 Message Created by CDO May Result in NDR"
permalink: kb/265/Q265403/
---

## Q265403: XFOR: Outbound X.400 Message Created by CDO May Result in NDR

	Article: Q265403
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550sp4Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A message created by Collaboration Data Objects (CDO) with an attachment but no
	body, may be rejected as undeliverable by a foreign X.400 system. If a similar
	message is created by using Microsoft Outlook 2000, it is successfully accepted
	by the foreign system.
	
	CAUSE
	=====
	
	When you use CDO to create a message that contains an attachment, but no body,
	the PR_BODY field appears to be null. When this is converted to X.400 format, a
	P2_IA5Text body part is created with a hexadecimal value of 16 00. The "00" may
	cause the receiving foreign X.400 system to assume that the message is
	malformed, and reject it.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server 5.5. This
	problem was first corrected in Exchange Server 5.5 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
