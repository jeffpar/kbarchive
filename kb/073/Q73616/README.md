---
layout: page
title: "Q73616: Tentime SCSI Host Adapter in UMA"
permalink: kb/073/Q73616/
---

## Q73616: Tentime SCSI Host Adapter in UMA

	Article: Q73616
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Tentime SCSI host adapter TNT-4000 series uses a 8K address range in the
	Upper Memory Area (UMA). This adapter can be successfully used with Microsoft
	MS-DOS 5.0 or later. When using EMM386.EXE to load device drivers high, use the
	X= switch to exclude the range used by the SCSI host adapter. It is configurable
	for its interrupt and I/O address range usage and uses a device driver for its
	enhanced features.
	
	MORE INFORMATION
	================
	
	The Tentime SCSI host adapter TNT-4000 series is configurable for several
	ranges, which are as follows:
	
	O=On F=Off
	
	Address       Jumpers
	-------       14   15   16  17  18  19
	C800           O    F    O   O   F   F      Default
	D000           O    O    F   O   F   F
	D800           O    F    F   O   F   F
	E000           O    O    O   F   F   F
	E800           O    F    O   F   F   F
	
	To use EMM386.EXE to load device drivers high, be sure to exclude the range used
	by the SCSI host adapter. For example, if the card is jumpered for the default
	settings, exclude the address range by using the following device line in the
	CONFIG.SYS file.
	
	     DEVICE=C:\DOS\EMM386.EXE NOEMS X=C800-C9FF
	
	Other switches, including RAM, may still be used in conjunction with the X=
	switch.
	
	The Tentime is also configurable for its interrupt and I/O address range usage.
	It can use the following:
	
	    Interrupts
	  3, 4, 5, 7, 10, 11, 12, 14, 15
	
	  I/O address ports
	  300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 3A0, 3B0, 3C0
	
	The Tentime adapter also uses a device driver, SSTBIO.SYS, to take advantage of
	its enhanced features. This device driver is NOT essential to use the adapter.
	SSTBIO.SYS has been successfully loaded high using EMM386.EXE.
	
	Additional query words: 3rdparty 5.00 5.00a 6.00 controller card noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	
