---
layout: page
title: "Q225497: PRB: Windows 95 May Fail to Boot Due to I/O Subsystem Failure"
permalink: kb/225/Q225497/
---

## Q225497: PRB: Windows 95 May Fail to Boot Due to I/O Subsystem Failure

	Article: Q225497
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbOSWin95 kbOSWin95bug kbOSWin98fix
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under some circumstances Windows 95 may fail to boot, and will display the
	following error message:
	
	  Error: An I/O subsystem driver failed to load Either a file in the .\iosubsys
	  subdirectory is corrupt or the system is low on memory.
	
	CAUSE
	=====
	
	This problem may occur when all memory below 1MB is allocated prior to
	initialization of Ios.vxd. Ios.vxd must allocate memory below 1MB for use as
	real-mode buffers. If Ios.vxd can't allocate this memory, it fails to load,
	which in turn causes Windows 95 to fail to boot.
	
	Memory below 1MB is typically reserved for components that specifically request
	it. However, it is possible that Windows 95 will allocate all memory between 1MB
	and 16MB during initialization, forcing system DMA buffers (which must lie below
	16MB) below 1MB, and therefore preventing Ios.vxd from being able to allocate
	memory below 1MB.
	
	RESOLUTION
	==========
	
	This problem can be worked around by adjusting the maximum cache size allocated
	by Vcache.vxd. Vcache.vxd allocates an initial cache size that is no larger than
	9MB. Setting the maximum cache size to less than 9MB also reduces the initial
	cache size, freeing up memory below 16MB and allowing Windows 95 to boot
	properly.
	
	The maximum cache size is set by adding a "maxfilecache" line to the vcache
	section of System.ini. The following example shows what an entry in System.ini
	would look like to set the maximum cache size to 6MB:
	
	  [vcache]
	  maxfilecache=6144
	
	STATUS
	======
	
	This is a known problem in Windows 95. It has been fixed for Windows 98.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin95 kbOSWin95bug kbOSWin98fix 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
