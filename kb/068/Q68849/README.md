---
layout: page
title: "Q68849: Windows Err Msg: Not Ready Reading Drive... (Plus Hardcard XL)"
permalink: kb/068/Q68849/
---

## Q68849: Windows Err Msg: Not Ready Reading Drive... (Plus Hardcard XL)

	Article: Q68849
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Quantum's Plus Hardcard XL and Windows, you receive the following
	Windows error message:
	
	  Not ready error reading drive x: Abort, Retry, Fail?
	
	CAUSE
	=====
	
	This error occurs if you are using the earlier ATDOSXL.SYS device driver,
	version 1.50.
	
	WORKAROUND
	==========
	
	To work around this problem, add the /W switch to the device driver in the
	CONFIG.SYS file. The new line should read as follows:
	
	  DEVICE=ATDOSXL.SYS /W
	
	MORE INFORMATION
	================
	
	Quantum has released a Windows-compatible device driver (version 1.70) for the
	Plus Hardcard XL that does not require the /W switch. The new driver can be
	obtained from Quantum's bulletin board service (BBS) by calling (408) 894-3214.
	
	To download this driver, do the following:
	
	1. Log on to Quantum's bulletin board using a communications program, such as
	  Terminal.
	
	2. Select Download from the menu. At the prompt, enter the filename
	  (ATDOSXL.EXE). This file automatically decompresses.
	
	3. Quit the communications session and quit Windows.
	
	4. At the MS-DOS prompt, execute the file (ATDOSXL.EXE); this creates the
	  ATDOSXL.SYS file.
	
	For more information, contact Quantum technical support.
	
	The products included here are manufactured by Quantum, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.00 3.00a 3.10 win30 win31 3rdparty plus 3.11 development
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
