---
layout: page
title: "Q113643: README.TXT: Microsoft MS-DOS 6.21 Upgrade (Part 3 of 3)"
permalink: kb/113/Q113643/
---

## Q113643: README.TXT: Microsoft MS-DOS 6.21 Upgrade (Part 3 of 3)

	Article: Q113643
	Product(s): Microsoft Disk Operating System
	Version(s): 6.21
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.21 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the MS-DOS 6.21 Upgrade README.TXT
	file.
	
	MORE INFORMATION
	================
	
	7. DOUBLESPACE
	--------------
	
	MS-DOS 6.21 does not include DoubleSpace compression software. However, if you
	upgraded from MS-DOS 6 or MS-DOS 6.2, you can still use DoubleSpace with MS-DOS
	6.21. (If you upgraded from MS-DOS 5 or earlier, you do not have DoubleSpace on
	your system.)
	
	7.1 Converting Your XtraDrive Disk-Compression Software
	
	   to DoubleSpace
	--------------------------------------------------------------------------
	
	If your computer uses XtraDrive disk compression, use its uninstallation program
	to remove the compression, and then install DoubleSpace.
	
	7.2  Converting Stacker 3.1 Software to DoubleSpace
	---------------------------------------------------
	
	If your drive has been compressed using Stacker version 3.1, carry out the
	following procedure to remove Stacker 3.1 and install DoubleSpace. (If you use
	Stacker 2.x or 3.0 software, carry out the procedure in section 7.3 instead.)
	
	1. Use Stacker's UNSTACK command to unstack all your Stacker drives. (If you
	  have floppy disks compressed by using Stacker, either unstack them now or
	  make sure they were configured using Stacker's StackerAnywhere feature.)
	
	2. Change to the root directory of your startup hard disk drive, and then type
	  the following commands:
	
	  " ATTRIB -R -H -S STACKER.INI
	  ATTRIB -R -H -S DBLSPACE.BIN
	  DEL STACKER.INI
	  DEL DBLSPACE.BIN " (without the quotation marks)
	
	3. Restart your computer.
	
	4. Run DoubleSpace Setup by typing "DBLSPACE" (without the quotation marks) at
	  the command prompt.
	
	7.3  Converting Other Disk-Compression Software to DoubleSpace
	--------------------------------------------------------------
	
	If you are not using Stacker 3.1 disk compression or XtraDrive disk compression,
	carry out the following procedure to convert your disk-compression software to
	DoubleSpace.
	
	1. Install MS-DOS 6.2 if you haven't already done so.
	
	2. Use Microsoft Backup for MS-DOS to back up the files on your hard disk. If
	  you didn't install Backup for MS-DOS during Setup, see the chapter "Getting
	  Started" in the MICROSOFT MS-DOS USER'S GUIDE for instructions on installing
	  it.
	
	3. If your Setup disks are compatible with drive A, insert Setup Disk 1 in drive
	  A, and restart your computer. After Setup displays the first screen, quit
	  Setup by pressing F3 twice.
	
	  If your Setup disks are not compatible with drive A, create a startup floppy
	  disk for drive A. To do this, insert Setup Disk 1 in drive B, and a blank
	  floppy disk in drive A. Then type "B:SETUP /F" (without the quotation marks)
	  at the command prompt.
	
	  When prompted, choose to install MS-DOS on the floppy disk in drive A. After
	  Setup is finished, leave the disk in drive A, and restart your computer.
	
	4. Use the FORMAT command to format the drive that contains the file that
	  contains all of your compressed files. If you don't know where this file is
	  located, see your disk-compression documentation.
	
	  If you are reformatting drive C, include the /S switch to transfer system
	  files to it.
	
	5. If you formatted drive C, make sure Setup Disk 1 is in drive A or B, and type
	  "A:SETUP" (without the quotation marks) or" B:SETUP" (without the quotation
	  marks) at the command prompt.
	
	  Follow the instructions on your screen.
	
	6. After Setup is complete, install DoubleSpace by typing DBLSPACE at the
	  command prompt. Follow the instructions on your screen.
	
	7. Use Backup for MS-DOS to restore the files you backed up.
	
	  NOTE When you run Microsoft Backup, you will have to configure it again. Also,
	  you will need to retrieve the catalog file from your backup floppy disks. To
	  do so, choose the Catalog button in the Restore dialog box.
	
	7.4 DoubleSpace Setup indicates that your computer is running an
	   incompatible disk-caching program.
	-------------------------------------------------------------------------------------------------------
	
	If DoubleSpace Setup displays a message indicating your computer is running an
	incompatible disk-caching program, open your CONFIG.SYS or AUTOEXEC.BAT file,
	and delete the command that loads your disk-caching program. If you want to use
	a disk cache, add a line for the MS-DOS 6.21 SMARTDRV program in your
	AUTOEXEC.BAT file. For example, if your MS-DOS files are in a directory named
	DOS, add the following line:
	
	  " C:\DOS\SMARTDRV.EXE " (without the quotation marks)
	
	Quit your text editor, and restart your computer. Run DoubleSpace again.
	
	7.5 Your compressed drive runs out of disk space.
	-------------------------------------------------
	
	If your compressed drive runs out of free disk space, you can use the following
	techniques to free some space on the drive:
	
	- Enlarge that drive.
	
	- Carry out the DBLSPACE /DEFRAG /F and DBLSPACE /DEFRAG commands on that
	  drive.
	
	The rest of this section explains each technique.
	
	Enlarging a Compressed Drive
	----------------------------
	
	You can enlarge a compressed drive to make more space available on it. Enlarging
	a compressed drive uses free space on the uncompressed (host) drive.
	
	To enlarge the compressed drive:
	
	1. Start the DoubleSpace program by typing "DBLSPACE" (without the quotation
	  marks) at the command prompt.
	
	2. Select the compressed drive you want to enlarge, and then choose the Change
	  Size command from the Drive menu.
	
	  The Change Size dialog box appears. The New Free Space line shows how much
	  free space the compressed and uncompressed drives will have if you choose OK.
	
	3. Specify a smaller number for New Free Space on the uncompressed drive. Notice
	  that as you change this number, DoubleSpace adjusts the New Free Space amount
	  for the compressed drive. When the New Free Space amount for both drives is
	  what you want, choose OK.
	
	  DoubleSpace enlarges the compressed drive.
	
	Carrying Out the DBLSPACE /DEFRAG /F and DBLSPACE /DEFRAG Commands
	
	on your Compressed Drive
	------------------------
	
	You can sometimes free additional space on a compressed drive by more fully
	defragmenting the drive.
	
	NOTE You might want to carry out the following procedure overnight, since
	defragmenting a large or badly fragmented drive can take a long time. (To carry
	out the entire procedure overnight, create a batch file that contains both the
	commands in the procedure.)
	
	To free space by defragmenting the drive twice:
	
	1. Make the compressed drive the current drive.
	
	2. Type "DEFRAG drive: /F" (without the quotation marks) at the command prompt
	
	  Where drive: is the compressed drive. For example, DEFRAG C: /F. DEFRAG will
	  fully defragment the drive's file allocation table, then start DBLSPACE
	  /DEFRAG to consolidate the free space in the CVF.
	
	3. When DEFRAG finishes, type "DBLSPACE /DEFRAG /F" (without the quotation
	  marks) at the command prompt.
	
	  DoubleSpace re-consolidates the free space on the drive so there is as much
	  free space as possible.
	
	7.6 Your uncompressed (host) drive runs out of disk space
	---------------------------------------------------------
	
	If your uncompressed (host) drive runs out of free disk space, you can enlarge it
	by reducing the size of any compressed drives that are stored on that
	uncompressed drive. Of course, this will reduce the amount of free space on the
	compressed drive(s).
	
	To enlarge the uncompressed (host) drive:
	
	1. Start the DoubleSpace program by typing "DBLSPACE" (without the quotation
	  marks) at the command prompt.
	
	2. Select the compressed drive whose size you want to reduce, and then choose
	  the Change Size command from the Drive menu. (Select a compressed drive that
	  is stored on the uncompressed drive that's out of space. To find out which
	  compressed drives are stored on that uncompressed drive, type "DBLSPACE
	  /LIST" (without the quotation marks) at the command prompt.)
	
	  The Change Size dialog box appears. The New Free Space line shows how much
	  free space the compressed and uncompressed drives will have if you choose OK.
	
	3. Specify a larger number for the New Free Space on the uncompressed drive.
	  Notice that as you change this number, DoubleSpace adjusts the New Free Space
	  amount for the compressed drive. When the New Free Space amount for both
	  drives is what you want, choose OK.
	
	  DoubleSpace reduces the size of the compressed drive, which makes more free
	  space available on the corresponding uncompressed drive.
	
	7.7 DoubleSpace did not compress all of your files because
	   the drive ran out of disk space.
	-----------------------------------------------------------------------------------------------
	
	If DoubleSpace indicates that it could not compress some of your files because
	there was not enough disk space, carry out the following procedure.
	
	1. To determine which drive is your uncompressed drive, type DBLSPACE /LIST at
	  the command prompt.
	
	2. Using Microsoft Backup, back up to floppy disks the files on the uncompressed
	  drive that were not compressed.
	
	3. Delete the files on the uncompressed drive that were not compressed.
	
	4. Type "DBLSPACE" (without the quotation marks) at the command prompt.
	
	5. From the Drive menu, choose Change Size.
	
	6. To increase the size of your compressed drive, decrease the size of your
	  uncompressed drive, and choose OK.
	
	7. From the Drive menu, choose Exit, and use Backup to restore the files you
	  backed up to your compressed drive. If you run out of space again, repeat
	  steps 5 through 7 until the compressed drive is large enough.
	
	7.8 Windows displays the message "The permanent swap file is corrupt."
	----------------------------------------------------------------------
	
	If you use a Windows permanent swap file, it must be located on an uncompressed
	drive. If your permanent swap file is on a compressed drive, Windows displays
	the message "The permanent swap file is corrupt" when it starts.
	
	When you install DoubleSpace, the DoubleSpace Setup program checks for the
	existence of a Windows permanent swap file. If it finds one, DoubleSpace Setup
	moves the swap file to your uncompressed drive. However, if you install Windows
	after installing DoubleSpace, or if you use Control Panel to change the location
	of your permanent swap file, your swap file might end up on a compressed drive.
	(When you specify a drive for your permanent swap file, Windows allows you to
	choose a compressed drive.)
	
	To move your permanent swap file to an uncompressed drive:
	
	1. Start Windows.
	
	2. At the "Permanent swap file is corrupt" screen, type "Y" (without the
	  quotation marks) in response to the question "Do you want to delete this swap
	  file?", and then press ENTER.
	
	3. Open Control Panel, and then double-click the 386 Enhanced icon.
	
	4. Choose the Virtual Memory button. Windows displays a dialog box stating that
	  a corrupt swap file was found and asks if you want to set the file's length
	  to zero.
	
	5. Choose the Yes button. Windows displays another Virtual Memory dialog box.
	
	6. Choose the Change button. Windows displays swap-file settings.
	
	7. In the Drive list box, select a drive that is not compressed. In the Type
	  list box, select "Permanent."
	
	  If your uncompressed drive does not have enough free space to create a
	  permanent swap file, create a temporary swap file on either your compressed
	  or uncompressed drives. (For information about freeing space on your
	  uncompressed drive, see section 7.7.)
	
	  When you have finished specifying swap-file settings, choose OK twice, and
	  follow the instructions on your screen.
	
	7.9  EXTDISK.SYS displays a warning about drive letters.
	--------------------------------------------------------
	
	If you are using DoubleSpace on a Compaq computer, and your CONFIG.SYS file loads
	the EXTDISK.SYS device driver, EXTDISK.SYS displays the following message when
	it loads:
	
	WARNING: EXTDISK.SYS is not the first device driver to assign drive letters.
	Physical hard drive letters will not be contiguous.
	
	The EXTDISK.SYS driver still works properly. It displays this message because it
	expects to be the first module to assign drive letters, but because DBLSPACE.BIN
	loads before the CONFIG.SYS file and assigns some drive letters, EXTDISK.SYS is
	no longer first. (EXTDISK.SYS displays the message regardless of when the
	DBLSPACE.SYS device driver is loaded in the CONFIG.SYS file.)
	
	7.10 You need a special device driver to use your startup drive
	---------------------------------------------------------------
	
	If your startup hard disk drive requires a device driver in your CONFIG.SYS file,
	do not compress that drive. If you do, your computer will not start properly,
	since DoubleSpace will be unable to access your startup drive. (This is because
	MS-DOS loads DBLSPACE.BIN, the portion of MS-DOS that accesses compressed
	drives, before starting any of the device drivers in your CONFIG.SYS file.)
	
	To install DoubleSpace on a computer with a startup drive that requires a special
	device driver, use DoubleSpace Setup to compress a drive other than your startup
	drive, or use DoubleSpace Setup to create a new compressed drive using free
	space on any existing drive.
	
	7.11 Defragmenting uncompressed drives after changing file attributes
	---------------------------------------------------------------------
	
	You can safely defragment both your compressed or uncompressed drives, using the
	Microsoft Defragmenter or another defragmentation program, as long as you do not
	change the attributes of your compressed volume files.
	
	CAUTION If you change the attributes of a compressed volume file, and then
	defragment that uncompressed drive without first unmounting the compressed
	drives, you might lose data.
	
	If you want to fully defragment your uncompressed drive, you must first unmount
	all compressed drives located on the uncompressed drive, remove all their
	attributes, and then use DEFRAG or another defragmenter.
	
	7.12 Files DoubleSpace cannot compress
	--------------------------------------
	
	Some files (such as .ZIP files) are already compressed. DoubleSpace might not be
	able to compress such files any further.
	
	Encrypted data files, such as the Microsoft Mail 3.0 .MMF file, are not
	compressible and will be stored in uncompressed form, even if you store such
	files on a compressed drive.
	
	You might want to store incompressible files on an uncompressed drive rather than
	on a compressed drive. Doing so can sometimes improve your system's speed.
	
	7.13 Microsoft Defragmenter runs out of memory while you are compressing
	    a drive.
	--------------------------------------------------------------------------------------
	
	If the Defragmenter runs out of memory while you are compressing a drive, quit
	DoubleSpace, and then carry out the procedure in section 5.4 of this file.
	
	If the Defragmenter still runs out of memory after you have tried these
	procedures, there might be too many files on your hard disk for the Defragmenter
	to organize. For the program to work correctly, you might need to delete some
	files or move them to a floppy disk or a network drive.
	
	7.14 DoubleSpace and PC-Vault
	-----------------------------
	
	See section 6.10.
	
	7.15 Maximum size of a compressed drive
	---------------------------------------
	
	The maximum size for a DoubleSpace compressed drive is 512 megabytes (MB). For
	example, if you compress a disk drive that is 600 MB, the resulting DoubleSpace
	drive will be no larger than 512 MB. To compress the rest of the disk drive, run
	DoubleSpace, and choose Create New Drive from the Compress menu. Make the new
	compressed drive as large as possible. (If your drive is very large, you might
	need to create several new compressed drives in order to compress the entire
	drive.)
	
	7.16  DoubleSpace could not mount a drive due to problems with the drive
	------------------------------------------------------------------------
	
	If the message "DoubleSpace could not mount drive X due to problems with the
	drive" (in which X is the drive letter) appears when you start your computer,
	then the internal organization of the drive has problems that prevent the drive
	from being used. DoubleSpace stores each compressed drive in a special file
	called a compressed volume file (CVF). The CVF is a file with the hidden,
	system, and read-only attributes; it is stored on an uncompressed drive.
	
	To use the compressed drive again, you need to run ScanDisk on that drive's
	compressed volume file, and then restart your system. The error message includes
	the name of the compressed volume file on which you need to run ScanDisk (for
	example, C:\DBLSPACE.000).
	
	To fix this problem for a compressed drive other than drive C:
	
	- Type the SCANDISK command specified by the DoubleSpace error message. For
	  example, SCANDISK D:\DBLSPACE.001. (If MS-DOS cannot find the SCANDISK
	  program, see the following procedure.)
	
	To fix this problem for compressed drive C, or if MS-DOS cannot find the SCANDISK
	program:
	
	1. Insert Setup Disk 1 in drive A (or B) of your computer.
	
	2. Change to the drive that contains Setup Disk 1.
	
	3. To start ScanDisk, type the SCANDISK command as specified by the DoubleSpace
	  error message. For example, SCANDISK C:\DBLSPACE.000. When ScanDisk displays
	  dialogs describing any problems, choose the Fix It button.
	
	4. After ScanDisk has finished, remove the floppy disk and restart your
	  computer.
	
	7.17  DoubleSpace finishes installation, but you cannot access your
	     Hardcard
	----------------------------------------------------------------------------------
	
	See section 4.2, part C.
	
	7.18  You receive a DoubleGuard Alarm message
	---------------------------------------------
	
	If a DoubleGuard Alarm message appears, DoubleGuard has detected that an
	application has damaged memory that DoubleSpace was using. DoubleGuard halts
	your computer to prevent any further damage to your data.
	
	Normally, each program "owns" a separate area of memory, and does not use memory
	that another program is already using. However, a few programs contain
	programming errors that cause them to inadvertently use memory belonging to
	another program. If such a program inadvertently uses memory belonging to
	DoubleSpace, that program could write its own data over the data DoubleSpace was
	storing there. Since the data that DoubleSpace stores in memory usually includes
	files you are currently using, this could cause damage to your data.
	
	DoubleSpace's DoubleGuard safety-checking feature detects when another program
	has violated DoubleSpace's memory, and immediately shuts down your computer to
	minimize the chance of data loss. (If further disk activity were to occur
	instead, you could lose some or all of the data on your drive, since the data
	DoubleSpace has in memory is probably invalid due to damage by the other
	program.)
	
	If you receive a DoubleGuard Alarm message, do the following:
	
	1. Restart your computer by turning the power switch off and then on again.
	
	2. Type the following at the command prompt:
	
	  " SCANDISK /ALL " (without the quotation marks)
	
	  This runs ScanDisk on all your drives to detect and correct any problems that
	  might have been caused by the program that violated DoubleSpace's memory.
	
	3. Make a note of which program, if any, you were running when the DoubleGuard
	  Alarm occurred. That program is probably (but not necessarily) the program
	  that caused the DoubleGuard Alarm. If you receive additional DoubleGuard
	  Alarms, take notes about what you were doing and see if you can detect a
	  pattern.
	
	7.19  A compressed drive is currently too fragmented to mount
	-------------------------------------------------------------
	
	If you receive the message "Compressed drive X is currently too fragmented to
	mount" (in which X is the drive letter) when your computer starts, or if
	DoubleSpace displays the message "The X:\DBLSPACE.nnn file is too fragmented to
	mount," then DoubleSpace cannot mount the drive because its compressed volume
	file is stored in too many fragments on your hard disk. (DoubleSpace stores each
	compressed drive in a special file called a compressed volume file (CVF). The
	CVF is a file with the hidden, system, and read-only attributes, and is stored
	on an uncompressed drive.)
	
	To correct this problem, increase the MaxFileFragments setting in your
	DBLSPACE.INI file. DoubleSpace displays the "too fragmented to mount" error
	messages because the number of CVF file fragments exceeds this setting. Follow
	these steps:
	
	1. Change to the root directory of your startup drive. (If your startup drive is
	  compressed, change to that drive's host drive.)
	
	2. Type the following command:
	
	  " TYPE DBLSPACE.INI " (without the quotation marks)
	
	3. Note the current value for the MaxFileFragments setting.
	
	4. Use the DBLSPACE /MAXFILEFRAGMENTS command to specify a higher value. For
	  example, if MaxFileFragments is currently set to 128, you might type the
	  following command:
	
	  " DBLSPACE /MAXFILEFRAGMENTS=200 " (without the quotation marks)
	
	5. Restart your computer. DoubleSpace should now be able to mount the drive.
	
	If DoubleSpace still cannot mount the drive, follow these steps:
	
	1. Run ScanDisk to check the reliability of your hard disk by typing the
	  following at the command prompt:
	
	  " SCANDISK /ALL /SURFACE " (without the quotation marks)
	
	2. Restart your computer. If DoubleSpace still cannot mount the drive, proceed
	  to step 3.
	
	3. Remove the Read-Only, System, and Hidden file attributes on the
	  DBLSPACE.<XXX> file. For example, if the file is H:\DBLSPACE.000, type
	  the following at the command prompt:
	
	  " ATTRIB H:\DBLSPACE.000 -R -S -H " (without the quotation marks)
	
	4. Run Microsoft Defragmenter (Defrag) by typing DEFRAG at the command prompt.
	
	5. Use the ATTRIB command to reset the file attributes on DBLSPACE.<XXX>.
	  For example, if the file is H:\DBLSPACE.000, type the following at the
	  command prompt:
	
	  " ATTRIB H:\DBLSPACE.000 +R +S +H " (without the quotation marks)
	
	6. Restart your computer again. DoubleSpace should now be able to mount the
	  compressed drive.
	
	7.20  DoubleSpace displays the message "Your computer is running with an
	     incompatible version of DBLSPACE.BIN"
	--------------------------------------------------------------------------------------------------------------------
	
	If you try to run the MS-DOS 6 version of DBLSPACE.EXE with MS-DOS 6.2, it
	displays the following message:
	
	  Your computer is running with an incompatible version of DBLSPACE.BIN.
	  You must update DBLSPACE.BIN on the root directory of drive @.
	
	DBLSPACE.EXE has detected that its version number does not match that of your
	MS-DOS 6.2 DBLSPACE.BIN. To correct this problem, you need to update this copy
	of the DBLSPACE.EXE file.
	
	When you run MS-DOS 6.2 Setup, it updates the DBLSPACE.EXE file in the directory
	that contains your MS-DOS files. If there are other copies of DBLSPACE.EXE
	elsewhere on your disk -- for example, in the root directory of your host drive
	-- Setup does not update those additional copies. To update them yourself, use
	the COPY /Y command to copy the MS-DOS 6.2 version of DBLSPACE.EXE over the
	older versions. (The MS-DOS 6.2 version of DBLSPACE.EXE is located in the
	directory that contains your MS-DOS files.)
	
	7.21  Using the DBLSPACE command after bypassing DBLSPACE.BIN
	-------------------------------------------------------------
	
	If you bypass DBLSPACE.BIN when you start your computer (by pressing CTRL+F5 or
	CTRL+F8), then the DBLSPACE command may not work as expected:
	
	- Usually, if DoubleSpace is installed, typing DBLSPACE runs the DoubleSpace
	  program. However, if you type DBLSPACE when DBLSPACE.BIN is not loaded,
	  DoubleSpace Setup starts instead. If this happens, quit DoubleSpace Setup.
	
	- If you type the DBLSPACE /MOUNT command, it reports that there are no more
	  drive letters for DoubleSpace to use. (DoubleSpace cannot mount a compressed
	  drive unless DBLSPACE.BIN is loaded.)
	
	To use DoubleSpace or your compressed drives, restart your computer without
	bypassing DBLSPACE.BIN.
	
	7.22  Removing the write-protection from a compressed floppy disk
	-----------------------------------------------------------------
	
	If you are using a compressed floppy disk that is write-protected and
	Automounting is enabled, the disk will remain write-protected until it is
	unmounted -- even if you remove the write-protect tab from it.
	
	To remove the write protection, use either of the following methods:
	
	- Unmount the floppy disk by using the DBLSPACE /UNMOUNT command, and then try
	  using the disk again (this will automatically remount it). For example, if
	  the disk is in drive B, you would type DBLSPACE /UNMOUNT B: and then try
	  using the disk again. (If Windows is running, you can't use the DBLSPACE
	  /UNMOUNT command. In that case, use the following method.)
	
	- Insert a different floppy disk in the drive and access it (for example, carry
	  out the DIR command on it). This automatically unmounts the compressed floppy
	  disk that was previously in the drive.) Then, reinsert the compressed floppy
	  disk and try using it again (this will automatically remount it).
	
	7.23  Automounting and Norton disk-caching utilities
	----------------------------------------------------
	
	If you use a Norton disk-caching utility such as Norton Cache (NCACHE2.EXE) or
	Norton Speedrive (SPEEDRV.EXE) make sure the utility is loaded after the DEVICE
	command for DBLSPACE.SYS. If you load one of these utilities before
	DBLSPACE.SYS, DoubleSpace's automounting feature will not work.
	
	7.24  Undelete utilities and DoubleSpace
	----------------------------------------
	
	DoubleSpace cannot compress or uncompress drives while an undelete utility (for
	example, Microsoft Undelete's Delete Sentry or Norton's SmartCan) is running. To
	compress or uncompress a drive, you will need to temporarily disable the
	undelete utility. Follow these steps:
	
	1. Purge any previously deleted files to conserve disk space. If you are using
	  Microsoft Delete Sentry, type the following at the command prompt:
	
	  " UNDELETE /PURGE " (without the quotation marks)
	
	  Carry out this command on each drive you plan to compress or uncompress. If
	  you will be uncompressing a drive, you should also purge deleted files from
	  that drive's host drive. To purge deleted files from a drive other than the
	  current drive, specify the drive letter after the UNDELETE /PURGE command
	  (for example, UNDELETE /PURGE E:).
	
	  If you use a different undelete utility, see that utility's documentation for
	  information about purging deleted files.
	
	2. Edit your AUTOEXEC.BAT file and use the REM command to disable the command
	  that starts the undelete utility. (For example, if you use Delete Sentry,
	  disable the UNDELETE /S command.)
	
	3. Restart your computer.
	
	4. Try again to compress or uncompress the drive.
	
	5. When you have finished compressing or uncompressing, edit your AUTOEXEC.BAT
	  file, reenable the command that starts the undelete utility, and then restart
	  your computer again.
	
	7.25  Creating an Emergency Startup Disk for DoubleSpace Systems
	----------------------------------------------------------------
	
	To create an MS-DOS 6.21 startup disk if you use DoubleSpace:
	
	1. If you are upgrading from MS-DOS 6.0, install MS-DOS 6.21 in the directory
	  that contains your previous version of MS-DOS.
	
	2. To create a startup floppy disk, run Setup again by typing the following
	  command:
	
	  " SETUP /F " (without the quotation marks)
	
	  Setup installs MS-DOS 6.21 on the floppy disk. The resulting startup disk does
	  not include DBLSPACE.BIN, since MS-DOS 6.21 does not include DoubleSpace.
	
	3. Add the DBLSPACE.BIN file to the floppy disk by copying it from the directory
	  that contains your MS-DOS files. For example, if your MS-DOS directory is
	  C:\DOS and the floppy disk is in drive A, you would type:
	
	  " COPY C:\DOS\DBLSPACE.BIN A: " (without the quotation marks)
	
	Note: If you are upgrading from MS-DOS 6 but need to install to the floppy disk
	without first installing MS-DOS 6.21 on your hard disk, you can skip Step 1.
	However, the resulting startup disk will include MS-DOS 6 DoubleSpace rather
	than MS-DOS 6.2 DoubleSpace. When you start your computer using such a startup
	disk, you will receive a message from DoubleSpace; to continue, just press
	ENTER.
	
	7.26 If ScanDisk Cannot Check or Repair a DoubleSpace Volume File
	-----------------------------------------------------------------
	
	If you try to use MS-DOS 6.21 ScanDisk to check or repair a DoubleSpace volume
	file and DBLSPACE.BIN is not loaded into memory, ScanDisk displays an error
	message like the following:
	
	  ScanDisk cannot check or repair DoubleSpace volume file C:\DBLSPACE.001
	  because DoubleSpace is not installed.
	
	The cause of the problem might be one of the following:
	
	- You upgraded to MS-DOS 6.21 from MS-DOS version 5 or earlier. In this case,
	  you cannot use ScanDisk to check DoubleSpace drives.
	
	- DoubleSpace is installed on your system, but you started your computer from a
	  floppy disk or by pressing CTRL+F5 or CTRL+F8. If this is the case, remove
	  any floppy disks from your drives, restart your computer, and try running
	  ScanDisk again.
	
	- You have not yet installed DoubleSpace, or one or more of the DoubleSpace
	  system files is missing from the root directory. In this case, carry out the
	  following procedure.
	
	To load DoubleSpace:
	
	1. Type the following at the command prompt, and then press ENTER:
	
	  " REM >> C:\DBLSPACE.INI " (without the quotation marks)
	
	  This command creates a new DBLSPACE.INI file, if one does not already exist.
	
	2. Restart your computer, and then try running ScanDisk again.
	
	3. If DoubleSpace still did not load, copy the DBLSPACE.BIN file from your
	  MS-DOS directory to the root directory of drive C. For example, if your
	  MS-DOS files are in the C:\DOS directory, you would type the following:
	
	  " COPY C:\DOS\DBLSPACE.BIN C:\ " (without the quotation marks)
	
	4. Restart your computer, and then try running ScanDisk again.
	
	5. If DoubleSpace still did not load, try copying the DBLSPACE.BIN file from
	  MS-DOS 6.2 Setup Disk 1 or from the Uninstall disk you created when upgrading
	  from MS-DOS 6 or 6.2. For example, if the disk is in drive A, you would
	  type:
	
	  " COPY A:\DBLSPACE.BIN C:\ " (without the quotation marks)
	
	6. Restart your computer, and then try running ScanDisk again.
	
	Additional query words: msbackup dblguard 6.20 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621
	Version           : :6.21
	
	=============================================================================
	
