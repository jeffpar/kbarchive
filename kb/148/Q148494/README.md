---
layout: page
title: "Q148494: Windows 95 Uses Pbrush.exe for Backward Compatibility"
permalink: kb/148/Q148494/
---

## Q148494: Windows 95 Uses Pbrush.exe for Backward Compatibility

	Article: Q148494
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 95 does not include Paintbrush (Pbrush.exe), the drawing tool included
	with Windows and Windows for Workgroups 3.1x.
	
	Paintbrush has been replaced in Windows 95 with a drawing tool called Paint
	(Mspaint.exe). For backward compatibility, Windows 95 includes a file named
	Pbrush.exe. This file is placed in the Windows folder during Setup.
	
	MORE INFORMATION
	================
	
	The Pbrush.exe file included with Windows 95 is a small program that starts
	Mspaint.exe and passes to it any command-line parameters. This allows 16-bit
	programs that use Pbrush.exe to run without modification in Windows 95. 32-bit
	programs should use Mspaint.exe instead of Pbrush.exe for future portability.
	
	If you want to use the Windows or Windows for Workgroups 3.1x Paintbrush program
	in Windows 95, you must expand it from your original Windows or Windows for
	Workgroups 3.1x disks. To do so, follow these steps:
	
	1. Rename the Pbrush.exe file in the Windows folder.
	
	2. Locate the Pbrush.ex_ file on your original Windows or Windows for Workgroups
	  3.1x disks, and then insert that disk in the appropriate floppy disk drive.
	
	3. Type the following line at a command prompt
	
	  " expand -r <fdisk>:\pbrush.ex_ <hdisk>:\<windows> "
	  (without the quotation marks)
	
	  where <fdisk> is the floppy disk drive containing the disk you inserted
	  in step 2, <hdisk> is the hard disk containing the Windows folder, and
	  <windows> is the Windows folder.
	
	======================================================================
	Keywords          : kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
