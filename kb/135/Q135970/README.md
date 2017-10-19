---
layout: page
title: "Q135970: Protected-Mode-Only Drives Not Mounted"
permalink: /kb/135/Q135970/
---

## Q135970: Protected-Mode-Only Drives Not Mounted

	Article: Q135970
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you restart your computer, one or more compressed drives is not available.
	
	CAUSE
	=====
	
	The missing drive is located on a protected-mode-only hardware device, and the
	feature to automatically mount drives is turned off.
	
	RESOLUTION
	==========
	
	Start DriveSpace, and then click Settings on the Advanced menu. Click the
	Automatically Mount New Drives check box to select it, and then click OK.
	
	
	MORE INFORMATION
	================
	
	Protected-mode-only devices (such as Syquest or Iomega drives) are not mounted
	in real mode and therefore are not mounted in protected mode. You must mount
	these drives manually (in DriveSpace), or use the automatic mounting feature.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	
	=============================================================================
	
