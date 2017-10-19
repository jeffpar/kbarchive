---
layout: page
title: "Q154484: Stop 0xA in Afd.sys"
permalink: /kb/154/Q154484/
---

## Q154484: Stop 0xA in Afd.sys

	Article: Q154484
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbSDKPlatform kbWinsock kbGrpDSNet
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following Stop 0xA message may be received when a server/client application
	uses TCP/IP sockets to transfer data:
	
	  Stop 0xA in Afd.sys (0x0000000c,0x00000002,0x00000000,0xfa13f0b6)
	
	CAUSE
	=====
	
	The stop error occurs because a packet has been received and indicated up the
	stack after the connection has been aborted. Under certain undefined
	circumstances, Windows NT tries to use the connection after it has been
	dereferenced.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A fix
	to this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	
	Additional query words: prodnt winsock ntblue
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbSDKPlatform kbWinsock kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
