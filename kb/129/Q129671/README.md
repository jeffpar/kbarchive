---
layout: page
title: "Q129671: Problems Using Real-Mode Compression Driver in Windows 95"
permalink: /kb/129/Q129671/
---

## Q129671: Problems Using Real-Mode Compression Driver in Windows 95

	Article: Q129671
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kberrmsg kbtool win95
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using DriveSpace or DriveSpace 3, you may experience any of the
	following symptoms:
	
	- You cannot mount removable media from the DriveSpace tool. When you try to
	  mount compressed drives located on removable media, DriveSpace restarts your
	  computer in mini-Windows mode and then mounts the drive. However, when your
	  computer restarts normally, the removable drive is not mounted.
	
	- Automatic mounting does not work when you start Windows 95 normally (when you
	  start the GUI). Even though you select the Automatically Mount New Compressed
	  Drives option from the Advanced menu in Drive- Space, Windows 95 does not
	  automatically mount a compressed drive if it is located on removable media
	  (such as a floppy disk). However, the drive is mounted when you boot to a
	  Windows 95 command prompt.
	
	
	- You are unable to compress a RAMDrive from the DriveSpace tool. When you try
	  to compress a RAMDrive, your computer restarts several times, and you receive
	  the following message:
	
	  To continue this task, Windows needs to restart your computer now.
	
	  If your computer is set up to run more than one operating system, make sure
	  that it restarts Windows 95. Windows 95 will finish this task in an
	  environment that looks similar to earlier versions of Windows.
	
	  Do you want to continue?
	
	  If you click Yes, your computer restarts in Mini-windows mode, and the
	  following error message is displayed
	
	  Cannot examine drive <x>:
	
	  where <x> is the RAMDrive. The computer then restarts again in mini-
	  Windows mode and DriveSpace compresses the RAMDrive. However, when your
	  computer restarts normally, the RAMDrive is not compressed.
	
	- You cannot unmount a compressed drive from the DriveSpace tool. When you try
	  to unmount a compressed drive, you receive the following message:
	
	  Windows will unmount drive <x> as soon as you restart your computer.
	  Would you like to restart your computer now?
	
	  Caution: If you do not restart your computer now, you may lose your changes.
	
	  If you click Yes, Windows 95 restarts, but the compressed drive is still
	  mounted.
	
	- When you view the properties of a drive compressed with DriveSpace 3, the
	  capacity of the drive may be overstated.
	
	
	CAUSE
	=====
	
	These problems can occur if the real-mode DriveSpace compression driver
	(Drvspace.bin or Dblspace.bin) is loaded instead of the protected-mode
	DriveSpace compression driver (Drvspacx.vxd) for one of the following reasons:
	
	- The Drvspacx.vxd file is missing or damaged.
	
	
	- The real-mode DoubleSpace or DriveSpace compression driver from Microsoft
	  MS-DOS version 6.0 or later was loaded when the computer was started. If
	  either the Dblspace.bin or Drvspace.bin file from MS-DOS 6.0 or later is
	  present in memory when Windows 95 starts, Drvspacx.vxd is not loaded.
	
	RESOLUTION
	==========
	
	Make sure that the protected-mode Drivespace driver (Drvspacx.vxd) loads when
	Windows 95 starts by following these steps:
	
	1. Make sure that the Drvspacx.vxd file is present in the Windows\
	  System\Iosubsys folder. If the file is not present, extract a copy of the
	  file from the Win95_09.cab cabinet file on your original Windows 95 CD-ROM or
	  disk 9 to the Windows\System\Iosubsys folder on the hard disk.
	
	  NOTE: If you are using DriveSpace 3, extract the Drvspacx.vxd file from the
	  Plus_1.cab cabinet file on your original Microsoft Plus! CD-ROM or disk 1
	  instead.
	
	  For information about using the Extract tool, type "extract" (without
	  quotation marks) at a command prompt, or see the following article in the
	  Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	2. Copy the Drvspace.bin file from the Windows\Command folder to the root folder
	  of the boot drive as both Drvspace.bin and Dblspace.bin. To do so, type the
	  following lines at a command prompt, pressing ENTER after each command:
	
	  " copy c:\windows\command\drvspace.bin <drive>:\drvspace.bin /y
	  copy c:\windows\command\drvspace.bin <drive>:\dblspace.bin /y " (without
	  the quotation marks)
	
	  where <drive> is the physical boot drive. If drive C is compressed, copy
	  the Drvspace.bin file to the root folder of the host drive for drive C
	  instead of the root folder of drive C.
	
	  NOTE: The /Y switch causes the COPY command to replace existing files without
	  prompting you for confirmation.
	
	After performing these steps, check to see if the problem has been resolved. If
	it has not, perform the following additional step:
	
	1. If you did not extract the Drvspacx.vxd file in step 1 because it already
	  exists in the Windows\System\Iosubsys folder, extract it now. In addition,
	  extract the Drvspace.bin file from the Windows 95 CD-ROM or Disk 1 to the
	  Windows\Command folder. After extracting this file, repeat step 2.
	
	  NOTE: If you are using DriveSpace 3, extract the Drvspace.bin file from your
	  original Microsoft Plus! CD-ROM or disk 1 instead.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95 and
	Microsoft Plus! for Windows 95 version 1.0. We are researching this problem and
	will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	MORE INFORMATION
	================
	
	The DriveSpace compression driver (Drvspacx.vxd) included with Windows 95 and
	Microsoft Plus! provides protected-mode access to both DoubleSpace and
	DriveSpace compressed drives.
	
	When your computer starts, the real-mode DriveSpace driver (Drvspace.bin or
	Dblspace.bin) is used to mount any compressed drives specified in the
	Drvspace.ini or Dblspace.ini file. When Windows 95 starts, Drvspacx.vxd replaces
	Drvspace.bin or Dblspace.bin and provides the functionality of these real-mode
	compression drivers in protected mode.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : :95
	Issue type        : kbprb
	
	=============================================================================
	
