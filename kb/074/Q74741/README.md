---
layout: page
title: "Q74741: Novell Network Hangs on IPX File with EMM386.EXE"
permalink: /kb/074/Q74741/
---

## Q74741: Novell Network Hangs on IPX File with EMM386.EXE

	Article: Q74741
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If your machine hangs while loading the Novell IPX file when the EMM386.EXE
	driver is being used, but loads correctly when EMM386.EXE is not used, a memory
	conflict with the network card is likely causing the problem.
	
	MORE INFORMATION
	================
	
	To correct this conflict, exclude the range where the network card is located by
	using the X= parameter with EMM386.EXE. For example, use the following line in
	the CONFIG.SYS file located in the root directory of the boot drive:
	
	  DEVICE=EMM386.EXE X=yyyy-zzzz (RAM) (NOEMS)
	
	where yyyy-zzzz signifies the address range (in hexadecimal) where the network
	card is located. Refer to the network card manuals to determine this area for
	your machine.
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
