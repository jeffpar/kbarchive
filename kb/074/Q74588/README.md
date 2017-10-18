---
layout: page
title: "Q74588: DOSSHELL.VID File Needed for Graphics Mode"
permalink: kb/074/Q74588/
---

## Q74588: DOSSHELL.VID File Needed for Graphics Mode

	Article: Q74588
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The DOSSHELL.VID file gives Microsoft MS-DOS version 5.0 Shell the ability to
	display in graphics mode. Graphics mode is supported by most monitors, including
	(but not limited to) EGA and VGA displays in color and on CGA displays in black
	and white.
	
	Most CGA displays require the DOSSHELL.VID file to prevent "snow" from appearing
	on the screen, regardless of the Shell mode.
	
	The DOSSHELL.VID file is not required to run Shell in text mode. To run Shell in
	text mode, use the /T switch. For example:
	
	dosshell /t
	
	MORE INFORMATION
	================
	
	On the MS-DOS 5.0 Upgrade disks are several files with the file extension of
	.vi_ one of which can be expanded by doing the following:
	
	1. Insert the last disk from the MS-DOS 5 Upgrade into drive A, and copy
	  EXPAND.EXE into the DOS directory on the hard drive by typing the following:
	
	  " copy a: expand.exe c:\dos" (without the quotation marks)
	
	2. Locate the appropriate file on the MS-DOS 5 Upgrade disks. For example, if
	  the display is EGA, locate the file called EGA.VI_. The file locations are as
	  follows:
	
	  Disk Size    Video Driver File Location
	  ---------    --------------------------
	
	  5.25-inch    Disk 3
	  3.5-inch     Disk 2
	
	3. Type one of the following (the most appropriate for your display) with the
	  appropriate disk in drive A:
	
	  " expand a:cga.vi_ c:\dos\dosshell.vid
	  expand a:ega.vi_ c:\dos\dosshell.vid
	  expand a:vga.vi_ c:\dos\dosshell.vid
	  expand a:herc.vi_ c:\dos\dosshell.vid" (without the quotation marks)
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x
	
	=============================================================================
	
