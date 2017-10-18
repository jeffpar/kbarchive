---
layout: page
title: "Q171114: Distributed Link Service Allows Link Type To Be Changed"
permalink: kb/171/Q171114/
---

## Q171114: Distributed Link Service Allows Link Type To Be Changed

	Article: Q171114
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The configured Link Type for a Distributed Link Service can be changed after the
	link service is installed, even though this should not be possible.
	
	The Distributed Link Service configuration is not preventing the link type for a
	distributed link service from being changed after it was installed. The link
	type should not be configurable after the link service is installed, because the
	connection properties are different for the various connection types. For
	example, the connection parameters for an 802.2 DLC connection are different
	than the parameters for a Leased Line SDLC connection.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	When the fix is applied, the Distributed Link Service configuration is updated to
	prevent the link type from being changed after a Distributed Link Service is
	installed with one exception. The exception is for Ethernet 802.2 and TokenRing
	802.2 link types. Either one of these link types can be changed to the other,
	because the 802.2 DLC connection parameters are the same for either Ethernet or
	Token Ring connections.
	
	MORE INFORMATION
	================
	
	When you are using the Distributed Link Service (DLS) feature of SNA Server, the
	Link Type parameter in the Distributed Link Service properties on a remote SNA
	Server computer is used to specify the type of link being distributed by the
	central SNA Server computer. For example, if the central SNA Server computer is
	distributing an 802.2 DLC Link Service over an Ethernet adapter, the Link Type
	on the Distributed Link Service would need to be Ethernet 802.2 on the remote
	SNA Server computer.
	
	NOTE: A Distributed Link Service will show up in SNA Server Manager as SnaRem1,
	SnaRem2, and so on.
	
	Under SNA Server 3.0 and 3.0 SP1, the Distributed Link Service Properties dialog
	box lists the following Link Types:
	
	  Channel Attach
	  DFT
	  Ethernet 802.2
	  Leased SDLC
	  Switched SDLC
	  TokenRing 802.2
	  Twinax
	  X.25/QLLC.
	
	All of these options remain available after the link service is installed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
