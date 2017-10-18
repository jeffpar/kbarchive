---
layout: page
title: "Q103445: Advanced Server Hang with Service for Macintosh"
permalink: kb/103/Q103445/
---

## Q103445: Advanced Server Hang with Service for Macintosh

	Article: Q103445
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you have installed Services for Macintosh and have the AppleTalk protocol
	bound to an NE3200 compatible driver, your computer will stop responding (hang)
	or be extremely slow when you start up Windows NT Advanced Server.
	
	The following entry is recorded in your error log:
	
	  The description  for Event ID [46] in Source [AppleTalk] could not be
	  found. It contains the following insertion string(s) \device\atalkDdp.
	
	  The Data in words is:
	  0000: 00000000 005C0001 00000000 C000002E
	  0010: 000A03E4 C001000D 00000000 00000000
	  0020: 00000000 00000000
	
	CAUSE
	=====
	
	One of the transports hangs during its loading sequence. The NE3200 decides that
	it needs to reset because it's on a quiet network and it thinks that the card is
	hung. The problem is that if a transport tries to open the adapter while the
	reset is in progress, the open will be pending but does not get restarted when
	the reset completes. This bug will not be exposed except on a network with very
	low traffic.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem was corrected in the latest U.S.
	Service Pack for Windows NT and Windows NT Advanced Server version 3.1. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: sfm prodnt NE3200
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
