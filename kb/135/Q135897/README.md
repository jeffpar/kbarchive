---
layout: page
title: "Q135897: Windows 95 CD-ROM Faq.txt File (1 of 2)"
permalink: kb/135/Q135897/
---

## Q135897: Windows 95 CD-ROM Faq.txt File (1 of 2)

	Article: Q135897
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a copy of the information in the Faq.txt file from the
	Windows 95 CD-ROM. Setup copies this file to the Windows folder. This article is
	the first of two articles.
	
	MORE INFORMATION
	================
	
	 --------------------------------------------------------------------
	      Microsoft Windows 95 README for Frequently Asked Questions
	                   August 1995
	 --------------------------------------------------------------------
	
	          (c) Copyright Microsoft Corporation, 1995
	
	This document provides complementary or late-breaking information to
	supplement the Microsoft Windows 95 documentation.
	
	------------------------
	How to Use This Document
	------------------------
	
	To view FAQ.txt on screen in Notepad, maximize the Notepad window.
	
	To print FAQ.txt, open it in Notepad or another word processor,
	and then use the Print command on the File menu.
	
	---------
	CONTENTS
	---------
	Windows 95 Setup
	MS-DOS
	Disk Compression
	Using CD-ROMs and Windows
	Networking
	Accessing the Internet with Windows 95
	Desktop
	PCMCIA Cards
	Modems
	Miscellaneous
	
	=================
	Windows 95 Setup
	=================
	
	[Q: What are some things I can do to make it easier to install Windows
	95?]
	
	Some of steps to follow to ensure a trouble-free installation are:
	- Run a virus scan before running Setup.
	- Run ScanDisk or Chkdsk before running Setup.
	- Make sure you have at least 40-45 MB free disk space (50-55 MB to
	 back up your previous MS-DOS and Windows system files so you can
	 uninstall Windows 95 if needed).
	- If you have had any problems with your hardware or software, fix
	 them before installing Windows 95.
	- Turn off any screen savers or utilities that are running.
	- Backup your Autoexec.bat and Config.sys files to a floppy disk.
	- Remove any unnecessary programs from Config.sys and Autoexec.bat.
	 These may include Undelete programs, anti-virus software, boot
	 configuration programs, or any disk utilities.
	- Remark the load= and run= lines in Win.ini by placing a semicolon
	 (;) in front of the load and run lines (for example,
	 ;load=C:\Msoffice\Msoffice.exe).
	- Shut down any anti-virus software you are running. If you install
	 Windows 95 on a computer that has a CMOS or system BIOS based anti-
	 virus setting, you will receive an error message and Setup will
	 stop. Consult the hardware documentation for information on system
	 BIOS or CMOS enabled settings such as virus detection.
	- Run Setup from Windows or Windows for Workgroups.
	- Shut down any running programs.
	- Remove programs from the Startup group before installation.
	
	[Q: How do I uninstall Windows 95?]
	
	To return to a previously installed version of Windows 3.1, run the
	Uninstall program. To uninstall Windows 95, "Save System Files" must
	be chosen during Setup.
	
	To run the uninstall program:
	
	** If Windows 95 is running:
	1. Click the Start menu, point to Settings, and then choose Control
	  Panel.
	2. Double Click Add-Remove Programs.
	3. In the Add-Remove Programs properties dialog box, click the
	  Install/Uninstall tab.
	4. In the list of software that can be removed by Windows, click
	  Windows 95.
	5. Click Add/Remove, and then follow the directions on your screen.
	  The Uninstall program will remove all long filename entries from
	  your hard disk, and then run an MS-DOS-based program to remove
	  Windows 95 and restore your previous MS-DOS and Windows 3.x files.
	
	** If Windows 95 is not running:
	1. Boot from the Windows 95 Emergency Repair Disk if you created one
	  during setup.
	2. Type UNINSTAL at the A prompt.
	
	OR
	
	1. Boot from an MS-DOS boot disk.
	2. Type the following at the A prompt
	
	  X:\Windows\Command\Uninstall.exe
	
	  Where x is the drive letter where Windows 95 is installed, and
	  \windows is the name of your Windows 95 directory.
	
	NOTE: It is recommended that you run Uninstall from within Windows 95,
	otherwise all long filename information may not be completely removed
	from your hard disk.
	
	[Q: How do I install Windows 95 from a CD-ROM drive?]
	
	Windows 95 can be installed from a CD-ROM drive from within MS-DOS or
	from within an existing version of Windows. The preferred and most
	reliable method is to install from an existing version of Windows.
	
	To install Windows 95 from MS-DOS:
	1. Boot to a C:\ prompt, and then insert the Windows 95 CD in the CD-
	  ROM drive.
	2. Type the drive letter followed by a colon (:) and a backslash (\),
	  and the word setup. For example:
	
	  D:\Setup
	
	3. Press ENTER, and then follow the instructions on your screen.
	4. Click Next to continue Setup, and then follow the instructions on
	  your screen.
	
	To install from your current version of Windows:
	1. Start Windows, and then insert the Windows 95 CD in the appropriate
	  drive.
	2. In File Manager or Program Manager, click the File menu, and then
	  click Run.
	3. Type:
	
	  x:\Setup
	
	  where x is the drive letter of your CD-ROM.
	4. Follow the instructions on your screen.
	5. Click Next to continue Setup.
	
	[Q: How do I install Windows 95 from a remote CD-ROM drive?]
	
	If the computer with the CD-ROM drive is running Windows for
	Workgroups or Windows 95, share the CD-ROM drive, and then follow
	these steps:
	
	1. Connect to the shared CD-ROM by connecting to a network drive in
	  File Manager or by using the "net use" syntax at the command
	  prompt. For example:
	
	  net use * \\machine\cdshare
	
	2. Double-click Setup.exe, or at the command prompt type setup.
	
	[Q: How do I prepare my computer for a clean installation of Windows
	95?]
	
	Windows 95 will install over MS-DOS, as well as over existing
	versions of Windows and Windows for Workgroups.
	
	>From File Manager in Windows or Windows for Workgroups:
	
	1. Click the drive letter for the drive that Windows 95 will be
	  installed from.  Examples:
	  a:\ (floppy disk users)
	  d:\ (CD-ROM users)
	2. Double-click Setup.exe to start the installation process.
	
	During installation, Windows 95 checks for available disk space.
	If the required hard disk space is not available, Windows 95 displays
	how much free is space available and how much is required. To free up
	space on the hard disk, remove unnecessary files.
	
	[Q: Do I need to reinstall my programs when I install Windows 95?]
	
	Windows 95 will pick up program settings when you upgrade an existing
	version of Windows or Windows for Workgroups. If Windows 95 is
	installed in a separate directory, all Windows-based programs need to
	be reinstalled.
	
	[Q: How do I set up Windows 95 on a computer running Windows NT?]
	
	The Windows NT computer must be configured as multi-boot between
	Windows NT and MS-DOS.
	
	1. Start up the Windows NT computer in MS-DOS mode.
	2. Run Windows 3.x, and then in Program Manager, select the File menu,
	  and then choose the Run command.
	3. Type:
	
	  x:\Setup.exe
	
	  where x is the drive letter containing your Windows 95 Setup disk
	  or CD-ROM.
	4. Install Windows 95 in a new directory.
	
	NOTE: Windows 95 cannot be installed into the same directory as
	Windows NT or a shared Windows NT/Windows 3.x directory.
	
	A FAT partition is required for the Windows 95 / Windows NT dual boot
	configuration to work. Windows 95 must be installed into a separate
	directory on the FAT partition. The Windows NT OS Loader automatically
	provides a choice for Windows 95 or MS-DOS on the menu.
	
	[Q: I have 25 MB free on my hard disk, and when I try to upgrade to
	Windows 95 it tells me I do not have enough disk space. How much do I
	need for Windows 95 if I am upgrading?]
	
	When you upgrade over Windows 95, you need 35-40 MB of free disk
	space, as opposed to 50-55 MB for a full installation.
	
	NOTE: Actual numbers vary depending on options and accessories
	selected during Setup. If you use disk compression (MS-DOS DoubleSpace
	or DriveSpace, or Stacker), Setup may require more than 35-40 MB
	because of the way disk compression estimates available space. Setup
	will adjust the required free space to ensure that you do not run out
	of disk space during Setup.
	
	[Q: Can I install Windows 95 on a computer that has OS/2 \MS-
	DOS\Windows? Can I still dual boot?]
	
	Windows 95 Setup.exe will not run on OS/2. To install Windows 95,
	boot the computer to MS-DOS, and then run Setup.exe from the MS-DOS
	prompt.
	
	NOTE: If you are upgrading over OS/2 on an HPFS partition, you will
	need your OS/2 disk 1 during Setup.
	
	If you are using OS/2 Boot Manager to choose operating systems at
	startup, Setup will disable Boot Manager to insure that Windows 95 can
	reboot the system and complete its installation. Boot Manager can be
	reactivated by running the FDISK utility that comes with OS/2
	(see procedure at the end of this section).
	
	If you are not using Boot Manager, configure your computer to use Boot
	Manager, and then follow the instructions above. Consult your OS/2
	documentation for information on Boot Manager.
	
	If you start MS-DOS from a floppy disk and then run Setup, you will
	not be able to start OS/2 after Windows 95 is installed. You need to
	delete the Autoexec.bat and Config.sys files that OS/2 uses before
	running Setup.
	
	To remove OS/2 from your computer after you install Windows 95:
	1. Back up the files you want to keep onto a floppy disk or network
	  drive.
	2. Delete the files in each of your OS/2 directories and
	  subdirectories, and then delete the OS/2 directories.
	3. In the root directory, you need to delete the following hidden
	  files:
	
	  EA DATA.SF
	  OS2LDR.MSG
	  OS2KRNL
	  OS2BOOT
	  WP DATA.SF
	
	In My Computer or Windows Explorer, make sure hidden files are
	visible. To do this, click the View menu and then click Options. Then
	click "Show All Files". Then delete the OS/2 files listed above.
	
	Note: If you have a version of OS/2 other than version 2.0, the names
	of your OS/2 files may differ from those in this procedure. Also,
	depending on which version of OS/2 you have, you may see the following
	files in your root directory which you can delete:
	
	  OS2DUMP
	  OS2LDR
	  OS2LOGO
	  OS2VER
	
	4. Empty the Recycle Bin to permanently remove the files from your
	  computer.
	5. If you had Boot Manager installed and want to remove it, restart
	  your computer and then complete the following steps. (It is
	  recommended that you print this file before restarting your
	  computer.)
	6. When you see the Boot Manager menu, choose to boot to MS-DOS and
	  run FDisk.
	7. Make the MS-DOS partition (C) your active partition.
	8. Quit FDisk and then restart your computer.
	
	To reinstall Boot Manager after you install Windows 95:
	1. From the Windows 95 Start menu, click Run and then type FDISK.
	2. Choose the option, Set Active Partition.
	3. Enter the number of the Boot Manager Partition. This partition is
	  the 1MB Non-DOS partition usually placed at the top or bottom.
	4. Quit FDISK, and restart your computer as instructed. You can now
	  start OS/2 at any time and change labels of partitions in Boot
	  Manager through the OS/2 FDISK program.
	
	[Q: How do I make copies of my original disks to install from?]
	
	The DMF disk format is not compatible with the Diskcopy or Copy
	commands and increases the amount of data stored on a standard
	1.44/3.5 in. diskette. There is no way to make a direct copy of these
	diskettes.
	
	[Q: Can I make floppy disk images from the CD?]
	
	The CD-ROM contains cabinet files (*.cab) files that are 2 MB each and
	will not copy onto floppy disks.
	
	[Q: Setup keeps hanging during the information-gathering section, how
	do I bypass the problem?]
	
	Occasionally Setup can stop while detecting a device on the computer.
	1. Turn the computer off for 10 seconds, and then turn it back on.
	2. Rerun Setup to bypass the problem by choosing Safe Recovery.
	3. Setup will continue bypassing the detection problem it encountered
	  on the previous attempt.
	4. Continue to power off the computer, and rerun Setup as needed until
	  the Windows 95 setup process is compete.
	
	NOTE: If you have already run safe recovery several times, you can
	manually select the hardware in your system to minimize the chance of
	stopping, since Setup will detect only the hardware you select.
	
	[Q: Should I set up a separate partition to install Windows 95?]
	
	As with any software package, it is always a good idea to have a
	backup before installing it. Windows 95 has been tested on thousands
	of computers on many system configurations with a very high success
	rate, so we are confident that you will have few problems, if any,
	installing Windows 95.
	
	An uninstall feature can be enabled during Setup. Uninstall copies
	your previous MS-DOS and Windows 3.x versions and keeps a log, so that
	Windows 95 can be removed and the previous files returned to where
	they were before Windows 95 was installed.
	
	Windows 95 does not require its own partition, however, it can be
	installed if you want to dual boot between your current Windows 3.x
	and Windows 95.
	
	[Q: Should I install into my existing Windows directory or a different
	directory?]
	
	Preserving your existing installation of Windows and upgrading on top
	of it is highly recommended as Setup is using your existing
	configuration files (Config.sys, Autoexec.bat, System.ini, Win.ini,
	Protocol.ini) for more accurate detection and installation. The
	advantage to installing in your existing Windows directory is that the
	previous settings and applications are used in the new installation.
	
	The advantage to installing Windows 95 into a different directory is
	that it preserves your previous DOS/Windows configuration, allowing
	you to dual boot between versions. The disadvantage is that all
	Windows applications and possibly drivers for hardware peripherals
	(sound cards, tape drives, etc.) must be re-installed to put the
	proper support files in place as well as the application settings in
	the .ini files and/or the registry.
	
	[Q: How do I set up Windows 95 into a separate subdirectory?]
	
	During Setup, Windows 95 you are prompted to provide a directory to
	install Windows 95 into.
	
	To install Windows 95 into a new directory:
	1. Click the Other Directory option, and then click Next.
	2. Enter the new directory. For example, C:\Win95.
	
	[Q: What files do I backup to preserve Windows 95 settings?]
	
	You can use the Windows 95 Backup utility to backup your system and
	all user and software specific preferences. In order to do this, use
	the Full System Backup File set which is described on the second
	screen that comes up when you run Backup.
	
	NOTE: After installing Windows 95 into another directory, all programs
	(and possibly all hardware-peripheral drivers) must be re-installed.
	
	[Q: I have installed Windows 95 into different directory than Windows
	3.x or Windows for Workgroups 3.1x. How do I set up to dual boot
	between them?]
	
	When installing Windows 95 into a different directory, dual booting is
	enabled by default. Dual boot is only available if the existing
	version of MS-DOS is version 5.0 or greater. If this criteria is met,
	dual booting to a previous version of MS-DOS is accomplished by:
	1. Pressing the F8 key when you see the prompt, "Starting Windows 95"
	  at startup.
	2. From the menu select the option, Previous Version of MS-DOS.
	
	[Q: What files does Windows 95 modify during Setup?]
	
	Windows 95 is a new operating system, and affects many files on the
	system.
	
	[Q: Can I run the Windows 95 Setup program from MS-DOS? Do I lose any
	functionality?]
	
	If you have a running installation of Windows 3.x or Windows for
	Workgroups 3.x1, it is strongly recommended that you run Setup
	from your existing version of Windows. This provides the safest and
	smoothest installation. If you do run Setup from MS-DOS, and it
	detects Windows on the computer, it will recommend quitting Setup and
	rerunning it from Windows. If you do run Setup from MS-DOS, Setup may
	run slower (especially if installing from floppy disks).
	
	[Q: Can I set up Windows 95 from a network?]
	
	Yes. There are two ways to set up Windows 95 from a network location:
	-- Create a Windows 95 flat directory by either using the COPY command
	for a CD-ROM, or by using the Extract command for floppy disks.
	Connect to the shared directory, run Setup, and then choose a
	directory on your computer to set up to.
	-- Go to Nettools directory (CD-ROM only) to use the Netsetup Utility.
	
	[Q: Setup stops after the first reboot, why won't it restart?]
	
	There are several reasons, ranging from video problems to disk-access
	issues. Here are some steps to troubleshoot a no-start situation:
	
	1. Restart Windows 95, and then press F8 when you see the message
	  "Starting Windows 95...".
	2. Choose Safe Mode from the Startup menu. If Windows 95 starts,
	  change the video driver to the standard VGA driver by following
	  these steps:
	
	1. Click the Start button, point to Settings, and then click Control
	  Panel.
	2. Double-click the Display icon.
	3. Click the Settings tab, and then click Change Display Type.
	4. Click Change in the Adapter Type section, and then click Show
	  Compatible Devices.
	5. Click Standard Display Types, and then double-click Standard
	  Display Adapter (VGA). Click OK.
	6. Restart Windows 95.
	
	If Windows 95 still stops during startup:
	
	1. Rename Config.sys and Autoexec.bat and/or
	2. Go to Control Panel, and then double-click the System icon.
	3. Click the Performance tab, and then click the File System button.
	4. Select the Troubleshooting tab.
	5. Check all of the available boxes, and then click OK in all dialog
	  boxes and reboot.
	
	[Q: I was running Setup for the first time and it stopped during
	hardware detection. What do I do now?]
	
	If your computer stops during the hardware-detection phase of Setup,
	turn off the power on your system, wait 10 seconds, and then turn the
	power back on. Do not press CTRL-ALT-DEL. When your system restarts,
	restart Windows using Safe Recovery, which will skip the portion of
	detection that caused the problem. If your system stops again, it will
	be in a different detection module. Perform these steps as many times
	as necessary to allow your system to complete detection.
	
	[Q: Setup didn't detect my network card, how do I set up my network
	card?]
	
	To add a network adapter:
	>From Control Panel, double click Add New Hardware, and let Windows
	try to detect the network card. If it does not, you can manually
	select it as follows:
	
	1. From Control Panel, double click the Network icon.
	2. Click Add, and then click Adapter.
	3. Find your make and model from the list of manufacturers.
	4. Change the displayed settings to match your card's configuration.
	  --If it is not a listed network adapter, check the diskette that
	    came with your adapter. If the driver came with Windows or Lanman
	    (NDIS compatible) diskettes, then select "Have Disk" and point it
	    to the path of the Oemsetup.inf file.
	  --If there are only Novell ODI drivers available, install the
	    driver in Autoexec.bat using the LSL.com and the <nic_odi>.com
	    (provided by Novell and the NetWare card manufacturer) and then
	    select "Existing ODI Driver" from "(detected net drivers)."
	    For more information on how to install the ODI driver, consult
	    your network card manufacturer.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
