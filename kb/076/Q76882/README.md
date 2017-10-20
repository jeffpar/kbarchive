---
layout: page
title: "Q76882: Uninstalling Older Version of MS-DOS Without Uninstall Disk"
permalink: /kb/076/Q76882/
---

## Q76882: Uninstalling Older Version of MS-DOS Without Uninstall Disk

{% raw %}

	Article: Q76882
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
	
	When you try to run the MS-DOS 5.x or 6.x Uninstall program on a computer that
	has been upgraded from an earlier version of MS-DOS, one of the following error
	messages may be displayed:
	
	- Nothing To Uninstall
	
	-or-
	
	- Uninstalling MS-DOS 6.22 is no longer possible
	
	  The information needed to restore your original version of DOS is no longer
	  present on your hard disk. Please remove the Uninstall disk from your drive
	  and press the ENTER key to reboot your system.
	
	CAUSE
	=====
	
	This error occurs when information has changed on the hard disk drive or the
	OLD_DOS directory has been removed.
	
	WORKAROUND
	==========
	
	The procedures below allow you to restore the previous version of MS-DOS.
	
	NOTE: If you are using an original equipment manufacturer (OEM) version of
	MS-DOS, contact the OEM for the correct uninstall procedure.
	
	Reinstalling MS-DOS Version 4.0 or 4.01
	---------------------------------------
	
	To reinstall MS-DOS version 4.0 or 4.01, do the following:
	
	1. If you are using DoubleSpace or DriveSpace, you must first remove it before
	  you install an earlier version of MS-DOS.
	
	2. Boot the machine with an MS-DOS 4.0 or 4.01 boot disk.
	
	3. At the drive A prompt, type the following command and press ENTER:
	
	  " sys c: " (without the quotation marks)
	
	4. With an MS-DOS 4.0 or 4.01 boot disk in drive A, type the following command
	  and press ENTER:
	
	  " copy a:\command.com c:\ " (without the quotation marks)
	
	5. Delete all MS-DOS 5.0 or later files from the DOS directory. Make sure you
	  save or relocate files that are not related to MS-DOS.
	
	6. Copy all the MS-DOS 4.0 (or 4.01) disks into the DOS subdirectory on the hard
	  disk drive.
	
	7. Remove or replace commands in the AUTOEXEC.BAT and CONFIG.SYS files that are
	  not supported by MS-DOS 4.0x (DEVICEHIGH, LOADHIGH, DOS=HIGH, and so forth).
	
	8. Remove the disk from the floppy disk drive and reboot the computer.
	
	Reinstalling MS-DOS Version 5.0 or 5.0a
	---------------------------------------
	
	To reinstall MS-DOS version 5.0 or 5.0a, do the following:
	
	1. If you are using DoubleSpace or DriveSpace, you must first remove it before
	  you can install an earlier version of MS-DOS.
	
	2. Run Setup with the /F parameter to create a working set of MS-DOS 5.0 disks
	  with expanded files.
	
	3. Boot the machine with an MS-DOS 5.0 boot disk, such as the startup disk
	  created in step 2.
	
	4. Use the SYS command to transfer the MS-DOS system files to drive C. For
	  example, type "sys a: c:" (without the quotation marks) and then press ENTER.
	
	5. Delete all MS-DOS 6.0 or later files from the DOS directory. Make sure you
	  save or relocate files that are not related to MS-DOS.
	
	6. Copy all the MS-DOS 5.0 (or 5.0a) files from the disks created in step 2 into
	  the DOS directory on the hard disk drive.
	
	7. Remove or replace commands in the AUTOEXEC.BAT and CONFIG.SYS files that are
	  not supported by MS-DOS 5.0. (For example, DEVICEHIGH and LOADHIGH in MS-DOS
	  5.0 do not support the /L and /S statements, EMM386.EXE does not support the
	  HIGHSCAN parameter, and so on.)
	
	8. Remove the disk from the floppy disk drive and reboot the computer.
	
	Reinstalling MS-DOS Version 6.0, 6.2, or 6.21
	---------------------------------------------
	
	If you are currently using MS-DOS 6.22 DriveSpace, you must remove DriveSpace
	before proceeding. If you already installed the earlier version of MS-DOS, you
	no longer have access to your DriveSpace-compressed drive. To have access to
	this information, you must reinstall MS-DOS 6.22, remove DriveSpace, and then
	proceed with the following procedure.
	
	To reinstall MS-DOS version 6.0, 6.2, or 6.21, do the following:
	
	1. Run Setup with the /F parameter to create a single startup floppy that
	  contains system files from the version of MS-DOS you are installing.
	
	2. Boot from the startup disk.
	
	3. Delete all MS-DOS files from the current MS-DOS directory.
	
	  NOTE: Be sure to save any files that are not related to MS-DOS (for example,
	  document files that you may have created and saved into the MS-DOS
	  directory).
	
	4. Remove or replace commands in the AUTOEXEC.BAT and CONFIG.SYS files that are
	  not supported by the version of MS-DOS you are installing. (For example,
	  HIMEM.SYS in MS-DOS 6.0 does not support the /TESTMEM parameter.)
	
	5. Reinstall MS-DOS by running "setup" (without the quotation marks) from Setup
	  Disk 1.
	
	  NOTE: To reinstall MS-DOS 6.2x Step-Up, you must reinstall the version of
	  MS-DOS that was on the system prior to MS-DOS 6.2.
	
	Alternative Procedure
	---------------------
	
	Alternatively, you can reinstall the desired MS-DOS version using the
	installation procedure documented with your specific MS-DOS "User's Guide."
	
	For more information about manually installing MS-DOS, query on the following
	words in the Microsoft Knowledge Base:
	
	  " ms-dos and setup.exe and expall.bat " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	The "Nothing To Uninstall" message occurs if MS-DOS is installed more than once
	and you created only one Uninstall disk, if information has changed on the hard
	disk drive since the installation, or if the OLD_DOS directory has been
	removed.
	
	The Uninstall disk restores the system to the state it was in before the last
	installation of MS-DOS. Any subsequent attempts to uninstall from the same
	Uninstall disk generate the "Nothing To Uninstall" error message because the
	disk information needed to uninstall is gone.
	
	If two Uninstall disks were made as a result of installing MS-DOS twice, the
	second Uninstall disk can be used to remove the second MS-DOS installation, and
	the first Uninstall disk can be used to remove the first MS-DOS installation.
	
	Additional query words: 4.00 5.00 5.00a 6.00 6.20 kbfest
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
