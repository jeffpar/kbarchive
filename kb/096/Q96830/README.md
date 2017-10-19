---
layout: page
title: "Q96830: Windows 3.0 Doesn't Run in 386 Enhanced Mode"
permalink: /kb/096/Q96830/
---

## Q96830: Windows 3.0 Doesn't Run in 386 Enhanced Mode

	Article: Q96830
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21; WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21 
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how to correct the problem of Microsoft Windows version
	3.0 not running in 386 enhanced mode on a system with Microsoft MS-DOS version
	5.0 and later.
	
	The article is divided into the following subsections:
	
	- Extended Memory Requirements
	
	- CONFIG.SYS File Requirements
	
	- AUTOEXEC.BAT File Requirements
	
	- WINA20.386 File Requirements
	
	- Additional Steps for Systems Running EMM386.EXE
	
	MORE INFORMATION
	================
	
	To ensure the Microsoft Windows version 3.0 can run on your system, make sure
	your system meets all the requirements discussed in the following subsections.
	
	Extended Memory Requirements
	----------------------------
	
	Your system must have at least 1 megabyte (MB) (1,048,576 bytes) of extended
	memory. To determine the amount of available extended memory, type the following
	at the MS-DOS command prompt, and press ENTER:
	
	  " mem" (without the quotation marks)
	
	If you do not have 1 MB of available extended memory, reduce your system's
	extended memory usage by removing the DOS=HIGH command from your CONFIG.SYS
	file. If you are using the version of SMARTDrive that is provided with MS-DOS
	5.0 (SMARTDRV.SYS), reduce the value of the MinCacheSize parameter. If you are
	using the version of SMARTDrive that is provided with MS-DOS version 6.0 or
	later (SMARTDRV.EXE), reduce the value of the WinCacheSize parameter.
	
	CONFIG.SYS File Requirements
	----------------------------
	
	By default, Setup configures MS-DOS to install HIMEM.SYS when you start your
	system. If MS-DOS does not install HIMEM.SYS, make sure the the following
	command appears in your CONFIG.SYS file before any commands that start device
	drivers or programs that use extended memory:
	
	  device=c:\dos\himem.sys
	
	In addition, verify the following in your CONFIG.SYS file:
	
	- The FILES command must specify at least 30 files.
	
	- The BUFFERS command must specify at least 20 buffers.
	
	AUTOEXEC.BAT File Requirements
	------------------------------
	
	Your AUTOEXEC.BAT file must include a SET command such as the following that
	establishes the location where temporary files are stored:
	
	  set temp=<drive>:\<directory>
	
	where <drive> is your hard disk drive and <directory> is the
	directory where your temporary files are stored. This set command creates an
	environment variable that Windows version 3.0 uses to determine where to store
	its temporary files. For example, the following command directs Windows to store
	its temporary files in a directory named TEMP on drive C:
	
	  set temp=c:\temp
	
	WINA20.386 File Requirements
	----------------------------
	
	Your system must include the WINA20.386 file. The Setup program for MS-DOS places
	this file in the root directory of your startup drive (usually drive C). If you
	have moved the WINA20.386 file to another directory, you need to edit your
	CONFIG.SYS and SYSTEM.INI files to reflect the accurate location of this file.
	Use the procedures outlined below.
	
	If you can't find the WINA20.386 file in any directory on your hard disk drive,
	expand and copy the file from your MS-DOS installation disks to the root
	directory of your startup drive by typing the following at the MS-DOS command
	prompt and pressing ENTER
	
	  expand <floppy>:\wina20.38_ <startupdrive>:\wina20.386
	
	where <floppy> is the floppy disk drive that contains the installation disk
	with the compressed file you want to expand, and <startupdrive> is your
	startup drive. For example, if your installation disk is in floppy disk drive A
	and your startup drive is drive C, type the following command:
	
	  " expand a:\wina20.38_ c:\wina20.386" (without the quotation marks)
	
	The WINA20.386 file is located on the following installation disks:
	
	   MS-DOS       3.5-Inch Disk  5.25-Inch    3.5-Inch   5.25-Inch
	   Version      Number (1.44   Disk Number  Disk       Disk
	                MB)            (1.2 MB)     Number     Number
	                                            (720K)     (360K)
	   -------------------------------------------------------------
	
	   MS-DOS 5     N/A            N/A          Disk 3     Disk 5
	   Upgrade
	   MS-DOS 5.0a  N/A            Disk 2       Disk 3     Disk 5
	   Upgrade
	   MS-DOS 6.0   Disk 1         Disk 2       Disk 3     Disk 5
	   Upgrade
	   MS-DOS 6.2   Disk 1         Disk 2       Disk 3     Disk 5
	   Upgrade
	   MS-DOS 6.21  Disk 1         Disk 2       Disk 3     Disk 5
	   Upgrade
	
	If you have moved your WINA20.386 file to a directory other than the root
	directory of your startup drive, use the following procedure to allow Windows
	3.0 to find it:
	
	1. Edit your CONFIG.SYS file. To edit the file using MS-DOS Editor, type the
	  following at the MS-DOS command prompt and press ENTER:
	
	  " edit <startupdrive>:\config.sys" (without the quotation marks)
	
	2. Add the following line at the end of your CONFIG.SYS file:
	
	  switches=/w
	
	3. Save your CONFIG.SYS file. If you're using MS-DOS Editor, choose Exit from
	  the File menu. When MS-DOS Editor displays a dialog box prompting you to save
	  your file, choose the Yes button or press ENTER.
	
	4. Next, use MS-DOS Editor to open your Windows SYSTEM.INI file. Your SYSTEM.INI
	  file is in the directory where your Windows files reside. To edit the file,
	  type the following at the MS-DOS command prompt and then press ENTER:
	
	  " edit <drive>:\<directory>\system.ini" (without the quotation
	  marks)
	
	  where <drive> is your hard disk drive and <directory> is the
	  directory where your Windows files reside. For example, if your hard disk
	  drive is drive C and your Windows files are located in the WINDOWS directory,
	  type the following command:
	
	  " edit c:\windows\system.ini" (without the quotation marks)
	
	5. Locate the section of your SYSTEM.INI file that begins with the [386Enh]
	  heading, and add the following command:
	
	  " device=<drive>:\<directory>\wina20.386" (without the quotation
	  marks)
	
	  where <drive> is your hard disk drive and <directory> is the
	  directory where the WINA20.386 file is now located. For example, if you moved
	  the file to your WINDOWS directory, you would add the following command to
	  your Windows SYSTEM.INI file:
	
	  " device=c:\windows\wina20.386" (without the quotation marks)
	
	6. Save your SYSTEM.INI file. If you're using MS-DOS Editor, choose Exit from
	  the File menu. When MS-DOS Editor displays a dialog box prompting you to save
	  your file, choose the Yes button or press ENTER.
	
	7. Restart your computer by pressing CTRL+ALT+DEL.
	
	Additional Steps for Systems Running EMM386.EXE
	-----------------------------------------------
	
	If Windows version 3.0 doesn't run in 386 enhanced mode after you have checked
	the items listed above, and you are using EMM386.EXE, do the following:
	
	1. Use a text editor, such as MS-DOS Editor, to open the SYSTEM.INI file that is
	  located in the directory where your Windows files reside. If you want to use
	  MS-DOS Editor, type the following at the MS-DOS command prompt and press
	  ENTER
	
	  " edit <drive>:\<directory>\system.ini" (without the quotation
	  marks)
	
	  where <drive> is your hard disk drive and <directory> is the
	  directory where your Windows files reside. For example, if your hard disk
	  drive is drive C and your Windows files are located in the WINDOWS directory,
	  type the following command:
	
	  " edit c:\windows\system.ini" (without the quotation marks)
	
	2. Insert the following command in the [386Enh] section of the SYSTEM.INI file:
	
	  " EMMEXCLUDE=A000-EFFF" (without the quotation marks)
	
	3. Save your SYSTEM.INI file. If you're using MS-DOS Editor, choose Exit from
	  the File menu. When MS-DOS Editor displays a dialog box prompting you to save
	  your file, choose the Yes button or press ENTER.
	
	4. Start Windows version 3.0. If Windows version 3.0 does not run in 386
	  enhanced mode, a device conflict is preventing Windows from running in 386
	  enhanced mode. Call Microsoft Product Support Services for help.
	
	
	Additional query words: appnote 6.00 5.00 6.20 win30 enh enhanced-mode
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbMSDOSSearch kbMSDOS621 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21; WINDOWS:3.0,3.0a
	
	=============================================================================
	
