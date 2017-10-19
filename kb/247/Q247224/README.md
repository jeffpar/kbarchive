---
layout: page
title: "Q247224: STOP 0x0000000A in Ndis.sys When Using Services for Macintosh"
permalink: /kb/247/Q247224/
---

## Q247224: STOP 0x0000000A in Ndis.sys When Using Services for Macintosh

	Article: Q247224
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Services for Macintosh on a Windows NT Server-based computer, an
	error message in Ndis.sys may appear on a blue screen with the following stop
	parameters:
	
	  STOP 0x0000000A (0xF43270C8, 0x00000002, 0x00000000, 0xF3B83A43)
	
	NOTE: The first and last parameters may vary from computer to computer.
	
	CAUSE
	=====
	
	This behavior occurs because Services for Macintosh was installed on the
	computer and the service pack that was installed on the server was not
	reapplied. To verify this, check the date and time stamp on the following
	files:
	
	+-------------------------------------------------+
	| Sfmatalk.sys | 10/14/96 1:38 am | 125,232 bytes | 
	+-------------------------------------------------+
	| Sfmsrv.sys   | 10/14/96 1:38 am | 132,112 bytes | 
	+-------------------------------------------------+
	
	RESOLUTION
	==========
	
	To resolve this issue, reapply the current service pack.
	
	
	Additional query words: sfm
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
