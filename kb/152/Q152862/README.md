---
layout: page
title: "Q152862: XADM: Specify Host Dialog in Administrator Reverses Order"
permalink: /kb/152/Q152862/
---

## Q152862: XADM: Specify Host Dialog in Administrator Reverses Order

{% raw %}

	Article: Q152862
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can specify to either accept or reject messages by host via the Accept or
	Reject by Host option and the Specify Hosts button on the Connections tab of the
	property page for the Microsoft Exchange Internet Mail Connector (IMC) in the
	Microsoft Exchange Administrator program. After you enter this information and
	select OK, when you re-open this property page the order of the IP addresses
	that you entered will be reversed.
	
	MORE INFORMATION
	================
	
	For example, if you enter the IPs: 1.1.1.1, 2.2.2.2, and 3.3.3.3, when you
	reopen this page, the order will be: 3.3.3.3, 2.2.2.2, and 1.1.1.1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: XFOR
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
