---
layout: page
title: "Q150341: Complete Gardening: Manual Installation Instructions"
permalink: /kb/150/Q150341/
---

## Q150341: Complete Gardening: Manual Installation Instructions

{% raw %}

	Article: Q150341
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Complete Gardening for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides instructions to manually install Microsoft Complete
	Gardening for Windows, version 1.0.
	
	MORE INFORMATION
	================
	
	The manual installation instructions assume:
	
	- Windows is installed in C:\Windows.
	
	- Your CD-ROM drive is drive D.
	
	- Your Destination folder for Windows 95/98 is:
	
	     C:\Program Files\Microsoft Multimedia\Microsoft Complete
	     Gardening
	
	- Your Destination folder for Windows NT 3.51 is:
	
	     C:\Microsoft Multimedia\Microsoft Complete Gardening
	
	If your hard disk drive, destination folder, Windows folder, or CD-ROM drive
	letters are different, replace the drive letters and folder names throughout
	this article with the drive letters and folder names on your computer.
	
	NOTE: The following instructions discuss copying, editing, and modifying folders
	(directories) and files. For more information about accomplishing these tasks in
	Windows, see your Windows printed documentation or online Help.
	
	1. Create a folder named <destination>:
	
	  NOTE: As mentioned installation assumptions section, above,
	  <destination> varies depending on the operating system you are
	  installing to.
	
	2. Copy the following file from D:\Data\App to <destination>:
	
	  Mscg.dll
	
	3. Copy the following files from D:\Data\Setup to C:\Windows\System (System32 in
	  Windows NT).
	
	  NOTE: This step is not necessary if you are using Windows 98.
	
	  Ir32_32.dll
	  Msadp32.acm
	  Msvidc32.dll
	
	4. If you are NOT running Windows NT 3.51, copy the following file from
	  D:\Data\Setup to C:\Windows\Fonts:
	
	  Arial.ttf
	
	5. If you are using Windows NT 3.51, use the following instructions to install
	  required fonts:
	  a. Open the Windows NT Control Panel and double-click the Fonts icon.
	
	  b. Click Add.
	
	  c. Click Select All.
	
	  d. Make sure the Copy Fonts To option is selected, and then click OK.
	
	  e. Click Close.
	
	6. Create the Gardening shortcuts or icons using the appropriate section below
	  as a guide.
	
	7. Start Gardening to complete the installation. When the program runs, it
	  confirms that the files have been copied, and makes the necessary additions
	  to the Windows Registry.
	
	Creating Start Menu Shortcuts
	-----------------------------
	
	If you are using Windows 95/98, add Gardening to the Start Menu by following
	these instructions:
	
	1. Click the Start button, point to Settings, and then click Taskbar.
	
	2. Click the Start Menu Programs tab.
	
	3. Click Add.
	
	4. Type the following in the Command Line box, and then click Next:
	
	     d:\data\msgdn32.exe
	
	5. In the Select Program Folder dialog box, click the Microsoft Multimedia
	  folder, and then click Next.
	
	  NOTE: If the Microsoft Multimedia folder is not listed, create it using the
	  following steps:
	  a. Click New Folder
	
	  b. Type the following, and then click Next:
	
	  "Microsoft Multimedia" (without the quotation marks)
	
	6. In the Select A Title For The Program dialog box, type the following, and
	  then click Finish:
	
	  "Microsoft Complete Gardening" (without the quotation marks)
	
	7. Repeat steps 3 through 6 to create a shortcut for the following items:
	
	     Item 1
	     Command Line:                    d:\mmcat\catppi.exe
	     Select A Title For The Program:  Microsoft Multimedia Catalog
	
	     Item 2
	     Command Line:                   d:\readme.wri
	     Select A Title For The Program: Microsoft Complete Gardening ReadMe
	
	Creating Program Manager Icons
	------------------------------
	
	If you are using Program Manager, create the Gardening icons using the following
	instructions:
	
	1. Open the Microsoft Multimedia group. If this group does not already exist,
	  create it as follows:
	  a. On the File menu, click New.
	
	  b. Click Program Group, and then click OK.
	
	  c. In the Description box, type the following, and then click OK:
	
	  "Microsoft Multimedia" (without the quotation marks)
	
	2. On the File menu, click New.
	
	3. Click Program Item, and then click OK.
	
	4. Type in the Description and Command Line as listed below, and then click OK:
	
	     Description:       Microsoft Complete Gardening
	     Command Line:      d:\data\msgdn32.exe
	
	5. Repeat steps 2 through 4 for the following items:
	
	     Item 1
	     Description:       Microsoft Multimedia Catalog
	     Command Line:      d:\mmcat\catppi.exe
	
	     Item 2
	     Description:       Microsoft Complete Gardening ReadMe
	     Command Line:      d:\readme.wri
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm garden manually
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbZNotKeyword kbCompleteGardening
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
