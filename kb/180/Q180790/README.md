---
layout: page
title: "Q180790: Print Server Traps or Cannot Load Ppdxxxx.dll on NT3.51-J SP5"
permalink: /kb/180/Q180790/
---

## Q180790: Print Server Traps or Cannot Load Ppdxxxx.dll on NT3.51-J SP5

	Article: Q180790
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): kbfixlist
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using SNA Server 3.0 Print Server (Snaprint.exe) with Windows NT Server
	3.51, Japanese Service Pack 5 (SP5), the service may encounter an access
	violation (0xC0000005) and fail to load Ppd3270.dll or Ppd5250.dll successfully.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0, 3.0 SP1,
	and 3.0 SP2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	This problem does not occur on the Japanese version of Windows NT 4.0 or the
	United States version of Windows NT 3.51 with SP5.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
