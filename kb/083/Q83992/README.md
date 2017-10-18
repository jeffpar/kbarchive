---
layout: page
title: "Q83992: Copying Individual Components from the Win SDK 3.1 Disks"
permalink: kb/083/Q83992/
---

## Q83992: Copying Individual Components from the Win SDK 3.1 Disks

	Article: Q83992
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The installation program for the Windows Software Development Kit (SDK) version
	3.1 does not provide an option to copy individual SDK components from the
	distribution disks. Each time the SDK installation program is run, it calculates
	the amount of disk space required to install the required components and any
	requested optional components. Because the installation does not proceed unless
	the calculated amount of disk space is free, it may be necessary to remove the
	existing SDK installation before using the installation program.
	
	However, the EXPAND utility can be used to copy individual files from the
	installation disks to the hard drive. It is necessary to use the EXPAND utility
	because the files on the SDK distribution floppy disks are in a compressed
	format. The EXPAND utility is provided with Windows 3.1 and also with MS-DOS
	5.0.
	
	The Windows SDK 3.1 is also distributed on CD-ROM (compact disk read- only
	memory). Because files on the CD-ROM are not compressed, any MS-DOS file copy
	utility can copy these files to the hard disk.
	
	For more information on installing the Windows SDK version 3.1, including an
	article that provides the recommended installation procedure, query on the
	following words in the Microsoft Knowledge Base:
	
	  " windows and sdk and setupinst " (without the quotation marks)
	
	Additional query words: 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
