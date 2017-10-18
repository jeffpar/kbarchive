---
layout: page
title: "Q65534: Maximum Number of Mirrored Drives Allowed in OS/2 LAN Man 2.x"
permalink: kb/065/Q65534/
---

## Q65534: Maximum Number of Mirrored Drives Allowed in OS/2 LAN Man 2.x

	Article: Q65534
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The number of drives that can be mirrored in OS/2 LAN Manager version 2.x is
	limited by the maximum number of disk partitions allowed in Microsoft OS/2
	version 1.2. In Microsoft OS/2 version 1.2, you can have up to 24 partitions.
	Drive mirroring sets up two identical partitions that are recognized by the
	operating system as a single logical drive, and you also need to set aside one
	partition as the boot partition (this partition can't be mirrored). Thus, the
	maximum number of mirrored drives that is allowed is 11. For example:
	
	    24  <= maximum number of partitions in OS/2 version 1.2
	   - 1  <= boot partition (can't mirror)
	   ====
	    23
	
	    22  <= round from 23 (even number of drives required for mirroring)
	   / 2  <= divide by 2 (one logical drive per two partitions)
	   ====
	
	==>  11  <==
	
	Additional query words: duplex ft fault tolerance 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
