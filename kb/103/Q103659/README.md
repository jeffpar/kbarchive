---
layout: page
title: "Q103659: Setup Hangs While Inspecting Hardware; How to Use NTDETECT.COM"
permalink: /kb/103/Q103659/
---

## Q103659: Setup Hangs While Inspecting Hardware; How to Use NTDETECT.COM

	Article: Q103659
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are starting the system from the Windows NT Setup Disk for CD-ROM
	Installation or for Floppy Installation, if Setup hangs at the screen saying
	"Setup is inspecting your computer's hardware configuration," you can use the
	debug version of NTDETECT.COM to determine what component of the hardware might
	be causing the problem. The debug version of NTDETECT.COM is located in the
	following:
	
	  Windows NT 3.1  - Windows NT 3.1 CD-ROM disc
	                    (SUPPORT\SUPTOOLS\I386\NTDETECT.COM)
	  Windows NT 3.5  - Contact Microsoft Product Support Services (PSS)
	  Windows NT 3.51 - Windows NT CD-ROM disc
	          and 4.0   (SUPPORT\DEBUG\I386\NTDETECT.CHK)
	                    Rename NTDETECT.CHK to NTDETECT.COM.
	
	
	MORE INFORMATION
	================
	
	NTDETECT.COM detects and builds the hardware component lists on Intel-based
	(x86) computers. To use the debug version of NTDETECT.COM to determine why
	Windows NT Setup is hanging at the "Setup is inspecting your computer's hardware
	configuration" message, do the following:
	
	1. Use the MS-DOS DISKCOPY command to copy the contents of the Windows NT Setup
	  disk to a formatted, blank floppy disk.
	
	2. Replace the NTDETECT.COM file on the copy of the Windows NT Setup disk
	  created in step 1 with the NTDETECT.COM file mentioned above (for the
	  appropriate version of Windows NT).
	
	  NOTE: The debug version of NTDETECT.COM is not available on the Windows NT
	  floppy disks.
	
	3. Insert the copy of the Windows NT Setup disk you created in step 1 in drive A
	  and restart the computer.
	
	The debug version of NTDETECT.COM will display hardware information on the screen
	as it is detected. To move to the next screen, press any key. Continue until
	Setup hangs. The contents of the screen at the point of lockup should give you
	an indication of what hardware component might be causing the problem.
	
	Additional query words: prodnt lock up lockup halt
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
