---
layout: page
title: "Q116336: README.TXT: Microsoft MS-DOS 6.22 Upgrade (Part 3 of 3)"
permalink: kb/116/Q116336/
---

## Q116336: README.TXT: Microsoft MS-DOS 6.22 Upgrade (Part 3 of 3)

	Article: Q116336
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the MS-DOS 6.22 Upgrade README.TXT
	file.
	
	MORE INFORMATION
	================
	
	7.5 DriveSpace Setup indicates that your computer is running an incompatible
	disk-caching program.
	
	If DriveSpace Setup displays a message indicating your computer is running an
	incompatible disk-caching program, open your CONFIG.SYS or AUTOEXEC.BAT file,
	and delete the command that loads your disk-caching program. If you want to use
	a disk cache, add a line for the MS-DOS 6.22 SMARTDRV program in your
	AUTOEXEC.BAT file. For example, if your MS-DOS files are in a directory named
	DOS, add the following line:
	
	  " C:\DOS\SMARTDRV.EXE " (without the quotation marks)
	
	Quit your text editor, and restart your computer. Run DriveSpace again.
	
	7.6 Your compressed drive runs out of disk space.
	-------------------------------------------------
	
	If your compressed drive runs out of free disk space, you can use the following
	techniques to free some space on the drive:
	
	- Enlarge that drive.
	
	- Carry out the DRVSPACE /DEFRAG /F and DRVSPACE /DEFRAG commands on that
	  drive.
	
	The rest of this section explains each technique.
	
	Enlarging a Compressed Drive
	----------------------------
	
	You can enlarge a compressed drive to make more space available on it. Enlarging
	a compressed drive uses free space on the uncompressed (host) drive.
	
	To enlarge the compressed drive:
	
	1. Start the DriveSpace program by typing "DRVSPACE" (without the quotation
	  marks) at the command prompt.
	
	2. Select the compressed drive you want to enlarge, and then choose the Change
	  Size command from the Drive menu.
	
	  The Change Size dialog box appears. The New Free Space line shows how much
	  free space the compressed and uncompressed drives will have if you choose OK.
	
	3. Specify a smaller number for New Free Space on the uncompressed drive. Notice
	  that as you change this number, DriveSpace adjusts the New Free Space amount
	  for the compressed drive. When the New Free Space amount for both drives is
	  what you want, choose OK.
	
	  DriveSpace enlarges the compressed drive.
	
	Carrying Out the DRVSPACE /DEFRAG /F and DRVSPACE /DEFRAG Commands
	
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
	  fully defragment the drive's file allocation table, then start DRVSPACE
	  /DEFRAG to consolidate the free space in the CVF.
	
	3. When DEFRAG finishes, type "DRVSPACE /DEFRAG /F" (without the quotation
	  marks) at the command prompt.
	
	  DriveSpace re-consolidates the free space on the drive so there is as much
	  free space as possible.
	
	7.7 Your uncompressed (host) drive runs out of disk space
	---------------------------------------------------------
	
	If your uncompressed (host) drive runs out of free disk space, you can enlarge it
	by reducing the size of any compressed drives that are stored on that
	uncompressed drive. Of course, this will reduce the amount of free space on the
	compressed drive(s).
	
	To enlarge the uncompressed (host) drive:
	
	1. Start the DriveSpace program by typing "DRVSPACE" (without the quotation
	  marks) at the command prompt.
	
	2. Select the compressed drive whose size you want to reduce, and then choose
	  the Change Size command from the Drive menu. (Select a compressed drive that
	  is stored on the uncompressed drive that's out of space. To find out which
	  compressed drives are stored on that uncompressed drive, type "DRVSPACE
	  /LIST" (without the quotation marks) at the command prompt.)
	
	  The Change Size dialog box appears. The New Free Space line shows how much
	  free space the compressed and uncompressed drives will have if you choose OK.
	
	3. Specify a larger number for the New Free Space on the uncompressed drive.
	  Notice that as you change this number, DriveSpace adjusts the New Free Space
	  amount for the compressed drive. When the New Free Space amount for both
	  drives is what you want, choose OK.
	
	  DriveSpace reduces the size of the compressed drive, which makes more free
	  space available on the corresponding uncompressed drive.
	
	7.8 DriveSpace did not compress all of your files because the drive ran out of
	disk space.
	
	If DriveSpace indicates that it could not compress some of your files because
	there was not enough disk space, carry out the following procedure.
	
	1. To determine which drive is your uncompressed drive, type "DRVSPACE /LIST"
	  (without the quotation marks) at the command prompt.
	
	2. Using Microsoft Backup, back up to floppy disks the files on the uncompressed
	  drive that were not compressed.
	
	3. Delete the files on the uncompressed drive that were not compressed.
	
	4. Type "DRVSPACE" (without the quotation marks) at the command prompt.
	
	5. From the Drive menu, choose Change Size.
	
	6. To increase the size of your compressed drive, decrease the size of your
	  uncompressed drive, and choose OK.
	
	7. From the Drive menu, choose Exit, and use Backup to restore the files you
	  backed up to your compressed drive. If you run out of space again, repeat
	  steps 5 through 7 until the compressed drive is large enough.
	
	7.9 Windows displays the message "The permanent swap file is corrupt."
	----------------------------------------------------------------------
	
	If you use a Windows permanent swap file, it must be located on an uncompressed
	drive. If your permanent swap file is on a compressed drive, Windows displays
	the message "The permanent swap file is corrupt" when it starts.
	
	When you install DriveSpace, the DriveSpace Setup program checks for the
	existence of a Windows permanent swap file. If it finds one, DriveSpace Setup
	moves the swap file to your uncompressed drive. However, if you install Windows
	after installing DriveSpace, or if you use Control Panel to change the location
	of your permanent swap file, your swap file might end up on a compressed drive.
	(When you specify a drive for your permanent swap file, Windows allows you to
	choose a compressed drive.)
	
	To move your permanent swap file to an uncompressed drive:
	
	1. Start Windows.
	
	2. At the "Permanent swap file is corrupt" screen, type "Y" (without the
	  quotation marks) in response to the question "Do you want to delete this swap
	  file?", and then press ENTER.
	
	3. Open Control Panel, and then Drive-click the 386 Enhanced icon.
	
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
	
	7.10  EXTDISK.SYS displays a warning about drive letters.
	---------------------------------------------------------
	
	If you are using DriveSpace on a Compaq computer, and your CONFIG.SYS file loads
	the EXTDISK.SYS device driver, EXTDISK.SYS displays the following message when
	it loads:
	
	  WARNING: EXTDISK.SYS is not the first device driver to assign drive letters.
	  Physical hard drive letters will not be contiguous.
	
	The EXTDISK.SYS driver still works properly. It displays this message because it
	expects to be the first module to assign drive letters, but because DRVSPACE.BIN
	loads before the CONFIG.SYS file and assigns some drive letters, EXTDISK.SYS is
	no longer first. (EXTDISK.SYS displays the message regardless of when the
	DRVSPACE.SYS device driver is loaded in the CONFIG.SYS file.)
	
	7.11 You need a special device driver to use your startup drive
	---------------------------------------------------------------
	
	If your startup hard disk drive requires a device driver in your CONFIG.SYS file,
	do not compress that drive. If you do, your computer will not start properly,
	since DriveSpace will be unable to access your startup drive. (This is because
	MS-DOS loads DRVSPACE.BIN, the portion of MS-DOS that accesses compressed
	drives, before starting any of the device drivers in your CONFIG.SYS file.)
	
	To install DriveSpace on a computer with a startup drive that requires a special
	device driver, use DriveSpace Setup to compress a drive other than your startup
	drive, or use DriveSpace Setup to create a new compressed drive using free space
	on any existing drive.
	
	7.12 Defragmenting uncompressed drives after changing file attributes
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
	
	7.13  Files DriveSpace cannot compress
	--------------------------------------
	
	Some files (such as .ZIP files) are already compressed. DriveSpace might not be
	able to compress such files any further.
	
	Encrypted data files, such as the Microsoft Mail 3.0 .MMF file, are not
	compressible and will be stored in uncompressed form, even if you store such
	files on a compressed drive.
	
	You might want to store uncompressible files on an uncompressed drive rather than
	on a compressed drive. Doing so can sometimes improve your system's speed.
	
	7.14 Microsoft Defragmenter runs out of memory while you are compressing a drive
	
	If the Defragmenter runs out of memory while you are compressing a drive, quit
	DriveSpace, and then carry out the procedure in section 5.4 of this file.
	
	If the Defragmenter still runs out of memory after you have tried these
	procedures, there might be too many files on your hard disk for the Defragmenter
	to organize. For the program to work correctly, you might need to delete some
	files or move them to a floppy disk or a network drive.
	
	7.15 DriveSpace and PC-Vault
	----------------------------
	
	See section 6.10.
	
	7.16 Maximum size of a compressed drive
	---------------------------------------
	
	The maximum size for a DriveSpace compressed drive is 512 megabytes (MB). For
	example, if you compress a disk drive that is 600 MB, the resulting DriveSpace
	drive will be no larger than 512 MB. To compress the rest of the disk drive, run
	DriveSpace, and choose Create New Drive from the Compress menu. Make the new
	compressed drive as large as possible. (If your drive is very large, you might
	need to create several new compressed drives in order to compress the entire
	drive.)
	
	7.17  DriveSpace could not mount a drive due to problems with the drive
	-----------------------------------------------------------------------
	
	If the message "DriveSpace could not mount drive X due to problems with the
	drive" (in which X is the drive letter) appears when you start your computer,
	then the internal organization of the drive has problems that prevent the drive
	from being used. DriveSpace stores each compressed drive in a special file
	called a compressed volume file (CVF). The CVF is a file with the hidden,
	system, and read-only attributes; it is stored on an uncompressed drive.
	
	To use the compressed drive again, you need to run ScanDisk on that drive's
	compressed volume file, and then restart your system. The error message includes
	the name of the compressed volume file on which you need to run ScanDisk (for
	example, C:\DRVSPACE.000).
	
	To fix this problem for a compressed drive other than drive C:
	
	- Type the SCANDISK command specified by the DriveSpace error message. For
	  example, SCANDISK D:\DRVSPACE.001. (If MS-DOS cannot find the SCANDISK
	  program, see the following procedure.)
	
	To fix this problem for compressed drive C, or if MS-DOS cannot find the SCANDISK
	program:
	
	1. Insert Setup Disk 1 in drive A (or B) of your computer.
	
	2. Change to the drive that contains Setup Disk 1.
	
	3. To start ScanDisk, type the SCANDISK command as specified by the DriveSpace
	  error message. For example, SCANDISK C:\DRVSPACE.000. When ScanDisk displays
	  dialogs describing any problems, choose the Fix It button.
	
	4. After ScanDisk has finished, remove the floppy disk and restart your
	  computer.
	
	7.18  DriveSpace finishes installation, but you cannot access your Hardcard
	---------------------------------------------------------------------------
	
	See section 4.2, part C.
	
	7.19  You receive a DoubleGuard Alarm message
	---------------------------------------------
	
	If a DoubleGuard Alarm message appears, DoubleGuard has detected that an
	application has damaged memory that DriveSpace was using. DoubleGuard halts your
	computer to prevent any further damage to your data.
	
	Normally, each program "owns" a separate area of memory, and does not use memory
	that another program is already using. However, a few programs contain
	programming errors that cause them to inadvertently use memory belonging to
	another program. If such a program inadvertently uses memory belonging to
	DriveSpace, that program could write its own data over the data DriveSpace was
	storing there. Since the data that DriveSpace stores in memory usually includes
	files you are currently using, this could cause damage to your data.
	
	DriveSpace's DoubleGuard safety-checking feature detects when another program has
	violated DriveSpace's memory, and immediately shuts down your computer to
	minimize the chance of data loss. (If further disk activity were to occur
	instead, you could lose some or all of the data on your drive, since the data
	DriveSpace has in memory is probably invalid due to damage by the other
	program.)
	
	If you receive a DoubleGuard Alarm message, do the following:
	
	1. Restart your computer by turning the power switch off and then on again.
	
	2. Type the following at the command prompt:
	
	  " SCANDISK /ALL " (without the quotation marks)
	
	  This runs ScanDisk on all your drives to detect and correct any problems that
	  might have been caused by the program that violated DriveSpace's memory.
	
	3. Make a note of which program, if any, you were running when the DoubleGuard
	  Alarm occurred. That program is probably (but not necessarily) the program
	  that caused the DoubleGuard Alarm. If you receive additional DoubleGuard
	  Alarms, take notes about what you were doing and see if you can detect a
	  pattern.
	
	7.20  A compressed drive is currently too fragmented to mount
	-------------------------------------------------------------
	
	If you receive the message "Compressed drive X is currently too fragmented to
	mount" (in which X is the drive letter) when your computer starts, or if
	DriveSpace displays the message "The X:\DRVSPACE.nnn file is too fragmented to
	mount," then DriveSpace cannot mount the drive because its compressed volume
	file is stored in too many fragments on your hard disk. (DriveSpace stores each
	compressed drive in a special file called a compressed volume file (CVF). The
	CVF is a file with the hidden, system, and read-only attributes, and is stored
	on an uncompressed drive.)
	
	To correct this problem, increase the MaxFileFragments setting in your
	DRVSPACE.INI file. DriveSpace displays the "too fragmented to mount" error
	messages because the number of CVF file fragments exceeds this setting. Follow
	these steps:
	
	1. Change to the root directory of your startup drive. (If your startup drive is
	  compressed, change to that drive's host drive.)
	
	2. Type the following command:
	
	  " TYPE DRVSPACE.INI " (without the quotation marks)
	
	3. Note the current value for the MaxFileFragments setting.
	
	4. Use the DRVSPACE /MAXFILEFRAGMENTS command to specify a higher value. For
	  example, if MaxFileFragments is currently set to 128, you might type the
	  following command:
	
	  " DRVSPACE /MAXFILEFRAGMENTS=200 " (without the quotation marks)
	
	5. Restart your computer. DriveSpace should now be able to mount the drive.
	
	If DriveSpace still cannot mount the drive, follow these steps:
	
	1. Run ScanDisk to check the reliability of your hard disk by typing the
	  following at the command prompt:
	
	  " SCANDISK /ALL /SURFACE " (without the quotation marks)
	
	2. Restart your computer. If DriveSpace still cannot mount the drive, proceed to
	  step 3.
	
	3. Remove the Read-Only, System, and Hidden file attributes on the
	  DRVSPACE.<XXX> file. For example, if the file is H:\DRVSPACE.000, type
	  the following at the command prompt:
	
	  " ATTRIB H:\DRVSPACE.000 -R -S -H " (without the quotation marks)
	
	4. Run Microsoft Defragmenter (Defrag) by typing DEFRAG at the command prompt.
	
	5. Use the ATTRIB command to reset the file attributes on DRVSPACE.<XXX>.
	  For example, if the file is H:\DRVSPACE.000, type the following at the
	  command prompt:
	
	  " ATTRIB H:\DRVSPACE.000 +R +S +H " (without the quotation marks)
	
	6. Restart your computer again. DriveSpace should now be able to mount the
	  compressed drive.
	
	7.21 You receive the message "Your computer is running with an incompatible
	version of DBLSPACE.BIN"
	
	If you try to run the MS-DOS 6 version of DBLSPACE.EXE with MS-DOS 6.2, it
	displays the following message:
	
	Your computer is running with an incompatible version of DBLSPACE.BIN. You must
	update DBLSPACE.BIN on the root directory of drive @.
	
	DBLSPACE.EXE has detected that its version number does not match that of your
	MS-DOS 6.2 DBLSPACE.BIN. To correct this problem, you need to update this copy
	of the DBLSPACE.EXE file.
	
	When you run MS-DOS 6.22 Setup, it updates the DBLSPACE.EXE file in the directory
	that contains your MS-DOS files. If there are other copies of DBLSPACE.EXE
	elsewhere on your disk -- for example, in the root directory of your host drive
	-- Setup does not update those additional copies. To update them yourself, use
	the COPY /Y command to copy the MS-DOS 6.22 version of DBLSPACE.EXE over the
	older versions. (The MS-DOS 6.22 version of DBLSPACE.EXE is located in the
	directory that contains your MS-DOS files.)
	
	7.22  Using the DRVSPACE command after bypassing DRVSPACE.BIN
	-------------------------------------------------------------
	
	If you bypass DRVSPACE.BIN when you start your computer (by pressing CTRL+F5 or
	CTRL+F8), then the DRVSPACE command may not work as expected:
	
	- Usually, if DriveSpace is installed, typing DRVSPACE runs the DriveSpace
	  program. However, if you type "DRVSPACE" (without the quotation marks) when
	  DRVSPACE.BIN is not loaded, DriveSpace Setup starts instead. If this happens,
	  quit DriveSpace Setup.
	
	- If you type the "DRVSPACE /MOUNT" (without the quotation marks) command, it
	  reports that there are no more drive letters for DriveSpace to use.
	  (DriveSpace cannot mount a compressed drive unless DRVSPACE.BIN is loaded.)
	
	To use DriveSpace or your compressed drives, restart your computer without
	bypassing DRVSPACE.BIN.
	
	7.23  Removing the write-protection from a compressed floppy disk
	-----------------------------------------------------------------
	
	If you are using a compressed floppy disk that is write-protected and
	Automounting is enabled, the disk will remain write-protected until it is
	unmounted -- even if you remove the write-protect tab from it.
	
	To remove the write protection, use either of the following methods:
	
	- Unmount the floppy disk by using the DRVSPACE /UNMOUNT command, and then try
	  using the disk again (this will automatically remount it). For example, if
	  the disk is in drive B, you would type "DRVSPACE /UNMOUNT B:" (without the
	  quotation marks) and then try using the disk again. (If Windows is running,
	  you can't use the DRVSPACE /UNMOUNT command. In that case, use the following
	  method.)
	
	- Insert a different floppy disk in the drive and access it (for example, carry
	  out the DIR command on it). This automatically unmounts the compressed floppy
	  disk that was previously in the drive.) Then, reinsert the compressed floppy
	  disk and try using it again (this will automatically remount it).
	
	NOTE If you are using DriveSpace and mount an unconverted DoubleSpace floppy
	disk, the disk will be mounted with write-protected. The only way to remove the
	write protection on such a disk is to convert it to DriveSpace format; for
	information on converting it, see section 7.1.
	
	7.24  Automounting and Norton disk-caching utilities
	----------------------------------------------------
	
	If you use a Norton disk-caching utility such as Norton Cache (NCACHE2.EXE) or
	Norton Speedrive (SPEEDRV.EXE) make sure the utility is loaded after the DEVICE
	command for DRVSPACE.SYS. If you load one of these utilities before
	DRVSPACE.SYS, DriveSpace's automounting feature will not work.
	
	7.25  Undelete utilities and DriveSpace
	---------------------------------------
	
	DriveSpace cannot compress or uncompress drives while an undelete utility (for
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
	
	7.26  Creating an Emergency Startup Disk for DriveSpace Systems
	---------------------------------------------------------------
	
	To create an MS-DOS 6.22 startup disk if you use DriveSpace:
	
	1. If you are upgrading from MS-DOS 6.0, install MS-DOS 6.22 in the directory
	  that contains your previous version of MS-DOS.
	
	2. To create a startup floppy disk, run Setup again by typing the following
	  command:
	
	  " SETUP /F " (without the quotation marks)
	
	  Setup installs MS-DOS 6.22 on the floppy disk. The resulting startup disk does
	  not include DRVSPACE.BIN, since MS-DOS 6.22 does not include DriveSpace.
	
	3. Add the DRVSPACE.BIN file to the floppy disk by copying it from the directory
	  that contains your MS-DOS files. For example, if your MS-DOS directory is
	  C:\DOS and the floppy disk is in drive A, you would type:
	
	  " COPY C:\DOS\DRVSPACE.BIN A: " (without the quotation marks)
	
	Note: If you are upgrading from MS-DOS 6 but need to install to the floppy disk
	without first installing MS-DOS 6.22 on your hard disk, you can skip Step 1.
	However, the resulting startup disk will include MS-DOS 6 DoubleSpace rather
	than MS-DOS 6.2 DoubleSpace. When you start your computer using such a startup
	disk, you will receive a message from DoubleSpace; to continue, just press
	ENTER.
	
	7.27  If ScanDisk Cannot Check or Repair a DoubleSpace Volume File
	------------------------------------------------------------------
	
	MS-DOS 6.22 ScanDisk can check DoubleSpace drives or volume files only if one of
	the following conditions is true:
	
	- DoubleSpace is installed and DBLSPACE.BIN is loaded into memory.
	
	- Both the DBLSPACE.BIN and DRVSPACE.MR1 files are available -- located
	  together in the root directory or the directory that contains your MS-DOS
	  files. (For information about the DRVSPACE.MR1 file, see Section 7.28 of this
	  file.)
	
	Otherwise, ScanDisk displays a message like the following:
	
	  ScanDisk cannot check or repair DoubleSpace volume file D:\DBLSPACE.001.
	
	If you receive this message, one of the following might be the cause of the
	problem:
	
	- DoubleSpace is not installed and the DBLSPACE.BIN and/or DRVSPACE.MR1 files
	  are unavailable or are not in the same directory. These files must be
	  together in the root directory or the directory that contains your MS-DOS
	  files. (For information about the DRVSPACE.MR1 file, see Section 7.28.)
	
	- DoubleSpace is installed on your system, but you started your computer from a
	  floppy disk or by pressing CTRL+F5 or CTRL+F8. If this is the case, remove
	  any floppy disks from your drives, restart your computer, and try running
	  ScanDisk again.
	
	- You upgraded to MS-DOS 6.22 from a version of MS-DOS that did not include
	  DoubleSpace (MS-DOS version 5 or earlier, or MS-DOS 6.21). If your previous
	  version of MS-DOS did not include DoubleSpace, you cannot use ScanDisk to
	  check DoubleSpace drives.
	
	7.28  DoubleSpace and the DRVSPACE.MR1 File
	-------------------------------------------
	
	In conjunction with the DBLSPACE.BIN file, the DRVSPACE.MR1 file enables
	DriveSpace and ScanDisk to work with DoubleSpace drives and volume files. These
	files also enable MS-DOS 6.22 Backup to work with compressed backups stored in
	the MS-DOS 6 data compression format.
	
	NOTE The DRVSPACE.MR1 file is included with DoubleSpace conversion. If you
	purchased the English version of the MS-DOS 6.22 Upgrade, you can obtain
	DoubleSpace conversion by sending in the enclosed coupon; if you purchased the
	MS-DOS 6.22 Step-Up or the non-English version of MS-DOS 6.22, your version of
	MS-DOS 6.22 already includes conversion and the DRVSPACE.MR1 file.)
	
	In conjunction with the DBLSPACE.BIN file, the DRVSPACE.MR1 file enables
	DriveSpace to:
	
	- Convert DoubleSpace drives to DriveSpace format. (To convert a drive, run
	  DriveSpace, and then choose Convert DoubleSpace from the Tools menu.)
	
	- Mount unconverted DoubleSpace drives for read-only access. The data on the
	  drive will be available, but the drive will be write-protected, so you will
	  not be able to change or add to the data on the drive.
	
	In conjunction with the DBLSPACE.BIN file, the DRVSPACE.MR1 file enables ScanDisk
	to check and repair unconverted DoubleSpace drives and volume files.
	
	In addition, the DBLSPACE.BIN and DRVSPACE.MR1 files enable MS-DOS 6.22 Backup to
	read older compressed backups. For more information, see Section 5.5 of this
	file.
	
	7.29  Using unconverted DoubleSpace drives with DriveSpace
	----------------------------------------------------------
	
	If you mount a DoubleSpace drive under the circumstances described in section
	7.28, DriveSpace will mount the drive write-protected (read-only). This means
	that you cannot change the drive or the data it contains. To change a
	DoubleSpace drive or the data on it, you must first convert the drive to
	DriveSpace format. To do this, choose the Convert DoubleSpace command from the
	Tools menu. (You must have the DRVSPACE.MR1 file in order to do this; for more
	information, see section 7.28.)
	
	7.30  If a partially converted drive cannot be mounted
	------------------------------------------------------
	
	Normally, when DriveSpace converts a DoubleSpace drive, the drive is completely
	converted to DriveSpace format. However, if the power is interrupted during
	conversion, or something else prevents the conversion process from completing,
	the drive will remain in a partially converted state.
	
	To mount a partially converted drive if you are using DriveSpace, you must first
	convert the drive to DriveSpace format. To do this, choose the Convert
	DoubleSpace command from the Tools menu. (You must have the DRVSPACE.MR1 file in
	order to do this; for more information, see section 7.28.) DriveSpace will then
	convert and mount the drive.
	
	To mount a partially converted drive if you are using DoubleSpace, you must first
	convert your system to DriveSpace. (For more information, see section 7.1.)
	After you have converted your system to DriveSpace, convert the
	partially-converted drive to DriveSpace format by choosing the Convert
	DoubleSpace command from the Tools menu. (You must have the DRVSPACE.MR1 file in
	order to do this; for more information, see section 7.28.)
	
	Additional query words: msbackup stepup dblguard 6.22 glossary
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	
