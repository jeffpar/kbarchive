---
layout: page
title: "Q85551: Machine Hangs; Repeat Rate too High in Windows 3.1, MS-DOS 5"
permalink: /kb/085/Q85551/
---

## Q85551: Machine Hangs; Repeat Rate too High in Windows 3.1, MS-DOS 5

	Article: Q85551
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Logical Connection sells a printer sharing device that comes with a program
	called POPLC.EXE. POPLC has several functions, including clearing the print
	sharing device buffer and selecting which printer receives the data stream. If
	POPLC.EXE is loaded without the /NORES (non-resident) switch, when the Windows
	3.1 portion of Setup starts, the machine either stops responding (hangs) or the
	keyboard repeat rate gets set too high.
	
	WORKAROUND
	==========
	
	To work around this problem, either do not load POPLC.EXE, or use it with the
	/NONRES switch.
	
	MORE INFORMATION
	================
	
	For more information, please contact Logical Connection.
	
	The Logical Connection product included here is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 3.10 3.1 5.00 5.0 5 phone hangs crashes stops freezes
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbMSDOSSearch kbMSDOS500
	Version           : :
	
	=============================================================================
	
