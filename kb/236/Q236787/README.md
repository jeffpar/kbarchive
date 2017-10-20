---
layout: page
title: "Q236787: SNACFG Should Allow Configuration of Compression for 3270 LUs"
permalink: /kb/236/Q236787/
---

## Q236787: SNACFG Should Allow Configuration of Compression for 3270 LUs

{% raw %}

	Article: Q236787
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fea kbFEA sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Configuring a 3270 LU to use compression can only be done using SNA Manager.
	Customers that rely on SNA Server's command-line utility to configure their SNA
	subdomain are not able to configure this parameter. There have been requests to
	allow that parameter to be changed using SNA Server's command-line interface.
	
	SNA Server's command-line interface (Snacfg.exe) has been enhanced so it is now
	possible to configure 3270 LUs to support "Compress" and "Workstation secured."
	
	The syntax is:
	
	  SNACFG LU luname /COMPRESSION:{ Yes | No } /WORKSTATIONSECURE:{ Yes | No }
	
	MORE INFORMATION
	================
	
	This feature is available in the latest service pack for SNA Server version 4.0.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	This feature was first included in SNA Server version 4.0 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fea kbFEA sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
