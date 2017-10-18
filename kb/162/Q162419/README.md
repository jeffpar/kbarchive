---
layout: page
title: "Q162419: STOP 0x0000001e Installing IBM PeerMaster MCA Adapter"
permalink: kb/162/Q162419/
---

## Q162419: STOP 0x0000001e Installing IBM PeerMaster MCA Adapter

	Article: Q162419
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the networking portion of setup Windows NT Server traps with the
	following information:
	
	  *** STOP: 0X0000001E (0XC0000005, 0XFF0D5928, 0X00000000, 0X0000005C)
	  KMODE_EXCEPTION_NOT_HANDLED*** Address ff0d5928 has base at ff0ce000 -
	  NDIS.SYS
	
	NOTE: The parameters in parentheses will be the same every time.
	
	CAUSE
	=====
	
	The Quadenet.sys driver is passing a null pointer to the Ndis.sys driver. This
	trap also occurs when the IBM PeerMaster MCA adapter is added to computers with
	Windows NT 4.0 already installed.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt 0x1e ntblue
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
