---
layout: page
title: "Q77274: No Page Break Unavailable in Printer Setup with IBM Proprinter"
permalink: kb/077/Q77274/
---

## Q77274: No Page Break Unavailable in Printer Setup with IBM Proprinter

	Article: Q77274
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the No Page Break option for the IBM Proprinter is unavailable (dimmed), then
	the "feed=" line in the [PROPRINTERdrv] section of the WIN.INI file is greater
	than zero.
	
	WORKAROUND
	==========
	
	1. Change this line so it reads (this can be any number greater than zero):
	
	  feed=0
	
	2. Save the WIN.INI file.
	
	3. To make your changes take effect, exit and restart Windows.
	
	4. Open the Control Panel and select the Printers icon. Choose Configure and
	  then Setup. Look at the Page Break option. This time it will be available
	  (not dimmed).
	
	NOTE: This problem also occurs with the Epson 9-pin printer drivers, and should
	be corrected in the same fashion.
	
	
	Additional query words: 3.00 greyed out grayed 3.0a 3.00a 3.0 II XL III epson EX FX JX LX MX RX
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
