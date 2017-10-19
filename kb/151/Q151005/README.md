---
layout: page
title: "Q151005: MAC Volume Incorrectly Removed Before Last Client Session"
permalink: /kb/151/Q151005/
---

## Q151005: MAC Volume Incorrectly Removed Before Last Client Session

	Article: Q151005
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A Macintosh volume may be deleted while there are one or more clients that are
	still connected and have open files. When you remove a Macintosh volume, the
	Services for Macintosh server should queue the remove request until all client
	sessions are closed or have disconnected because the session timed-out.
	
	CAUSE
	=====
	
	Services for Macintosh is not properly delaying the removal of the volume until
	after all client sessions have been closed.
	
	RESOLUTION
	==========
	
	Do not remove a volume until all client sessions to that volume have properly
	disconnected from the volume or have closed any open files. Open files can be
	viewed using the MacFile control panel tool. Once all client files are closed,
	any open sessions can be disconnected using the MacFile tool.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server versions 3.51
	and 4.0. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt MacFile volume remove sfm
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	
