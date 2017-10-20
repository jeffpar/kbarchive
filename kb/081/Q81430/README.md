---
layout: page
title: "Q81430: Windows: Deleting Printer Driver While Printing"
permalink: /kb/081/Q81430/
---

## Q81430: Windows: Deleting Printer Driver While Printing

{% raw %}

	Article: Q81430
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Microsoft Windows, it is possible to remove an installed printer driver from
	the Control Panel Printers dialog box (including an active printer), while
	printing, once Print Manager has returned control.
	
	Although the printer driver is removed from the Control Panel Printers dialog
	box, the in-progress print job will be completed successfully.
	
	NOTE: The in-progress job will fail if the printer driver is deleted or removed
	from the Windows SYSTEM subdirectory. Any subsequent attempts to print to the
	removed printer, will fail until the printer driver is reinstalled.
	
	
	Additional query words: 3.0 3.00 3.0a 3.00a 3.1 3.10 3.11 WIN31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
