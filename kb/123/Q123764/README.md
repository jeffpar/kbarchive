---
layout: page
title: "Q123764: Display Unreadable with an IBM 8514/A Video Adapter"
permalink: /kb/123/Q123764/
---

## Q123764: Display Unreadable with an IBM 8514/A Video Adapter

	Article: Q123764
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you select the 8514/A Compatible Graphics Adapter driver for use with an
	IBM 8514/A video adapter on an IBM computer, the display appears blurry and
	unreadable. A resolution of 1024x768 and 256 colors is the only option for this
	driver.
	
	CAUSE
	=====
	
	The video adapter driver (8514a.sys) was not tested using the IBM 8514/A video
	adapter. The adapters that were tested with the driver are ATI and Western
	Digital Paradise video adapter (which are 8514/A compatible).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A fix to
	this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	
	=============================================================================
	
