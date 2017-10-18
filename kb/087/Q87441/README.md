---
layout: page
title: "Q87441: Windows is Currently Using a Temporary Swap File Located on..."
permalink: kb/087/Q87441/
---

## Q87441: Windows is Currently Using a Temporary Swap File Located on...

	Article: Q87441
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When switching from a temporary swap file to a permanent swap file, the
	following message may be displayed:
	
	  Windows is currently using a temporary swap file located on drive C. This may
	  prevent an accurate permanent swap-file analysis.
	
	This message indicates Windows cannot correctly recommend a permanent swap file
	setting because of the disk space that is being used by the temporary swap file.
	
	MORE INFORMATION
	================
	
	In determining the recommended size for a permanent swap file, Windows examines
	the following:
	
	1. Largest available block of free contiguous disk space.
	
	2. Total amount of free hard disk space.
	
	If there is a temporary swap file already using disk space, Windows cannot
	precisely determine the amount of free contiguous hard disk space available.
	Windows does not calculate how much, if any, of the temporary swap file is
	contiguous. Switching from a permanent to a temporary swap file does not give
	this message because the temporary swap file does not need contiguous disk
	space.
	
	After choosing the permanent swap file, restarting Windows, and going back to the
	virtual memory settings, there will be a more precise recommended permanent swap
	file size. This is because Windows knows the exact amount of space being taken
	by the file and its location on the hard drive.
	
	For further information on how Windows determines the swap file size, query on
	the following words in the Microsoft Knowledge Base:
	
	  recommended and maximum and swap and file and size
	
	Additional query words: 3.00 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
