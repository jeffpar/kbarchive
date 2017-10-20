---
layout: page
title: "Q237186: LU6.2 BIND Rejected When Connecting through 3174 NN"
permalink: /kb/237/Q237186/
---

## Q237186: LU6.2 BIND Rejected When Connecting through 3174 NN

{% raw %}

	Article: Q237186
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft SNA Server operator attempts to verify LU 6.2 session
	availability for a given APPC triplet (for example local LU, remote LU, and mode
	name) using the APPC Session Viewer utility, the test completes successfully,
	returning the negotiated session limits and the number of sessions that are
	currently in use. However, when a Transaction Program (TP) subsequently attempts
	to allocate a conversation using the same APPC triplet, the host may reject the
	SNA Server BIND request with an 08210002 (Invalid Session Parameters) sense
	code. The following error message occurs in the Windows NT Application Event
	log:
	
	  
	
	  Event ID: 18
	  Source  : SNA Server
	
	  APPC session activation failure: BIND negative response or UNBIND request received
	
	  Sense data   = 08210002   
	  Connection   = <connection name>
	  LU alias     = <lu name>
	  PLU alias    = <plu alias>
	  Mode name    = <mode name>
	
	
	This particular problem has been observed in LU 6.2 environments, where SNA
	Server has been configured to work with 3174 Networking Nodes and the upper
	layer APPC/CPIC application *requires* contention winner sessions.
	
	CAUSE
	=====
	
	Even though a successful CNOS negotiation has occurred between the partner LUs,
	the IBM 3174 controller is unable to honor contention winner session requests
	initiated by downstream PU 2.1 devices, because the APPC mode name specified in
	the BIND request is not defined in the IBM 3174 configuration.
	
	RESOLUTION
	==========
	
	Configure the IBM 3174 controller so that it recognizes the application mode
	name specified in the BIND request.
	
	MORE INFORMATION
	================
	
	If the 3174 controller is configured as an APPN Networking Node, the 3174 is
	responsible for LU session class of service (COS) routing. The application mode
	name defined in SNA Server must also be defined in the 3174 so that proper
	session routing takes place when the BIND image is received by the 3174. Well
	known modes, such as #BATCH, #BATCHSC, #INTER or #INTERSC are predefined on the
	3174, and therefore, do not need to be configured.
	
	The steps outlined in the following Microsoft Knowledge Base article may not be
	sufficient when the remote end (SNA Server) is issuing the LU6.2 BIND request
	over an application mode that is not recognized by the 3174:
	
	  Q107569 Configuring for LU 6.2 Through a 3174 APPN Network Node
	
	To properly configure the 3174, please follow the steps outlined in the 3174
	Establishment Controller Planning Guide (P/N GA27-3918-02) or contact IBM for
	detailed assistance.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	

{% endraw %}
