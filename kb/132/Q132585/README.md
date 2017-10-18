---
layout: page
title: "Q132585: Wallpaper You Select on Network May Not Appear After Reboot"
permalink: kb/132/Q132585/
---

## Q132585: Wallpaper You Select on Network May Not Appear After Reboot

	Article: Q132585
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select a desktop wallpaper from a network drive, the wallpaper you
	select may not be loaded when you restart your computer. Instead, your desktop
	has a solid color.
	
	CAUSE
	=====
	
	If you select a wallpaper while you are working on a secure network resource,
	the wallpaper bitmap is not accessible until you enter a password. However, the
	wallpaper is loaded before you log in. Depending on the system configuration,
	the system may not attempt to reload the wallpaper you selected after the you
	have entered a password.
	
	RESOLUTION
	==========
	
	To work around this behavior, do one of the following:
	
	1. Copy the wallpaper bitmap file to your local hard drive and specify the local
	  copy in the Display tool in Control Panel. This ensures that the wallpaper is
	  accessible when you start your computer.
	
	2. In the Password Properties dialog box, make sure the second option, that
	  users can customize their desktop settings, is checked so that the next time
	  you log on, your settings are restored.
	
	Additional query words: bitmap
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
