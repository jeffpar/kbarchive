---
layout: page
title: "Q169501: How to Install Windows 95 from a Hard Disk"
permalink: /kb/169/Q169501/
---

## Q169501: How to Install Windows 95 from a Hard Disk

	Article: Q169501
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbsetup win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install Windows 95 from a hard disk. This process
	is also known as installing Windows 95 from a flat folder.
	
	MORE INFORMATION
	================
	
	You may want to install Windows 95 from a hard disk for any of the following
	reasons:
	
	- The installation process is faster.
	
	- If you cannot access your CD-ROM drive, you still have access to the Windows
	  95 Setup files.
	
	- When you need to reinstall Windows 95, or add or remove Windows 95
	  components, you are not prompted to insert the Windows 95 CD-ROM.
	
	To install Windows 95 from a hard disk, use the appropriate method:
	
	Windows 95 Already Installed
	----------------------------
	
	1. Click the Start button, point to Programs, and then click MS-DOS Prompt.
	
	2. At the command prompt, type the following lines, pressing ENTER after each
	  line:
	
	  " cd\
	  md w95flat " (without the quotation marks)
	
	3. Insert the Windows 95 CD-ROM into the CD-ROM drive.
	
	4. At the command prompt, type the following line, and then press ENTER
	
	  " copy <drive>:\win95\*.* c:\w95flat " (without the quotation marks)
	
	  where <drive> is the drive letter assigned to your CD-ROM drive.
	
	5. If you want to reinstall Windows 95 now, continue to the next step. If you do
	  not want to reinstall Windows 95 now, see the following article in the
	  Microsoft Knowledge Base for information about how to change the Windows 95
	  Setup source path:
	
	  Q131652 How to Change the Setup Source Path in Windows 95
	
	6. Click the Start button, click Run, type the following line in the Open box,
	  and then click OK:
	
	  " c:\w95flat\setup.exe " (without the quotation marks)
	
	  Follow the instructions on the screen to complete the installation of Windows
	  95.
	
	Upgrading Windows 3.x to Windows 95
	-----------------------------------
	
	1. Double-click the Main program group, and then double-click MS-DOS Prompt.
	
	2. At the command prompt, type the following lines, pressing ENTER after each
	  line:
	
	  " cd\
	  md w95flat " (without the quotation marks)
	
	3. Insert the Windows 95 CD-ROM into the CD-ROM drive.
	
	4. At the command prompt, type the following line, and then press ENTER
	
	  " copy <drive>:\win95\*.* c:\w95flat " (without the quotation marks)
	
	  where <drive> is the drive letter assigned to your CD-ROM drive.
	
	5. On the File menu, click Run, type the following line, and then click OK:
	
	  " c:\w95flat\setup.exe " (without the quotation marks)
	
	  Follow the instructions on the screen to complete the installation of Windows
	  95.
	
	======================================================================
	Keywords          : kbsetup win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbhowto
	
	=============================================================================
	
