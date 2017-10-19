---
layout: page
title: "Q83500: SMARTDRV.EXE Does Not Support Command Line Size Change"
permalink: /kb/083/Q83500/
---

## Q83500: SMARTDRV.EXE Does Not Support Command Line Size Change

	Article: Q83500
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SMARTDRV.EXE version 4.0, which comes with Microsoft Windows operating system
	version 3.1 does not support changing the cache sizes multiple times at the
	MS-DOS command prompt, or removing and reactivating SMARTDRV.EXE after first
	loading it.
	
	MORE INFORMATION
	================
	
	Once SMARTDRV.EXE is loaded with a cache size in the AUTOEXEC.BAT file, the size
	of the cache can only be changed by rebooting the computer (this apples to cache
	sizes other than the normal MS-DOS level cache size and Windows cache size
	arguments). Once SMARTDRV.EXE is loaded, the only way to remove it is to reboot
	the computer and not to load it.
	
	Some third-party disk caching software allows for the cache size to be changed by
	using an MS-DOS command line switch. Some of these disk caches also support
	removing themselves from memory with an MS-DOS command prompt switch.
	SMARTDRV.EXE version 4.0 does not support either of these functions.
	
	Additional query words: 3.10 smartdrive design overview smart drive
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
