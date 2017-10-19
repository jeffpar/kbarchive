---
layout: page
title: "Q134859: DriveSpace VxD and Real-Mode Driver Are Mismatched"
permalink: /kb/134/Q134859/
---

## Q134859: DriveSpace VxD and Real-Mode Driver Are Mismatched

	Article: Q134859
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kberrmsg kbtool win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install, remove, and then reinstall Windows 95, you may receive the
	following error message when you start Windows 95:
	
	  DriveSpace Warning
	
	  The DriveSpace VxD and the DriveSpace real-mode driver are mismatched. You may
	  need to reinstall them.
	
	  Press any key to continue.
	
	When you press a key, Windows 95 starts, but it may be unstable. You may see
	unusual characters on the screen and you may receive "fatal exception" error
	messages.
	
	CAUSE
	=====
	
	DriveSpace 3 from Microsoft Plus! for Windows 95 places real-mode drivers on the
	hard disk that are not removed when you delete the Windows folder. When you
	reinstall Windows 95, Setup places a DriveSpace VxD in the Iosubsys folder that
	is incompatible with the DriveSpace 3 drivers.
	
	RESOLUTION
	==========
	
	Replace the Drvspacx.vxd file in the Iosubsys folder with the correct version
	from the original Microsoft Plus! disks or CD-ROM. To do so, follow these
	steps:
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Command Prompt Only from the Startup menu.
	
	2. Change to the Windows\System\Iosubsys folder.
	
	3. Rename the Drvspacx.vxd file to Drvspacx.old.
	
	4. Extract the Drvspacx.vxd file from the Microsoft Plus! CD-ROM or original
	  disks to the Iosubsys folder. The Drvspacx.vxd file is located in the
	  Plus_1.cab file on both the Microsoft Plus! disks and CD-ROM.
	
	  Use the following command to extract the Drvspacx.vxd file
	
	  extract <drive>:\plus_1.cab drvspacx.vxd /L <destination>
	
	  where <destination> is the Windows\System\Iosubsys folder and
	  <drive> is the drive containing the Microsoft Plus! disk or CD-ROM.
	
	  For information about the Extract tool, type "extract" (without quotation
	  marks) at a command prompt, or see the following article in the Microsoft
	  Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	5. Restart your computer normally.
	
	If you still receive a "mismatch" error message when you restart your computer
	and the Drvspace.bin file is the correct Microsoft Plus! version, check for a
	Dblspace.bin file dated 7/11/95 or earlier. This file is a hidden file in the
	root folder of the boot drive. If this file exists, rename it to Dblspace.old
	and then restart your computer. DriveSpace 3 does not require the Dblspace.bin
	file to mount compressed volumes, but Windows 95 processes Dblspace.bin before
	Drvspace.bin if both files exist.
	
	This behavior can also occur if you reinstall Windows 95 to a different folder
	than its original folder after you install Microsoft Plus!. If you reinstalled
	Windows 95 in a different folder and you want to use the original installation,
	edit the Msdos.sys file on both the host drive and the compressed drive. Make
	sure that the PATH statement points to the correct folder. After you edit the
	Msdos.sys files, save the files and then restart your computer.
	
	NOTE: If you are using a Microsoft Plus! CD-ROM and you are not using real-mode
	CD-ROM drivers, this resolution does not work.
	
	The following tables list the correct files.
	
	Windows 95 without Microsoft Plus!:
	
	File name      Date/Time         Size    Location
	Drvspace.bin   07-11-95 9:50am   71,287  C:\ and root of compressed drive
	Dblspace.bin   07-11-95 9:50am   71,287  C:\ and root of compressed drive
	Drvspacx.vxd   07-11-95 9:50am   54,207  C:\windows\system\iosubsys
	
	Windows 95 with Microsoft Plus!:
	
	File name      Date/Time         Size    Location
	Drvspace.bin   07-14-95 12:00am  64,135  C:\ and root of compressed drive
	Dblspace.bin   07-14-95 12:00am  64,135  C:\ and root of compressed drive
	Drvspacx.vxd   07-14-95 12:00am  61,719  C:\windows\system\iosubsys
	
	Windows 95 OEM Service Release 2:
	
	File name      Date/Time          Size    Location
	Drvspace.bin   08-24-96 12:00am   65,271  C:\ and root of compressed drive
	Dblspace.bin   08-24-96 12:00am   65,271  C:\ and root of compressed drive
	Drvspacx.vxd   08-24-96 11:11am   57,466  C:\windows\system\iosubsys
	
	Additional query words: mismatch
	
	======================================================================
	Keywords          : kberrmsg kbtool win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
