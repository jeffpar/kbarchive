---
layout: page
title: "Q135548: PIF Editor Reserve Shortcut Keys Settings May Be Ineffective"
permalink: /kb/135/Q135548/
---

## Q135548: PIF Editor Reserve Shortcut Keys Settings May Be Ineffective

	Article: Q135548
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Reserve Shortcut Keys options in the Advanced section of the PIF Editor are
	ineffective for ALT+TAB, ALT+ESC, and CTRL+ESC, if the PIF also specifies Full
	Screen Display Usage.
	
	If an MS-DOS-based application is started in full screen mode using such a PIF,
	and the first keyboard input is one of the above combinations, a switch back to
	graphics mode is made, and the MS-DOS-based application appears as a minimized
	window, even if these shortcut key combinations have been reserved. If the
	MS-DOS-based application is subsequently restored to full screen mode, these
	shortcut keys are reserved as expected.
	
	CAUSE
	=====
	
	NTVDM sets the reserved keys after switching to full screen mode, rather than
	before switching to full screen mode.
	
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
	
	Additional query words: prodnt pifedit
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	
