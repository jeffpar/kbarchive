---
layout: page
title: "Q75592: EMM386 Not Installed--Unable to Set Page Frame Base Address"
permalink: /kb/075/Q75592/
---

## Q75592: EMM386 Not Installed--Unable to Set Page Frame Base Address

	Article: Q75592
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you boot your computer and EMM386.EXE loads (from the CONFIG.SYS file) you
	may receive the following message:
	
	  EMM386 Not Installed - Unable to set page frame base address
	
	CAUSE
	=====
	
	This message indicates that EMM386 was unable to find 64K of contiguous space
	needed for the expanded memory page frame.
	
	When you specify the RAM switch (or no switch at all), EMM386 attempts to create
	a 64K page frame in the upper memory area (UMA). The actual amount of extended
	memory used will be 108K (64K + 44K = 108K). The extra 44K is used for tables
	that EMM386 sets up to emulate expanded memory.
	
	This 64K of space acts as a window into expanded memory allowing programs to see
	all the available expanded memory 64K at a time.
	
	RESOLUTION
	==========
	
	If you receive the message noted above you can try the following:
	
	- Use the NOEMS switch if expanded memory service (EMS memory) is not needed.
	
	- Make sure HIMEM.SYS is installed above EMM386.EXE in the CONFIG.SYS file.
	  Other devices should be loaded after EMM386.EXE.
	
	  NOTE: Some hardware configurations require certain device drivers be loaded
	  before HIMEM.SYS. Specific examples are:
	
	   - DMDRVR.BIN (disk manager)
	
	   - EMM.SYS (expanded memory driver)
	
	   - ADAPTEC.SYS (driver for Adaptec controllers)
	
	- If it is not an IBM machine, add the following parameters to the EMM386
	  command line in the CONFIG.SYS file:
	
	     device=c:\dos\emm386.exe i=e000-efff (m9 or frame=e000) ram
	
	  The E000-EFFF memory range is generally not used by non-IBM machines.
	  Including this range can allow you to find 64K of free contiguous memory.
	
	- Specify different locations for the page frame to begin, using the "mx"
	  switch, where x is in the range of the following table:
	
	     1---> C000              8---> DC00
	     2---> C400              9---> E000
	     3---> C800              10--> 8000
	     4---> CC00              11--> 8400
	     5---> D000              12--> 8800
	     6---> D400              13--> 8C00
	     7---> D800              14--> 9000
	
	  NOTE: Ranges 10-14 are for machines that have only 512K of conventional memory
	  and the page frame is attempting to set below 640K.
	
	  For more information on EMM386.EXE switches, see page 606 of the User's Guide
	  and Reference if you are using MS-DOS 5.0. If you are using MS-DOS 6, type
	  "help emm386.exe" at the MS-DOS command prompt (without the quotation marks)
	  and then press ENTER.
	
	- If the program requiring expanded memory can use the LIM 4.0 specification,
	  then the 64K page frame can be set non-contiguously. To accomplish this, add
	  the "Pn=address" parameter.
	
	  The following line in your CONFIG.SYS file sets the page frame by loading the
	  four different pages in the indicated non-contiguous locations:
	
	     device=c:\dos\emm386.exe p0=c800 p1=d400 p2=e000 p3=d000 ram
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
