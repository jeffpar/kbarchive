---
layout: page
title: "Q57809: SYSTEM.INI Entry Required for Zenith 386"
permalink: kb/057/Q57809/
---

## Q57809: SYSTEM.INI Entry Required for Zenith 386

	Article: Q57809
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For proper operation under Microsoft Windows in 386 enhanced mode, the Zenith
	386 requires the following entry in the [386Enh] section of the SYSTEM.INI
	file:
	
	  EMMExclude=E000-EFFF
	
	MORE INFORMATION
	================
	
	The reason this is needed is because the Zenith 386 computers have ROM at these
	segment addresses which does not have proper ROM signatures. Enhanced mode
	normally automatically excludes regions of the machine address space that are
	occupied by ROM, but this requires that the ROM be correctly marked as ROM.
	Zenith used IBM's PS/2 ROM design (PS/2s also have improperly marked ROM at
	E000-EFFF), but Zenith machines are not PS/2 MCA machines, they are ISA
	machines. This region is properly excluded on PS/2 MCA machines through
	MCA-specific code, but not on the Zenith machines since they are ISA machines.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 win30 3.00a KBHW 3rdparty 3.10 3.11 win31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
