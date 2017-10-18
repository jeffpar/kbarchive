---
layout: page
title: "Q57431: DISKCOPY May Require Multiple Disk Swaps"
permalink: kb/057/Q57431/
---

## Q57431: DISKCOPY May Require Multiple Disk Swaps

	Article: Q57431
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The behavior of the DISKCOPY command varies depending on whether you are using a
	single floppy disk or copying between two disks. When you use DISKCOPY on a
	single floppy disk drive, it does not ask you whether you want to copy another
	disk; instead, it asks for the next source disk. When you use DISKCOPY between
	two floppy disk drives, the copy occurs without any request.
	
	MORE INFORMATION
	================
	
	This is expected behavior. For larger disks, DISKCOPY can only read a portion of
	the disk into memory at one time; therefore, you must switch between the source
	and destination during the copy.
	
	The DISKCOPY utility provided with Microsoft MS-DOS Packaged Product makes an
	exact copy of one floppy disk onto another floppy disk. To do this, DISKCOPY
	loads the contents of the disk into memory sector by sector and then writes
	these sectors back out to the destination disk.
	
	Because many different types of floppy disk media have a capacity larger than
	that of the computer's available memory, DISKCOPY must make the copy in several
	steps. For 1.44 MB floppy disks, it takes a minimum of three steps. The copying
	process is broken into even more steps if available memory is reduced.
	
	This memory reduction is most noticeable if you are using a single disk drive for
	the copy. Each time memory is filled from the source disk, DISKCOPY must request
	that the destination disk be inserted so that the current contents of memory can
	be written. After the memory has been written to, DISKCOPY then requests the
	source disk again to read the next section of the disk into memory.
	
	Additional query words: 3.20 3.21 3.30 3.30a 4.00 4.01 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.x,5.0
	
	=============================================================================
	
