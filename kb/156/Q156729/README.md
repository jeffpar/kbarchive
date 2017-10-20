---
layout: page
title: "Q156729: XFOR: Malformed Dir-Sync Transactions Cause DXA to Stop"
permalink: /kb/156/Q156729/
---

## Q156729: XFOR: Malformed Dir-Sync Transactions Cause DXA to Stop

{% raw %}

	Article: Q156729
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Directory Synchronization service (DXA) is processing incoming
	directory synchronization (dir-sync) transactions and is acting as either a
	Dir-Sync Server or Dir-Sync Requester, the DXA stops.
	
	CAUSE
	=====
	
	This is due to malformed addresses in the incoming transaction file. X.400
	addresses must use either a semicolon (;) or a forward slash mark (/) as
	separators. For example:
	
	A valid address:
	
	  A Good, GuyX400:/c=US/admd=ATTMAIL/prmd=TEST/pn=Guy.Good
	
	An invalid address:
	
	  A Bad, OneX400:C=US'A=ATTMAIL;O=ATTMAIL;S=Bad
	
	WORKAROUND
	==========
	
	When the DXA stops while processing incoming transactions the first
	troubleshooting step should be to verify that incoming transactions are not
	malformed and do not contain invalid characters. Cleaning up the illegal
	addresses on the Microsoft Mail postoffices will correct this problem.
	
	Microsoft now has a fix available that will prevent the DXA from stopping when it
	encounters these malformed transactions in the dir-sync process. These addresses
	are thrown away rather than processed.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	
	Additional query words: DirSync DirSynch Dir-Synch
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
