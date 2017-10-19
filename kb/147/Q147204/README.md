---
layout: page
title: "Q147204: Stop 0x0000000A in NDIS.SYS on a Multi-Processor Computer"
permalink: /kb/147/Q147204/
---

## Q147204: Stop 0x0000000A in NDIS.SYS on a Multi-Processor Computer

	Article: Q147204
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a Windows NT lower level network driver completes calls asynchronously on a
	multiprocessor computer, the following STOP error message appears:
	
	  STOP: 0x0000000A (0x00000015, 0x00000002, 0x00000000, 0xf94f332c) - NDIS.SYS
	
	CAUSE
	=====
	
	If the lower level network driver completes calls asynchronously, a null pointer
	is pushed on the stack, which causes the STOP error message above. This problem
	occurs at boot time or when you change the network configuration.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt 3.51 trap 0xA
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
