---
layout: page
title: "Q139010: DEC Alpha STOP C000000143 on AlphaServer 1000"
permalink: kb/139/Q139010/
---

## Q139010: DEC Alpha STOP C000000143 on AlphaServer 1000

	Article: Q139010
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following STOP message appears when you install Windows NT on a DEC
	AlphaServer 1000 4/200 or DEC AlphaServer 1000 4/233 computer:
	
	  STOP C0000143 [Missing System File] This requires system file
	  DISPLAY_DRIVER.SYS is bad or missing.
	
	This problem also occurs when you select the Standard VGA driver.
	
	CAUSE
	=====
	
	Windows NT cannot find the correct display driver to boot up.
	
	RESOLUTION
	==========
	
	Install the CLINEAR.SYS video driver that is located in the
	\DRVLIB\VIDEO\ALPHA\CIRRUS directory on the Windows NT Server 3.51 compact
	disc.
	
	To install the CLINEAR.SYS video driver:
	
	1. Copy the files from the \DRVLIB\VIDEO\ALPHA\CIRRUS directory on the Windows
	  NT Server 3.51 compact disc to a floppy disk.
	
	2. Insert the Windows NT Server 3.51 compact disc in the CD-ROM drive.
	
	3. Restart the computer.
	
	4. At the ARC screen, choose Run A Program from the menu.
	
	5. At the prompt, type "cd:\ALPHA\setupldr" (without the quotation marks) and
	  press Enter.
	
	6. Press Enter to Setup Windows NT.
	
	7. At the next screen select Custom setup.
	
	8. At the Hardware Configuration screen, choose Display, then Other.
	
	9. Insert the disk containing the CLINEAR.SYS file from step 1 and select the
	  Cirrus video driver.
	
	The DEC products discussed here are manufactured by Digital Equipment
	Corporation, a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding these products' performance or reliability.
	
	Additional query words: prodnt ntstop blue screen
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
