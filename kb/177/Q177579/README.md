---
layout: page
title: "Q177579: SNA Client Loses One TCP/IP Address on a Multihomed Server"
permalink: /kb/177/Q177579/
---

## Q177579: SNA Client Loses One TCP/IP Address on a Multihomed Server

	Article: Q177579
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a client connects to a multihomed server with an IP address that is not the
	first one, it loses the server's first IP address. For example, a server has two
	addresses, 128.207.141.82 and 157.54.165.222. If the client connects to that
	server using the second address, the first address is lost and the second
	address is duplicated. In effect, the client now has two identical addresses in
	its service table.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 SP2 and
	4.0.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	A supported fix for SNA Server version 4.0 is now available, but has not been
	fully regression tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP2
	Version           : WINDOWS:3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
