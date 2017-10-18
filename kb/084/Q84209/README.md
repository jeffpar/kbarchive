---
layout: page
title: "Q84209: Microsolution's Compaticard and SMARTDRV.EXE"
permalink: kb/084/Q84209/
---

## Q84209: Microsolution's Compaticard and SMARTDRV.EXE

	Article: Q84209
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to Microsolution technical support, the Compaticard IV is not
	compatible with Microsoft Windows version 3.1's SMARTDrive (SMARTDRV.EXE)
	version 4.0.
	
	The Compaticard IV allows a computer system to use up to four floppy disk drives.
	
	MORE INFORMATION
	================
	
	You can configure your system to use the Compaticard by following these steps:
	
	1. Edit the AUTOEXEC.BAT file using a standard ASCII text editor such as Windows
	  Notepad.
	
	2. Modify the SMARTDRV.EXE line to disable the floppy cache. For example, enter
	
	        c:\windows\smartdrv.exe a- b- XXXX YYYY
	
	  where "xxxx" refers to the SMARTDrive cache size at the MS-DOS level (before
	  Windows starts). "yyyy" refers to the size of the cache after Windows starts.
	
	The Compaticard product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: 3.10 3.11 3rdparty compatacard
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
