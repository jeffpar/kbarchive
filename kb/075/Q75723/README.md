---
layout: page
title: "Q75723: AT&amp;T 6300 Needs Driver for Date/Time Stamping"
permalink: /kb/075/Q75723/
---

## Q75723: AT&amp;T 6300 Needs Driver for Date/Time Stamping

	Article: Q75723
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you install Microsoft MS-DOS 5.0 on an AT&T 6300, the machine will not
	display the correct date or time at startup. This problem occurs on the AT&T
	6300 and AT&T 6300 WGS (Work Group System) machines, which are
	8088/8086-microprocessor based.
	
	Another problem that has been reported with the AT&T 6300 clock is that it
	will not read or display a 1992 date. This problem occurs because the calendar
	chip was designed to function only up to and including 1991. At the time the
	chip was developed, it was assumed customers would upgrade their computers
	before the 1992 calendar year.
	
	MORE INFORMATION
	================
	
	If you have AT&T MS-DOS version 4.0 or 4.01, you will find ATTCLOCK.SYS on
	the original diagnostic disk. The file is not found on earlier releases of
	AT&T MS-DOS or releases from other OEMs. Once you locate the file, copy it
	to the root directory of the hard drive, and add the following line to your
	CONFIG.SYS file:
	
	     device=c:\attclock.sys
	
	After rebooting the machine, the time and date can be correctly set, and the
	machine will maintain correct time and date. The one exception to this solution
	is if you have an AT&T 6300 Plus and are using AT&T MS-DOS 3.3.
	
	The device driver ATTCLOCK.SYS is available on CompuServe in the IBMHW forum, or
	from the AT&T bulletin board at (908) 769-6397.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.30 4.00 5.00 5.0a 5.00a ATT calendar
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a
	
	=============================================================================
	
