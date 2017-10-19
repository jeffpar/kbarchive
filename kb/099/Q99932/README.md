---
layout: page
title: "Q99932: IP Fragment Reassembly Bug Identified and Corrected"
permalink: /kb/099/Q99932/
---

## Q99932: IP Fragment Reassembly Bug Identified and Corrected

	Article: Q99932
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	
	Dropped connections over wide-area networks that do information packet (IP)
	fragmentation using Microsoft TCP/IP for OS/2 or MS-DOS.
	
	CAUSE
	=====
	
	Many wide-area networks such as the Internet have links that don't support
	full-sized Ethernet or token ring frames. Routers that send packets over these
	links are forced to break them up into fragments at the IP layer. Each fragment
	of a given packet is labeled with a fragment ID# so that they can be reassembled
	into one packet by the IP layer of the destination machine.
	
	LAN Manager TCP/IP machines reassemble packets into control blocks (CBs). Once
	the first fragment of a packet is received, a control block is allocated for
	reassembling that packet. If all the fragments composing that packet are not
	received within a time-out period, the fragments in the CB should be discarded,
	and the CB returned to the free list for future use. LAN Manager versions up to
	and including 2.2 had problems:
	
	- allocating CBs at system initialization
	
	- timing out CBs
	
	- sending ICMP "time exceeded" messages back to the originating host
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in LAN Manager version 2.1, 2.1a
	and 2.2. This problem was corrected in patch 2.2B for LAN Manager. For
	information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base:
	
	  " LMPATCH" (without the quotation marks)
	
	STATUS
	======
	
	Resolved.
	
	Additional query words: 2.20 2.2 re-assembly Internet
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
