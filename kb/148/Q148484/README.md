---
layout: page
title: "Q148484: Do-It-Yourself Guide: Manual Installation Instructions"
permalink: kb/148/Q148484/
---

## Q148484: Do-It-Yourself Guide: Manual Installation Instructions

	Article: Q148484
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Reader's Digest Complete Do-It-Yourself Guide for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides instructions to manually install the Reader's Digest
	Complete Do-It-Yourself Guide.
	
	MORE INFORMATION
	================
	
	How install the Do-It-Yourself Guide
	------------------------------------
	
	The following instructions assume:
	
	- Your hard drive is drive C:
	
	- Your Windows folder is C:\Windows
	
	- Your CD-ROM drive is drive D:
	
	- Your Destination folder for Windows 95 is:
	
	     C:\Program Files\Microsoft Multimedia\Complete Do-It-Yourself
	     Guide
	
	- Your Destination folder for Windows NT is:
	
	     C:\Microsoft Multimedia\Complete Do-It-Yourself Guide
	
	If your hard drive, destination folder, Windows folder, or CD-ROM
	drive letters are different, replace the drive letters and folder
	names throughout this articles with the drive letters and folder names'
	on your computer.
	
	NOTE: The following instructions discuss copying, editing, and
	modifying folders (directories) and files. For more information about
	how to accomplish these tasks in Windows, see your Windows printed
	documentation or online Help.
	
	Manual Installation Instructions for Windows 95 and Windows NT
	--------------------------------------------------------------
	
	1. Create a folder named <destination>:
	
	NOTE: As mentioned above, the <destination> will vary depending on the
	operating system you are installing to.
	
	2. Copy the following files from the D:\Data\App folder to the
	  <destination> folder:
	
	     cdiygres.dll
	     lmremind.dat
	
	3. Copy the following file from the D:\Data\Setup folder to the
	  C:\Windows\System folder:
	
	     iccvid.dll
	     ir32_32.dll
	     msadp32.dll
	
	4. Copy the following files from the D:\Data\Setup folder into the
	  C:\Windows\Fonts folder:
	
	     Arial.ttf
	     Symbol.ttf
	     Impact.ttf
	
	5. If you are using Windows NT, use the following instructions to install
	  the Do-It-Yourself Guide fonts:
	
	  a. Open the Control Panel and double-click the Fonts icon.
	
	  b. Click Add.
	
	  c. Click Select All.
	
	  d. Make sure the Copy Fonts To... option is selected, and then
	     click OK.
	
	  e. Click Close.
	
	6. Add the program icons or Start menu shortcuts. As a guide, use the
	  information in the "Creating Start Menu Shortcuts" or "Creating
	  Program Manager Icons" sections in this article.
	
	7. Run Rdcdiyg.exe from the compact disc to complete the installation.
	  This program confirms the files have been copied, and makes
	  verifies the necessary additions to the Windows Registry are
	  created.
	
	Creating Start Menu Shortcuts
	-----------------------------
	
	If you are using Windows 95, add Do-It-Yourself Guide to the Start
	Menu by following these instructions:
	
	1. Click the Start button, point to Settings, and then click Taskbar.
	
	2. Click the Start Menu Programs tab.
	
	3. Click Add.
	
	4. Type the following in the Command Line box, and then click Next:
	
	     "d:\data\diyguide.exe"
	
	     NOTE: You must include the quotation marks.
	
	5. In the Select Program Folder dialog box, click the Microsoft
	  Multimedia folder, and then click Next.
	
	  NOTE: If the Microsoft Multimedia folder is not listed, create
	  it using the following steps:
	
	  a. Click New Folder.
	
	  b. Type the following, and then click Next:
	
	        Microsoft Multimedia
	
	6. In the Select A Title For The Program dialog box, type the
	  following, and then click Finish:
	
	     Complete Do-It-Yourself Guide
	
	7. Repeat steps 3 through 6 to create shortcuts for the following
	  item:
	
	     Command Line:      d:\mmcat\catppi.exe
	
	     Select A Title For The Program: Microsoft Multimedia Catalog
	
	Creating Program Manager Icons
	------------------------------
	
	To create the Do-It-Yourself Guide icons for Windows Program Manager, do
	the following:
	
	1. Open the Microsoft Multimedia group. If this group does not already
	  exist, create it as follows:
	
	  a. On the File menu, click New.
	
	  b. Click Program Group, and then click OK.
	
	  c. In the Description box, type the following, and then click OK:
	
	        Microsoft Multimedia
	
	2. On the File menu, click New.
	
	3. Click Program Item, and then click OK.
	
	4. Type the Description and Command Line as listed below, and then
	  click OK:
	
	     Description:       Complete Do-It-Yourself Guide
	     Command Line:      d:\data\diyguide.exe
	
	5. Repeat steps 2 through 4 the item listed below:
	
	     Description:       Microsoft Multimedia Catalog
	     Command Line:      d:\mmcat\catppi.exe
	
	The manual installation is complete.
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm setup installation install kbhowto
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbZNotKeyword kbDoItYourself
	Version           : 1.00
	
	=============================================================================
	
