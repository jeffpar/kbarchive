---
layout: page
title: "Q106433: MS-DOS 6.2 Step-Up Error Message: Cannot Update File"
permalink: /kb/106/Q106433/
---

## Q106433: MS-DOS 6.2 Step-Up Error Message: Cannot Update File

{% raw %}

	Article: Q106433
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	When MS-DOS 6.2 Step-Up is unable to update a file, the following message is
	displayed:
	
	  Cannot Update File
	
	  Setup could not update the following file to MS-DOS 6.2:
	
	  <filename>
	
	  Although Setup can continue without updating this file, your MS-DOS 6.2
	  installation will be incomplete.
	
	  For more information, see the README.NOW file, which is located in the same
	  drive and directory as your Step-Up files.
	
	  To continue, press ENTER.
	
	CAUSE
	=====
	
	Setup displays this message when the listed file does not exactly match the
	Microsoft MS-DOS 6.0 Upgrade version of the file.
	
	MS-DOS 6.2 Step-Up uses binary patch files to patch the MS-DOS 6.0 files into the
	MS-DOS 6.2 version. Each binary patch file <filename.xx#> contains a
	checksum for the original MS-DOS 6.0 file and information on how to patch the
	file.
	
	If the checksum for the file on the hard disk does not match the checksum
	contained in the binary patch file, SETUP cannot patch the file and displays the
	"Cannot Update File" message.
	
	RESOLUTION
	==========
	
	To work around this situation:
	
	1. Restore the MS-DOS 6.0 file by expanding it from one of the original MS-DOS 6
	  Upgrade disks.
	
	2. Run MS-DOS 6.2 Step-Up again.
	
	If there are a lot of files that can't be updated by MS-DOS 6.2 Step-Up, you
	might find it easier to reinstall the MS-DOS 6 Upgrade and then run MS-DOS 6.2
	Step-Up again. To do this:
	
	1. Confirm that the DEVICE=C:\DOS\SETVER.EXE command is in your CONFIG.SYS file.
	
	2. Use SETVER to set the version number for SETUP.EXE to 4.00 by typing the
	  following at the MS-DOS command prompt and pressing ENTER.
	
	  " setver setup.exe 4.00" (without the quotation marks)
	
	3. Restart your computer so that the SETVER change takes effect.
	
	4. Run MS-DOS 6 Upgrade Setup.
	
	5. After MS-DOS 6 Setup completes, delete SETUP.EXE from the SETVER table by
	  typing the following at the MS-DOS command prompt and pressing ENTER:
	
	  " setver setup.exe /d" (without the quotation marks)
	
	6. Restart your computer so that the SETVER change takes effect.
	
	7. Run MS-DOS 6.2 Step-Up Setup.
	
	If you have a version of MS-DOS 6.0 that was modified by an original equipment
	manufacturer (OEM), MS-DOS 6.2 Step-Up cannot update the MS-DOS 6.0 files. You
	must obtain an update from your OEM or purchase the Microsoft MS-DOS 6.2
	Upgrade.
	
	NOTE: There is no way to expand or update the .xx# files manually.
	
	MORE INFORMATION
	================
	
	Symantec Norton Utilities versions 4.x, 5.x, 6.x, and 7.x will replace your
	FORMAT.COM file if you choose that option during installation. Other software
	programs may replace MS-DOS components as well.
	
	
	The following information is available in the MS-DOS 6.2 Step-Up README.NOW
	file:
	
	2.3  If Setup cannot update a file
	----------------------------------
	
	If Setup cannot update one of your MS-DOS files, it displays a message with the
	title "Cannot Update File." If you continued Setup, your MS-DOS 6.2 installation
	is incomplete because the specified file was not updated to version 6.2. If the
	file is one you know you don't need, don't worry about it. However, if you are
	not sure, update the file using the following procedure.
	
	1. Insert MS-DOS 6 Setup Disk 1 in drive A or drive B, and then use MS-DOS
	  Editor (EDIT) to view the contents of the PACKING.LST file. This file tells
	  you where each file is located on your MS-DOS 6 disks. Determine which MS-DOS
	  6 disk contains the file you need.
	
	2. Insert the appropriate MS-DOS 6 disk in drive A or drive B, and then use the
	  EXPAND command to expand the file. For example, to expand the file
	  DBLSPACE.HL_ from the disk in drive A to the directory C:\DOS, you would type
	  the following command:
	
	  " expand a:\dblspace.hl_ c:\dos\dblspace.hlp " (without the quotation marks)
	
	  For more information, see the comments at the beginning of the PACKING.LST
	  file, or see the MS-DOS 6.0 "User's Guide."
	
	3. Run MS-DOS 6.2 Setup again. This time, Setup should be able to update the
	  file.
	
	If you follow this procedure and Setup still cannot update the file, there may be
	a problem with your MS-DOS 6.2 disks. You may be able to correct the problem by
	running SCANDISK or CHKDSK /F on the MS-DOS 6.2 disk that was in the drive when
	the error occurred.
	
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	

{% endraw %}
