---
layout: page
title: "Q142651: Third-Party Cursor Hangs Cirrus Driver"
permalink: /kb/142/Q142651/
---

## Q142651: Third-Party Cursor Hangs Cirrus Driver

	Article: Q142651
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbdisplay
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are using the Cirrus video driver included with Windows NT and using
	monochrome mouse cursors that either exceed 32x32 pixels in size or if you use a
	non-standard pixel size, the video screen will stop responding at the console.
	
	CAUSE
	=====
	
	The video driver Cirrus.dll included with Windows NT 3.51 does not compensate
	for non-standard mouse cursor sizes.
	
	RESOLUTION
	==========
	
	Obtain the fix referenced below, under STATUS.
	
	WORKAROUND
	==========
	
	Use a standard 32x32 mouse cursor provided with Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt screen freezes hangs
	
	======================================================================
	Keywords          : kbdisplay 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
