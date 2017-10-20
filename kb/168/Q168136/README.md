---
layout: page
title: "Q168136: XCON: X.400 Exchange Interop with Foreign MTA Causing NDR"
permalink: /kb/168/Q168136/
---

## Q168136: XCON: X.400 Exchange Interop with Foreign MTA Causing NDR

{% raw %}

	Article: Q168136
	Product(s): Microsoft Exchange
	Version(s): Platform:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When sending messages using an X.400 Connector from a foreign message transfer
	agent (MTA) to an Exchange Server MTA with an ADMD= " " (Space), a non-delivery
	report (NDR) will be generated which refers to invalid parameters.
	
	CAUSE
	=====
	
	This problem occurs because of the way Exchange Server MTA handles numeric ADMD
	(Administrative management domain name).
	
	MORE INFORMATION
	================
	
	Exchange Server supports this properly in all originator/recipient address
	fields but not in other parts of the envelope (for example, MTSID,
	Bilateral-Info, External, and Internal-Trace- Info).
	
	WORKAROUND
	==========
	
	To work around this issue, do not use a space or numeric name for the Exchange
	Server MTA when connecting with foreign MTAs.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Exchange Server 4.0.
	
	This bug was corrected in Exchange Server 5.0.
	
	Additional query words: Interop ISOCORE
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : Platform:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
