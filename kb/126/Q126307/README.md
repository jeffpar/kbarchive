---
layout: page
title: "Q126307: F4 Boot Feature Does Not Work Correctly with SuperStore 2.04"
permalink: kb/126/Q126307/
---

## Q126307: F4 Boot Feature Does Not Work Correctly with SuperStore 2.04

	Article: Q126307
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you install Windows 95 to a compressed SuperStore version 2.04 boot disk,
	the F4 boot feature (start previous MS-DOS version) does not work.
	
	MORE INFORMATION
	================
	
	Windows 95 correctly implements the F4 boot feature on SuperStore compressed
	drives by updating the AUTOEXEC.BAT and CONFIG.SYS files to have .DOS
	extensions. SuperStore version 2.04, however, uses compression drivers that are
	loaded when the CONFIG.SYS file is loaded. As a result, the AUTOEXEC.BAT and
	CONFIG.SYS files on the host drive are not updated to have .DOS extensions by
	Windows 95 Setup, and the SuperStore compression drivers that are loaded during
	or after the processing of the CONFIG.SYS file are not loaded. There is no way
	to work around this behavior other than to switch to a disk compression program
	that loads its compression driver before the CONFIG.SYS file is processed.
	
	Additional query words: disk compress
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
