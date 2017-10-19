---
layout: page
title: "Q82348: DriverLINX and DriverLINX/VB Problems in Standard Mode"
permalink: /kb/082/Q82348/
---

## Q82348: DriverLINX and DriverLINX/VB Problems in Standard Mode

	Article: Q82348
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DriverLINX and DriverLINX/VB applications fail in Microsoft Windows o
	running in standard mode if an expanded memory manager, such as EMM386.EXE, is
	installed.
	
	WORKAROUND
	==========
	
	To work around this problem, either run Windows in enhanced mode, or remove the
	DEVICE= statement for EMM386.EXE from the CONFIG.SYS file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Windows versions 3.1 and 3.11.
	We are researching this problem and will post new information here as it becomes
	available.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
