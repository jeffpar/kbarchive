---
layout: page
title: "Q196241: Event ID 205 Does Not Include Source SAP Information"
permalink: /kb/196/Q196241/
---

## Q196241: Event ID 205 Does Not Include Source SAP Information

	Article: Q196241
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The description for Event ID 205 does not include the Source SAP information,
	which makes it more difficult to determine where the conflict is. The current
	description for this event is as follows:
	
	  Outgoing call from connection <connection name> rejected because dest
	  MAC address <remote network address> and SAP <remote SAP> are
	  already in use by connection <connection name>.
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0, 3.0 Service Pack
	1, 3.0 Service Pack 2, 3.0 Service Pack 3, and 4.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	The new Event ID 205 description has been corrected as follows;
	
	  MessageId=205
	  Severity=Warning
	  Facility=Application
	  SymbolicName=COM0205W
	  Language=English
	
	  Outgoing call from connection %1 rejected because destination MAC
	  address (%2), destination SAP (0x%3) and source SAP (0x%4) are already
	  in use by connection %5.
	
	  EXPLANATION
	  802.2 DLC Connections must have unique destination MAC, destination SAP
	  and source SAP addresses.
	
	  ACTION
	  Reconfigure one of the SNA Server Connections to use a different
	  destination MAC/SAP address or a different source SAP. If the link
	  service is configured to use a fixed source SAP you can change the
	  connection's source SAP only by configuring it to use a different link
	  service.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
