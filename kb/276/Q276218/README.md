---
layout: page
title: "Q276218: Win9x 3270 Client May Not Unload from Memory on Windows 98"
permalink: /kb/276/Q276218/
---

## Q276218: Win9x 3270 Client May Not Unload from Memory on Windows 98

{% raw %}

	Article: Q276218
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbSNA400sp4fix kbSNA400PreSP4fixkbbuglist kbfixlist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run the Win9x 3270 Client or any other third-party software, when you
	shut down the application, some dynamic-link libraries (DLLs) and executables
	may be left in memory and may not be unloaded. If you are using System
	Information (Sysinfo.exe) from Windows 98, you may note that the following files
	are left in memory when you use the SNA Server Win3270.exe application:
	
	- Cfgs3270.dll
	- Win3270.exe
	
	These files remain in memory after SnaBase is shut down. If you start up a new
	client and then shut it down, multiple copies of these files are loaded, causing
	available memory to eventually be used up. This problem occurs only when you are
	using named pipes as the network transport. If you use TN3270 or Transfer
	Control Protocol/Internet Protocol (TCP/IP) for client connectivity, this
	problem does not occur.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words: sp1 sp2 sp3 3rd-party 3rd party
	
	======================================================================
	Keywords          : kbSNA400sp4fix kbSNA400PreSP4fix kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
