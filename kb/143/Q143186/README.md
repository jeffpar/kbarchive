---
layout: page
title: "Q143186: XADM: PerfMon Limited to 53 MTA Instances"
permalink: kb/143/Q143186/
---

## Q143186: XADM: PerfMon Limited to 53 MTA Instances

	Article: Q143186
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Only 53 Microsoft Exchange Message Transfer Agents (MTAs) can be viewed in the
	Windows NT Performance Monitor (PerfMon).
	
	CAUSE
	=====
	
	The MTA service limits the number of MTA PerfMon instances to 53 by default.
	
	MORE INFORMATION
	================
	
	The number of MTA PerfMon instances can be viewed by starting PerfMon, clicking
	the Edit menu, clicking Add to Chart, clicking MSExchangeMTA Connections in the
	Object drop down box, and then viewing the Instances list box. The maximum
	number of instances viewable by default is 53 and this includes other MTAs,
	MDBs, and gateways.
	
	The number of instances is calculated using the LAN-MTAs registry parameter
	under:
	
	  HKEY_LOCAL_MACHINE
	     System
	        CurrentControlSet
	           Services
	              MSExchangeMTA
	                 Parameters
	
	If the LAN-MTAs parameter is set to a value less than 53, there will be a maximum
	number of 53 instances viewable.
	
	Microsoft Exchange Servers that are exhibiting many MTA 9406 and 9407 event ID's
	might need to have this value increased.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
