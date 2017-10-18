---
layout: page
title: "Q189477: Linkutil.exe May Display Link Service Properties Incorrectly"
permalink: kb/189/Q189477/
---

## Q189477: Linkutil.exe May Display Link Service Properties Incorrectly

	Article: Q189477
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Linkutil.exe utility to display link service properties may show
	incorrect properties.
	
	CAUSE
	=====
	
	The search for link service always finds the last link service type, rather than
	stopping when the link service is found.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11 SP2,
	3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, and 4.0 SP1. We are researching this
	problem in SNA Server versions 2.X and 3.0 and will post more information here
	in the Knowledge Base as it becomes available.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	WORKAROUND
	==========
	
	If possible, view the properties of a link service in SNA Server Manager.
	
	Additional query words: snadlc snasdlc snachannel snatwinax snax25
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
