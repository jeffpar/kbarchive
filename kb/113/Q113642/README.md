---
layout: page
title: "Q113642: README.TXT: Microsoft MS-DOS 6.21 Upgrade (Part 2 of 3)"
permalink: /kb/113/Q113642/
---

## Q113642: README.TXT: Microsoft MS-DOS 6.21 Upgrade (Part 2 of 3)

	Article: Q113642
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.21
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 20-NOV-1999
	
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
	
	2. MEMMAKER AND MEMORY MANAGEMENT
	---------------------------------
	
	2.1 Intel Expanded-Memory Driver (EMM.SYS)<7F>
	-------------------------------------------
	
	If you use Intel's EMM.SYS driver with Aboveboard, use EMM.SYS version 4.0
	revision E if you an ISA system, or EMM.SYS version 4.0 revision D if you have
	an MCA or other system. Contact Intel for a free upgrade.
	
	2.2 Running MemMaker on a Computer with PC-NFS
	----------------------------------------------
	
	If you use PC-NFS network software, carry out the following procedure before you
	run MemMaker:
	
	1. Open your MEMMAKER.INF file by using any text editor. This file is in the
	  directory that contains your MS-DOS files.
	
	2. Add the following line to the file:
	
	  " *NET " (without the quotation marks)
	
	3. Save the file, and then run MemMaker.
	
	2.3 You have a Super VGA display and want to conserve memory.
	-------------------------------------------------------------
	
	If you use Microsoft Windows on an 80386 computer with extended memory and a
	Super VGA display, you can use the MONOUMB.386 file, in conjunction with
	MemMaker, to conserve conventional memory for running programs.
	
	To conserve memory if you have a Super VGA display:
	
	1. Open your Windows SYSTEM.INI file, and find the [386Enh] section.
	
	2. Add a DEVICE command for the MONOUMB.386 file, which is located in your
	  MS-DOS directory. For example, if your MS-DOS files are in C:\DOS, add the
	  following line to this section:
	
	  " DEVICE=C:\DOS\MONOUMB.386 " (without the quotation marks)
	
	3. Save the file, and restart your computer.
	
	4. After your computer starts, run MemMaker by typing "MEMMAKER" (without the
	  quotation marks) at the command prompt.
	
	5. Choose Custom Setup. On the Advanced Options screen, answer Yes to the
	  question "Use monochrome region (B000-B7FF) for running programs?"
	
	  Follow the instructions on your screen.
	
	2.4 Using MemMaker with IBM LAN
	-------------------------------
	
	Before you run MemMaker, you might need to make adjustments to the parameters
	specified for your IBM LAN support driver, DXMC0MOD.SYS. In your CONFIG.SYS
	file, make sure that the DEVICE command that loads DXMC0MOD.SYS includes one of
	the following before you run MemMaker:
	
	- The first three parameters, as in the following example:
	
	 DEVICE=C:\DXMC0MOD.SYS 400000000001,D800,1
	
	- No parameters, as in the following example:
	
	 DEVICE=C:\DXMC0MOD.SYS
	
	- Some parameters and enough commas to fill in the first three parameters, as
	  in the following example:
	
	 DEVICE=C:\DXMC0MOD.SYS 400000000001,,
	
	2.5 MemMaker and Adaptec SCSI devices
	-------------------------------------
	
	MemMaker is compatible with Adaptec SCSI devices. However, if you use the
	ASPI4DOS.SYS driver to support your SCSI device, MemMaker by default will
	exclude this driver from the optimization process. If you don't use the SCSI
	device as your startup or boot drive, you can include the ASPI4DOS.SYS driver in
	the optimization process. To do so, remove the ^ASPI4DOS entry in the
	MEMMAKER.INF file, and then run MemMaker.
	
	2.6 Using MemMaker on a computer with PC Tools or PC-DOS RAMBoost
	-----------------------------------------------------------------
	
	You can use MemMaker or RAMBoost with MS-DOS, but not both at the same time.
	MemMaker will prevent RAMBoost from loading, but not remove its DEVICE= command
	from your CONFIG.SYS.
	
	2.7 EMM386 detects an error in an application
	---------------------------------------------
	
	If EMM386 displays a message such as "EMM386 has detected error #12 in an
	application," this indicates that the processor has reported an exception error
	to EMM386. An exception error typically occurs when an application gives the
	processor an instruction under invalid or unexpected conditions. In most cases,
	these errors are related to a specific program. If you are receiving an error
	that does not occur with any particular application, the error might be caused
	by a device driver or a memory-resident (terminate-and-stay-resident) program.
	
	To avoid these errors:
	
	- Try to identify the program involved. One way to do this is to see if the
	  error occurs when the program is not running. If you suspect a
	  memory-resident program or device driver, try bypassing it when your computer
	  starts.
	
	- Try disabling EMM386. If a particular application is to blame, disabling
	  EMM386 might allow that application to generate an error message. Disabling
	  EMM386 might also change your memory configuration so that the error no
	  longer occurs.
	
	- Try changing the order in which you load device drivers and memory-resident
	  programs. This might help because some errors occur only under specific
	  memory conditions.
	
	- If error 12 is occurring, this indicates that a stack is being used
	  incorrectly. Try adding the following command to your CONFIG.SYS file:
	
	  " STACKS=18,512 " (without the quotation marks)
	
	- If error 13 is occurring, the program may be trying to use protected mode
	  without cooperating with EMM386. You may need to obtain a VCPI-compliant
	  version of the program, or not load EMM386 when using this application.
	
	2.8  MemMaker no longer aggressively scans upper memory by default
	------------------------------------------------------------------
	
	By default, the MS-DOS 6.21 version of MemMaker does not scan upper memory
	aggressively. Instead, the MemMaker option "Scan the upper memory area
	aggressively?" is set to No, and MemMaker limits its search for available UMBs
	to memory addresses C600 through EFFF. In contrast, the MS-DOS 6 version of
	MemMaker did scan upper memory aggressively by default: in addition to scanning
	memory in the C600-EFFF range, it also scanned addresses in the range F000
	through F7FF.
	
	To make more memory available for running programs, run MemMaker in Custom mode
	and change the "Scan the upper memory area aggressively?" option to Yes. (Note
	that, on some computers, putting UMBs in this range prevents the computer from
	starting properly.)
	
	Note: If you last ran MemMaker with the "Scan the upper memory area aggressively"
	option set to Yes, then the next time you run MemMaker, it leaves that option
	set to Yes.
	
	3. WINDOWS
	----------
	
	3.1 Your computer uses a Windows 3.0 permanent swap file.
	---------------------------------------------------------
	
	If your computer uses a Windows 3.0 permanent swap file, run the SPATCH.BAT
	program to make the swap file compatible with MS-DOS 6. To do so, carry out the
	following procedure:
	
	1. Copy the SPATCH.BAT file to your hard disk. To determine the location of the
	  file on the Setup disks, view the PACKING.LST file on Setup Disk 1.
	
	2. Type the following at the command prompt:
	
	  " SPATCH [DRIVE]:[PATH]SWAPFILE.EXE " (without the quotation marks)
	
	  For the DRIVE and PATH parameters, specify the location of your SWAPFILE.EXE
	  file.
	
	3. Follow the instructions on your screen.
	
	  The program modifies the SWAPFILE.EXE for use with MS-DOS 6 and saves a backup
	  copy as SWAPFILE.SAV. After you have confirmed the file works correctly, you
	  can delete the SWAPFILE.SAV file.
	
	3.2 Using compressed floppy disks with Windows File Manager
	-----------------------------------------------------------
	
	If you are using compressed floppy disks with automounting enabled, you might
	encounter error messages or other problems while using File Manager. To work
	around these problems, press the F5 key twice.
	
	For example, if you change from a compressed to an uncompressed floppy disk, the
	drive button for the compressed floppy disk's host drive remains until you press
	the F5 key twice.
	
	4. HARDWARE COMPATIBILITY WITH MS-DOS
	-------------------------------------
	
	4.1 Compaq EXTDISK.SYS Driver
	-----------------------------
	
	The Compaq EXTDISK.SYS driver version 3.00 or later is compatible with MS-DOS 6.
	If you have a version earlier than 3.00, contact your vendor for an upgrade.
	
	4.2 Hardcard
	------------
	
	If you upgraded your system from MS-DOS 6 or 6.2, your system uses its Hardcard
	drive as its startup drive, and you want to use DoubleSpace on that drive, see
	section 7.18. For additional Hardcard information, see the following:
	
	a. Hardcard II
	
	  If you can't use Plus Development Hardcard II or Hardcard II XL when running
	  EMM386.EXE, specify the exclude (x=) switch to prevent EMM386 from
	  conflicting with the card's BIOS address.
	
	  To configure EMM386, run MemMaker.
	
	b. Hardcard 40 or Passport
	
	  If you are using Hardcard 40 or a Passport removable disk, and you have a
	  DEVICE command in your CONFIG.SYS file for PLUSDRV.SYS, disable or remove the
	  DEVICE command. Then run MS-DOS 6.21 Setup. After Setup is complete, reenable
	  or restore the DEVICE command for PLUSDRV.SYS. Make it the last line in the
	  file.
	
	c. If you upgraded your system from MS-DOS 6 or 6.2, installed DoubleSpace on
	  your Hardcard, and are now unable to access your newly compressed drive, try
	  the following:
	
	  1. Add a DBLSPACE /MOUNT command to your AUTOEXEC.BAT file to mount the
	     compressed volume file on the Hardcard every time you start your computer.
	
	  2. Or, ensure that there is at least one device driver (for example,
	     ANSI.SYS) loaded in your CONFIG.SYS file AFTER the ATDOSXL.SYS driver but
	     BEFORE the DBLSPACE.SYS driver.
	
	4.3 Toshiba
	-----------
	
	If you used the MS-DOS 5.0 version of EMM386 before you ran Setup, and you use
	the Power Management function, use the VRESUME program or device driver to avoid
	problems with the Resume feature. Carry out the following procedure:
	
	1. Make sure the VRESUME.COM or VRESUME.SYS file is on your hard disk. To load
	  the TSR, add a command for VRESUME.COM to your AUTOEXEC.BAT file. To load the
	  device driver, add a command for the VRESUME.SYS file to your CONFIG.SYS
	  file.
	
	2. Save the file, and restart your computer.
	
	  NOTE For information about using VRESUME with Windows 3.0, see the WRESUME.TXT
	  file on your Toshiba MS-DOS 5.0 disks.
	
	5. MICROSOFT PROGRAMS
	---------------------
	
	5.1 Microsoft Anti-Virus
	------------------------
	
	Before cleaning a program file, make sure you have a backup copy of it. If you
	clean a program file, and the program is corrupted, reinstall the program. If
	Anti-Virus again detects a virus, there is a chance the detection is in error;
	contact your software vendor to determine if an updated version of the program
	is available.
	
	5.2 Running Microsoft Backup for MS-DOS under Windows
	-----------------------------------------------------
	
	You should not run Backup for MS-DOS while Windows is running. However, if you
	do, and if your system is not configured correctly, Backup might display the
	following symptoms:
	
	- Backup appears to stop running--for example, the clock runs, but there is no
	  disk activity.
	
	- Backup reports problems while testing the second floppy disk during the
	  compatibility test. For example, it might display a "Diskette not properly
	  seated" message or ask for Disk 1 repeatedly.
	
	- Windows displays a message that the DMA buffer size needs to be increased.
	
	- Backup quits unexpectedly.
	
	You can correctly configure your system by carrying out the following procedure.
	
	1. Open your SYSTEM.INI file, and add a DMABufferSize=32 line to the [386Enh]
	  section.
	
	2. When you run Backup, make sure that you specify with the Settings command
	  from the Control menu that Backup run with the Exclusive and Full Screen
	  options.
	
	5.3  Backup for Windows stops running at the end of the compatibility test
	--------------------------------------------------------------------------
	
	If Backup for Windows stops running at the end of the Compatibility Test, you
	might be loading an incompatible third-party backup driver in your SYSTEM.INI
	file. Carry out the following procedure.
	
	NOTE This procedure disables your third-party backup program.
	
	1. Open your SYSTEM.INI file, and locate the [386Enh] section.
	
	2. Determine whether any of the following lines are included in this section:
	
	  DEVICE=FASTBACK.386
	  DEVICE=VFD.386
	  DEVICE=CPBVXD.386
	  DEVICE=VIRWT.386
	
	3. If you find any of these lines, add a semicolon (;) to the front of the line.
	
	4. Save the file, restart Windows, and run Backup for Windows again.
	
	5.4  Running Microsoft Backup with TI4000 and Gateway NOMAD computers
	---------------------------------------------------------------------
	
	To avoid a conflict between the Turbo feature and Microsoft Backup for Windows or
	MS-DOS, add a /L0 switch to the DEVICE command in your CONFIG.SYS that loads the
	BATTERY.PRO file. Or, before you run Microsoft Backup, type SETPOWER /L0 at the
	command prompt.
	
	5.5 MS-DOS 6.21 Backup Cannot Restore 6 or 6.2 Backups
	------------------------------------------------------
	
	The Backup programs included with MS-DOS version 6.21 do not support data
	compression during backup. Because of this:
	
	- The MS-DOS 6.21 Backup programs do not compress data while backing up.
	
	- The Backup programs cannot usually restore backups made with MS-DOS version 6
	  or 6.2. (Most such backups were made by using backup data compression.)
	
	To restore backups made with the MS-DOS 6 or 6.2 Backup utilities (either the
	MS-DOS or Windows versions) use the MS-DOS 6 or 6.2 versions of Backup.
	
	Note: When you upgrade from MS-DOS 6 or 6.2, MS-DOS 6.21 Setup checks to see if
	you already have Backup installed. If you do, then by default, Setup keeps your
	current version of Backup, rather than replacing it with the MS-DOS 6.21
	version. This ensures that you can restore any backups you have made.
	
	Backup does successfully restore 6 and 6.2 backups made without data compression.
	If you unchecked the Compress Backup Data box in the Backup Options dialog
	before you backed up, you should have no problems restoring your data using the
	MS-DOS version 6.21 Backup programs.
	
	Restoring a Previous Version of Microsoft Backup
	------------------------------------------------
	
	By default, MS-DOS 6.21 Setup leaves your current version (if any) of Backup
	intact so that you can restore previous backups you made with that version.
	However, if you instruct Setup to replace your current version of Backup with
	MS-DOS 6.21 Backup, or if you later lose your current version of Backup, you
	might be unable to use MS-DOS 6.21 Backup to access your existing backups.
	
	The following procedures explain how to put back the MS-DOS 6 or 6.2 version of
	Backup for MS-DOS. The procedure you use differs depending on the size of your
	MS-DOS 6 or 6.2 disks. (The commands in these procedures assume that your Setup
	disks are in drive A and your MS-DOS files are located in the C:\DOS directory;
	if the disks or MS-DOS files are in a different drive or location, adjust the
	commands accordingly.)
	
	If you have MS-DOS 6.2 disks (either 1.2 MB or 1.44 MB disks) or MS-DOS 6 disks
	(1.2 MB disks only):
	
	1. Insert Setup Disk 1 in drive A.
	
	2. Type the following commands:
	
	  " COPY A:*.OVL C:\DOS
	  EXPAND A:MSBACKUP.EXE C:\DOS
	  EXPAND A:MSBACKUP.HLP C:\DOS
	  EXPAND A:MSBCONFG.HLP C:\DOS " (without the quotation marks)
	
	If you are using MS-DOS 6 disks (1.44 MB disks only):
	
	1. Insert Setup Disk 2 in drive A.
	
	2. Type the following commands:
	
	  " EXPAND A:MSBACKUP.EXE C:\DOS
	  COPY A:*.OVL C:\DOS " (without the quotation marks)
	
	3. Insert Setup Disk 3 in drive A.
	
	4. Type the following commands:
	
	  " COPY A:*.OVL C:\DOS
	  EXPAND A:MSBACKUP.HLP C:\DOS
	  EXPAND A:MSBCONFG.HLP C:\DOS " (without the quotation marks)
	
	  These commands copy Backup's files from drive A to the C:\DOS directory. If
	  Setup Disk 1 is in drive B, or if your MS-DOS files are located in a
	  directory other than C:\DOS, you should adjust the commands accordingly.
	
	5.6 Microsoft Defragmenter
	--------------------------
	
	If you received the "Insufficient Memory" message from Microsoft Defragmenter,
	use the MEM command to determine how much conventional, upper, and extended
	(XMS) memory is available. In addition to using all available conventional
	memory, Defragmenter can make use of up to 384K of extended memory and 12K of
	upper memory.
	
	To increase available memory, carry out the procedures in "An MS-DOS program
	displays an out-of-memory message" in the chapter "Diagnosing and Solving
	Problems" in the MICROSOFT MS-DOS USER'S GUIDE.
	
	If less than 384K of extended memory is available, carry out the procedures in
	"Freeing Extended Memory" in the "Making More Memory Available" chapter in the
	MICROSOFT MS-DOS USER'S GUIDE.
	
	6. THIRD-PARTY PROGRAMS
	-----------------------
	
	6.1 4DOS and NDOS
	-----------------
	
	4DOS and NDOS are compatible with MS-DOS 6. However, to use some of the new
	features in MS-DOS 6.21 (such as MemMaker, the LOADHIGH /L switch, DIR
	compression switches, and the ability to bypass startup commands), contact JP
	Software to obtain 4DOS 4.02 or later, or Symantec to obtain Norton Utilities
	7.0 or later.
	
	If you use multiple configurations, 4DOS or NDOS will not automatically run your
	AUTOEXEC.BAT file unless you include a /P on the SHELL line in your CONFIG.SYS
	file.
	
	To use MS-DOS 6.21 Help instead of 4DOS or NDOS Help, start it by using COMMAND
	/C HELP, or define a 4DOS or NDOS alias to run HELP.COM from your MS-DOS 6.2
	directory.
	
	6.2 Above Board 286 and Above Board Plus Installation Programs
	--------------------------------------------------------------
	
	Do not use an Above Board installation program dated May 1989 or earlier until
	you disable programs that use extended memory, such as SMARTDrive or RAMDrive.
	You might lose data if you leave these programs enabled. After you have
	installed Above Board, you can reenable these programs.
	
	6.3 CodeView
	------------
	
	CAUTION Using versions 3.0 to 3.13 of the CodeView CV.EXE file may cause data
	loss if your system has an 80386 memory manager (such as EMM386.EXE) and device
	drivers or programs that use extended memory. To determine which version you
	have, type "CV.EXE" (without the quotation marks) at the command prompt.
	
	6.4 Colorado Tape Backup
	------------------------
	
	If you receive a message that you have two versions of the VFINTD.386 file
	loaded, you probably need to edit your SYSTEM.INI file. To do so, carry out the
	following procedure:
	
	1. Open your SYSTEM.INI file and locate the [386Enh] section. You should see two
	  lines similar to the following:
	
	  DEVICE=C:\TAPE\CMSDTAPE.386
	  DEVICE=C:\DOS\VFINTD.386
	
	2. If you plan to use your Colorado Tape Backup program, add a semi- colon (;)
	  before the DEVICE command for the VFINTD.386 file. If you plan to use
	  Microsoft Backup, add a semi-colon before the DEVICE command for the
	  CMSDTAPE.386 file.
	
	3. Save the file, and restart Windows.
	
	6.5 Fastback Plus
	-----------------
	
	If you have a version of Fifth Generation Systems Fastback Plus earlier than 3.0,
	use the LOADFIX command before running Fastback Plus or the Fastback Plus
	installation program to ensure that you don't lose data. To do so, type the
	following at the command prompt:
	
	  " LOADFIX FB.EXE " (without the quotation marks)
	
	  or
	
	  " LOADFIX FBINSTAL.EXE " (without the quotation marks)
	
	6.6 Norton Desktop for Windows 2.0
	----------------------------------
	
	Setup adds a second Tools menu which contains Microsoft Backup and Antivirus
	commands (if you installed these Windows programs), as well as a DoubleSpace
	Info command (if DoubleSpace is installed).
	
	The remainder of this section applies only to systems that were running MS-DOS 6
	or 6.2 before upgrading to MS-DOS 6.21.
	
	If you use DoubleSpace to compress the drive that contains SmartCan, you might
	experience system problems afterward. To correct this, reinstall Norton Desktop
	for Windows.
	
	For information about Norton AntiVirus and DoubleSpace, see the following
	section.
	
	6.7 Norton Utilities
	--------------------
	
	This section applies only to systems that were running MS-DOS 6 or 6.2 before
	upgrading to MS-DOS 6.21.
	
	The "Clear Space" option of Norton Speed Disk (prior to version 7.0) is
	incompatible with DoubleSpace drives. For an updated version of Norton Speed
	Disk, contact your software vendor.
	
	Do not use the WipeInfo utility on DoubleSpace drives. It can cause lost
	clusters. If you have already used this option, use the SCANDISK command to fix
	the lost clusters.
	
	If Norton AntiVirus is running when you use DoubleSpace to compress the drive
	that contains the NAV_.SYS file, DoubleSpace leaves a copy of the NAV_.SYS file
	on the host drive. This prevents Norton AntiVirus from reporting a virus
	infection during the compression process. After the compression process is
	complete, you can safely delete the copy of NAV_.SYS on the host drive.
	
	If you use the Norton Cache or Speedrive utilities, load the utility after the
	DEVICE command that loads DBLSPACE.SYS. For more information, see section 7.24.
	
	6.8 PC Tools
	------------
	
	If PC Shell does not show all of the files or directories on your drive, quit PC
	Shell immediately and contact Central Point Software for an update.
	
	CAUTION: Do not attempt to use PC Shell on that drive; severe data loss might
	occur. This problem affects both compressed and non-compressed drives.
	
	The FORMAT command of PC Tools version 7.1 conflicts with MS-DOS 6.21. Use the
	FORMAT command that comes with MS-DOS 6.21.
	
	The remainder of this section applies only to systems that were running MS-DOS 6
	or 6.2 before upgrading to MS-DOS 6.21.
	
	The DISKFIX /SCAN option in PC Tools can cause lost clusters on DoubleSpace
	drives. Avoid using this option. (If you have already used this option, use
	ScanDisk to fix the lost clusters.)
	
	The COMPRESS command of PC Tools versions 6.0 and 5.5 is incompatible with
	DoubleSpace.
	
	6.9  QEMM's Stealth DoubleSpace Feature
	---------------------------------------
	
	This section applies only to systems that were running MS-DOS 6 or 6.2 before
	upgrading to MS-DOS 6.21.
	
	The Stealth DoubleSpace feature of QEMM 7.01 is incompatible with MS-DOS 6.21.
	Version 7.02 is compatible with MS-DOS 6.21, but not with DEFRAG.EXE or
	DoubleSpace's Automount feature. Version 7.03 is fully compatible with MS-DOS
	6.21 and DoubleSpace; it is available to all QEMM 7 users through bulletin board
	systems such as BIX, CompuServe, and QuarterDeck BBS, as well as directly from
	QuarterDeck Office Systems.
	
	If you use the Stealth DoubleSpace feature of QEMM version 7.01 or 7.02, see the
	appropriate section below.
	
	QEMM version 7.01
	-----------------
	
	The Stealth DoubleSpace feature of QEMM 7.01 is incompatible with MS-DOS 6.21. If
	you use QEMM version 7.01 and the Stealth DoubleSpace feature, your computer
	will not start properly.
	
	To work around this problem, press F8 when your computer starts. Answer Y to all
	prompts except the following:
	
	   DEVICE=C:\QEMM\ST-DBL.SYS [Y/N]?
	
	When MS-DOS displays this prompt, answer N. (The path name for ST-DBL.SYS may be
	different on your computer.) After your computer starts, edit your CONFIG.SYS
	file and make the following changes:
	
	- Disable the DEVICE command for ST-DBL.SYS by using the REM command.
	
	- Add a DEVICE command for DBLSPACE.SYS. For example:
	
	   DEVICE=C:\DOS\DBLSPACE.SYS /MOVE
	
	QEMM version 7.02
	-----------------
	
	The Stealth DoubleSpace feature of QEMM version 7.02 is compatible with MS-DOS
	6.21, with the following exceptions:
	
	- You cannot use QEMM version 7.02's Stealth DoubleSpace feature while
	  DoubleSpace's Automount feature is enabled. To turn Automounting off, type
	  "DBLSPACE /AUTOMOUNT=O" (without the quotation marks) at the command prompt,
	  and then restart your computer.
	
	- You cannot run the Microsoft Defragmenter (DEFRAG.EXE) while QEMM version
	  7.02's Stealth DoubleSpace driver is installed. To run DEFRAG.EXE, disable
	  the Stealth DoubleSpace driver, and then restart your computer. After you
	  finish running DEFRAG.EXE, you can reenable the Stealth DoubleSpace driver
	  and restart your computer.
	
	6.10  Johnson Computer Systems PC-Vault and PC-Vault Plus
	---------------------------------------------------------
	
	This section applies only to systems that were running MS-DOS 6 or 6.2 before
	upgrading to MS-DOS 6.21.
	
	If you use version 4.6 or earlier of the PC-Vault or PC-Vault Plus hard disk
	protection system, do not use the Maximum Floppy Boot Protection option if you
	use DoubleSpace.
	
	In these versions of PC-Vault and PC-Vault plus, the Maximum Floppy Boot
	Protection option is incompatible with DoubleSpace and may cause data loss. If
	your version of PC-Vault or PC-Vault Plus is earlier than 4.6, contact Johnson
	Computer Systems for an upgrade.
	
	6.11  AddStor Double Tools
	--------------------------
	
	This section applies only to systems that were running MS-DOS 6 or 6.2 before
	upgrading to MS-DOS 6.21.
	
	AddStor's Double Tools version 1.0 includes a version of DBLSPACE.BIN that is
	incompatible with MS-DOS 6.21. When you install Double Tools, do not check the
	"Install enhanced DoubleSpace drivers" box. If you do, Double Tools will replace
	the MS-DOS 6.21 DBLSPACE.BIN file with the Double Tools version of DBLSPACE.BIN,
	which is compatible only with MS-DOS 6.0. The next time you start your computer,
	it will display the message "Wrong DBLSPACE.BIN version" and none of your
	compressed drives will be mounted.
	
	If you are using Double Tools version 1.0 or 1.2 with the enhanced DoubleSpace
	driver installed, you will not be able to run MS-DOS 6.21 Setup. To solve this
	problem, run Double Tools' DTCONFIG.EXE program and choose the "Microsoft"
	(version 1.0) or "Standard" (version 1.2) option. Then save your changes, exit
	from DTCONFIG, and run MS-DOS 6.21 Setup again.
	
	Additional query words: mwbackup ndw 6.21 noupd msbackup.ex_ msbackup.hl_ msbconfg.hl_
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS621
	Version           : MS-DOS:6.21
	
	=============================================================================
	
