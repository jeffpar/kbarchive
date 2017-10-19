---
layout: page
title: "Q130594: 2139 - Could Not Create Mail Slot w/ SNA Server Client"
permalink: /kb/130/Q130594/
---

## Q130594: 2139 - Could Not Create Mail Slot w/ SNA Server Client

	Article: Q130594
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to launch SNABase on an SNA Server MS-DOS client over IBM's LAN
	Requester, or when you load WNAP.EXE on an SNA Server Win3x client over LAN
	Requester, the following error message appears if LAN Requester has not been
	configured for mailslot and named pipe support:
	
	  Error 553
	  Could not create mail slot - 2139
	
	RESOLUTION
	==========
	
	To correct this, add the following lines to the DOSLAN.INI file and reboot your
	computer:
	
	     /API
	     /NBC:4
	     /NBS:1K
	     /NVS:1
	     /NMS:2
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,3.0
	Issue type        : kbprb
	
	=============================================================================
	
