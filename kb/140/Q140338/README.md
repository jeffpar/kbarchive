---
layout: page
title: "Q140338: XADM: DS Crashes With Dr. Watson In Details.c"
permalink: /kb/140/Q140338/
---

## Q140338: XADM: DS Crashes With Dr. Watson In Details.c

{% raw %}

	Article: Q140338
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to obtain details of a queued message in the Microsoft Exchange
	Message Transfer Agent (MTA) property page, using the Microsoft Exchange
	Administrator program, the Microsoft Exchange Directory service (DS) may crash
	with a Dr. Watson error. If Microsoft Exchange and Windows NT symbols are
	installed, the Dr. Watson dump will show the crash in Details.c.
	
	CAUSE
	=====
	
	The call made to the DS to obtain the details of the message expects a certain
	number of attributes to be returned. In some cases, these return values can be
	pulled from bad memory. This causes the DS to crash.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
