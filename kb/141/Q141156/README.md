---
layout: page
title: "Q141156: STOP Msg: 0x0000000A in SFMATALK.SYS After Receiving ATP Packet"
permalink: kb/141/Q141156/
---

## Q141156: STOP Msg: 0x0000000A in SFMATALK.SYS After Receiving ATP Packet

	Article: Q141156
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following STOP Message occurs at startup on your Windows NT version 3.51
	computer running Services for Macintosh (SFM):
	
	  STOP: 0x0000000A (0x00000002,0x00000002,0x00000000,0xF15646E8)
	
	CAUSE
	=====
	
	This STOP Message occurs when the AppleTalk transport attempts to use an
	uninitialized binding context after receiving an AppleTalk Transaction Protocol
	frame during boot.
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51. The context is now initialized at the same time it is defined.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
