---
layout: page
title: "Q96706: Mouse Doesn't Work with MS-DOS Shell"
permalink: kb/096/Q96706/
---

## Q96706: Mouse Doesn't Work with MS-DOS Shell

	Article: Q96706
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use MS-DOS Shell, your mouse moves erratically, or the mouse pointer
	doesn't appear at all. Or, the following dialog box appears when you start
	MS-DOS Shell for the first time:
	
	  Warning:
	
	  You do not have a current mouse driver. This driver may cause your system to
	  stop or cause other problems with MS-DOS Shell.
	
	  Contact your vendor to get more information or a driver that will work with
	  MS-DOS Shell.
	
	  <Disable Mouse> <Use Mouse Anyway>
	
	NOTE: If the dialog box appeared earlier and you now want to disable or re-enable
	your mouse, you must modify your DOSSHELL.INI file. For more information about
	modifying DOSSHELL.INI, see the "Disabling and Re-Enabling Your Mouse with
	MS-DOS Shell" section in this article.
	
	CAUSE
	=====
	
	The mouse driver you are using may be installed incorrectly or may be
	incompatible with MS-DOS Shell or MS-DOS Editor. (The mouse driver is a file
	that enables your computer to interpret your mouse movements. Every mouse should
	come with its own mouse driver.)
	
	Some earlier mouse drivers do not work well with MS-DOS Shell because they cannot
	perform all the functions required by MS-DOS Shell. Also, using the wrong mouse
	driver for your mouse can cause some problems due to hardware differences.
	
	WORKAROUND
	==========
	
	If you have no mouse pointer at all, refer to the "Check Your Mouse Driver
	Installation" section below. If you do have a mouse pointer, but it moves
	erratically or not at all, or if the "You do not have a current mouse driver..."
	dialog box appears, refer to the "Check Your Mouse Driver Compatibility" section
	later in this article.
	
	Check Your Mouse Driver Installation
	------------------------------------
	
	To determine whether your mouse driver is installed correctly, use the procedure
	below.
	
	NOTE: The following steps assume your mouse uses a driver called MOUSE.SYS or
	MOUSE.COM. If you don't find either file on your hard disk, check the
	documentation that came with your mouse for the correct driver name and use it
	wherever appropriate.
	
	1. At the MS-DOS command prompt, type the following and press ENTER after each
	  line
	
	  " <drive>:
	  cd <drive>:\
	  dir mouse.* /s" (without the quotation marks)
	
	  where <drive> is your hard disk drive. (If you have more than one hard
	  disk drive, perform this command for all the hard disks on your system.) For
	  example, if your hard disk is drive C, type the following command and press
	  ENTER after each line:
	
	  " c:
	  cd c:\
	  dir mouse.* /s" (without the quotation marks)
	
	  MS-DOS displays the location of all mouse files on the drive.
	
	2. Make sure you have either the MOUSE.COM or MOUSE.SYS file, and note which
	  directory contains the file. If you have more than one hard disk drive, check
	  each drive for these files.
	
	  If you don't have either of these files on your hard disk, copy them from the
	  floppy disk that came with your mouse.
	
	3. Use a text editor to open your CONFIG.SYS file (if you have MOUSE.SYS) or
	  your AUTOEXEC.BAT file (if you have MOUSE.COM). If you want to use MS-DOS
	  Editor, type the following at the MS-DOS command prompt and press ENTER
	
	  " edit <drive>:\config.sys" (without the quotation marks)
	
	  -or-
	
	  " edit <drive>:\autoexec.bat" (without the quotation marks)
	
	  where <drive> is the startup drive where either AUTOEXEC.BAT or
	  CONFIG.SYS currently resides. For example, if your startup drive is drive C,
	  type the following command:
	
	  " edit c:\config.sys" (without the quotation marks)
	
	  -or-
	
	  " edit c:\autoexec.bat" (without the quotation marks)
	
	4. Check the file you open to make sure it contains a command for starting your
	  mouse and that the location of your mouse file is the same as the location
	  specified in the command. Also, make sure your path points to the most
	  current version of your mouse files. If you have MOUSE.SYS, a command similar
	  to the following should be in your CONFIG.SYS file
	
	  " device=<path>:\mouse.sys" (without the quotation marks)
	
	  where path is the path to your MOUSE.SYS file. For example, if MOUSE.SYS is
	  located in the MOUSE directory on drive C, a command like the following
	  should be in your CONFIG.SYS file:
	
	  " device=c:\mouse\mouse.sys" (without the quotation marks)
	
	  If you have MOUSE.COM, a command similar to the following should be in your
	  AUTOEXEC.BAT file
	
	  " <path>:\mouse.com" (without the quotation marks)
	
	  where <path> is the path to your MOUSE.COM file. For example, if
	  MOUSE.COM is located in the MOUSE directory on drive C, a command like the
	  following should be in your AUTOEXEC.BAT file:
	
	  " c:\mouse\mouse.com" (without the quotation marks)
	
	5. Save the file and quit the text editor. If you're using MS-DOS Editor, choose
	  Exit from the File menu. When MS-DOS Editor displays a dialog box prompting
	  you to save your file, choose the Yes button or press ENTER.
	
	6. If you modified your CONFIG.SYS or AUTOEXEC.BAT file, restart your computer
	  by pressing CTRL+ALT+DEL.
	
	7. Start MS-DOS Shell to determine whether this solved the problem. If the
	  problem still occurs, check your mouse driver's compatibility with MS-DOS
	  Shell, as described below.
	
	Check Your Mouse Driver Compatibility
	-------------------------------------
	
	To determine whether your mouse driver is compatible with MS-DOS Shell, proceed
	as follows:
	
	1. Determine the version number of your mouse driver.
	
	  For some mouse drivers, you can find out what version you have by typing
	  "mouse" (without the quotation marks) at the MS-DOS command prompt. Or,
	  observe the message your computer displays when your mouse driver starts. If
	  your mouse driver starts from your CONFIG.SYS or AUTOEXEC.BAT file, as is
	  usually the case, the message appears when you start your computer. This
	  message often includes the version number.
	
	2. Ensure your mouse driver is compatible with MS-DOS. The following is a list
	  of compatible mouse drivers:
	
	     Type of Mouse       Compatible Versions
	     ---------------------------------------
	
	     Genius              9.06 or later
	     Hewlett-Packard(R)  7.04 or later
	     IBM(R) PS/2(R)      7.04 or later
	     Logitech(TM)        5.01 or later
	     Microsoft           6.21 or later
	     Mouse Systems       7.01 or later
	
	3. If your mouse driver is not on this list, contact your vendor for an updated
	  driver. If you have a Microsoft Mouse and MS-DOS Upgrade version 5.0a (MS-DOS
	  file dates of 11/11/91) or 6.0, you can install a compatible mouse driver
	  from your MS-DOS installation disks by doing the following:
	
	  a. Perform Procedure 1 to determine if you are loading MOUSE.COM or MOUSE.SYS
	     and where the mouse driver you are currently using is located.
	
	  b. MS-DOS 5.0a and 6.0 both ship with MOUSE.COM only. If you found in
	     Procedure 1 that you are using MOUSE.SYS, you'll need to disable the
	     command in CONFIG.SYS by changing it to resemble the following
	
	        rem device=<path>:\mouse.sys
	
	     where <path> is the path to MOUSE.SYS. For example, if MOUSE.SYS is
	     located in the MOUSE directory on drive C, the command should appear as
	     follows:
	
	        rem device=c:\mouse\mouse.sys
	
	     The REM command stands for "remark" and tells MS-DOS to ignore the command
	     it precedes.
	
	     Then add a line to your AUTOEXEC.BAT file using the same location for the
	     path as you found in Procedure 1. It should look similar to the following
	     line
	
	        <path>:\mouse.com
	
	     where <path> is the path to MOUSE.COM. For example, if MOUSE.COM is
	     located in the MOUSE directory on drive C, use the following line:
	
	        c:\mouse\mouse.com
	
	  c. To determine which MS-DOS installation disk contains the new mouse driver,
	     insert the disk containing the PACKING.LST file in your floppy disk drive.
	     To find the disk containing the PACKING.LST file, use the following
	     chart:
	
	        MS-DOS 5.0a           Disk Number
	        ---------------------------------
	
	        5.25-inch 1.2 MB      1
	        5.25-inch 360K        3
	        3.5-inch 720K         3
	
	        MS-DOS 6.0            Disk Number
	        ---------------------------------
	
	        5.35-inch 1.2 MB      1
	        3.5-inch 1.44 MB      1
	
	  d. Type the following at the MS-DOS command prompt and press ENTER to see the
	     contents of each installation disk
	
	  " type <drive>:\packing.lst | more" (without the quotation marks)
	
	     where <drive> is the floppy disk drive containing the installation
	     disk. For example, if the installation disk is in drive A, type the
	     following command:
	
	  " type a:\packing.lst | more" (without the quotation marks)
	
	     NOTE: MOUSE.COM will appear as MOUSE.CO_ because it is a compressed file.
	
	  e. Insert the MS-DOS installation disk containing MOUSE.CO_ in your floppy
	     disk drive.
	
	  f. To expand the compressed mouse driver file and copy it to your hard disk
	     drive, you must use the EXPAND command. For example, type the following at
	     the MS-DOS command prompt and press ENTER after each line
	
	  " <drive>:
	  expand mouse.co_ <path>:\mouse.com" (without the quotation marks)
	
	     where <drive> is the floppy disk drive containing the installation
	     disk and <path> is the path to the directory where your current
	     mouse driver resides. For example, if the installation disk is in floppy
	     disk drive A and your current mouse driver is located in the root
	     directory of drive C, type the following commands and press ENTER after
	     each command:
	
	  " a:
	  expand mouse.co_ c:\mouse.com" (without the quotation marks)
	
	     You now have an MS-DOS Shell compatible mouse driver installed for your
	     Microsoft Mouse. To start using your mouse, remove any disks from your
	     floppy disk drive and restart your computer by pressing CTRL+ALT+DEL.
	
	Disabling and Re-enabling Your Mouse with MS-DOS Shell
	------------------------------------------------------
	
	If the "You do not have a current mouse driver..." dialog box appeared the first
	time you started MS-DOS Shell, you had the choice of disabling the mouse or
	using the mouse anyway. MS-DOS Shell recorded your choice in a file called
	DOSSHELL.INI, which contains information about how MS-DOS Shell appears on your
	system.
	
	NOTE: If you just installed a new mouse driver, you do not need to manually edit
	the DOSSHELL.INI file to enable the new mouse driver. MS-DOS Shell will
	automatically update the DOSSHELL.INI file the next time you start it.
	
	If you chose the Disable Mouse option, MS-DOS Shell added the following line to
	your DOSSHELL.INI file:
	
	  mouseinfo=<version>,disabled
	
	However, if you chose the Use Mouse Anyway option, MS-DOS Shell added this line:
	
	  mouseinfo=<version>,ignore
	
	The <version> parameter represents the version number of the mouse driver
	MS-DOS Shell detected on your system.
	
	To either enable or disable your mouse, you must manually change the "mouseinfo="
	(without the quotation marks) line in the DOSSHELL.INI file.
	
	If you originally chose Disable Mouse, and you want to enable your mouse, follow
	this procedure:
	
	1. Use a text editor to open your DOSSHELL.INI file. If you want to use MS-DOS
	  Editor, type the following at the MS-DOS command prompt and press ENTER
	
	  " edit <drive>:\<directory>\dosshell.ini" (without the quotation
	  marks)
	
	  where <drive> is your hard disk drive and <directory> is your
	  MS-DOS directory. For example, if your hard disk is drive C and your MS-DOS
	  directory is called DOS, type the following command:
	
	  " edit c:\dos\dosshell.ini" (without the quotation marks)
	
	2. Find the "mouseinfo=" (without the quotation marks) line and change it to
	  read as follows
	
	  " mouseinfo=<version>,ignore" (without the quotation marks)
	
	  where <version> is the version number of the mouse driver MS-DOS Shell
	  detected on your system.
	
	3. Save the file and quit the text editor. If you're using MS-DOS Editor, choose
	  Exit from the File menu. When MS-DOS Editor displays a dialog box prompting
	  you to save your file, choose the Yes button or press ENTER.
	
	If you originally chose Use Mouse Anyway and you want to disable your mouse,
	follow this procedure:
	
	1. Use a text editor to open your DOSSHELL.INI file. If you want to use MS-DOS
	  Editor, type the following at the MS-DOS command prompt and press ENTER
	
	  " edit <drive>:\<directory>\dosshell.ini" (without the quotation
	  marks)
	
	  where <drive> is your hard disk drive and <directory> is your MS-
	  DOS directory. For example, if your hard disk is drive C and your MS-DOS
	  directory is called DOS, type the following command:
	
	  " edit c:\dos\dosshell.ini" (without the quotation marks)
	
	2. Find the "mouseinfo=" (without the quotation marks) line, and change it to
	  read as follows:
	
	  " mouseinfo=<version>,disabled" (without the quotation marks)
	
	3. Save the file and quit the text editor. If you're using MS-DOS Editor, choose
	  Exit from the File menu. When MS-DOS Editor displays a dialog box prompting
	  you to save your file, choose the Yes button or press ENTER.
	
	REFERENCES
	==========
	
	For information about using MS-DOS Shell, see Chapters 3 and 8 of the Microsoft
	MS-DOS 5.0 "User's Guide and Reference" or Chapter 2 of the "User's Guide" for
	version 6.0 or 6.2.
	
	Additional query words: 6.00 5.00 5.00a err msg shell dosshell tshoot
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	
