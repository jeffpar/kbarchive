---
layout: page
title: "Q166521: XFOR: X.400 Address is Encapsulated on SMTP Messages"
permalink: /kb/166/Q166521/
---

## Q166521: XFOR: X.400 Address is Encapsulated on SMTP Messages

{% raw %}

	Article: Q166521
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send e-mail using the Microsoft Exchange Server version 5.0 Internet
	Mail Service (IMS), the X.400 address may be encapsulated into the Mail From
	field.
	
	This occurs when a DDA is specified on the sending mailbox's X.400 address with
	type: MSXCX500. This occurs even if a valid SMTP proxy address is specified for
	the mailbox.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: X400 X500 DN IMC
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
