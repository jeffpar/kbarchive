---
layout: page
title: "Q163570: CMEPLN Does Not Always Return Fully Qualified LU Name"
permalink: /kb/163/Q163570/
---

## Q163570: CMEPLN Does Not Always Return Fully Qualified LU Name

	Article: Q163570
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The CPIC function Extract_Partner_LU_Name (CMPELN) returns only the partner LU
	alias, not the fully qualified network name if the conversation is initiated by
	the remote system.
	
	CAUSE
	=====
	
	The Microsoft SNA CPI-C Programmer's Guide states that the CMEPLN() call returns
	either the partner LU alias or the fully qualified partner LU name, but it does
	not specify what conditions determine which value is returned. If the
	conversation is initiated by the remote system with CMACCP(), only the PLU alias
	is stored. The fully qualified PLU name is returned to the CMEPLN() call if the
	conversation is initiated by the CPIC application itself (the CPIC application
	issues the cmallc), and if the CPIC side information is configured with a fully
	qualified PLU name, or if the application specifies a fully qualified PLU name
	using the CMSPLN() or XCMSSI() functions.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below. In the hotfix, the
	function has been modified to always return the fully qualified partner LU name
	unless the CPIC side information (the CPIC Symbolic Destination Name being used)
	for an outgoing conversation has only the Alias configured in the SNA Admin or
	Manager.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	2.0, 2.1, 2.11, 2.11 SP1, 3.0, and 3.0 SP1.
	
	This problem was corrected in the latest Microsoft SNA Server 2.11. For
	information on obtaining the service pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna sp1
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1 kbSNAServ300SP1
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
