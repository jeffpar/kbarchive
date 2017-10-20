---
layout: page
title: "Q105831: Why Should I Install MS-DOS 6.22?"
permalink: /kb/105/Q105831/
---

## Q105831: Why Should I Install MS-DOS 6.22?

{% raw %}

	Article: Q105831
	Product(s): Microsoft Disk Operating System
	Version(s): 6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	This article provides a functional overview of the features included in MS-DOS
	6.22 and describes why you should consider upgrading.
	
	- If you currently have MS-DOS 6.0 installed, refer to the "Why Step Up to
	  MS-DOS 6.22?" section of this article. This section describes only those
	  features and enhancements added since MS-DOS 6.0.
	
	- If you currently have a version of MS-DOS earlier than 6.0, or if you are
	  using another operating system, refer to "Why Upgrade to MS-DOS 6.22?" later
	  in this article. This section describes all features and enhancements added
	  since MS-DOS 5.0.
	
	WHY STEP UP TO MS-DOS 6.22?
	---------------------------
	
	MS-DOS 6.22 improves on the safety and ease of use provided by MS-DOS 6.0. This
	section describes features new to MS-DOS 6.22 and is designed for those already
	running MS-DOS 6.
	
	Safety Features and Enhancements:
	
	- MS-DOS 6.22 includes ScanDisk, a new utility that detects, diagnoses, and
	  repairs disk errors on uncompressed drives and DriveSpace-compressed drives.
	  ScanDisk can repair file system errors (such as cross-linked files and lost
	  clusters) and physical disk errors. ScanDisk keeps a log of its repairs and
	  allows you to undo any changes it makes. DriveSpace runs ScanDisk to check
	  the reliability of your disk before it begins compression. You can also run
	  ScanDisk by typing "scandisk" (without the quotation marks) at the MS-DOS
	  command prompt.
	
	- DriveSpace includes DoubleGuard safety checking, which protects your data by
	  verifying data integrity before writing to disk. If DoubleGuard detects that
	  the memory DriveSpace is using has been written to by another program, it
	  notifies you and shuts down your computer immediately to minimize damage to
	  your data.
	
	- The MS-DOS extended-memory manager, HIMEM, automatically tests your system's
	  memory when you start your computer. This test can identify memory chips that
	  are no longer reliable.
	
	- Setup installs SMARTDrive as a read-only cache by default. Even if
	  write-caching is enabled, MS-DOS does not display the MS-DOS command prompt
	  until SMARTDrive has written its cache to your disk.
	
	- The MOVE, COPY, and XCOPY commands ask you for confirmation before copying a
	  file over another file that has the same name. (To maintain compatibility
	  with the large base of MS-DOS batch files, these commands do not prompt for
	  confirmation if they are issued from a batch file.)
	
	Ease-of-Use Features and Other Enhancements:
	
	- SMARTDrive caches CD-ROM drives.
	
	- DriveSpace automatically mounts compressed floppy disks and other compressed
	  removable media, even when Microsoft Windows is running.
	
	- MS-DOS 6.22 allows you to easily uncompress a DriveSpace drive or completely
	  uninstall DriveSpace from memory.
	
	- Interactive Start (F8) allows you to bypass or carry out individual commands
	  in your AUTOEXEC.BAT file. (In MS-DOS 6.0, this capability was limited to
	  your CONFIG.SYS file.) This feature makes it easier to troubleshoot your
	  system configuration.
	
	- The DISKCOPY command uses your hard disk as an interim storage area, which
	  allows you to copy from one floppy disk to another without repeatedly
	  swapping disks.
	
	- Microsoft Defragmenter makes better use of your computer's extended memory,
	  so it can defragment larger disks and disks containing more files and
	  directories.
	
	- The output of the DIR, MEM, CHKDSK, and FORMAT commands is easier to read
	  because it includes thousands separators when displaying numbers greater than
	  999. For example, "1000000 bytes free" displays as "1,000,000 bytes free."
	
	WHY SHOULD I UPGRADE TO MS-DOS 6.22?
	------------------------------------
	
	This section describes features added to MS-DOS since version 5.0. If you already
	have MS-DOS 6.0, refer to "Why Should I Step Up to MS-DOS 6.22?" above.
	
	The MS-DOS 6.22 Upgrade includes the following new or enhanced features:
	
	- Microsoft DriveSpace, with DoubleGuard
	
	- Microsoft MemMaker
	
	- Microsoft Backup
	
	- Microsoft Anti-Virus
	
	- Microsoft Undelete
	
	- ScanDisk
	
	- MultiConfig
	
	- Interactive Start
	
	- Microsoft Defragmenter
	
	- MS-DOS Help
	
	- Enhanced SMARTDrive
	
	- Microsoft Diagnostics (MSD)
	
	- Interlnk
	
	- Enhanced Commands
	
	The following paragraphs briefly describe these enhancements and their benefits.
	
	Microsoft DriveSpace with DoubleGuard:
	
	Microsoft DriveSpace increases your available disk space by integrating
	compression into the operating system. You can use DriveSpace to increase
	available space on both hard disks and floppy disks. DriveSpace includes
	DoubleGuard safety checking, which protects your data by verifying data
	integrity before writing to the disk.
	
	Microsoft MemMaker:
	
	Microsoft MemMaker is a memory-optimization program that makes it easy to free
	conventional memory by moving device drivers and memory- resident programs from
	conventional memory into the upper memory area (UMA). If your computer has an
	80386 or higher processor, you can use MemMaker to increase available
	conventional memory so that programs run faster and more efficiently.
	
	Microsoft Backup:
	
	Microsoft Backup is a utility for backing up your hard disk drive. MS-DOS 6.22
	includes both Backup for MS-DOS, a program you can start from the MS-DOS command
	prompt, and Backup for Windows, a program you can use with Microsoft Windows.
	
	Microsoft Anti-Virus:
	
	Microsoft Anti-Virus can identify and remove more than 1000 different computer
	viruses. MS-DOS 6.22 includes both Anti-Virus for MS-DOS, a program you can
	start from the MS-DOS command prompt, and Anti-Virus for Windows, a program you
	can use with Microsoft Windows.
	
	Microsoft Undelete:
	
	Microsoft Undelete enables you to choose one of three levels of protection in
	case you accidentally delete a file. MS-DOS 6.22 includes Undelete for MS-DOS, a
	program you can run from the MS-DOS command prompt, and Undelete for Windows, a
	program you can use with Microsoft Windows. For more information about Undelete,
	see the chapter "Managing Your System" in the Microsoft MS-DOS "User's Guide"
	for version 6.0.
	
	ScanDisk:
	
	ScanDisk detects, diagnoses, and repairs disk errors on uncompressed drives and
	DriveSpace-compressed drives. ScanDisk can repair file system errors (such as
	cross-linked files and lost clusters) and physical disk errors. ScanDisk keeps a
	log of its repairs and allows you to undo any of the changes it makes.
	DriveSpace runs ScanDisk to check the reliability of your disk before it begins
	compression. You can also run ScanDisk yourself by typing "scandisk" (without
	the quotation marks) at the MS-DOS command prompt.
	
	MultiConfig:
	
	MultiConfig allows you to define more than one configuration in your CONFIG.SYS
	file. If your CONFIG.SYS file defines multiple configurations, MS-DOS displays a
	menu that enables you to choose the configuration you want to use each time you
	start your computer.
	
	Interactive Start:
	
	Interactive Start gives you the ability to bypass startup commands when you turn
	on your computer. This allows you to choose which CONFIG.SYS and AUTOEXEC.BAT
	commands MS-DOS should carry out. By controlling the commands your computer uses
	to start up, you can locate problems more easily.
	
	Microsoft Defragmenter:
	
	Microsoft Defragmenter reorganizes files on your hard disk to minimize the time
	it takes your computer to access them.
	
	MS-DOS Help:
	
	MS-DOS Help is a complete online reference to MS-DOS commands. The reference
	includes information about how to type commands and their parameters and
	switches, notes about commands, and examples of how to use commands.
	
	Enhanced SMARTDrive:
	
	The SMARTDrive program included with MS-DOS 6.22 speeds up your computer by using
	a disk cache, which stores information being read from your hard disk or CD-ROM
	drive. SMARTDrive can also be set to cache information being written to your
	hard disk.
	
	Microsoft Diagnostics:
	
	Microsoft Diagnostics (MSD) gathers and displays technical information about your
	computer.
	
	Interlnk:
	
	Interlnk enables you to easily transfer files between computers. With Interlnk
	and a cable, you can access information on another computer without using floppy
	disks to copy data from one computer to another.
	
	Enhanced Commands:
	
	The following commands have been added or enhanced for MS-DOS 6.22:
	
	- The MOVE command moves one or more files from one directory or drive to
	  another. You can also use the MOVE command to rename directories.
	
	- The CHOICE command allows you to prompt a user for input when running a batch
	  program. The CHOICE command allows you to display a specified prompt, pause
	  for user input, and return an error-level parameter to the batch program.
	
	- The DELTREE command deletes a directory and all of its files and
	  subdirectories.
	
	- The DISKCOPY command uses your hard disk as an interim storage area, allowing
	  you to copy from one floppy disk to another without repeatedly disk swapping
	  disks.
	
	- The output of the DIR, MEM, CHKDSK, and FORMAT commands is easier to read,
	  because it includes thousands separators when displaying numbers greater than
	  999. For example, "1000000 bytes free" displays as "1,000,000 bytes free."
	
	Additional query words: defrag 6.20 setup install step-up upgrade dblguard stepup doublespace dblspace drvspace drivespace
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : :6.22
	
	=============================================================================
	

{% endraw %}
