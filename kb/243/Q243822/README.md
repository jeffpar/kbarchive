---
layout: page
title: "Q243822: XCON: Incorrect Internet Mail Service Msg Size Restriction"
permalink: /kb/243/Q243822/
---

## Q243822: XCON: Incorrect Internet Mail Service Msg Size Restriction

{% raw %}

	Article: Q243822
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 12-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In the Microsoft Exchange Server Administrator program, you can set message size
	limits for mail processed by the Internet Mail Service. After you apply Exchange
	Server Service Pack 3, the Administrator program may display an incorrect
	message size. This is only a issue with displaying the correct size; the correct
	size is actually used by the Internet Mail Service for message size
	restrictions.
	
	CAUSE
	=====
	
	The Administrator program is incorrectly multiplying the message size limit
	value by 102.4. This issue only affects the value reflected in the Administrator
	program.
	
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
	
	MORE INFORMATION
	================
	
	To reproduce this behavior in the Administrator program:
	
	1. On the Internet Mail tab of the Internet Mail Service, click the E-Mail
	  Domain button next to Specify by E-Mail Domain.
	
	2. Add a domain or edit an existing domain.
	
	3. Specify a value in the Maximum size field.
	
	4. Click OK to quit the Internet Mail Service configuration.
	
	5. Open the Internet Mail Service configuration again, and note the Maximum size
	  field. The value that you entered before is multiplied by 102.4. For example,
	  if you entered 2000 before, the value appears as 204800.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
