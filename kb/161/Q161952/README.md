---
layout: page
title: "Q161952: XFOR: Messages Sent with MSMI Are Malformed"
permalink: /kb/161/Q161952/
---

## Q161952: XFOR: Messages Sent with MSMI Are Malformed

{% raw %}

	Article: Q161952
	Product(s): Microsoft Exchange
	Version(s): 4.0 SP3,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 20-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0 SP3, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you upgrade to Microsoft Exchange Server Service Pack 3, some mail
	messages sent through the Microsoft Mail Connector Interchange (MSMI) are
	malformed. These messages may have extra carriage returns or linefeeds (CR/LF)
	when viewed with the Microsoft Mail MS-DOS or Windows clients.
	
	CAUSE
	=====
	
	There is a logic error in the handling of line wrapping of outgoing messages
	from the MSMI that is exposed by Microsoft Exchange Server Service Pack 3.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0 Service Pack 3 and in Microsoft Exchange Server version 5.0. This
	problem was corrected in the latest Microsoft Exchange Server 4.0 and 5.0 U.S.
	Service Packs. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: SP SP3 wrap wrong incorrect
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2 kbExchange400SP3
	Version           : :4.0 SP3,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
