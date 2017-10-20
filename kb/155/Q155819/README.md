---
layout: page
title: "Q155819: XADM: IMC Can't Decode Mail That Uses the EUC-KR Charset"
permalink: /kb/155/Q155819/
---

## Q155819: XADM: IMC Can't Decode Mail That Uses the EUC-KR Charset

{% raw %}

	Article: Q155819
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Internet Mail Connector(IMC) will fail to decode messages
	sent from Netscape using the EUC-KR character set (charset).
	
	CAUSE
	=====
	
	This fails because of a conflict in charsets. When the IMC translates Korean
	messages, it uses the ISO-2022-KR charset, however, Netscape uses the EUC-KR
	charset.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: SP3 DBCS EUC ISO-2022
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
