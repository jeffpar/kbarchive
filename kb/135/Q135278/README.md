---
layout: page
title: "Q135278: Not Enough Free Disk Space to Remove The Microsoft Network"
permalink: /kb/135/Q135278/
---

## Q135278: Not Enough Free Disk Space to Remove The Microsoft Network

	Article: Q135278
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
	
	When you try to remove The Microsoft Network from your computer by clearing The
	Microsoft Network check box on the Windows Setup tab, you may receive the
	following message:
	
	  There is not enough disk space for all the selected components. Click
	  OK and then clear one or more of the selected components.
	
	CAUSE
	=====
	
	There is very little free space on the hard disk. Even when The Microsoft
	Network is not installed, several The Microsoft Network files are stored on the
	hard disk. These files are located in the Program Files\The Microsoft Network
	folder and are used for signing up with The Microsoft Network. When you try to
	remove The Microsoft Network, Setup checks to see if there is enough room on the
	hard disk to store these files. If there is not enough room to store these
	files, Setup generates the message stated above, even though you are trying to
	remove The Microsoft Network.
	
	RESOLUTION
	==========
	
	To remove The Microsoft Network, increase the amount of free hard disk space by
	about 2 megabytes. To do so, try the following steps:
	
	- Close all running programs. Doing so may cause the swap file to shrink enough
	  to let you remove The Microsoft Network.
	
	- Remove all the programs in the Startup folder, disable the "load=" and "run="
	  lines in the Win.ini file, and then restart Windows 95. Doing so may cause
	  the swap file to shrink enough to let you remove The Microsoft Network.
	
	- Remove any unnecessary files from the hard disk.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
