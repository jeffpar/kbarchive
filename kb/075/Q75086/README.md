---
layout: page
title: "Q75086: DOSSHELL.VID Not Compatible with AT&amp;T BIOS 1.21 and Earlier"
permalink: /kb/075/Q75086/
---

## Q75086: DOSSHELL.VID Not Compatible with AT&amp;T BIOS 1.21 and Earlier

	Article: Q75086
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft MS-DOS version 5.0 Shell will not work correctly if the DOSSHELL.VID
	file is in the DOS directory and the machine has AT&T BIOS version 1.21 or
	earlier. If this is the case, you must remove or delete the DOSSHELL.VID file
	for Shell to work correctly.
	
	Another solution is to obtain a BIOS upgrade from AT&T. To obtain the latest
	BIOS version, call AT&T.
	
	MORE INFORMATION
	================
	
	If DOSSHELL.VID file is located in the DOS directory, you will not be able to
	access the top menu bar in Shell. ALT+CTRL, ALT+F, and F10 will not access the
	menu bar.
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 5.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
