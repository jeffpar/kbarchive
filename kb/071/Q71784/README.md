---
layout: page
title: "Q71784: Installing Stacker Deletes Empty Directories"
permalink: kb/071/Q71784/
---

## Q71784: Installing Stacker Deletes Empty Directories

	Article: Q71784
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Stacker by STAC Electronics, any empty directories on your hard
	drive are not recreated on the new Stacker partition. If empty, the TEMP
	directory is not created and Microsoft Windows will have memory and printing
	problems.
	
	MORE INFORMATION
	================
	
	Stacker uses a memory resident compression algorithm to expand and compress data
	in a real time manner. During the installation of Stacker, existing data is
	compressed as needed and moved to free hard drive space. This newly compressed
	data is only usable when the Stacker driver is loaded in the CONFIG.SYS file.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.0 3.00 3rdparty winmem 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
