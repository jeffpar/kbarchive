---
layout: page
title: "Q148679: SNA Server Rejects BIND From AS/400 When Remote End = Host"
permalink: /kb/148/Q148679/
---

## Q148679: SNA Server Rejects BIND From AS/400 When Remote End = Host

{% raw %}

	Article: Q148679
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An SNA Server connection to an AS/400 (configured with Remote End = Host System)
	rejects any BIND sent to it from an AS/400 with a Sense Code of 0x8009.
	
	An SNA Server Data Link Control (DLC) Message trace shows that the SNA Server
	responds to a BIND from the AS/400 with a BIND -RSP similar to the following:
	
	  DLC    01020101->04161000 DLC DATA
	  DLC                       DAF:01 OAF:01 ODAI:off Exp.
	  DLC                       BIND   -RSP SC  FI SD BC EC DR1
	  DLC
	  DLC    ---- Header  at address 00CF5A08, 1 elements ----
	  DLC    00050100 00002D00 01010000 01008A00     <......-.........>
	  DLC
	  DLC    ---- Element at address 011F3208, start 10, end 17 ----
	  DLC    EF900080 09000031                       <.......1        >
	
	The 0x8009 sense code can be seen in Bytes 3 and 4 of the Element data.
	
	NOTE: Please refer to Chapter 9 of the IBM SNA Formats Guide (GA27-3136) for more
	information and a listing other IBM Sense Codes. In addition, Chapter 13 of the
	SNA Server Administration Guide discusses how to enable SNA Server traces.
	
	CAUSE
	=====
	
	SNA server is sometimes required to default to a secondary link station role
	when it communicates with an AS/400, instead of negotiating the link role. The
	only way to have an SNA Server assume a secondary link station role when
	communicating with an AS/400 currently, is to configure the connection as a Host
	connection instead of a Peer connection. Configuring the connection as a Host
	connection works, except in cases when the AS/400 is required to send a BIND to
	the SNA Server. In these cases, the SNA Server interprets the BIND as being for
	a dependent LU, and as no ACTLU command has been received from the AS/400, the
	SNA Server rejects the BIND with sense code 0x8009.
	
	RESOLUTION
	==========
	
	This problem has been corrected by having SNA Server handle Host connections as
	Peer connections with the exception that they will default to a secondary link
	station role instead of a negotiable link station role. However, this only
	applies if the connections have only independent LU 6.2 sessions configured. If
	the connections also have dependent sessions configured, they will be handled
	like normal Host connections.
	
	To correct this problem, apply the fix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.1, 2.11,
	and 2.11 Service Pack 1. This problem was corrected in the latest Microsoft SNA
	Server 2.11 U.S. Service Pack. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna 2.00 2.10 2.11 sp1 kbbug2.00
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
