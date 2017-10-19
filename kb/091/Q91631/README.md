---
layout: page
title: "Q91631: Problems When Using LapLink Pro 4.0A in 386 Enhanced Mode"
permalink: /kb/091/Q91631/
---

## Q91631: Problems When Using LapLink Pro 4.0A in 386 Enhanced Mode

	Article: Q91631
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The README.TXT file included with LapLink Pro version 4.0A, an MS-DOS-based
	application manufactured by Traveling Software, recommends not running LapLink
	under Microsoft Windows. This file also states that LapLink Pro 4.0A can
	function in 386 enhanced mode if you comment out the lines Device=*VCD and
	Device=*Combuff in the SYSTEM.INI file to disable the virtual communications
	driver (VCD) and virtual communications buffer (Combuff). To comment out these
	line, place a semicolon at the beginning of each line as follows:
	
	     ;Device=*VCD
	     ;Device=*Combuff
	
	Running Windows 3.1 with these lines disabled can cause problems when you are
	running other applications that use the COM ports. Microsoft does not support
	this workaround supplied by Traveling Software.
	
	MORE INFORMATION
	================
	
	In 386 enhanced mode, the VCD allows multiple applications to access COM port
	hardware at the same time. The VCD notifies virtual machines (VMs) when their
	COM ports require servicing. Combuff buffers data between the communications
	driver and physical port. This prevents multitasking applications from losing
	data when they do not currently have CPU time.
	
	If you run LapLink Pro 4.0A in 386 enhanced mode by making the aforementioned
	changes, your mouse response may become jumpy and your system may stop
	responding (hang).
	
	LapLink Pro is manufactured by Traveling Software, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 jumps freezes frozen hung enable
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
