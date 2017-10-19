---
layout: page
title: "Q232447: BUG: SetPrinter() with Level 5 Fails to Change Port"
permalink: /kb/232/Q232447/
---

## Q232447: BUG: SetPrinter() with Level 5 Fails to Change Port

	Article: Q232447
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbprint kbGDI kbPrinting kbSpooler kbOSWin95 kbOSWin98 kbGrpDSGDI
	Last Modified: 20-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SetPrinter() API can be used to change/query a printer's settings. The
	settings that are available vary depending on the level of the call. It is
	possible to change/query the port name for a printer using levels 2 and 5.
	However, on Win9x, when trying to change the port on a printer using
	SetPrinter() with level 5 , the port is not changed even though no errors are
	detected.
	
	RESOLUTION
	==========
	
	To work around this problem, call SetPrinter() with level 2 and a properly
	populated PRINTER_INFO_2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbGDI kbPrinting kbSpooler kbOSWin95 kbOSWin98 kbGrpDSGDI 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : :
	Issue type        : kbbug
	
	=============================================================================
	
