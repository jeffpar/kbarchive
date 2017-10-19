---
layout: page
title: "Q123338: SFM Performance Degrades Due to Memory Problem"
permalink: /kb/123/Q123338/
---

## Q123338: SFM Performance Degrades Due to Memory Problem

	Article: Q123338
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Services for Macintosh to share files, server performance may
	degrade after a number of days in a production environment. CPU use may rise to
	between 85 percent and 95 percent even when no one is actively using the server
	and only a few users are connected to it. Server response time increases as the
	system becomes very slow.
	
	The following events may be logged in the Event Viewer log:
	
	  MacFile 12051: Unable to update the index database for the Macintosh-
	  Accessible volume "<volume name>". There may not be enough disk space.
	
	  MacSrv 12046: Unable to allocate paged memory resource.
	
	CAUSE
	=====
	
	Caching and notification handling for extremely large volumes is not being
	handled properly. Structures are not properly allocated and deallocated
	resulting in growing memory resource demands.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server version 3.5.
	This problem was corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
