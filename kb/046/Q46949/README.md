---
layout: page
title: "Q46949: Using CodeView /2, Hercules Graphics Cards and Libraries"
permalink: kb/046/Q46949/
---

## Q46949: Using CodeView /2, Hercules Graphics Cards and Libraries

	Article: Q46949
	Product(s): Microsoft Programming Utilities
	Version(s): 2.2,3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 2.2, 3.0, 3.11, 3.14, 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for Windows, versions 3.0, 3.05, 3.06, 3.07, 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using CodeView in the dual-monitor mode with a Hercules graphics card as the
	primary (application) monitor requires the Hercules card to be configured in the
	half mode. Using the Hercules graphics library, the monitor must be configured
	using the config(0) function call. This function call is a part of the Hercules
	graphics library and does not use Microsoft graphics library or the MSHERC.COM
	program. Therefore, this information applies only if you are using the Hercules
	graphics libraries. This is NOT the same as using the /h switch with MSHERC.
	
	MORE INFORMATION
	================
	
	The first page of the Hercules graphics display card is mapped to memory
	location B0000 (same as MDA), and the second page is mapped to B8000. The
	CGA/EGA/VGA also use B8000 as the beginning of their video memory. CodeView uses
	these two different address to run in the dual- monitor mode, sending the
	application output to the primary address, usually located at B8000, and the
	CodeView information to the secondary monitor, usually located at B0000.
	
	This works well until a Hercules graphics card is used as the primary monitor (in
	graphics mode) and the CGA/EGA/VGA card is used as the secondary monitor. The
	Hercules graphics card uses both pages (one at B0000 and the other at B8000) in
	the full mode. Therefore, use config(0) and only the first page (B0000) will be
	used and CodeView will function properly in dual-monitor mode.
	
	Additional query words: kbinf 2.20 3.00 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView220DOS kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView300 kbCodeView305 kbCodeView306 kbCodeView307 kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :2.2,3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	
	=============================================================================
	
