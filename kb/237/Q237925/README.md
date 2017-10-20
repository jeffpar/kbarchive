---
layout: page
title: "Q237925: Windows 3.x SNA Client Truncates Workstation DNS Name"
permalink: /kb/237/Q237925/
---

## Q237925: Windows 3.x SNA Client Truncates Workstation DNS Name

{% raw %}

	Article: Q237925
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna40
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running the 16-bit SNA Server client for Windows 3.x and open a
	host session through the SNA Server computer, you may receive an error
	indicating that no resources are available. This problem can occur if the client
	is configured to use a Fully Qualified Domain Name (FQDN) in its TCP/IP
	configuration.
	
	CAUSE
	=====
	
	The SNA Server client for Windows 3.x truncates the Fully Qualified Domain Name
	(FQDN) of the workstation to the first 15 characters. The is by design, as the
	FQDN can be up to 255 characters long.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2. This problem was
	first corrected in SNA Server version 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	After you apply the update, the SNA Server client for Windows 3.x will extract
	the NetBIOS computer name (or host name) from the FQDN when opening a connection
	to an SNA Server computer. The computer name is limited to 15 characters.
	
	For example, if the client's FQDN is mypc.sales.company.com, the name passed to
	the SNA Server computer after applying the update will be mypc.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
