---
layout: page
title: "Q66267: Windows 3.0 Supplemental Driver Library; Network Install"
permalink: /kb/066/Q66267/
---

## Q66267: Windows 3.0 Supplemental Driver Library; Network Install

	Article: Q66267
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is taken from the NETSDL.TXT and README.TXT files
	included with the Windows 3.0 Supplemental Driver Library.
	
	MORE INFORMATION
	================
	
	Installing Windows 3.00 Supplemental Driver Library on a Network
	----------------------------------------------------------------
	
	This file is intended for system administrators or anyone else who
	will install the drivers in this package onto a network for use with a
	shared copy of Windows.
	
	1. Create a new directory on the network drive for the supplemental
	  drivers you are going to install. It might be most convenient to
	  make this directory a subdirectory of the Windows directory.
	
	  This new directory should not be the Windows system directory,
	  where the original Windows device drivers were installed.
	
	2. Copy all of the files in the Supplemental Driver Library disks
	  to the directory you created in Step 1.
	
	3. Copy all of the files in the new directory to the Windows
	  directory.
	
	  There will then be two copies of these files on your network
	  drive. Both sets of drivers are necessary in order to ensure
	  that these drivers will work properly on the users' systems.
	
	4. Delete the file OEMSETUP.INF from the Windows directory.
	
	  This ensures that this version of OEMSETUP.INF won't be
	  overwritten by another file with the same name.
	
	  You should not delete the copy of OEMSETUP.INF that is in the
	  directory you created in Step 1.
	
	Once these steps are completed, users of the shared copy of Windows
	will have access to these drivers.
	
	The only exception is display drivers. To use one of the display
	drivers included in this package, the user will need to run Setup from
	MS-DOS using the following procedure. (This procedure is not necessary
	for users who will not be using one of these display drivers.)
	
	1. Exit Windows.
	
	2. Type the following at the DOS prompt and then press ENTER:
	
	     setup /n
	
	3. Press the UP ARROW key to select the Display setting and then
	  press ENTER.
	
	4. Scroll to the bottom of the list using the DOWN ARROW key.
	
	5. Select Other and press ENTER.
	
	6. Type the pathname of the display driver and press ENTER.
	
	  The driver will be located on the subdirectory created in
	  Step 1 of the previous set of instructions.
	
	  Setup then updates your WIN.INI and SYSTEM.INI files to correspond
	  to the new driver and then displays an updated list of your
	  hardware.
	
	7. Press ENTER to complete the process.
	
	8. Start Windows.
	
	The preceding procedure might not work if the user has a local copy of
	Setup. In this case, the user will have to manually change the
	settings in the SYSTEM.INI file and possibly take additional actions.
	If you cannot use Setup /n to gain access to a Supplemental Library
	display driver from the network, follow the instructions that follow.
	
	Manually Installing an SDL Display Driver from a Network
	to a Local Workstation
	--------------------------------------------------------
	
	You do not need to read the information in the following section
	unless you were unable to use Setup to configure a user's system to
	use a Supplemental Library display driver that is on a network share.
	
	Printing this file: You should print this file in landscape mode (11
	inches wide, 8.5 inches high) so that the table in this document will
	not run off the page.
	
	To manually configure a workstation to gain access to an SDL display
	driver on a network, follow these steps:
	
	1. Open your SYSTEM.INI file using a text editor, such as Notepad.
	  This file should be located in your Windows directory.
	
	2. Locate the following four settings in SYSTEM.INI. In the [boot]
	  section, locate the display.drv= and 386grabber= settings. In the
	  [boot.description] section, locate the display.drv= setting. In the
	  [386Enh] section, locate the display= setting. Note that the [386Enh]
	  section is footnoted. See below.
	
	3. Look up the display driver you want to use in the following list
	  and change the corresponding SYSTEM.INI values (the values are what
	  appears to the right of the equal sign) to those shown on the list.
	
	  The following notation applies to the list below:
	
	     [386Enh] display=
	     -----------------
	
	     (1) vddati.386
	     (2) vddchip.386
	     (3) *vddvga
	     (4) vddpara.386
	
	Name of Display                              [boot]        [boot]
	(Enter in [boot.description] display.drv=)   display.drv=  386grabber=
	------------------------------------------   ------------  ------------
	
	ATI Mode 54h (800x600 16 colors) v2.00       win3-54b.drv  vga.gr3
	(1)
	ATI Mode 55h (1024x768 16 colors v2.00       win3-55b.drv  vga.gr3
	(1)
	CHIPS Super VGA 82C451 (800x600 16 colors)   45131600.drv  vga.gr3
	(2)
	CHIPS Super VGA 82C452 (800x600 16 colors)   45231600.drv  vga.gr3
	(2)
	CHIPS Super VGA 82C451 (1024x768 16 colors)  win31768.drv  vga.gr3
	(2)
	CHIPS Super VGA 82C452 (640x480 256 colors)  win3p480.drv  vgap45x.gr3
	(2)
	COMPAQ Integrated Video Graphics System      cpqivgs.drv   vga.gr3
	(3)
	DGIS Medium Resolution w/VGA, Ver 1.01       dgis3lo.drv   dgisvga.gr3
	(3)
	DGIS High Resolution w/VGA, Ver 1.01         dgis3hi.drv   dgisvga.gr3
	(3)
	Paradise VGA (800x600 16 colors)             vga800.drv    vga.gr3
	(4)
	Paradise VGA (1024x768 16 colors)            vga1024.drv   vga.gr3
	(4)
	Paradise VGA (640x480 256 colors)            pvga480.drv   pvga.gr3
	(4)
	Video Seven VGA (800x600 16 color)           v760016.drv   v7vga.gr3
	(3)
	Video Seven VGA (1024x768 16 color)          v776816.drv   v7vga.gr3
	(3)
	Video Seven VGA (640x480 256 color)          v7480256.drv  v7vga.gr3
	(3)
	
	  Make sure you have correctly typed the appropriate values into your
	  SYSTEM.INI file.
	
	4. Save the new settings and close the SYSTEM.INI file.
	
	5. Exit Windows, if you have not already done so.
	
	  IMPORTANT: If you are converting to one of the Supplemental Library
	  display drivers from a non-VGA driver, you will need to follow
	  Steps 6 and 7.
	
	  If your previous display was a VGA, you can skip to Step 8.
	
	6. Copy the files WIN.CNF, VGALOGO.LGO, and VGALOGO.RLE from the network
	  Windows directory to your local Windows directory on your hard disk.
	
	7. At the DOS prompt, change to the local Windows directory and then type
	  the following commands:
	
	  copy win.cnf /b + vgalogo.lgo /b + vgalogo.rle /b
	  ren win.cnf win.com
	
	8. Restart Windows.
	
	Additional query words: 3.00 3.0 3.0a 3.00a windrvr
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
