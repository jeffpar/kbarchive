---
layout: page
title: "Q82312: Setup Does Not Modify CONFIG.SYS when ATDOSXL.SYS Is Loaded"
permalink: kb/082/Q82312/
---

## Q82312: Setup Does Not Modify CONFIG.SYS when ATDOSXL.SYS Is Loaded

	Article: Q82312
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows Setup program does not modify CONFIG.SYS if the HardCard
	Plus device driver ATDOSXL.SYS is loaded. ATDOSXL.SYS is a device driver used by
	HardCard Plus to make the card function as a drive.
	
	MORE INFORMATION
	================
	
	Setup scans the CONFIG.SYS, and if it finds the text string "ATDOSXL.SYS"
	(without the quotation marks), it does not modify CONFIG.SYS. Instead, it writes
	the proposed changes to the file CONFIG.WIN in the Windows directory. If the
	file CONFIG.WIN already exists, Setup creates the file CONFIG.nnn, where "nnn"
	is the first numeric extension not already used, starting with the extension
	"001" (for example, CONFIG.001, CONFIG.002, and so on).
	
	Setup does not make changes directly to the CONFIG.SYS file, so Setup avoids the
	possibility of trying to load a device driver from the HardCard drive before the
	system has access to that drive.
	
	The CONFIG.SYS file should be manually edited to include the changes recommended
	by Windows 3.1 in the CONFIG.WIN file.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 Hard Card + 3.11 \* NoWin4
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	
	=============================================================================
	
