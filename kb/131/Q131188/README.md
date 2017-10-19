---
layout: page
title: "Q131188: Sony IDE CD-ROM Drive and 32-Bit Disk Access"
permalink: /kb/131/Q131188/
---

## Q131188: Sony IDE CD-ROM Drive and 32-Bit Disk Access

	Article: Q131188
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows or Windows for Workgroups on a computer with a Sony CDU
	55e IDE CD-ROM drive installed, you may receive a blue screen with the following
	error message:
	
	  This program tried to access your hard disk in a way that is incompatible
	  with Window's 32-bit disk-access feature (*wdctrl).
	
	CAUSE
	=====
	
	When the Sony CDU 55e IDE CD-ROM drive is installed as a "slave" to the "master"
	hard disk and 32-bit disk access is enabled, the CD-ROM drive uses the same
	primary IDE channel as the hard disk. The CD-ROM drive shares the hard disk's
	cable, interrupt, and port (IRQ 14, 1F0h).
	
	Because this CD-ROM drive does not meet the WD1003 specification, the master hard
	disk loses 32-bit disk access capabilities and the WDCTRL driver does not load.
	
	RESOLUTION
	==========
	
	To work around this problem, use either of the following methods:
	
	- Move the CD-ROM drive to a secondary IDE channel on the controller card. Note
	  that this method requires using separate cables for the hard disk and CD-ROM
	  drive.
	
	  For information about configuring the hardware in your computer, please
	  consult the hardware documentation or manufacturer.
	
	- Disable 32-bit disk access. To do so, double-click the 386 Enhanced icon in
	  Control Panel, click the Virtual Memory button, click the Change button, then
	  clear the 32-Bit Disk Access check box.
	
	MORE INFORMATION
	================
	
	The Sony CDU 55e CD-ROM drive is typically bundled with a Future Domain 16003
	IDE controller and is installed on the secondary IDE channel by default using
	IRQ 15 and port 170h.
	
	Sony's Setup program puts the ATAPI_CD.SYS driver in the CONFIG.SYS file and
	Corel's CORELCDX.EXE CD-ROM extension in the AUTOEXEC.BAT file. The CD-ROM drive
	works with either CORELCDX.EXE or MSCDEX.EXE, but both will fail if the CD-ROM
	drive is installed as a slave and 32-bit disk access is enabled.
	
	Using an enhanced IDE controller instead of a standard IDE controller does not
	solve the problem under current versions of MS-DOS and Windows. Also, using
	third-party 32-bit disk access drivers (such as those from OnTrack, Western
	Digital, or MicroHouse) does not solve the problem.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
