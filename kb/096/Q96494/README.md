---
layout: page
title: "Q96494: README.TXT: Microsoft MS-DOS 6 Upgrade (Part 3 of 3)"
permalink: /kb/096/Q96494/
---

## Q96494: README.TXT: Microsoft MS-DOS 6 Upgrade (Part 3 of 3)

	Article: Q96494
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the MS-DOS 6 Upgrade README.TXT file.
	
	7. DOUBLESPACE
	--------------
	
	7.1  Converting Your Disk-Compression Software to DoubleSpace
	-------------------------------------------------------------
	
	To convert your disk-compression software, carry out the following procedure.
	
	NOTE If your computer uses XtraDrive disk compression, use its uninstallation
	program to remove the compression, and then install DoubleSpace.
	
	1. Install MS-DOS 6 if you haven't already done so.
	
	2. Use Microsoft Backup for MS-DOS to back up the files on your hard disk. If
	  you didn't install Backup for MS-DOS during Setup, see the chapter "Getting
	  Started" in the MICROSOFT MS-DOS 6 USER'S GUIDE for instructions on
	  installing it.
	
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
	  "A:SETUP" (without the quotation marks) or "B:SETUP" (without the quotation
	  marks) at the command prompt.
	
	  Follow the instructions on your screen.
	
	6. After Setup is complete, install DoubleSpace by typing "DBLSPACE" (without
	  the quotation marks) at the command prompt. Follow the instructions on your
	  screen.
	
	7. Use Backup for MS-DOS to restore the files you backed up.
	
	  NOTE When you run Microsoft Backup, you will have to configure it again. Also,
	  you will need to retrieve the catalog file from your backup floppy disks. To
	  do so, choose the Catalog button in the Restore dialog box.
	
	7.2 DoubleSpace Setup indicates that your computer is running an
	   incompatible disk-caching program.
	-------------------------------------------------------------------------------------------------------
	
	If DoubleSpace Setup displays a message indicating your computer is running an
	incompatible disk-caching program, open your CONFIG.SYS or AUTOEXEC.BAT file,
	and delete the DEVICE command that loads your disk-caching program. In your
	AUTOEXEC.BAT file, add a line for the MS-DOS 6 SMARTDRV program. For example, if
	your MS-DOS files are in a directory named DOS, add the following line:
	
	  " C:\DOS\SMARTDRV.EXE " (without the quotation marks)
	
	Quit your text editor, and restart your computer. Run DoubleSpace again.
	
	7.3 Your compressed drive runs out of disk space.
	-------------------------------------------------
	
	If your compressed drive runs out of free disk space, you can use the following
	techniques to free some space on the drive:
	
	- Specify a higher estimated compression ratio for that drive.
	
	- Enlarge that drive.
	
	- Carry out the DBLSPACE /DEFRAG /F and DBLSPACE /DEFRAG commands on that
	  drive.
	
	The rest of this section explains each technique.
	
	Specifying a Higher Estimated Compression Ratio
	-----------------------------------------------
	
	If a compressed drive's estimated compression ratio is too small, MS-DOS might
	report that there is no more free space on that drive, when some space is in
	fact available. (Raising the estimated compression ratio is most effective if
	the files you are trying to store are highly compressible. It will have no
	effect if the drive really is out of space.)
	
	To specify a larger estimated compression ratio:
	
	1. Start the DoubleSpace program by typing "DBLSPACE" (without the quotation
	  marks) at the command prompt.
	
	2. Select the compressed drive you want to change, and then choose the Change
	  Ratio command from the Drive menu.
	
	  The Change Compression Ratio dialog box appears.
	
	3. Specify a higher compression ratio, and then choose OK. For more information,
	  choose the Help button.
	
	You can also change the estimated compression ratio from the command prompt. For
	more information, type "HELP DBLSPACE /RATIO" (without the quotation marks) at
	the command prompt.
	
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
	-------------------------------------------------------------------------------------------
	
	You can sometimes free additional space on a compressed drive by having
	DoubleSpace defragment that drive twice, once with and once without the /F
	switch.
	
	NOTE You might want to carry out the following procedure overnight, since
	defragmenting a large or badly fragmented drive can take a long time. (To carry
	out the entire procedure overnight, create a batch file that contains both the
	commands in the procedure.)
	
	To free space by defragmenting the drive twice:
	
	1. Make the compressed drive your current drive.
	
	2. Type "DBLSPACE /DEFRAG /F" (without the quotation marks) at the command
	  prompt.
	
	  DoubleSpace defragments the drive and fixes any errors it finds.
	
	3. When DoubleSpace finishes, type "DBLSPACE /DEFRAG" (without the quotation
	  marks) at the command prompt.
	
	  DoubleSpace consolidates the free space on the drive so there is as much free
	  space as possible.
	
	7.4 Your uncompressed drive runs out of disk space
	--------------------------------------------------
	
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
	
	.5 DoubleSpace did not compress all of your files because
	   the drive ran out of disk space.
	----------------------------------------------------------------------------------------------
	
	If DoubleSpace indicates that it could not compress some of your files because
	there was not enough disk space, carry out the following procedure.
	
	1. To determine which drive is your uncompressed drive, type "DBLSPACE /LIST"
	  (without the quotation marks) at the command prompt.
	
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
	
	7.6 Removing DoubleSpace from your computer
	-------------------------------------------
	
	There is no method for automatically removing DoubleSpace. There are two ways to
	remove it manually:
	
	- Back up the files on all your compressed drives, remove DoubleSpace, and then
	  restore the backed-up files onto your uncompressed drive. (Note that all the
	  files currently on your compressed drive(s) might not fit on your hard disk
	  after you remove DoubleSpace.)
	
	- Move as many files as possible from your compressed drive to your
	  uncompressed drive, reduce the size of your compressed drive to free space on
	  the uncompressed drive, and keep moving files and shrinking the compressed
	  drive until no more files remain on the compressed drive. Then, remove
	  DoubleSpace.
	
	  NOTE: The drive letter of your uncompressed drive may change after you remove
	  DoubleSpace. If it does, any files or programs configured for use on the
	  uncompressed drive (for example, your Windows permanent swap file) will need
	  to be reconfigured.
	
	The procedures in this section explain each method of removing DoubleSpace.
	
	To remove DoubleSpace by using the back-up-and-restore method:
	
	1. Delete any unnecessary files from your compressed drives.
	
	2. Back up the files on all compressed drives. If your backup program is located
	  on a compressed drive, make sure you copy the backup program files to another
	  uncompressed drive or to a floppy disk.
	
	  If you are using Microsoft Backup for MS-DOS, the program files you need to
	  copy are the following:
	
	  MSBACKUP.EXE   MSBACKUP.OVL   MSBACKUP.INI   MSBACKDB.OVL
	  MSBACKDR.OVL   MSBACKFB.OVL   MSBACKFR.OVL   MSBCONFG.OVL
	  DEFAULT.SET    MSBACKUP.LOG   MSBACKUP.RST
	
	3. To determine which drive is your uncompressed drive, type "DBLSPACE /LIST"
	  (without the quotation marks) at the command prompt. The uncompressed drive
	  is listed under the CVF Filename column. For example, if H:\DBLSPACE.000 is
	  the CVF Filename associated with drive C, drive H is the uncompressed drive.
	
	4. If you are removing DoubleSpace from your startup drive, copy the COMMAND.COM
	  file from your compressed drive to the root directory of your uncompressed
	  drive.
	
	5. Make your uncompressed drive the current drive. For example, if drive H is
	  your uncompressed drive, type "H:" (without the quotation marks) at the
	  command prompt. To change to the root directory, type "CD\" (without the
	  quotation marks) at the command prompt. If you want to delete all of your
	  DoubleSpace drives, type the following at the command prompt:
	
	  " DELTREE DBLSPACE.* " (without the quotation marks)
	
	  If you want to delete just one of your DoubleSpace drives, use the DELTREE
	  command to delete the CVF for the drive. (The DBLSPACE /LIST command also
	  shows the CVF names for your drives.) For example, if the CVF is
	  DBLSPACE.000, type the following at the command prompt:
	
	  " DELTREE DBLSPACE.000 " (without the quotation marks)
	
	6. Restart your computer.
	
	7. Restore your backed-up files. If your Backup program files are on a floppy
	  disk, copy them to the hard disk first. Then run the Backup program from your
	  hard disk.
	
	  NOTE You might need to retrieve your catalog file from your backup floppy
	  disks. To do so, choose the Catalog button in the Restore dialog box.
	
	To remove DoubleSpace by using the move-and-resize method:
	
	1. Delete any unnecessary files from your compressed drives.
	
	2. To determine which drive is your uncompressed (host) drive, type "DBLSPACE
	  /LIST" (without the quotation marks) at the command prompt. The uncompressed
	  drive is listed under the CVF Filename column. For example, if
	  H:\DBLSPACE.000 is the CVF Filename associated with drive C, drive H is the
	  uncompressed drive.
	
	3. Delete any unnecessary files from the uncompressed drive, including your
	  Windows permanent swap file (if any).
	
	4. Change to your compressed drive, and then type "DBLSPACE /SIZE" (without the
	  quotation marks) at the command prompt. DoubleSpace will reduce the drive's
	  size as much as possible, which will free some space on the uncompressed
	  drive. (If you have more than one compressed drive, carry out this step for
	  each one.)
	
	  If DoubleSpace cannot reduce a compressed drive's size because the drive is
	  too fragmented, run Microsoft Defragmenter by typing "DEFRAG" (without the
	  quotation marks) at the command prompt. When Defragmenter completes, type
	  "DBLSPACE /SIZE" (without the quotation marks) at the command prompt.
	
	5. Use the MOVE command to move files from the compressed drive to the
	  uncompressed drive until only .5 MB of free space remains on the uncompressed
	  drive.
	
	  Repeat steps 4 and 5 until your compressed drives do not contain any files you
	  want to keep.
	
	6. If you are removing DoubleSpace from your startup drive, copy the COMMAND.COM
	  file from your compressed drive to the root directory of your uncompressed
	  drive.
	
	7. Make your uncompressed drive the current drive. For example, if drive H is
	  your uncompressed drive, type "H:" (without the quotation marks) at the
	  command prompt. To change to the root directory, type "CD\" (without the
	  quotation marks) at the command prompt. If you want to delete all of your
	  DoubleSpace drives, type the following at the command prompt:
	
	  " DELTREE DBLSPACE.* " (without the quotation marks)
	
	  If you want to delete just one of your DoubleSpace drives, use the DELTREE
	  command to delete the CVF for the drive. (The DBLSPACE /LIST command also
	  shows the CVF names for your drives.) For example, if the CVF is
	  DBLSPACE.000, type the following at the command prompt:
	
	  " DELTREE DBLSPACE.000 " (without the quotation marks)
	
	8. Remove all references to DBLSPACE from your CONFIG.SYS and AUTOEXEC.BAT
	  files.
	
	9. Restart your computer.
	
	7.7 Windows displays the message "The permanent swap file is corrupt."
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
	  uncompressed drive, see section 7.4.)
	
	  When you have finished specifying swap-file settings, choose OK twice, and
	  follow the instructions on your screen.
	
	7.8 EXTDISK.SYS displays a warning about drive letters.
	-------------------------------------------------------
	
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
	
	7.9 You need a special device driver to use your startup drive
	--------------------------------------------------------------
	
	If your startup hard disk drive requires a device driver in your CONFIG.SYS file,
	do not compress that drive. If you do, your computer will not start properly,
	since DoubleSpace will be unable to access your startup drive. (This is because
	MS-DOS loads DBLSPACE.BIN, the portion of MS-DOS that accesses compressed
	drives, before starting any of the device drivers in your CONFIG.SYS file.)
	
	To install DoubleSpace on a computer with a startup drive that requires a special
	device driver, use DoubleSpace Setup to compress a drive other than your startup
	drive, or use DoubleSpace Setup to create a new compressed drive using free
	space on any existing drive.
	
	7.10 Defragmenting Uncompressed Drives After Changing File Attributes
	---------------------------------------------------------------------
	
	You can safely defragment both your compressed or uncompressed drives, using the
	Microsoft Defragmenter or another defragmentation program, as long as you do not
	change the attributes of your compressed volume files. If you change the
	attributes of a compressed volume file, and then defragment that uncompressed
	drive, you might lose data.
	
	7.11 Files DoubleSpace Cannot Compress
	--------------------------------------
	
	Some files (such as .ZIP files) are already compressed. DoubleSpace might not be
	able to compress such files any further.
	
	Encrypted data files, such as the Microsoft Mail 3.0 .MMF file, are not
	compressible and will be stored in uncompressed form, even if you store such
	files on a compressed drive.
	
	You might want to store uncompressible files on an uncompressed drive rather than
	on a compressed drive. Doing so can sometimes improve your system's speed.
	
	7.12 Microsoft Defragmenter runs out of memory while you are
	    compressing a drive.
	--------------------------------------------------------------------------------------
	
	If the Defragmenter runs out of memory while you are compressing a drive, quit
	DoubleSpace, and then carry out the procedures in "An MS- DOS-based program
	displays an out-of-memory message" in the chapter "Diagnosing and Solving
	Problems" in the MICROSOFT MS-DOS 6 USER'S GUIDE.
	
	If the Defragmenter still runs out of memory after you have tried these
	procedures, there might be too many files on your hard disk for the Defragmenter
	to organize. For the program to work correctly, you might need to delete some
	files or move them to a floppy disk or a network drive.
	
	7.13 DoubleSpace and PC-Vault
	-----------------------------
	
	The PC-Vault and PC-Vault Plus Hard Disk Protection Systems from Johnson Computer
	Systems are compatible with DoubleSpace, except for the Maximum Floppy Boot
	Protection feature in versions prior to 4.6. To avoid losing data, do not use
	Maximum Floppy Boot Protection in versions earlier than 4.6 with DoubleSpace. If
	your version of PC-Vault or PC-Vault Plus is earlier than 4.6, contact Johnson
	Computer Systems.
	
	7.14 DoubleSpace displayed the "Drive X is too fragmented to resize,"
	    you followed the message's instructions, and they didn't work.
	-----------------------------------------------------------------------------------------------------------------------------------------
	
	If you followed the instructions, and you are still unable to resize the drive,
	you might have system files that are preventing Microsoft Defragmenter from
	reorganizing your files. Carry out the following procedure:
	
	1. Change to the drive that DoubleSpace identified in its message.
	
	2. To find the system files, type "DIR /S /A:S|MORE" (without the quotation
	  marks) at the command prompt.
	
	3. For each filename that DIR displays, type "ATTRIB -S FILENAME" (without the
	  quotation marks) at the command prompt to remove its system attribute.
	
	4. Run DEFRAG /Q /H DRIVE: again.
	
	5. For each file whose system attribute you removed, type "ATTRIB +S FILENAME"
	  (without the quotation marks) at the command prompt to restore the attribute.
	
	6. To change the size of your drive, run DoubleSpace again.
	
	7.15 Running DoubleSpace on a Windows NT Flexboot System
	--------------------------------------------------------
	
	The BOOT.INI, BOOTSECT.DOS, NTLDR, and NTDETECT.COM files should not be
	compressed. Add these files to the [SpecialFiles] section of the DBLSPACE.INF
	before you run DoubleSpace. After DoubleSpace Setup is finished, copy all the
	files and subdirectories in your Windows NT directory on your compressed drive
	to a Windows NT directory on your uncompressed drive.
	
	7.16 Maximum size of a compressed drive
	---------------------------------------
	
	The maximum size that a DoubleSpace-compressed drive can be is 512 megabytes
	(MB). For example, if you have a disk drive that is 300 MB, the drive will not
	be larger than 512 MB after DoubleSpace compresses it.
	
	7.17  DoubleSpace displays the message "A CVF is damaged"
	---------------------------------------------------------
	
	If the message "A CVF is damaged" appears when you start your computer, then
	DoubleSpace has detected problems with a compressed volume file (CVF). The most
	common cause of this message is crosslinked files on the compressed drive.
	DoubleSpace detects a crosslinked file if two files or directories are recorded
	in the DoubleSpace file allocation table as using the same disk space.
	
	Note: If you are using Undelete and the Delete Sentry method of protection,
	remove the memory-resident portion of Undelete by typing "UNDELETE /UNLOAD"
	(without the quotation marks) at any MS-DOS command prompt before you delete any
	cross-linked file
	
	To fix this problem:
	
	1. Change to the compressed drive and type "DBLSPACE /CHKDSK" (without the
	  quotation marks) at the command prompt.
	
	  If DoubleSpace Chkdsk finds a crosslinked file, it reports the problem and the
	  name of the file.
	
	2. To fix the cross-linked files, copy the specified files or directories
	  elsewhere and delete the original copies of those files. Some of the
	  information in these files may be lost.
	
	7.18  DoubleSpace finishes installation, but you cannot access your
	     Hardcard.
	-----------------------------------------------------------------------------------
	
	See section 4.2, part C.
	
	Additional query words: 6.0 cvf damaged msbackup mwbackup dblspace double space defrag
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
