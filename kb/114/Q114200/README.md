---
layout: page
title: "Q114200: LM 2.2/2.2b Server Fails With CSLIM=8A1E/CSLIM=8A0E"
permalink: kb/114/Q114200/
---

## Q114200: LM 2.2/2.2b Server Fails With CSLIM=8A1E/CSLIM=8A0E

	Article: Q114200
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	The failure CSLIM=8A1E is reported on LAN Manager 2.2 systems; CSLIM=8A0E on LAN
	Manager 2.2b systems. Serious network problems may be observed at the time of
	failure, including frame misalignments, corrupt packets and excessively high
	network utilization. Multiple traps across multiple servers may occur
	simultaneously, since all servers receive the same corrupt packets.
	
	CAUSE
	=====
	
	The network protocol driver receives a truncated DLC administrative frame (RR)
	because an adapter or bridge malfunctions under network stress and generates a
	truncated packet that contains a valid cyclical redundancy check (CRC) but
	incomplete NetBEUI data.
	
	
	RESOLUTION
	==========
	
	NETBEUI.OS2 and NETBEUI.EXE for MS-DOS have been fixed so that truncated frames
	are now rejected even if they pass a CRC check by the network adapter driver.
	However, the network device responsible for creating the truncated packets must
	be repaired to assure proper network performance.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in OS/2 LAN Manager versions 2.2
	and 2.2b. A fix has been created and is included in: CSD00.089. Contact
	Microsoft Product Support Services for information on its availability.
	
	Additional query words: 2.20, 2.2, 2.10, 2.1, 2.10a. 2.1a 2.20b, 2.2b
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
