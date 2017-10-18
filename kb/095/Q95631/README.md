---
layout: page
title: "Q95631: Changing or Reinstalling MS-DOS Shell Video Files"
permalink: kb/095/Q95631/
---

## Q95631: Changing or Reinstalling MS-DOS Shell Video Files

	Article: Q95631
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MS-DOS Shell uses three files for its video display: DOSSHELL.VID, DOSSHELL.GRB,
	and DOSSHELL.INI. If you are having problems with your Shell video display,
	re-creating these files may correct the problem. Some common problems caused by
	corrupted or missing video files include:
	
	- Shell stops responding (hangs) when started
	
	- Video display corruption (garbage on the screen)
	
	- Video display related error messages
	
	NOTE: The following steps are also necessary if you've changed your computer's
	video monitor type.
	
	MORE INFORMATION
	================
	
	Changing or Reinstalling Shell Video Files
	------------------------------------------
	
	The following files can be found on your MS-DOS 5 Upgrade or MS-DOS 6 Upgrade
	disks. To use these files, they must be expanded and renamed (instructions
	below). They are listed by file type and display resolution (monitor type):
	
	  Monitor type      .VID file   .GRB file     .INI file
	  -----------------------------------------------------
	
	  Monochrome        (none)      MONO.GR_      MONO.IN_
	  CGA               CGA.VI_     CGA.GR_       CGA.IN_
	  EGA               EGA.VI_     EGA.GR_       EGA.IN_
	  EGA Monochrome    EGA.VI_     EGAMONO.GR_   MONO.IN_
	  VGA               VGA.VI_     VGA.GR_       EGA.IN_
	  VGA Monochrome    VGA.VI_     VGAMONO.GR_   MONO.IN_
	  8514              8514.VI_    VGA.GR_       EGA.IN_
	  8514 Monochrome   8514.VI_    VGAMONO.GR_   MONO.IN_
	  Hercules          HERC.VI_    HERC.GR_      MONO.IN_
	
	NOTE: The 8514.VI_ file is not available on the MS-DOS 5 Upgrade disks; however,
	it is included with version 5.0a of MS-DOS 5 Upgrade and the MS-DOS 6 Upgrade.
	
	You can find the location of these files by viewing the PACKING.LST file with
	MS-DOS Editor. If you are using MS-DOS 5 Upgrade, the PACKING.LST file is
	located in your DOS directory. If you are using MS-DOS 6 Upgrade, the
	PACKING.LST file is not copied to your DOS directory; however, it is located on
	Disk 1 of your MS-DOS 6 Upgrade disks.
	
	Expanding New MS-DOS Shell Files
	--------------------------------
	
	The following procedure should be used for your particular video display type,
	floppy disk drive configuration and MS-DOS location. VGA, floppy disk drive A,
	and the C:\DOS subdirectory are used only as an example:
	
	1. Insert the MS-DOS Upgrade disk containing VGA.VI_ in drive A, type the
	  following, and press ENTER:
	
	  "expand a:\vga.vi_ c:\dos\dosshell.vid" (without the quotation marks)
	
	2. Insert the MS-DOS Upgrade disk containing VGA.GR_ in drive A, type the
	  following, and press ENTER:
	
	  "expand a:\vga.gr_ c:\dos\dosshell.grb" (without the quotation marks)
	
	3. Insert the MS-DOS Upgrade disk containing EGA.IN_ in drive A, type the
	  following, and press ENTER:
	
	  "expand a:\ega.in_ c:\dos\dosshell.ini" (without the quotation marks)
	
	The next time you start MS-DOS Shell, the new video display configuration takes
	effect. If you still have problems with the display, make sure you configured
	the Shell video display files properly, or contact Microsoft Product Support
	Services.
	
	Additional query words: 5.00 5.00a 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0
	
	=============================================================================
	
