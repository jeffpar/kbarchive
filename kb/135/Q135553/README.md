---
layout: page
title: "Q135553: IOCTL_NDIS_QUERY_ALL_STATS Causes STOP Msg in Windows NT 3.51"
permalink: kb/135/Q135553/
---

## Q135553: IOCTL_NDIS_QUERY_ALL_STATS Causes STOP Msg in Windows NT 3.51

	Article: Q135553
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
	
	If your application querys a Miniport MAC driver from user mode using
	DeviceIoControl with the IoCtl Opcode of IOCTL_NDIS_QUERY_ALL_STATS, this STOP
	message appears:
	
	  STOP: 0x0000001E (0xC0000005 0x801704a7 0x00000001 0x00000001)
	
	This error occurs sporadically.
	
	CAUSE
	=====
	
	The NDIS.SYS driver is referencing an invalid pointer.
	
	
	RESOLUTION
	==========
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt crash blue screen blue-screen
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
