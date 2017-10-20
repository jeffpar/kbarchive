---
layout: page
title: "Q119151: README.NOW:  MS-DOS 6.22 Step-Up (BBS) README.NOW File"
permalink: /kb/119/Q119151/
---

## Q119151: README.NOW:  MS-DOS 6.22 Step-Up (BBS) README.NOW File

{% raw %}

	Article: Q119151
	Product(s): Microsoft Disk Operating System
	Version(s): 6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the MS-DOS 6.22 Step-Up README.NOW
	file.
	
	MORE INFORMATION
	================
	
	README.NOW
	
	Notes for MS-DOS 6.22 Step-Up Users
	-----------------------------------
	
	The MS-DOS 6.22 Step-Up updates your system from MS-DOS 6, 6.2 or 6.21 to MS-DOS
	6.22.
	
	  IMPORTANT: To use the MS-DOS 6.22 Step-Up, you must be running the released
	  version of MS-DOS 6, MS-DOS 6.2 or MS-DOS 6.21. If you are running an older
	  version of MS-DOS, a beta version of MS-DOS, or any version of MS-DOS that
	  was modified by a hardware vendor, you cannot use the MS-DOS 6.22 Step-Up. To
	  install MS-DOS 6.22 on such a system, obtain the full MS-DOS 6.22 Upgrade
	  product.
	
	This file explains how to upgrade to MS-DOS 6.22; it contains information
	specific to the Step-Up installation process. If you don't find the information
	you need in this file, see the MS-DOS 6.22 README.TXT file. For information
	about reading README.TXT, see section 6 of this file.
	
	This file contains the following topics:
	
	1. What MS-DOS 6.22 Step-Up Includes
	
	2. Upgrading to MS-DOS 6.22
	
	  2.1 Installing MS-DOS 6.22
	  2.2 If your previous MS-DOS files are not located on drive C
	  2.3 If Setup cannot update a file
	  2.4 If Setup cannot find the correct IO.SYS file
	  2.5 Installing MS-DOS 6.22 without using SETUP.BAT
	
	3. Using the MakeSys Program
	
	  3.1 If MakeSys could not create your IO.SYS or MSDOS.SYS file
	
	4. Updating Microsoft Backup, Undelete and Antivirus
	
	  4.1 If you have not yet installed MS-DOS 6.22
	  4.2 If you have already installed MS-DOS 6.22
	
	5. Keeping a Copy of the MS-DOS 6.22 Step-Up
	
	6. Reading the README.TXT file on Setup Disk 1
	
	7. Running the MS-DOS 6.22 Step-Up from Floppy Disks
	
	1. What MS-DOS 6.22 Step-Up Includes
	------------------------------------
	
	The MS-DOS 6.22 Step-Up includes all changes that were made to the MS-DOS files
	since MS-DOS 6. Most of the files included with the MS-DOS 6.22 Step- Up simply
	specify changes and are not complete programs. When you run Setup, it modifies
	the MS-DOS files on your hard disk to incorporate the changes for MS-DOS 6.22.
	To do this, Setup must be able to find and update each of your current MS-DOS
	files.
	
	2. Upgrading to MS-DOS 6.22
	---------------------------
	
	This section explains how to update your system to MS-DOS 6.22.
	
	Note: If you did not previously install Backup for Windows or Undelete for
	Windows, then MS-DOS 6.22 Setup does not update those programs. For more
	information, see Section 4 of this file before installing MS-DOS 6.22.
	
	2.1  Installing MS-DOS 6.22
	---------------------------
	
	To update your system to MS-DOS 6.22, your computer must already be running
	MS-DOS 6, MS-DOS 6.2 or MS-DOS 6.21. To install MS-DOS 6.22, follow these
	steps:
	
	1. If Windows is running, quit Windows.
	
	2. At the command prompt, type "VER" (without the quotation marks) to ensure
	  that you are running the released version of MS-DOS 6.0, MS-DOS 6.2 or MS-DOS
	  6.21.
	
	3. Change to the directory that contains the SETUP.BAT file and the
	  1MSDOS62.EXE, 2MSDOS62.EXE and 3MSDOS62.EXE files, and then type "SETUP"
	  (without the quotation marks) at the command prompt.
	
	  The SETUP.BAT batch program creates the C:\STEPUP directory and extracts the
	  MS-DOS 6.22 Step-Up files from the archive files (1MSDOS62.EXE, 2MSDOS62.EXE
	  and 3MSDOS62.EXE). SETUP.BAT then runs the MAKESYS utility to create the
	  MS-DOS 6.22 system files. Finally, it runs MS-DOS 6.22 Setup.
	
	  NOTE: If your current MS-DOS files are located on a drive other than drive C,
	  quit MS-DOS Setup by pressing F3, and then carry out the procedure in the
	  following section.
	
	When Setup is complete, do not delete the files in your Step-Up directory. Also,
	do not discard your current MS-DOS disks. For more information, see Section 5 of
	this file.
	
	If the MAKESYS or Setup programs do not complete properly, see section 2.5 of
	this file.
	
	2.2  If your current MS-DOS files are not located on drive C
	------------------------------------------------------------
	
	The MS-DOS 6.22 Step-Up is designed to update MS-DOS 6.x files that are located
	on drive C. If your current MS-DOS files are located on a drive other than drive
	C, follow these steps:
	
	1. First, carry out the procedure in section 2.1. When MS-DOS 6.22 Setup starts,
	  quit Setup by pressing F3.
	
	2. Create a new directory on drive C (for example, C:\DOS).
	
	3. Copy your current MS-DOS files to that directory. For example, if your
	  current MS-DOS files are located in the D:\DOS directory and you want to copy
	  them to the C:\DOS directory, you would type:
	
	  " COPY D:\DOS\*.* C:\DOS " (without the quotation marks)
	
	4. Change to the C:\STEPUP directory, and then type "SETUP" (without the
	  quotation marks). When Setup displays the directory that contains your
	  current MS-DOS files, type the pathname of the directory you just created on
	  drive C (for example, C:\DOS).
	
	5. When Setup is complete, MS-DOS 6.22 will be installed on drive C. Setup
	  updates the pathnames in your CONFIG.SYS and AUTOEXEC.BAT files so that they
	  refer to the directory on drive C that contains your MS-DOS 6.22 files.
	
	  If you want to move MS-DOS 6.22 back to the other drive, copy all the MS-DOS
	  6.22 files to a directory on the other drive. You will also need to correct
	  the pathnames in your CONFIG.SYS and AUTOEXEC.BAT files to refer to the
	  correct drive and directory.
	
	2.3  If Setup cannot update a file
	----------------------------------
	
	If Setup cannot update one of your MS-DOS files, it displays a message with the
	title "Cannot Update File." If you continued Setup, your MS-DOS 6.22
	installation is incomplete because the specified file was not updated to version
	6.22. If the file is one you know you don't need, don't worry about it. However,
	if you are not sure, update the file using the following procedure.
	
	1. Insert MS-DOS 6, 6.2 or 6.21 Setup Disk 1 in drive A or drive B, and then use
	  MS-DOS Editor (EDIT) to view the contents of the PACKING.LST file. This file
	  tells you where each file is located on your MS-DOS disks. Determine which
	  MS-DOS disk contains the file you need.
	
	2. Insert the appropriate MS-DOS disk in drive A or drive B, and then use the
	  EXPAND command to expand the file. For example, to expand the file
	  DBLSPACE.HL_ from the disk in drive A to the directory C:\DOS, you would type
	  the following command:
	
	  " EXPAND A:\DBLSPACE.HL_ C:\DOS\DBLSPACE.HLP " (without the quotation marks)
	
	  For more information, see the comments at the beginning of the PACKING.LST
	  file, type "HELP EXPAND" (without the quotation marks) at the command prompt,
	  or see the MS-DOS User's Guide.
	
	3. Run MS-DOS 6.22 Setup again. This time, Setup should be able to update the
	  file.
	
	If you follow this procedure and Setup still cannot update the file, there may be
	a problem with your MS-DOS 6.22 Step-Up files. You may be able to correct the
	problem by running ScanDisk on the drive that contains your Step-Up files.
	
	You may also receive this error if you are running a version of MS-DOS that has
	been modified by a hardware vendor. If this is the case, contact the
	manufacturer of your computer to obtain the correct version of MS-DOS 6.22 for
	your computer.
	
	2.4  If Setup cannot find the correct IO.SYS file
	-------------------------------------------------
	
	If Setup cannot find the correct IO.SYS file, one of the following may be the
	cause of the problem:
	
	1. You are not running the released version of MS-DOS 6, MS-DOS 6.2, or MS-DOS
	  6.21. To use the MS-DOS 6.22 Step-Up, you must be running the released
	  version of MS-DOS 6, 6.2 or 6.21. The Step-Up will not work on other versions
	  of MS-DOS, on other manufacturers' operating systems, or on beta versions of
	  MS-DOS.
	
	2. Your IO.SYS file has been damaged or modified. Setup cannot update an IO.SYS
	  file that has been corrupted (for example, by a virus or a hard disk error)
	  or an IO.SYS file that has been modified by another program (such as an
	  MS-DOS extender). If you suspect this is the problem, use the SYS command to
	  copy the system files from Setup Disk 1 of your MS-DOS 6, 6.2 or 6.21 disks.
	
	3. You are running a version of MS-DOS in a language that is different from this
	  version of the MS-DOS 6.22 Step-Up. If this is the problem, obtain the MS-DOS
	  6.22 Step-Up for the same language as your current version of MS-DOS.
	
	4. You are running a version of MS-DOS that has been modified by a hardware
	  vendor. If this is the case, contact the manufacturer of your computer to
	  obtain the correct version of MS-DOS 6.22 for your computer.
	
	2.5  Installing MS-DOS 6.22 without using SETUP.BAT
	---------------------------------------------------
	
	Normally, you use the SETUP.BAT batch program to prepare your system to run
	MS-DOS 6.22 Setup; SETUP.BAT does everything for you, including starting Setup.
	However, if the MAKESYS or Setup programs do not complete properly, you may need
	to perform some or all of the installation process without using SETUP.BAT. This
	section explains how to install MS-DOS 6.22 without running SETUP.BAT:
	
	To install MS-DOS 6.22 without using SETUP.BAT, follow these steps:
	
	1. If Windows is running, quit Windows.
	
	2. At the command prompt, type "VER" (without the quotation marks) to ensure
	  that you are running the released version of MS-DOS 6, 6.2 or 6.21.
	
	3. Create a C:\STEPUP directory by typing the following at the command prompt:
	
	  " MD C:\STEPUP " (without the quotation marks)
	
	4. Copy the 1MSDOS62.EXE, 2MSDOS62.EXE and 3MSDOS62.EXE files into the C:\STEPUP
	  directory.
	
	  IMPORTANT: Do not place these files in the directory that currently contains
	  your current MS-DOS files. If you do, the Step-Up process will not work
	  properly.
	
	5. Change to the C:\STEPUP directory, and then run the 1MSDOS62.EXE,
	  2MSDOS62.EXE, and 3MSDOS62.EXE programs by typing the following:
	
	  " 1MSDOS62
	  2MSDOS62
	  3MSDOS62 " (without the quotation marks)
	
	  When these programs finish running, the C:\STEPUP directory will contain the
	  files you need to update your system to MS-DOS version 6.22.
	
	6. Run the MAKESYS.EXE program by typing "MAKESYS" (without the quotation marks)
	  at the command prompt.
	
	  MAKESYS creates the MS-DOS 6.22 system files in the C:\STEPUP directory. These
	  files are required by MS-DOS 6.22 Setup.
	
	7. If your current MS-DOS files are located on drive C, run MS-DOS 6.22 Setup by
	  typing "SETUP" (without the quotation marks), and then follow the
	  instructions on the screen. (If your current MS-DOS files are located on a
	  drive other than drive C, carry out the procedure in section 2.2.)
	
	  IMPORTANT: When Setup is complete, do not delete the files in your Step-Up
	  directory. Also, do not discard your current MS-DOS disks. For more
	  information, see "Keeping a Copy of the MS-DOS 6.22 Step-Up" later in this
	  file.
	
	3. Using the MakeSys Program
	----------------------------
	
	The MakeSys program creates a set of MS-DOS 6.22 system files in the current
	directory. These files are required by MS-DOS 6.22 Setup.
	
	This section provides some procedures for troubleshooting MakeSys. For
	information about running MakeSys, see the procedure in section 2.5.
	
	3.1  If MakeSys could not create your IO.SYS or MSDOS.SYS file
	--------------------------------------------------------------
	
	If MakeSys displays the message "Could not create the new IO.SYS file," or "Could
	not create the new MSDOS.SYS file," then MakeSys was unable to find a valid
	MS-DOS version of that file; either you are not running an official released
	version of MS-DOS 6.x, the file is corrupted, or the file is not in the expected
	location.
	
	The procedure you use depends on whether you are using DoubleSpace.
	
	If you do not use DoubleSpace, follow these steps:
	
	1. Run MakeSys again by typing "MAKESYS" (without the quotation marks) at the
	  command prompt.
	
	  MakeSys starts, and displays the prompt "MakeSys has determined that your
	  startup hard disk is drive C. Is this correct (Y/N)?"
	
	2. Type "N" (without the quotation marks).
	
	  MakeSys then displays the prompt "Enter the drive letter of your startup hard
	  disk or press CTRL+C to exit."
	
	3. Insert MS-DOS 6, 6.2 or 6.21 Setup Disk 1 in drive A or drive B, and then
	  type the appropriate drive letter and press ENTER.
	
	  MakeSys uses the system files on Setup Disk 1 to create MS-DOS 6.22 system
	  files in the C:\STEPUP directory.
	
	4. Run MS-DOS 6.22 Setup by typing "SETUP" (without the quotation marks).
	
	If you use DoubleSpace, carry out these steps:
	
	1. If you use Windows NT as well as DoubleSpace, make sure you have your Windows
	  NT Setup disks and the Windows NT Emergency Repair Disk that you made for
	  this computer.
	
	2. Use the SYS command to copy the MS-DOS system files from MS-DOS 6, 6.2 or
	  6.21 Setup Disk 1 to your startup drive. For example, to copy the system
	  files from Setup Disk 1 in drive A, type the following:
	
	  " SYS A: C: " (without the quotation marks)
	
	3. Run MakeSys again.
	
	4. If you use Windows NT, insert your Windows NT Setup Disk and restart your
	  computer. Then, use the Repair option to repair the Windows NT boot files.
	  After the repair is complete, return to the MS-DOS command prompt.
	
	5. Change to the C:\STEPUP directory, and then run MS-DOS 6.22 Setup by typing
	  "SETUP" (without the quotation marks).
	
	4. Updating Microsoft Backup, Undelete and Antivirus
	----------------------------------------------------
	
	If you want to use Backup, Undelete or Antivirus with MS-DOS 6.22, and the MS-DOS
	6, 6.2 or 6.21 versions of those programs are not currently installed on your
	system, carry out the procedure in section 4.1 or 4.2 (depending on whether you
	have installed MS-DOS 6.22 yet). (It is easier to first carry out the procedure
	in section 4.1 and then install MS-DOS 6.22.)
	
	NOTE MS-DOS 6.22 Setup installs the latest version of Backup for MS-DOS
	regardless of your current configuration. If this is the only optional program
	you want, you don't need to carry out the procedures in this section.
	
	4.1 If you have not yet installed MS-DOS 6.22
	---------------------------------------------
	
	The easiest way to install the latest versions of Antivirus, Undelete and Windows
	Backup is to install the MS-DOS 6, 6.2 or 6.21 versions of those programs before
	you run MS-DOS 6.22 Setup. Follow these steps:
	
	1. Insert MS-DOS 6, 6.2 or 6.21 Setup Disk 1 in drive A or drive B.
	
	2. Type "A:SETUP /E" (without the quotation marks) or "B:SETUP /E" (without the
	  quotation marks) at the command prompt, and then follow the instructions on
	  your screen.
	
	3. Install MS-DOS 6.22 as described in Section 2 of this file.
	
	4.2 If you have already installed MS-DOS 6.22
	---------------------------------------------
	
	If Antivirus, Undelete or Windows Backup were not on your system when you
	installed MS-DOS 6.22, but you later decide that you want to use those programs
	with MS-DOS 6.22, carry out one of the following procedures (depending on
	whether your previous MS-DOS disks fit in drive A).
	
	Procedure 1: Updating the optional programs if your previous
	
	         MS-DOS disks fit in drive A
	---------------------------------------------------------------------------------------------------
	
	If your MS-DOS 6, 6.2 or 6.21 disks fit in drive A, follow these steps:
	
	1. Insert your previous MS-DOS Setup Disk 1 in drive A, and restart your
	  computer. (If your MS-DOS disks do not fit in drive A, carry out procedure 2
	  instead.)
	
	2. The Welcome screen for MS-DOS Setup appears. Press the F3 key twice to exit.
	
	3. Use the PATH command to ensure that your current search path includes the
	  directory that contains your MS-DOS 6.22 files. For example, if your MS-DOS
	  6.22 files are in C:\DOS, you would type
	
	  " PATH C:\DOS " (without the quotation marks)
	
	  Note: Be sure to specify the drive letter in uppercase.
	
	4. Type the following at the command prompt:
	
	  " A:SETUP /E " (without the quotation marks)
	
	  Select the optional programs you want. When MS-DOS Setup is complete, remove
	  Setup Disk 1 and restart your computer.
	
	5. Change to the C:\STEPUP directory, and then run MS-DOS 6.22 Setup by typing
	  "SETUP" (without the quotation marks).
	
	Procedure 2: Updating the optional programs if your previous
	         MS-DOS disks don't fit in drive A
	--------------------------------------------------------------------------------------------------------
	
	If your previous MS-DOS disks don't fit in drive A, follow these steps:
	
	1. Create an MS-DOS 6, 6.2 or 6.21 startup floppy disk by inserting your
	  previous MS-DOS Setup Disk 1 in drive B and typing the following:
	
	  " B:SETUP /F " (without the quotation marks)
	
	2. When Setup displays the settings it will use, the "Install on Drive:" setting
	  will specify drive B. Change this setting to drive A, and insert a blank
	  formatted floppy disk in drive A.
	
	  Setup then creates a startup floppy disk. To complete Setup, follow the
	  instructions on your screen.
	
	3. Restart your computer from the startup floppy disk you just created (leave
	  the disk in drive A, and press CTRL+ALT+DEL).
	
	4. Use the PATH command to ensure that your current search path includes the
	  directory that contains your MS-DOS 6.22 files. For example, if your MS-DOS
	  6.22 files are in C:\DOS, you would type
	
	  " PATH C:\DOS " (without the quotation marks)
	
	  Note: Be sure to specify the drive letter in uppercase.
	
	5. Change to the drive that contains Setup Disk 1, and then type the following
	  to install the optional programs:
	
	  " SETUP /E " (without the quotation marks)
	
	  Select the optional programs you want. When MS-DOS Setup is complete, remove
	  Setup Disk 1 and restart your computer.
	
	6. Change to the C:\STEPUP directory, and then run MS-DOS 6.22 Setup by typing
	  "SETUP" (without the quotation marks).
	
	5. Keeping a Copy of the MS-DOS 6.22 Step-Up
	--------------------------------------------
	
	After you have finished installing MS-DOS 6.22, do not delete the files in your
	Step-Up directory. If you ever need to reinstall MS-DOS 6.22, you will need the
	Step-Up files as well as your previous MS-DOS disks.
	
	To ensure that you can reinstall MS-DOS 6.22, follow these steps:
	
	1. Make sure your MS-DOS 6, 6.2 or 6.21 disks are in a safe place.
	
	2. Copy the following files from your MS-DOS 6.22 Step-Up directory to floppy
	  disks, and keep the floppy disk in a safe place. (You will need two 1.2MB or
	  1.44 MB floppy disks.)
	
	  SETUP.BAT
	  README.NOW
	  1MSDOS62.EXE
	  2MSDOS62.EXE
	  3MSDOS62.EXE
	
	3. Make an MS-DOS 6.22 startup floppy disk by using the SYS command. For
	  example, if your computer's startup floppy disk drive is drive A, you would
	  insert a formatted floppy disk in drive A and type the following:
	
	  " SYS A: " (without the quotation marks)
	
	4. After completing steps 1 through 3, you can safely delete the files in your
	  Step-Up directory.
	
	6. Reading the README.TXT file on Setup Disk 1
	----------------------------------------------
	
	After you install MS-DOS 6.22, a copy of the README.TXT file will be located in
	the directory that contains your MS-DOS files. To read this file, change to that
	directory, and then type the following at the command prompt:
	
	  " EDIT README.TXT " (without the quotation marks)
	
	If you need to, you can read the copy of README.TXT located on Setup Disk
	
	1. To do this:
	
	2. Insert Setup Disk 1 in a floppy disk drive, and then make that drive your
	  current drive. For example, if the disk is in drive A, type "A:" (without the
	  quotation marks).
	
	3. At the command prompt, type the following command:
	
	  " EXPAND README.TX_ C:\README.TXT " (without the quotation marks)
	
	4. You should then be able to use the EDIT command to view the C:\README.TXT
	  file.
	
	7. Running the MS-DOS 6.22 Step-Up from Floppy Disks
	----------------------------------------------------
	
	If you want, you can run the MS-DOS 6.22 Step-Up from floppy disks rather than
	from your hard disk (as described in Section 2 above). This section explains how
	to create and use MS-DOS 6.22 Step-Up floppy disks.
	
	  NOTE: According to the terms of the software license agreement for the MS-DOS
	  6.22 Step-Up, you may make copies of this software for use only on machines
	  in your home or business that are running a validly licensed copy of MS-DOS
	  6.0, 6.2 or 6.21. You may not give, sell or otherwise transfer copies of this
	  software to others. For details, read the license agreement that appears on
	  your screen during installation.
	
	To copy the MS-DOS 6.22 Step-Up files to floppy disks:
	
	1. Copy the following files to a 1.2 MB or 1.44 MB disk:
	
	  SETUP.BAT
	  README.NOW
	  1MSDOS62.EXE
	
	  To work properly, the SETUP.BAT and 1MSDOS62.EXE files must be on the same
	  floppy disk. Label the disk "MS-DOS 6.22 Setup Disk 1".
	
	2. Copy the 2MSDOS62.EXE file to a second floppy disk that's the same size and
	  capacity as the first disk. Label the second floppy disk "MS-DOS 6.22 Setup
	  Disk 2".
	
	3. Copy the 3MSDOS62.EXE file to a third floppy disk that's the same size and
	  capacity as the first disk. Label the third floppy disk "MS-DOS 6.22 Setup
	  Disk 3".
	
	To run the MS-DOS 6.22 Step-Up from floppy disks:
	
	1. Insert MS-DOS 6.22 Setup Disk 1 in drive A or drive B, and then change to
	  drive A or drive B by typing "A:" (without the quotation marks) or "B"
	  (without the quotation marks) at the command prompt.
	
	2. Type "SETUP" (without the quotation marks) at the command prompt.
	
	3. When prompted, insert MS-DOS 6.22 Setup Disk 2 and Disk 3.
	
	Additional query words: stepup readme bbsstepup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : :6.22
	
	=============================================================================
	

{% endraw %}
