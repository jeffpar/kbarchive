---
layout: page
title: "Q140947: XADM: Number of Active Logons Counter Always Zero"
permalink: kb/140/Q140947/
---

## Q140947: XADM: Number of Active Logons Counter Always Zero

	Article: Q140947
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
	
	The Windows NT Performance Monitor (PerfMon) counter Number of Active Client
	Logons, for Microsoft Exchange Server, always returns a value of zero.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The Number of Active Client Logons PerfMon counter is located under the
	MSExchangeIS Private object in PerfMon.
	
	There is also a counter called the Number of Client Logons on this object. The
	Number of Active Client Logons PerfMon counter is the number of sessions,
	logons, or users that have performed an RPC operation within the last ten
	minutes.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
