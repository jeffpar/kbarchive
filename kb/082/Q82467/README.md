---
layout: page
title: "Q82467: Windows: DEC Pathworks Use Command Hangs Machine"
permalink: /kb/082/Q82467/
---

## Q82467: Windows: DEC Pathworks Use Command Hangs Machine

	Article: Q82467
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows in 386 enhanced mode, and you issue the Digital Equipment
	Corporation (DEC) Pathworks USE command from an MS-DOS virtual machine in
	Windows, the machine may later stop responding (hang). Once you return to
	Windows, the following error message displays:
	
	  Application was using the network when application was terminated
	
	When you choose the OK button to close the message box, the machine locks up.
	
	RESOLUTION
	==========
	
	To correct this problem, add the following line to the [386Enh] section of the
	SYSTEM.INI file:
	
	  NetNoBlock=FALSE
	
	MORE INFORMATION
	================
	
	This problem occurs when you use the LANSESS protocol and the LAST drivers.
	
	
	Pathworks is manufactured by DEC, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.10 network 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
