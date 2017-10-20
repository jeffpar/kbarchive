---
layout: page
title: "Q186915: XFOR: Notes Connector May Send Empty Messages"
permalink: /kb/186/Q186915/
---

## Q186915: XFOR: Notes Connector May Send Empty Messages

{% raw %}

	Article: Q186915
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under certain circumstances, messages sent from a Lotus Notes user to an
	Exchange user may arrive without the message body.
	
	CAUSE
	=====
	
	This problem has been seen when a Lotus Notes user embeds an object in a Notes
	message and sends the message to an Exchange user via the Exchange Notes
	Connector.
	
	The following errors are logged in the Microsoft Exchange Connectivity
	Administrator Log Browser:
	
	1998/05/25 10:04:26- LME-NOTES-NTSMEX(015c) 2 41301:Notes returned code:
	3a4 (hex)
	>> ntshcint(1008)
	1998/05/25 10:04:26- LME-NOTES-NTSMEX(015c) 2 41300:Notes Package ID:
	Notes
	Index Facility (NIF). Extended Reason String: Incorrectly formatted
	Composite records in file.
	>> ntshcint(1020)
	1998/05/25 10:04:26- LME-NOTES-NTSMEX(015c) 2 41358:Error obtaining Notes
	message body item
	>> ntshcm(5418)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: exchange notes blank body message object connector
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : 5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
