---
layout: page
title: "Q174442: All Users Have the Same Screen Saver"
permalink: kb/174/Q174442/
---

## Q174442: All Users Have the Same Screen Saver

	Article: Q174442
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbtool kbui win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using user profiles in Windows 95, all users on a Windows 95-based
	computer may have the same screen saver.
	
	CAUSE
	=====
	
	The screen saver is called from the System.ini file. This file is global to all
	users on the same Windows 95-based computer.
	
	RESOLUTION
	==========
	
	Using the System.ini file to store the screen saver choice is by design to
	remain compatible with older third-party screen saver programs. If separate
	screen savers are required, you may want to consider using Microsoft Windows NT.
	In Windows NT, all screen saver information is saved in the registry, and is
	unique to each user.
	
	MORE INFORMATION
	================
	
	Although the screen saver is called from the System.ini file, individual
	settings for the screen saver are stored in the registry. Each user can control
	how the screen saver works during his or her logon session.
	
	======================================================================
	Keywords          : kbtool kbui win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
