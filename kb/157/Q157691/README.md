---
layout: page
title: "Q157691: XADM: TNS Resolution Causes Buffer Overflow"
permalink: /kb/157/Q157691/
---

## Q157691: XADM: TNS Resolution Causes Buffer Overflow

	Article: Q157691
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Federal sites needing to use Tactical Name Service (TNS) instead of Domain Name
	Service (DNS), will encounter the following issue. When Microsoft Exchange looks
	to connect to another SMTP server, it queries the TNS for an MX Record (SMTP
	address). If the address is present, everything works fine. If the address is
	not present, the TNS server sends its own IP address. If the Server hardware is
	an old UNIX computer, with a total input buffer of 200k, the Microsoft Exchange
	mail headers will cause a buffer overflow.
	
	MORE INFORMATION
	================
	
	Basic TNS information:
	
	1. It is run on a special version of UNIX that the U.S. ARMY developed.
	
	2. It includes only 1 zone.
	
	3. It only listens on one IP address.
	
	4. It dynamically registers hosts.
	
	5. It does not support MX priority/preference values.
	
	6. It does not support SOA records.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
