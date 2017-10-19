---
layout: page
title: "Q160883: Falcon 5250 Emulator May GP Fault While Opening Second Session"
permalink: /kb/160/Q160883/
---

## Q160883: Falcon 5250 Emulator May GP Fault While Opening Second Session

	Article: Q160883
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP1, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When opening a second 5250 session with the Falcon 5250 emulator, the following
	error message may appear:
	
	  A General Protection fault occurred at 000B:21A8 in the following
	  module:
	  WDMOD.DLL.
	
	CAUSE
	=====
	
	The LU resource location optimization introduced into the SNA Server 2.11
	Service Pack 1 (SP1) win3.x client caused this to occur. This optimization will
	be present in all future releases of SNA Server as well.
	
	RESOLUTION
	==========
	
	To work around this problem, do one of the following:
	
	- Install the SNA Server 2.11 client in place of the SNA Server 2.11 SP1
	  client.
	
	  -or-
	
	- Apply the SNA Server 2.11 Windows 3.x hotfix, or upgrade the Windows 3.x
	  client to SNA Server 3.0, and add the following entry in the [wnap] section
	  of the win.ini:
	
	  "211ResLoc=Yes" (without the quotation marks)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11 Service
	Pack 1 (SP1) and in version 3.0. This problem was corrected in the latest
	Microsoft SNA Server version 2.11 and 3.0 U.S. Service Packs. For information on
	obtaining these service packs, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211SP1
	Version           : WINDOWS:2.11 SP1,3.0
	
	=============================================================================
	
