---
layout: page
title: "Q82594: Minimum Space Required for Windows 3.1 Setup"
permalink: /kb/082/Q82594/
---

## Q82594: Minimum Space Required for Windows 3.1 Setup

{% raw %}

	Article: Q82594
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The minimum space required to set up the Microsoft Windows operating system
	version 3.1 can be confusing under certain conditions. Setup will require
	6,144,000 bytes of free disk space for the minimum install. It is possible for
	the user to have this much disk space free and still be presented with an error
	message, which states that there is not enough disk space, when running Setup.
	
	Different hard disks have different cluster sizes, making it impossible to make
	an exact determination as to the size that a directory takes up on the disk.
	Thus it is possible to have 6,144,000 bytes free before starting Setup and,
	after the directories are created, end up with not enough free disk space left
	to complete the setup. If this is the case, the user should attempt to free up
	space on the hard disk.
	
	Additional query words: 3.10 3.11 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
