---
layout: page
title: "Q63596: Fact Sheet for IBM's DASDDRVR.SYS and Microsoft Windows 3.0"
permalink: /kb/063/Q63596/
---

## Q63596: Fact Sheet for IBM's DASDDRVR.SYS and Microsoft Windows 3.0

	Article: Q63596
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is a list of the PS/2 BIOS problems corrected by the various
	versions of IBM's DASDDRVR.SYS patch file:
	
	- Intermittent
	
	  Not ready error reading drive A:
	
	- Intermittent
	
	  General failure
	
	  errors reading a fixed disk drive
	
	- 
	
	  Track 0 bad, or invalid media
	
	  when formatting multiple 3.5-inch disks
	
	- 301 and 8602 errors when the system is powered off and on quickly
	
	- 162 and 163 errors with loss of date and time
	
	- Being prompted for password (on warm boot) even though password security is
	  not implemented or incorrectly told password already exists when installing
	  the power-on password function
	
	MORE INFORMATION
	================
	
	The first three corrections listed above were originally provided on the PC- DOS
	version 3.3 patch disk. The DASDDRVR.SYS file (also called DOS33FIX) was 648
	bytes.
	
	The next two corrections were added in the next version, which was 698 bytes, and
	included on all version 1.02 Reference Disks (50/60 and 70/80).
	
	The last correction was added on all 50/60 and 70/80 Reference Disks, versions
	1.03 or later. It is now up to 734 bytes.
	
	PS/2 Models Affected
	--------------------
	
	The IBM System Update Diskette, DASDDRVR.SYS version 1.56, affects the following
	PS/2 models: 30-286, 50, 50Z, 55SX, 60, 70, 80, and PC-DOS 3.3 and 4.0.
	
	DASDDRVR's Load Procedure
	-------------------------
	
	When the DASDDRVR patch is loaded from CONFIG.SYS, it looks at the system model
	ID and submodel bytes, as well as the BIOS date. If these don't match what it is
	looking for, DASDDRVR doesn't even apply the patches. All you do is waste a
	small piece of disk space. Later versions of DASDDRVR than those mentioned here
	may apply to other model PS/2 machines. When in doubt, load DASDDRVR.
	
	NOTE: DASDDRVR.SYS should not be loaded high.
	
	Notes on Use of DASDDRVR.SYS with Windows
	-----------------------------------------
	
	Proper functioning of Microsoft Windows (all versions) and all Windows
	applications requires that DASDDRVR.SYS be loaded upon installing and running
	these programs as described here.
	
	Note on PS/2 Model 30-286
	-------------------------
	
	The 30-286 also has a DASDDRVR.SYS, but this is not the same DASDDRVR file and
	corrects entirely different problems. The Model 55 Reference Disk does
	(unintentionally) contain the 734-byte DASDDRVR file, but it is not needed.
	
	Obtaining the IBM PS/2 System Update Diskette
	---------------------------------------------
	
	You can obtain the free IBM PS/2 System Update Diskette from IBM PC Books and
	Software.
	
	These facts were obtained from the IBM National Support Center PC User's Group
	Bulletin Board. For more information on DASDDRVR.SYS, please contact your local
	IBM representative.
	
	The IBM products included here were manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.00 win30 Network Resource no longer available
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
