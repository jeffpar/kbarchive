---
layout: page
title: "Q126876: Baseball 1995: BS95READ.TXT Contents (Part 1 of 3)"
permalink: kb/126/Q126876/
---

## Q126876: Baseball 1995: BS95READ.TXT Contents (Part 1 of 3)

	Article: Q126876
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Complete Baseball Guide for Windows, 1995 edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is part 1 of the BS95READ.TXT included with Microsoft Complete
	Baseball for Windows, 1995 edition.
	
	NOTE: This Readme document refers to the Microsoft Download Service (MSDL). As of
	12/31/1998, the MSDL service is no longer available. To download support files,
	visit one of the following Microsoft Internet sites:
	
	  http://www.microsoft.com/support
	
	  ftp://ftp.microsoft.com/softlib/mslfiles
	
	================================================================
	MICROSOFT COMPLETE BASEBALL
	================================================================
	
	This README file contains additional information about Complete
	Baseball not included in the User's Guide.
	
	To read this file on-screen, use the Page Down and Page Up keys.  You
	can also print the file by opening this file in any Windows word
	processing program and choosing the Print command from the File menu.
	
	This file contains important information on the following topics:
	
	1) COMPLETE BASEBALL PERFORMANCE
	
	2) CD-ROM PROBLEMS
	
	3) PRINTING AND COPYING
	
	4) COMPLETE BASEBALL DISPLAY
	
	5) AUDIO PROBLEMS
	
	6) RUNNING UNDER MICROSOFT WINDOWS NT
	
	=================================================================
	1.  COMPLETE BASEBALL PERFORMANCE
	=================================================================
	
	Complete Baseball uses your computer's system memory to display
	information quickly.  If you find that Complete Baseball runs slowly,
	or if you encounter out-of-memory errors, Complete Baseball probably
	doesn't have enough memory.  Consider doing the following to improve
	your computer's performance:
	
	* Close all applications that you aren't using.
	
	* Set up a permanent Windows swap file.
	
	  Windows works best when hard disk space has been allocated for
	  swapping a file into or out of your computer's memory.  To set up
	  a permanent Windows swap file on your hard disk, open Windows
	  Control Panel (usually in the "Main" program group of Program
	  Manager), and double-click the "386 Enhanced" icon. Then click the
	  "Virtual Memory" button to see whether your current swap file is
	  temporary or permanent, to check the size of the current swap file,
	  and to make changes. Windows usually creates a temporary swap
	  file by default, but if your disk is full or fragmented, this
	  temporary file can become unavailable.  If you can, make the size
	  of the permanent swap file at least 4096K.
	
	  Look at the Help menu in the Windows Control Panel or in your
	  Windows documentation for more information.
	
	* Defragment or optimize your hard disk by running a defragmentation
	program.
	
	  For example, MS-DOS 6.0 includes a utility called Microsoft
	  Defrag.  Some other popular utilities are PC Tools, Norton
	  Utilities, and Mace Utilities.
	
	* Add more RAM (memory) to your computer.
	
	  You can determine how much memory is available by starting
	  MS-DOS, typing "mem", and pressing ENTER.  This starts a program
	  that will tell you how much memory you have.  You need at least
	  4 megabytes (sometimes listed as 4096 kilobytes, or KB) of RAM,
	  and at least 4 megabytes in your hard disk's Windows swap file to
	  run Complete Baseball.
	
	For complete details on improving performance, consult your Windows
	documentation.
	
	=================================================================
	2.  CD-ROM PROBLEMS
	=================================================================
	
	NOTE - Do not remove the Complete Baseball compact disc from your
	CD-ROM drive while running Complete Baseball.  If this occurs, in
	most cases you will need to restart your computer and run Complete
	Baseball again.
	
	If the Complete Baseball program cannot find the data files that it
	needs from the Complete Baseball compact disc, you'll see a message
	that asks you to select the drive containing the files.  To find the
	source of the problem, do the following:
	
	* Make sure the Complete Baseball compact disc is correctly inserted
	into the CD-ROM drive.
	
	* Make sure the Complete Baseball program is looking for the compact
	disc on the correct drive.
	
	  Check to see if the drive letter for your CD-ROM drive has changed.
	  You can use Windows File Manager to determine which drive letter is
	  assigned to the CD-ROM drive.  The Select Drive command in the Disk
	  menu will say "CD-ROM" next to the CD-ROM drive letter. In your
	  Windows directory, open the MSSPORTS.INI file. The section called
	  [BS95] should have an entry called "CD."  The path should be set to
	  the drive on which your CD-ROM drive appears.  For example, if your
	  CD-ROM drive is drive D:\, the entry would appear as follows:
	
	  [BS95]
	  cd=D:\ 
	
	* If you have an external CD-ROM drive, make sure that the drive is
	connected to your computer, plugged in, and turned on.
	
	If you still see an error message after checking the points above,
	check the manuals that came with your CD-ROM drive for information on
	how a CD-ROM is to be set up, or contact the company that supplied
	the drive.
	
	=================================================================
	3.  PRINTING AND COPYING
	=================================================================
	
	Printing and copying are available from most screens in Complete
	Baseball for images, text, and statistics.  Depending on the type of
	printer you have, printing an image may take several minutes.  Also,
	screen resolution and printer resolution are often not the same, so
	the resulting printout may not match the quality you see on the
	screen.
	
	Because the pictures can be quite large, you may have difficulty
	copying or printing in low-memory conditions.  In this case, close
	all other running applications and try again.
	
	Pictures copied from Complete Baseball and pasted into a word
	processing program may look different if the word processor is not
	set up to display 256 colors. The picture should still print
	correctly on a color printer; only the display in the word processing
	program is affected.
	
	=================================================================
	4.  COMPLETE BASEBALL DISPLAY
	=================================================================
	
	REQUIREMENTS
	---------------------------
	
	Microsoft Complete Baseball requires a 256 color display to run.  If
	your computer's display is less than 256 colors, you need to install
	a 256 color driver, or obtain one from your video card's
	manufacturer.
	
	A set of generic 256 color drivers (which support most
	non-accelerated Super VGA adapters) have been included on the
	Microsoft Complete Baseball CD (see the README.TXT supplied with the
	drivers for more information on supported video adapters). The file
	(SVGA.EXE) is located in the D:\ZDRIVERS directory (assuming D:\ is
	the drive letter of your CD-ROM).
	
	Note: Video adapter based on the S3 chipset will not work with the
	generic 256 color driver (SVGA.EXE). In this case you will find
	specific S3 drivers (also located in the D:\ZDRIVERS directory) for
	these video adapters. The driver you select depends on the specific
	S3 chipset your video adapter uses. For more information on the
	version of the S3 chipset your video card uses see the user manual
	included with your video card. Once you have determined the version
	of the S3 chipset your video card support use the following table
	below to determine which file to copy to your hard disk.
	
	   Chipset      Copy file
	   -------    ---------
	   801/805    S3-801.EXE
	   924          S3-924.EXE
	   928          S3-928.EXE
	
	To install the driver you will first need to copy the appropriate
	driver file from the D:\ZDRIVERS directory on the Microsoft Complete
	Baseball CD to your hard disk (Note: do not copy this file to the
	C:\WINDOWS or C:\WINDOWS\SYSTEM directories). Once the file has been
	copied to the hard disk you will need to "extract" the video driver
	by either typing the name of the file followed by the Enter key from
	the MS-DOS prompt i.e. SVGA <Enter> or by double clicking on the file
	(SVGA.EXE) in the File Manager. Once the files are extracted open
	the DISPLAY.TXT file located in the directory where the expanded
	video driver resides and find the section entitled "Installing a
	Display Driver" for the steps necessary to complete the installation
	of the video driver.
	
	Complete Baseball also requires a 640 X 480 or higher display.  If
	your monitor displays at less than a 640 X 480 resolution, and
	Complete Baseball does not run, check to make sure that you have a
	640 x 480 or higher display driver installed.
	
	To check which video driver is currently installed on your computer:
	
	   1. Run the Windows Setup application (this is usually found in
	your Main Program group).
	
	   2. Locate the Display driver item in the application window.
	
	For information on installing a different display driver, choose
	Contents from the Help menu in the Windows Setup application or
	consult your Windows documentation.
	
	----------------
	DISPLAY PROBLEMS
	----------------
	
	In some situations, Complete Baseball may encounter video display
	problems when using high resolution video drivers from various video
	card manufacturers. The problems include:
	
	   - Images and illustrations appearing grainy or having "glitches"
	
	   - Videos displaying garbled images or crashing Complete Baseball
	
	Most problems can be fixed by obtaining new drivers from your video
	card manufacturer.  Contact the manufacturer of your video card to
	determine if there are newer versions available. Their phone number
	should be in the manuals that came with your video card or personal
	computer.  Another option for obtaining updated drivers is the
	Microsoft Download service, an electronic bulletin board that can be
	accessed via a modem
	at (206) 936-MSDL (6735).
	
	If you experience problems with the display of images and graphics in
	Complete Baseball, such as multiple versions of a single button
	or images drawn on the screen incorrectly, try the following:
	
	1. In your Windows directory, open the BASEBALL.INI file
	   using Notepad or any other word processing program.
	
	2. In the [BASEBALL] section of  the BASEBALL.INI file, change the
	   RLEFIX setting to 1, for example:
	
	                RLEFIX=1
	
	Although this should fix display problems, changing the
	RLEFIX setting will cause images to display more slowly.
	
	Additional query words: kbhowto 1995multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbGamesSearch kbBaseballSearch kbCompleteBaseballSearch kbCompleteBaseball1995
	Version           : WINDOWS:
	
	=============================================================================
	
