---
layout: page
title: "Q246507: Windows NT Does Not Start, Error Message About Ntoskrnl.exe"
permalink: /kb/246/Q246507/
---

## Q246507: Windows NT Does Not Start, Error Message About Ntoskrnl.exe

{% raw %}

	Article: Q246507
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to restart a computer running Microsoft Windows NT Workstation 4.0
	or Microsoft Windows NT Server 4.0 after an abnormal shutdown (for example, a
	crash), the computer may not start and you may receive the following error
	message:
	
	  Windows NT could not start because the following file is missing or corrupt:
	
	  <winnt root>\system32\ntoskrnl.exe
	
	CAUSE
	=====
	
	This behavior can occur when the Ntoskrnl.exe file is missing or corrupted, or
	when the Advanced RISC Computer (ARC) path in Boot.ini points to the wrong boot
	partition as the location of the Windows NT 4.0 system files.
	
	NOTE: This can also occur if the system partition is larger than 7.8 gigabytes
	and system files have be placed outside of the 7.8 gb limit (possibly as a
	result of applying a service pack or defragmenting the drive). Although Windows
	NT 4.0 can in theory support partitions of up to 16 exabytes in size using the
	NTFS file system, the maximum size of the system partition is limited to 7.8
	gigabytes. Windows 2000 does not have this limitation unless the machine's BIOS
	does not support INT13 extensions.
	
	For more information, please see the following article:
	
	  Q224526 Windows NT 4.0 Supports Maximum of 7.8-GB System Partition
	
	RESOLUTION
	==========
	
	To resolve this behavior, replace the Ntoskrnl.exe file. Follow one of these
	sets of steps, depending on whether you do or do not have an Emergency Repair
	Disk (ERD) available.
	
	If you do have an ERD, use the emergency repair process to replace the
	Ntoskrnl.exe file:
	
	1. Start the computer with Windows NT 4.0 Setup Disk 1 in the disk drive.
	
	2. At the prompt, insert Windows NT 4.0 Setup Disk 2 into the disk drive.
	
	3. When the Windows NT Setup screen appears, press R to begin the repair
	  process.
	
	4. Use the arrow keys to select "Verify Windows NT system files" from the repair
	  options, and then press ENTER.
	
	5. Use the arrow keys to select the other options, and then press ENTER to clear
	  those selections.
	
	6. Select Continue, press ENTER, and then follow the on-screen instructions to
	  detect mass storage devices.
	
	7. At the prompt, insert the ERD into the disk drive.
	
	8. At the prompt, insert the appropriate Windows NT 4.0 CD-ROM into the CD-ROM
	  drive.
	
	9. When the repair process is complete, remove the ERD from the disk drive, and
	  then press ENTER to restart the computer.
	
	If you do not have an ERD, replace the Ntoskrnl.exe file by making a new copy of
	it:
	
	1. If Windows NT 4.0 is installed on a file allocation table (FAT) partition:
	
	  a. Start the computer in MS-DOS.
	
	  b. Open the Boot.ini file in a text editor, and verify that the ARC path to
	     the boot partition is correct in the Boot.ini file.
	
	  c. Copy the Ntoskrnl.exe file from the original installation disks or CD-ROM
	     to the %SystemRoot%\System32\ folder.
	
	  d. Restart the computer.
	
	2. If Windows NT 4.0 is installed on an NTFS file system partition:
	
	  a. Install a parallel copy of Windows NT 4.0.
	
	  b. Verify that the ARC path to the boot partition is correct in the Boot.ini
	     file.
	
	  c. Copy the Ntoskrnl.exe file from the parallel installation to the
	     %SystemRoot%\System32 folder of the original installation.
	
	  d. Start the computer in the original installation.
	
	
	NOTE: If you determine the system partition is larger than 7.8 gb, Windows NT has
	been setup in an unsupported configuration, and the drive will need to be
	repartitioned to a size less than 7.8 gb.
	
	MORE INFORMATION
	================
	
	For additional information on using an ERD to repair Windows NT 4.0, please see
	the following articles in the Microsoft Knowledge Base:
	
	  Q103280 Using an Emergency Repair Disk Created by Windows NT
	
	  Q129037 Windows NT 3.5x and 4.0 Emergency Repair Process Screens
	
	Additional query words: improper shutdown
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
