---
layout: page
title: "Q44111: Windows with Hercules and a Secondary Display Connected"
permalink: kb/044/Q44111/
---

## Q44111: Windows with Hercules and a Secondary Display Connected

	Article: Q44111
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is no method of running Microsoft Windows installed for Hercules if a
	secondary display adapter is present in the system. This limitation exists
	because Windows uses the second video page of the Hercules display card for its
	own function. This area of memory is also used by color (CGA/EGA/VGA) displays;
	therefore, a conflict results, causing erroneous output to both displays.
	
	MORE INFORMATION
	================
	
	The reason you can run on a color adapter with a Hercules card installed in
	addition to the color adapter is because the first video page of the Hercules
	display card is the default and does not conflict with another display type in
	memory.
	
	If you write to the standard color adapter area of memory, you are not writing to
	the first page; thus, no output or conflict occurs with the Hercules display.
	This means that the only way to run correctly on a Hercules adapter is to have
	only the single display card in the system.
	
	
	Additional query words: 3.00 win30 KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
