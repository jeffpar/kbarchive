---
layout: page
title: "Q148646: Stop 0x0000000A When Referencing Empty Sent Queue"
permalink: /kb/148/Q148646/
---

## Q148646: Stop 0x0000000A When Referencing Empty Sent Queue

	Article: Q148646
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The following STOP error message in DLC.SYS appears on a Compaq computer using a
	Netflex-2 network adapter:
	
	  STOP: 0x0000000A (0x00000010,0x00000002,0x00000000,0xFb8eaf87)
	
	NOTE: The fourth parameter, 0xFb8eaf87, may differ each time the STOP error
	message appears because the base address for DLC differs from one system to
	another.
	
	CAUSE
	=====
	
	This problem occurs in the DLC transport when it attempts to access a NULL sent
	queue. The sent queue is NULL due to either a spurious interrupt from the
	network adapter or a problem with the driver overwriting the memory location it
	should not. The Stop error message has occurred using a Compaq Netflex-2 network
	adapter with or without the token ring module.
	
	RESOLUTION
	==========
	
	To work around this problem, use another supported network adapter. Refer to the
	latest Windows NT 3.51 Hardware Compatibility List (HCL).
	
	To correct this problem, apply the fix mentioned below.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 3.51 ssd trap 0xa 0x0a
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
