---
layout: page
title: "Q275870: Erroneous Query by Win9x SNA Client Causes DNS Event Errors"
permalink: /kb/275/Q275870/
---

## Q275870: Erroneous Query by Win9x SNA Client Causes DNS Event Errors

{% raw %}

	Article: Q275870
	Product(s): Microsoft SNA Server
	Version(s): 3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If more than eight sponsor servers are configured in the Client Configuration
	list box, two different results may occur depending on which SNA Server client
	is being used.
	
	For SNA Server Microsoft Windows NT Clients:
	
	The client attempts to locate the first eight servers in the sponsor list. The
	client does not attempt to locate any additional servers that are listed.
	
	For SNA Server Microsoft Windows 95 and Microsoft Windows 98 Clients:
	
	The client performs the same as the Windows NT client for the first seven
	servers. However, if there are more than eight servers configured in the client,
	when trying the eight server, it concatenates all remaining server names from
	the list to one single string, as follows:
	
	  Find server (server8) (server9) (server10)...(server15) IP address
	
	The gethostbyname function does not find this invalid server on the network.
	
	CAUSE
	=====
	
	The SNA Server Windows 95, Windows 98, and Windows NT client does not properly
	truncate the sponsor server list after reaching the maximum of eight sponsor
	servers.
	
	NOTE: The behavior described for the Windows NT SNA Server client is correct
	behavior.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 (all
	Service Packs), 4.0, 4.0 SP1, 4.0 SP2 and 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	MAXSPONSORS - Maximum allowable sponsor server entries in client = 8
	
	Additional query words: Snabase sp1 sp2 sp3 service pack 1 2 3
	
	======================================================================
	Keywords          : kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
