---
layout: page
title: "Q96769: Problems Formatting or Reading a Floppy Disk"
permalink: /kb/096/Q96769/
---

## Q96769: Problems Formatting or Reading a Floppy Disk

{% raw %}

	Article: Q96769
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to read information from a floppy disk, or format a floppy disk by
	using the FORMAT command, you receive one of the following error messages:
	
	  Invalid media type -- track 0 bad
	
	  Parameters not supported by drive
	
	CAUSE
	=====
	
	Some hardware manufacturers used earlier versions of MS-DOS to define the
	capacity of the floppy disk drives on their computers. MS-DOS versions 5.0 and
	later do not recognize some of these definitions. If your drive doesn't format
	floppy disks, you must either redefine the disk drive using the DRIVPARM command
	in your CONFIG.SYS file, define a second configuration for the disk drive using
	DRIVER.SYS in your CONFIG.SYS file, or contact the original manufacturer of your
	hardware for a BIOS that supports MS-DOS 5.0 and later.
	
	RESOLUTION
	==========
	
	If MS-DOS won't read or format a high-density disk (1.2 megabyte [MB] or 1.44
	MB), reconfigure your existing drive as described in Procedure 1. If you cannot
	read or format a low-density disk (360 kilobytes [K] or 720K) or a disk with an
	unusual configuration, read the "Problems with Other Disk Sizes" section later
	in this article before you try a solution.
	
	IMPORTANT: Try Procedure 1 first. If it does not correct the problem, try
	Procedure 2.
	
	Procedure 1: Reconfigure an Existing Drive
	------------------------------------------
	
	1. Use a text editor, such as MS-DOS Editor, to open your CONFIG.SYS file. If
	  you want to use MS-DOS Editor, type the following at the MS-DOS command
	  prompt and press ENTER
	
	  " edit <drive>:\config.sys" (without the quotation marks)
	
	  where <drive> is the startup drive where your CONFIG.SYS file currently
	  resides. For example, if your startup drive is drive C, type the following
	  command:
	
	  " edit c:\config.sys" (without the quotation marks)
	
	2. At the end of the CONFIG.SYS file, add one of the following commands.
	
	  To get your first (or only) floppy disk drive to work with 1.2-MB (5.25-inch)
	  disks, add the following line:
	
	  " drivparm=/d:0 /f:1" (without the quotation marks)
	
	  To get your first (or only) floppy disk drive to work with 1.44-MB (3.5-inch)
	  disks, add the following line:
	
	  " drivparm=/d:0 /f:7 /i" (without the quotation marks)
	
	  To get your second floppy disk drive (if your computer has two) to work with
	  1.2-MB (5.25-inch) disks, add the following line:
	
	  " drivparm=/d:1 /f:1" (without the quotation marks)
	
	  To get your second floppy disk drive (if your computer has two) to work with
	  1.44-MB (3.5-inch) disks, add the following line:
	
	  " drivparm=/d:1 /f:7 /i" (without the quotation marks)
	
	3. Save your CONFIG.SYS file and exit the text editor. If you're using MS-DOS
	  Editor, choose Exit from the File menu. When MS-DOS Editor displays a dialog
	  box prompting you to save your file, choose the Yes button or press ENTER.
	
	4. Restart your computer by pressing CTRL+ALT+DEL.
	
	5. Try reading or formatting the floppy disk again.
	
	  If you can read or format the disk, you've corrected the problem and can stop
	  here. If you still cannot read or format the disk, perform the next
	  procedure.
	
	Procedure 2: Create an Additional Logical Drive
	-----------------------------------------------
	
	If Procedure 1 did not correct the problem, do the following:
	
	1. Use a text editor, such as MS-DOS Editor, to open your CONFIG.SYS file. If
	  you want to use MS-DOS Editor, type the following at the MS-DOS command
	  prompt and press ENTER:
	
	  " edit <drive>:\config.sys" (without the quotation marks)
	
	2. If you added a DRIVPARM command to your CONFIG.SYS file while following the
	  first procedure, delete the DRIVPARM command.
	
	3. At the end of the CONFIG.SYS file, add one of the following DEVICE commands.
	
	  To get your first (or only) floppy disk drive to work with 1.2-MB (5.25-inch)
	  disks, add the following line
	
	  " device=<path>\driver.sys /d:0 /f:1" (without the quotation marks)
	
	  where <path> is the path to your DRIVER.SYS file. For example, if your
	  DRIVER.SYS file is located in the DOS directory on drive C, type the
	  following line:
	
	  " device=c:\dos\driver.sys /d:0 /f:1" (without the quotation marks)
	
	  To get your first (or only) floppy disk drive to work with 1.44-MB (3.5-inch)
	  disks, add the following line:
	
	  " device=<path>\driver.sys /d:0 /f:7" (without the quotation marks)
	
	  To get your second floppy disk drive (if your computer has two) to work with
	  1.2-MB (5.25-inch) disks, add the following line:
	
	  " device=<path>\driver.sys /d:1 /f:1" (without the quotation marks)
	
	  To get your second floppy disk drive (if your computer has two) to work with
	  1.44-MB (3.5-inch) disks, add the following line:
	
	  " device=<path>\driver.sys /d:1 /f:7" (without the quotation marks)
	
	4. Save your CONFIG.SYS file and exit the text editor. If you're using MS-DOS
	  Editor, choose Exit from the File menu. When MS-DOS Editor displays a dialog
	  box prompting you to save your file, choose the Yes button or press ENTER.
	
	5. Restart your computer by pressing CTRL+ALT+DEL.
	
	  When your computer starts, MS-DOS displays a message stating that it has
	  created a logical disk drive. This message includes the letter it has
	  assigned to the new drive. For example, if you had drives A and C on your
	  system before, this new drive is drive D, and MS-DOS displays the following
	  message when you start your computer:
	
	  Loaded External Disk Driver for Drive D
	
	6. Insert a disk in the floppy disk drive and try formatting the disk using the
	  new drive letter. For example, if the new drive is D, issue the FORMAT
	  command using "d:" as the drive specification by typing the following at the
	  MS-DOS command prompt and pressing ENTER:
	
	  " format d:" (without the quotation marks)
	
	If you still cannot format a floppy disk, you need to get updated hardware or
	software. If you used DRIVPARM or DRIVER.SYS successfully with your earlier
	version of MS-DOS, contact your computer manufacturer for a BIOS that supports
	MS-DOS 5.0 and later. If you have not used DRIVPARM or DRIVER.SYS before, you
	might need to get an updated version of your computer manufacturer's version of
	MS-DOS from your computer vendor.
	
	Problems with Other Disk Sizes
	------------------------------
	
	If MS-DOS won't read or format a low-density disk (360K or 720K) or a 2.88-MB
	disk, you can follow the procedures outlined earlier in this article, but you
	must use a different value for the /F switch. The following table lists the /F
	switch values to use:
	
	  Drive Size    Disk Capacity    Values to Use
	  --------------------------------------------
	  5.25-inch     160K, 180K,      /F:0
	                320K, 360K
	  3.5-inch      720K             /F:2
	  3.5-inch      2.88 MB          /F:9
	
	For example, if you are having problems using a 720K disk drive, follow Procedure
	1 or 2, but substitute /F:2 for the /F switch value shown in the procedure. When
	using DRIVPARM to specify drive parameters on a 3.5-inch disk drive, it may be
	necessary to use the /I (the letter "I") switch in addition to the /F switch.
	The /I switch is valid with DRIVPARM only and should not be used with
	DRIVER.SYS.
	
	If you have a disk with an unusual configuration (a nonstandard number of heads
	or sectors, for example), you can specify additional switches with DRIVPARM or
	DRIVER.SYS. For more information, see the Microsoft MS-DOS 5.0 "User's Guide and
	Reference" or MS-DOS Help for version 6.0 or 6.2 (type "help" (without the
	quotation marks) at the MS-DOS command prompt).
	
	REFERENCES
	==========
	
	Version 5.0
	-----------
	
	- For more information about adding disk drives, see Chapter 11 of the "User's
	  Guide and Reference."
	
	- For more information about the DRIVPARM command, see Chapter 14 of the
	  "User's Guide and Reference."
	
	- For more information about the command-line syntax for DRIVER.SYS, see
	  Chapter 15 of the "User's Guide and Reference."
	
	Versions 6.0,6.2, and 6.21
	--------------------------
	
	For more information about adding disk drives, the DRIVPARM command, or the
	command-line syntax for DRIVER.SYS, see MS-DOS Help (type "help" (without the
	quotation marks) at the MS-DOS command prompt).
	
	Additional query words: 6.22 6.00 5.00 6.20 dos tshoot diskette
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
