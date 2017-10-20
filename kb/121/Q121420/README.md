---
layout: page
title: "Q121420: IBM 3174 Support C - Rel. 5.0 Causes Negative Bind Response"
permalink: /kb/121/Q121420/
---

## Q121420: IBM 3174 Support C - Rel. 5.0 Causes Negative Bind Response

{% raw %}

	Article: Q121420
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the event that the Customer Information Control System (CICS) region goes
	down, CICS will attempt to renegotiate the LU 6.2 SNASVCMG mode sessions as the
	first step in getting the connection back to an active state. It does this by
	sending down bind requests to SNA Server. When talking through a 3174
	Establishment Controller running Configuration Support C - Release 5.0, SNA
	Server may reject these bind requests which will cause the sessions, and
	therefor the connection, to stay in a pending state.
	
	
	RESOLUTION
	==========
	
	Downgrade to 3174 Establishment Controller Configuration Support C - Release
	3.0. There may be other resolutions that also correct this problem. Release 3.0
	corrected one customer's case.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	

{% endraw %}
