---
layout: page
title: "Q140840: 2 Connections Using Same Link Service and Destination Address"
permalink: /kb/140/Q140840/
---

## Q140840: 2 Connections Using Same Link Service and Destination Address

	Article: Q140840
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When SNA Server has two connections configured to use the same underlying link
	service and same Remote Network Address, the remote end deactivates the first
	connection as soon as an XID packet to activate the second connection arrives.
	
	It is true that two link stations cannot use the same source service access point
	(SAP) address to the same destination link station. However, SNA Server should
	not disrupt an already active connection when another request arrives for the
	same Network address (or SAP) for the same link service.
	
	With SNA Server 2.11 the following message appears when attempting to configure
	two connections in this way:
	
	  The same Remote Network Address and SAP have already been specified for this
	  link service in connection <connection name>. To create more than one
	  connection to the same remote machine, add one of more 802.2/DLC link
	  services via SNA Server Setup over the same adapter with different local SAP
	  addresses. This will auto-create additional connections in SNA Server Admin.
	  Alternatively, if further SAPs are available at the remote machine, choose a
	  different remote SAP for this connection. OK.
	
	After you choose OK, SNA Server does not force the Administrator to change the
	the configuration. Therefore, the above problem results.
	
	RESOLUTION
	==========
	
	Microsoft has a fix that does not prevent an Administrator from configuring two
	connections for the same remote network address using the same link service. The
	808.2 Link Service now detects the address conflict and disables the second
	connection with the following event id:
	
	  Event ID: 205 - "An address pair is already in use."
	
	Note that it also detects the case where the address pair is first "in use" due
	to an incoming call as well as an outbound one.
	
	Microsoft has updated the following files to correct this problem:
	
	  <snaroot>\SYSTEM\SNASERVR.EXE
	  <snaroot>\SYSTEM\TRCSERVR.EXE
	  <snaroot>\SYSTEM\SNADLC.DLL
	  <snaroot>\SYSTEM\SNAEVENT.DLL
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11 snatrace
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
