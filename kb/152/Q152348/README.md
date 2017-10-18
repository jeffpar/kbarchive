---
layout: page
title: "Q152348: Block Writes Across Net May Cause Performance Hit"
permalink: kb/152/Q152348/
---

## Q152348: Block Writes Across Net May Cause Performance Hit

	Article: Q152348
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are performing RAW mode writes using the redirector, you may incur a
	performance hit from disk reads.
	
	CAUSE
	=====
	
	When the redirector sends a large block size across the net, it must divide the
	blocks into chunks less than 64K to fit into a server message block (SMB)
	packet. The redirector takes the size of the block and divides it by the maximum
	data size (less than 64K) and uses this size to send the blocks across the net.
	This result in an odd size being written to the disk on the server side.
	
	When the server receives the block to write (for example, 30K) it must then write
	this information on page boundaries. On i386 and MIPS this is 4K, on the DEC
	Alpha this is 8K. In the process of writing this data, it will be forced to
	write information that is only part of a 4K or 8K page. In this case is must
	read the portion of the page that has not changed, thus causing the writes.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.50 3.51 prodnt slow
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
