---
layout: page
title: "Q139281: STOP Msg: 0x0000004E or 0x0000000A Under Heavy Computer Usage"
permalink: /kb/139/Q139281/
---

## Q139281: STOP Msg: 0x0000004E or 0x0000000A Under Heavy Computer Usage

	Article: Q139281
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	One of the following STOP messages appears on multiprocessor computers under
	heavy Windows NT usage:
	
	  STOP: 0x0000004E
	
	-or-
	
	  STOP: 0x0000000A
	
	
	CAUSE
	=====
	
	The problem occurs due to a very slight window in AFD.SYS that causes a Memory
	Descriptor List (MDL) entry to be overwritten.
	
	RESOLUTION
	==========
	
	Microsoft has modified the file, AFD.SYS, to correct this problem. Upgrade to
	the latest Windows NT 3.51 U.S. Service Pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
