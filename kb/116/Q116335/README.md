---
layout: page
title: "Q116335: README.TXT: Microsoft MS-DOS 6.22 Upgrade (Part 2 of 3)"
permalink: kb/116/Q116335/
---

## Q116335: README.TXT: Microsoft MS-DOS 6.22 Upgrade (Part 2 of 3)

	Article: Q116335
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): msdos
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
	
	2.4 Using MemMaker with IBM LAN
	-------------------------------
	Before you run MemMaker, you might need to make adjustments to the
	parameters specified for your IBM LAN support driver, DXMC0MOD.SYS. In
	your CONFIG.SYS file, make sure that the DEVICE command that loads
	DXMC0MOD.SYS includes one of the following before you run MemMaker:
	
	o The first three parameters, as in the following example:
	
	 DEVICE=C:\DXMC0MOD.SYS 400000000001,D800,1
	
	o No parameters, as in the following example:
	
	 DEVICE=C:\DXMC0MOD.SYS
	
	o Some parameters and enough commas to fill in the first three
	 parameters, as in the following example:
	
	 DEVICE=C:\DXMC0MOD.SYS 400000000001,,
	
	2.5 MemMaker and Adaptec SCSI devices
	-------------------------------------
	MemMaker is compatible with Adaptec SCSI devices. However, if you use
	the ASPI4DOS.SYS driver to support your SCSI device, MemMaker by default
	will exclude this driver from the optimization process. If you don't
	use the SCSI device as your startup or boot drive, you can include the
	ASPI4DOS.SYS driver in the optimization process. To do so, remove the
	^ASPI4DOS entry in the MEMMAKER.INF file, and then run MemMaker.
	
	2.6 Using MemMaker on a computer with PC Tools or PC-DOS RAMBoost
	-----------------------------------------------------------------
	You can use MemMaker or RAMBoost with MS-DOS, but not both at the
	same time. MemMaker will prevent RAMBoost from loading, but not
	remove its DEVICE= command from your CONFIG.SYS.
	
	2.7 EMM386 detects an error in an application
	---------------------------------------------
	If EMM386 displays a message such as "EMM386 has detected error
	#12 in an application," this indicates that the processor
	has reported an exception error to EMM386. An exception error
	typically occurs when an application gives the processor an
	instruction under invalid or unexpected conditions. In most cases,
	these errors are related to a specific program. If you are receiving
	an error that does not occur with any particular application, the
	error might be caused by a device driver or a memory-resident
	(terminate-and-stay-resident) program.
	
	To avoid these errors:
	
	 o  Try to identify the program involved. One way to do this is
	    to see if the error occurs when the program is not running.
	    If you suspect a memory-resident program or device driver,
	    try bypassing it when your computer starts.
	
	 o  Try disabling EMM386. If a particular application is to blame,
	    disabling EMM386 might allow that application to generate an
	    error message. Disabling EMM386 might also change
	    your memory configuration so that the error no longer occurs.
	
	 o  Try changing the order in which you load device drivers and
	    memory-resident programs. This might help because some
	    errors occur only under specific memory conditions.
	
	 o  If error 12 is occurring, this indicates that a stack is being used
	    incorrectly. Try adding the following command to your CONFIG.SYS
	    file:
	
	    STACKS=18,512
	
	 o  If error 13 is occurring, the program may be trying to use protected
	    mode without cooperating with EMM386. You may need to obtain a
	    VCPI-compliant version of the program, or not load EMM386 when
	    using this application.
	
	2.8  MemMaker no longer aggressively scans upper memory by default
	------------------------------------------------------------------
	By default, the MS-DOS 6.22 version of MemMaker does not scan upper
	memory aggressively. Instead, the MemMaker option "Scan the upper
	memory area aggressively?" is set to No, and MemMaker limits its search
	for available UMBs to memory addresses C600 through EFFF. In contrast,
	the MS-DOS 6 version of MemMaker did scan upper memory aggressively
	by default: in addition to scanning memory in the C600-EFFF range,
	it also scanned addresses in the range F000 through F7FF.
	
	To make more memory available for running programs, run MemMaker in
	Custom mode and change the "Scan the upper memory area aggressively?"
	option to Yes. (Note that, on some computers, putting UMBs in this
	range prevents the computer from starting properly.)
	
	Note: If you last ran MemMaker with the "Scan the upper memory
	     area aggressively" option set to Yes, then the next time
	     you run MemMaker, it leaves that option set to Yes.
	
	3. WINDOWS
	==========
	
	3.1 Your computer uses a Windows 3.0 permanent swap file.
	---------------------------------------------------------
	If your computer uses a Windows 3.0 permanent swap file, run
	the SPATCH.BAT program to make the swap file compatible with MS-DOS 6.
	To do so, carry out the following procedure:
	
	1. Copy the SPATCH.BAT file to your hard disk. To determine the location of
	  the file on the Setup disks, view the PACKING.LST file on Setup Disk
	  1.
	
	2. Type the following at the command prompt:
	
	  SPATCH [DRIVE]:[PATH]SWAPFILE.EXE
	
	  For the DRIVE and PATH parameters, specify the location of
	  your SWAPFILE.EXE file.
	
	3. Follow the instructions on your screen.
	
	  The program modifies the SWAPFILE.EXE for use with MS-DOS 6
	  and saves a backup copy as SWAPFILE.SAV. After you have confirmed
	  the file works correctly, you can delete the SWAPFILE.SAV file.
	
	3.2 Using compressed floppy disks with Windows File Manager
	-----------------------------------------------------------
	If you are using compressed floppy disks with automounting enabled,
	you might encounter error messages or other problems while using File
	Manager. To work around these problems, press the F5 key twice.
	
	For example, if you change from a compressed to an uncompressed floppy
	disk, the drive button for the compressed floppy disk's host drive
	remains until you press the F5 key twice.
	
	4. HARDWARE COMPATIBILITY WITH MS-DOS
	=====================================
	
	4.1 Compaq EXTDISK.SYS Driver
	-----------------------------
	The Compaq EXTDISK.SYS driver version 3.00 or later is
	compatible with MS-DOS 6. If you have a version earlier
	than 3.00, contact your vendor for an upgrade.
	
	4.2 Hardcard
	------------
	If you upgraded your system from MS-DOS 6 or 6.2, your system
	uses its Hardcard drive as its startup drive, and you want to use
	DoubleSpace on that drive, see section 7.18. For additional
	Hardcard information, see the following:
	
	a) Hardcard II
	
	  If you can't use Plus Development Hardcard II or Hardcard
	  II XL when running EMM386.EXE, specify the exclude (x=)
	  switch to prevent EMM386 from conflicting with the card's
	  BIOS address.
	
	  To configure EMM386, run MemMaker.
	
	b) Hardcard 40 or Passport
	
	  If you are using Hardcard 40 or a Passport removable
	  disk, and you have a DEVICE command in your CONFIG.SYS file
	  for PLUSDRV.SYS, disable or remove the DEVICE command.
	  Then run MS-DOS 6.22 Setup. After Setup is complete, reenable or
	  restore the DEVICE command for PLUSDRV.SYS. Make it the last line
	  in the file.
	
	c) If you upgraded your system from MS-DOS 6 or 6.2, installed
	  DoubleSpace on your Hardcard, and are now unable to access your
	  newly compressed drive, try the following:
	
	  1) Add a DRVSPACE /MOUNT command to your AUTOEXEC.BAT file to mount
	     the compressed volume file on the Hardcard every time you start
	     your computer.
	
	  2) Or, ensure that there is at least one device driver (for example,
	     ANSI.SYS) loaded in your CONFIG.SYS file AFTER the ATDOSXL.SYS
	     driver but BEFORE the DRVSPACE.SYS driver.
	
	4.3 Toshiba
	-----------
	If you used the MS-DOS 5.0 version of EMM386 before you ran
	Setup, and you use the Power Management function, use
	the VRESUME program or device driver to avoid problems with
	the Resume feature. Carry out the following procedure:
	
	1. Make sure the VRESUME.COM or VRESUME.SYS file is on your hard disk.
	  To load the TSR, add a command for VRESUME.COM to your AUTOEXEC.BAT
	file.
	
	  To load the device driver, add a command for the VRESUME.SYS file to
	  your CONFIG.SYS file.
	
	2. Save the file, and restart your computer.
	
	  NOTE  For information about using VRESUME with Windows 3.0, see the
	  WRESUME.TXT file on your Toshiba MS-DOS 5.0 disks.
	
	5. MICROSOFT BACKUP, DEFRAG AND ANTI-VIRUS
	==========================================
	
	5.1 Microsoft Anti-Virus
	------------------------
	Before cleaning a program file, make sure you have a backup copy of it.
	If you clean a program file, and the program is corrupted, reinstall the
	program. If Anti-Virus again detects a virus, there is a chance the
	detection is in error; contact your software vendor to determine if an
	updated version of the program is available.
	
	5.2 Running Microsoft Backup for MS-DOS under Windows
	-----------------------------------------------------
	You should not run Backup for MS-DOS while Windows is running.  Use
	Backup for Windows instead (Backups created using Backup for Windows
	can be restored using Backup for MS-DOS).  If you do not have Backup
	for Windows installed, see "Installing Anti-Virus, Backup, and Undelete
	after Setup" in the "Getting Started" chapter of the Microsoft MS-DOS
	USER'S GUIDE.
	
	5.3  Backup for Windows stops running at the end of the compatibility test
	--------------------------------------------------------------------------
	If Backup for Windows stops running at the end of the Compatibility
	Test, you might be loading an incompatible third-party backup driver
	in your SYSTEM.INI file. Carry out the following procedure.
	
	NOTE  This procedure disables your third-party backup program.
	
	1. Open your SYSTEM.INI file, and locate the [386Enh] section.
	
	2. Determine whether any of the following lines are included in this
	  section:
	
	  DEVICE=FASTBACK.386
	  DEVICE=VFD.386
	  DEVICE=CPBVXD.386
	  DEVICE=VIRWT.386
	
	3. If you find any of these lines, add a semicolon (;) to the front
	  of the line.
	
	4. Save the file, restart Windows, and run Backup for Windows again.
	
	5.4  Running Microsoft Backup with TI4000 and Gateway NOMAD computers
	---------------------------------------------------------------------
	To avoid a conflict between the Turbo feature and Microsoft Backup
	for Windows or MS-DOS, add a /L0 switch to the DEVICE command in
	your CONFIG.SYS that loads the BATTERY.PRO file. Or, before you
	run Microsoft Backup, type SETPOWER /L0 at the command prompt.
	
	5.5 Using MS-DOS 6.22 Backup to Restore MS-DOS 6 or 6.2 Backups
	---------------------------------------------------------------
	Like earlier versions of MS-DOS Backup, the Backup programs included
	with MS-DOS 6.22 support data compression during backup.
	However, the MS-DOS 6.22 Backup programs use a different compression
	format from earlier versions of Backup.
	
	Because of this, MS-DOS 6.22 Backup for Windows (MWBACKUP.EXE) cannot
	restore compressed backups created by MS-DOS 6 or 6.2 Backup. To
	restore such backups, use MS-DOS 6.22 Backup for MS-DOS (MSBACKUP.EXE),
	or use the version of Backup that created the compressed backups. For
	information about restoring a previous version of Backup, see the
	following section.
	
	MS-DOS 6.22 Backup for MS-DOS (MSBACKUP.EXE) can restore earlier compressed
	backups only if one of the following conditions is true:
	
	* DoubleSpace is installed (DBLSPACE.BIN is loaded in memory).
	
	* The files DBLSPACE.BIN and DRVSPACE.MR1 are available. For more
	  information on DRVSPACE.MR1, see section 7.28.
	
	Both MSBACKUP.EXE and MWBACKUP.EXE can successfully restore MS-DOS
	version 6, 6.2 and 6.21 backups made without backup data compression
	If you unchecked the Compress Backup Data box in the Backup Options
	dialog before you backed up, you should have no problems restoring your
	data using the MS-DOS version 6.22 Backup programs.
	
	Restoring a Previous Version of Microsoft Backup
	------------------------------------------------
	When you run MS-DOS 6.22 Setup, it installs the 6.22 version of the
	Backup program(s). The following procedures explain how to re-install
	the MS-DOS 6 or 6.2 version of Backup for MS-DOS. The procedure you
	use differs depending on the size of your MS-DOS 6 or 6.2 disks.
	(The commands in these procedures assume that your Setup disks are
	in drive A and your MS-DOS files are located in the C:\DOS directory;
	if the disks or MS-DOS files are in a different drive or location,
	adjust the commands accordingly.)
	
	If you have MS-DOS 6.2 disks (either 1.2 MB or 1.44 MB disks) or
	MS-DOS 6 disks (1.2 MB disks only):
	
	1. Insert Setup Disk 1 in drive A.
	
	2. Type the following commands:
	
	  COPY A:*.OVL C:\DOS
	  EXPAND A:MSBACKUP.EXE C:\DOS
	  EXPAND A:MSBACKUP.HLP C:\DOS
	  EXPAND A:MSBCONFG.HLP C:\DOS
	
	If you are using MS-DOS 6 disks (1.44 MB disks only):
	
	1. Insert Setup Disk 2 in drive A.
	
	2. Type the following commands:
	
	  EXPAND A:MSBACKUP.EXE C:\DOS
	  COPY A:*.OVL C:\DOS
	
	3. Insert Setup Disk 3 in drive A.
	
	4. Type the following commands:
	
	  COPY A:*.OVL C:\DOS
	  EXPAND A:MSBACKUP.HLP C:\DOS
	  EXPAND A:MSBCONFG.HLP C:\DOS
	
	  These commands copy Backup's files from drive A to the C:\DOS
	  directory. If Setup Disk 1 is in drive B, or if your MS-DOS files
	  are located in a directory other than C:\DOS, you should adjust
	  the commands accordingly.
	
	5.6 Microsoft Defragmenter
	--------------------------
	If you received the "Insufficient Memory" message from Microsoft
	Defragmenter, use the MEM command to determine how much conventional,
	upper, and extended (XMS) memory is available. In addition to using
	all available conventional memory, Defragmenter can make use of up
	to 384K of extended memory and 12K of upper memory.
	
	To increase available memory, carry out the procedures in "An MS-DOS
	program displays an out-of-memory message" in the chapter "Diagnosing
	and Solving Problems" in the MICROSOFT MS-DOS USER'S GUIDE.
	
	If less than 384K of extended memory is available, carry out
	the procedures in "Freeing Extended Memory" in the "Making More
	Memory Available" chapter in the MICROSOFT MS-DOS USER'S GUIDE.
	
	6. THIRD-PARTY PROGRAMS
	=======================
	
	6.1 4DOS and NDOS
	-----------------
	4DOS and NDOS are compatible with MS-DOS 6.  However, to use some of the
	new features in MS-DOS 6.22 (such as MemMaker, the LOADHIGH /L switch,
	DIR compression switches, and the ability to bypass startup commands),
	contact JP Software to obtain 4DOS 4.02 or later, or Symantec to obtain
	Norton Utilities 7.0 or later.
	
	If you use multiple configurations, 4DOS or NDOS will not automatically
	run your AUTOEXEC.BAT file unless you include a /P on the SHELL line in
	your CONFIG.SYS file.
	
	To use MS-DOS 6.22 Help instead of 4DOS or NDOS Help, start it by using
	COMMAND /C HELP, or define a 4DOS or NDOS alias to run HELP.COM from
	your MS-DOS 6.2 directory.
	
	6.2 Above Board 286 and Above Board Plus Installation
	   Programs
	-----------------------------------------------------
	Do not use an Above Board installation program dated May 1989
	or earlier until you disable programs that use extended memory,
	such as SMARTDrive or RAMDrive. You might lose data if you leave
	these programs enabled. After you have installed Above Board,
	you can reenable these programs.
	
	6.3 CodeView
	-----------
	CAUTION  Using versions 3.0 to 3.13 of the CodeView CV.EXE
	file may cause data loss if your system has an 80386 memory
	manager (such as EMM386.EXE) and device drivers or programs
	that use extended memory. To determine which version you
	have, type CV.EXE at the command prompt.
	
	6.4 Colorado Tape Backup
	------------------------
	If you receive a message that you have two versions of the
	VFINTD.386 file loaded, you probably need to edit your
	SYSTEM.INI file. To do so, carry out the following procedure:
	
	1. Open your SYSTEM.INI file and locate the [386Enh] section.
	  You should see two lines similar to the following:
	
	  DEVICE=C:\TAPE\CMSDTAPE.386
	  DEVICE=C:\DOS\VFINTD.386
	
	2. If you plan to use your Colorado Tape Backup program, add a semi-
	  colon (;) before the DEVICE command for the VFINTD.386 file. If you
	  plan to use Microsoft Backup, add a semi-colon before the DEVICE
	  command for the CMSDTAPE.386 file.
	
	3. Save the file, and restart Windows.
	
	6.5 Fastback Plus
	-----------------
	If you have a version of Fifth Generation Systems Fastback Plus earlier
	than 3.0, use the LOADFIX command before running Fastback Plus or the
	Fastback Plus installation program to ensure that you don't lose data. To
	do so, type the following at the command prompt:
	
	LOADFIX FB.EXE
	
	or
	
	LOADFIX FBINSTAL.EXE
	
	6.6 Norton Desktop for Windows 2.0
	----------------------------------
	Setup adds a second Tools menu which contains Microsoft Backup and
	Antivirus commands (if you installed these Windows programs),
	as well as a Compression Info command (if DoubleSpace or DriveSpace
	is installed).
	
	If you use compress the drive that contains SmartCan, you might
	experience system problems afterward. To correct this, reinstall
	Norton Desktop for Windows.
	
	For information about using Norton AntiVirus in conjunction with
	DoubleSpace or DriveSpace, see the following section.
	
	6.7 Norton Utilities
	--------------------
	Norton Speed Disk and Norton Disk Doctor versions 8.0 and earlier will
	not run on DriveSpace drives. For an updated version of these Norton
	utilities, contact your software vendor.
	
	The "Clear Space" option of Norton Speed Disk (prior to version 7.0)
	is incompatible with DoubleSpace drives and DriveSpace drives. For
	an updated version of Norton Speed Disk, contact your software vendor.
	
	Do not use the WipeInfo utility (prior to version 8.0) on compressed
	drives. It can cause lost clusters. If you have already used this
	option, use the SCANDISK command to fix the lost clusters.
	
	If Norton AntiVirus is running when you compress the drive that
	contains the NAV_.SYS file, a copy of the NAV_.SYS file remains
	on the host drive. This prevents Norton AntiVirus from reporting a
	virus infection during the compression process. After the compression
	process is complete, you can safely delete the copy of NAV_.SYS on
	the host drive.
	
	If you use the Norton Cache or Speedrive utilities, load the utility
	after the DEVICE command that loads DRVSPACE.SYS. For more information,
	see section 7.24.
	
	6.8 PC Tools
	------------
	If PC Shell does not show all of the files or directories on your drive,
	quit PC Shell immediately and contact Central Point Software for an update.
	
	CAUTION: Do not attempt to use PC Shell on that drive; severe data
	     loss might occur. This problem affects both compressed and
	     non-compressed drives.
	
	The DISKFIX /SCAN option in PC Tools can cause lost clusters on
	DriveSpace and DoubleSpace drives. Avoid using this option. (If you
	have already used this option, use ScanDisk to fix the lost clusters.)
	
	The COMPRESS command of PC Tools versions 6.0 and 5.5
	is incompatible with DoubleSpace and DriveSpace.
	
	6.9  QEMM's Stealth DoubleSpace Feature
	---------------------------------------
	The Stealth DoubleSpace feature of QEMM versions 7.03 and 7.04 are
	fully compatible with MS-DOS 6.22; these versions are available to all
	QEMM 7 users through online services such as CompuServe, BIX, and the
	QuarterDeck BBS, as well as directly from QuarterDeck Office Systems.
	
	The Stealth DoubleSpace driver (ST-DBL.SYS) included with version 7.02 is
	compatible with DoubleSpace, but not with DriveSpace, DEFRAG.EXE or
	automounting compressed floppies. If you use QEMM version 7.02, obtain an
	update from one of the online services listed above or from QuarterDeck
	Office Systems.
	
	The Stealth DoubleSpace driver (ST-DBL.SYS) included with version 7.01 is
	incompatible with MS-DOS 6.22 (both DriveSpace and DoubleSpace). If you use
	QEMM version 7.01 and your system does not start, see the following
	section.
	
	If you use the Stealth DoubleSpace feature of QEMM version 7.01
	---------------------------------------------------------------
	The Stealth DoubleSpace feature of QEMM 7.01 is incompatible with
	MS-DOS 6.22. If you are running DoubleSpace and use the Stealth DoubleSpace
	feature of QEMM version 7.01, your computer will not start properly.
	
	To work around this problem, press F8 when your computer starts.
	Answer Y to all prompts except the following:
	
	   DEVICE=C:\QEMM\ST-DBL.SYS [Y/N]?
	
	When MS-DOS displays this prompt, answer N. (The pathname for
	ST-DBL.SYS may be different on your computer.) After your computer
	starts, edit your CONFIG.SYS file and make the following changes:
	
	* Disable the DEVICE command for ST-DBL.SYS by using the REM command.
	
	* If you use DoubleSpace, add a DEVICE command for DBLSPACE.SYS.
	  For example:
	
	  DEVICE=C:\DOS\DBLSPACE.SYS /MOVE
	
	  (If you use DriveSpace, add a DEVICE command for DRVSPACE instead.)
	
	6.10  Johnson Computer Systems PC-Vault and PC-Vault Plus
	---------------------------------------------------------
	If you use version 4.6 or earlier of the PC-Vault or PC-Vault Plus
	hard disk protection system, do not use the Maximum Floppy
	Boot Protection option if you use DoubleSpace or DriveSpace.
	
	In these versions of PC-Vault and PC-Vault plus, the Maximum Floppy
	Boot Protection option is incompatible with DoubleSpace and DriveSpace,
	and may cause data loss. If your version of PC-Vault or PC-Vault Plus
	is earlier than 4.6, contact Johnson Computer Systems for an upgrade.
	
	6.11  AddStor Double Tools
	--------------------------
	AddStor's Double Tools version 1.0 and 1.2 work only with DoubleSpace;
	they do not work with DriveSpace.
	
	AddStor's Double Tools version 1.0 works with MS-DOS 6.22 DoubleSpace
	as long as you do not install AddStor's enhanced DoubleSpace drivers.
	When you install Double Tools version 1.0, do not check the "Install
	enhanced DoubleSpace drivers" box. If you do, Double Tools will replace the
	MS-DOS 6.22 DBLSPACE.BIN file with the Double Tools version of
	DBLSPACE.BIN,
	
	which is compatible only with MS-DOS 6.0. The next time you start your
	computer, it will display the message "Wrong DBLSPACE.BIN version" and
	none of your compressed drives will be mounted.
	
	If you are using Double Tools version 1.0 or 1.2 with the enhanced
	DoubleSpace driver installed, you will not be able to run MS-DOS 6.22
	Setup. To solve this problem, run Double Tools' DTCONFIG.EXE program
	and choose the "Microsoft" (version 1.0) or "Standard" (version 1.2)
	option. Then save your changes, exit from DTCONFIG, and run MS-DOS
	6.22 Setup again.
	
	7. DRIVESPACE
	=============
	MS-DOS 6.22 includes DriveSpace compression software. DriveSpace appears
	similar to DoubleSpace, which was included with MS-DOS 6 and 6.2. The
	main difference is that DriveSpace stores compressed data in a different
	format from DoubleSpace.
	
	Note: If you upgraded from MS-DOS 6 or MS-DOS 6.2, you can still use
	     DoubleSpace with MS-DOS 6.22. (If you upgraded from MS-DOS 5 or
	     earlier, you do not have DoubleSpace on your system.)
	
	7.1 Converting DoubleSpace Drives to DriveSpace
	-----------------------------------------------
	If you currently use DoubleSpace, you can continue using it with MS-DOS
	6.22. Or, you can convert your system and all your DoubleSpace drives to
	DriveSpace.
	
	NOTE  If you purchased the English version of the MS-DOS 6.22 Upgrade,
	     you can obtain DoubleSpace conversion by sending in the enclosed
	     coupon; if you purchased the MS-DOS 6.22 Step-Up or non-English
	     version of MS-DOS 6.22, your version of MS-DOS 6.22 already includes
	     DoubleSpace conversion.)
	
	To convert your system from DoubleSpace to DriveSpace:
	
	1. Back up the data on each DoubleSpace drive, if you have not already
	  done so.
	
	2. Type DRVSPACE at the command prompt, and then follow the instructions
	  on your screen.
	
	  DriveSpace converts all mounted DoubleSpace drives to DriveSpace format,
	  and also converts your system to run DriveSpace instead of DoubleSpace.
	
	NOTE  The conversion process can take a long time, especially if your
	     DoubleSpace drives contain a lot of data. You might want to plan
	     to carry out the conversion process overnight.
	
	7.2 Converting Your XtraDrive Disk-Compression Software
	   to DriveSpace
	-------------------------------------------------------
	If your computer uses XtraDrive disk compression, use its
	uninstallation program to remove the compression, and then
	install DriveSpace.
	
	7.3  Converting Stacker 3.1 Software to DriveSpace
	--------------------------------------------------
	If your drive has been compressed using Stacker version 3.1, carry
	out the following procedure to remove Stacker 3.1 and install
	DriveSpace. (If you use Stacker 2.x or 3.0 software, carry out
	the procedure in section 7.4 instead.)
	
	1. Use Stacker's UNSTACK command to unstack all your Stacker drives.
	  (If you have floppy disks compressed by using Stacker, either
	  unstack them now or make sure they were configured using Stacker's
	  StackerAnywhere feature.)
	
	2. Change to the root directory of your startup hard disk drive,
	  and then type the following commands:
	
	  ATTRIB -R -H -S STACKER.INI
	  ATTRIB -R -H -S DRVSPACE.BIN
	  DEL STACKER.INI
	  DEL DRVSPACE.BIN
	
	3. Restart your computer.
	
	4. Run DriveSpace Setup by typing DRVSPACE at the command prompt.
	
	7.4  Converting Other Disk-Compression Software to DriveSpace
	-------------------------------------------------------------
	If you are not using Stacker 3.1 disk compression or XtraDrive
	disk compression, carry out the following procedure to convert
	your disk-compression software to DriveSpace.
	
	1. Install MS-DOS 6.22 if you haven't already done so.
	
	2. Use Microsoft Backup for MS-DOS to back up the files on your
	  hard disk. If you didn't install Backup for MS-DOS during Setup,
	  see the chapter "Getting Started" in the MICROSOFT MS-DOS USER'S
	  GUIDE for instructions on installing it.
	
	3. If your Setup disks are compatible with drive A, insert
	  Setup Disk 1 in drive A, and restart your computer. After
	  Setup displays the first screen, quit Setup by pressing F3 twice.
	
	  If your Setup disks are not compatible with drive A,
	  create a startup floppy disk for drive A. To do this, insert
	  Setup Disk 1 in drive B, and a blank floppy disk in drive A.
	  Then type B:SETUP /F at the command prompt.
	
	  When prompted, choose to install MS-DOS on the floppy disk
	  in drive A. After Setup is finished, leave the disk in drive A,
	  and restart your computer.
	
	4. Use the FORMAT command to format the drive that contains the
	  file that contains all of your compressed files. If you don't know
	  where this file is located, see your disk-compression documentation.
	
	  If you are reformatting drive C, include the /S switch to transfer
	  system files to it.
	
	5. If you formatted drive C, make sure Setup Disk 1 is in drive A
	  or B, and type A:SETUP or B:SETUP at the command prompt.
	
	  Follow the instructions on your screen.
	
	6. After Setup is complete, install DriveSpace by typing DRVSPACE
	  at the command prompt. Follow the instructions on your screen.
	
	7. Use Backup for MS-DOS to restore the files you backed up.
	
	  NOTE  When you run Microsoft Backup, you will have to configure it
	  again. Also, you will need to retrieve the catalog file from your
	  backup floppy disks. To do so, choose the Catalog button in the
	  Restore dialog box.
	
	Additional query words: stepup ndw 6.22 glossary msbackup.ex_ msbackup.hl_ msbconfg.hl_
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	
