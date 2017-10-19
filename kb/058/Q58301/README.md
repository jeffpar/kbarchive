---
layout: page
title: "Q58301: SYSTEM.INI Setting Required for Epson 386 Portable"
permalink: /kb/058/Q58301/
---

## Q58301: SYSTEM.INI Setting Required for Epson 386 Portable

	Article: Q58301
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following setting is required in the [386Enh] section of the Microsoft
	Windows SYSTEM.INI file for proper 386 enhanced mode operation on the Epson 386
	Portable:
	
	  EMMEXCLUDE=E000-EFFF
	
	This requirement is due to nonstandard ROM mapping by the Epson 386 Portable.
	
	MORE INFORMATION
	================
	
	The reason this is needed is because the Epson 386 Portables have ROM at these
	segment addresses that do not have proper ROM signatures. Enhanced mode normally
	automatically excludes regions of the machine address space that is occupied by
	ROM, but this requires that the ROM be correctly marked as ROM. Unfortunately,
	Epson copied IBM's design for the PS/2 machines (PS/2s also have improperly
	marked ROM at E000-EFFF). This region is properly excluded on PS/2 MCA machines
	through MCA specific code, but not on the Epson machines because Epson machines
	are ISA machines.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30 KBHW Win31 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
