---
layout: page
title: "Q169180: FP97: Setup Requires 2-4 MB More Free Disk Space than Indicated"
permalink: kb/169/Q169180/
---

## Q169180: FP97: Setup Requires 2-4 MB More Free Disk Space than Indicated

	Article: Q169180
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbdta
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194470.
	
	SYMPTOMS
	========
	
	During FrontPage Setup, you receive a message indicating that you do not have
	sufficient disk space. Specifically, the disk space required may be only
	slightly more--about 2 to 4 megabytes (MB)--than what you have available.
	
	CAUSE
	=====
	
	The FrontPage Setup program sets aside some extra buffer space in its
	calculation of required disk space. This allows FrontPage Setup to reserve space
	for temporary files that are required during Setup. The FrontPage Setup program
	also reserves extra space because some larger hard disks use a larger cluster
	size that requires more physical space to store the same amount of data as a
	hard disk with a smaller cluster size.
	
	RESOLUTION
	==========
	
	To resolve this problem, make sure you have at least 2 to 4 MB of additional
	free hard disk space than indicated by the FrontPage Setup program.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
