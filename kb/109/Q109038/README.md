---
layout: page
title: "Q109038: Art Gallery: Manual Installation Instructions"
permalink: /kb/109/Q109038/
---

## Q109038: Art Gallery: Manual Installation Instructions

{% raw %}

	Article: Q109038
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Art Gallery for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides instructions to manually install Microsoft Art Gallery,
	version 1.0.
	
	MORE INFORMATION
	================
	
	================
	
	These instructions assume:
	
	- Your hard disk is drive C
	
	- Your destination folder (directory)is C:\Artgall
	
	- Your Windows folder is C:\Windows
	
	- Your CD-ROM drive is drive D
	
	If your hard disk drive, destination folder, Windows folder, or CD-ROM
	drive letters are different, replace the drive letters and folder names
	throughout this article with the drive letters and folder names on your
	computer.
	
	NOTE: The following instructions discuss copying, editing, and modifying
	folders (directories) and files. For more information about accomplishing
	these tasks in Windows, see your Windows printed documentation or online
	Help.
	
	Steps for Windows or Windows for Workgroups, Versions 3.x
	---------------------------------------------------------
	
	If you are running Microsoft Windows 3.x, follow these steps. When
	copying files, exit Windows and copy from the MS-DOS command prompt.
	Allow MS-DOS to overwrite any files it finds already on your hard
	drive.
	
	1. Create a folder named C:\Artgall on your hard drive.
	
	  For example, type the following at the MS-DOS command prompt and
	  press ENTER at the end of the line:
	
	     md c:\artgall
	
	2. Copy the following files from the D:\Artgall folder to the C:\Artgall
	  folder:
	
	   - Artgall.exe
	   - Readme.txt
	
	  For example, to copy Artgall.exe, type the following at the MS-DOS
	  command prompt and press ENTER at the end of the line:
	
	     copy d:\artgall\artgall.exe c:\artgall
	
	3. Copy the following file in the D:\Artgall\Msstp\System folder to the
	  C:\Windows\System folder:
	
	   - Msacm.drv
	   - Msadpcm.acm
	
	4. Use a text editor, such as Microsoft Notepad, to make the following
	  changes to the Artgall.ini file, which is located in the Windows
	  folder. If the Artgall.ini file does not already exist, create one
	  in the Windows folder with these entries:
	
	     [Art Gallery]
	     CD=D:
	     Timeout=0
	     DataDir=M2GDATA
	     TimeDir=M2GPTIME
	
	5. Use a text editor, such as Notepad, to make the following changes to the
	  Windows information files, which are located in the Windows folder:
	
	  Changes to the System.ini File
	  ------------------------------
	
	     [Drivers]
	     WaveMapper=MSACM.DRV
	
	     [MSACM]
	     Install=MSADPCM.ACM
	
	6. Add the Art Gallery icons to Program Manager by following the
	  instructions at the end of this article.
	
	7. Exit Windows and restart the computer. The installation is now
	  complete.
	
	Steps for Windows 95
	--------------------
	
	Follow these steps if you are using Microsoft Windows 95. When you copy
	files, do not overwrite any existing files.
	
	CAUTION: Allowing the system files to be overwritten in Windows 95 may
	cause improper system performance.
	
	1. Create a folder named C:\Artgall on your hard drive.
	
	2. Copy the following files from the D:\Artgall folder to C:\Artgall
	  folder:
	
	   - Artgall.exe
	   - Readme.txt
	
	3. Use a text editor, such as Microsoft WordPad or Notepad, to make the
	  following changes to the Artgall.ini file, which is located in the
	  Windows folder. If the Artgall.ini file does not already exist, create
	  one in the Windows folder with these entries:
	
	     [Art Gallery]
	     CD=D:
	     Timeout=0
	     DataDir=M2GDATA
	     TimeDir=M2GPTIME
	
	4. Add the program icons or shortcuts using the appropriate section
	  below as a guide.
	
	Creating Start Menu Shortcuts
	-----------------------------
	
	If you are using Windows 95, add Art Gallery to the Start Menu by
	following the instructions below:
	
	1. Click the Start button, point to Settings, and then click Taskbar.
	
	2. Click the Start Menu Programs tab.
	
	3. Click Add.
	
	4. Type the following in the Command Line box, and then click Next:
	
	     c:\artgall\artgall.exe
	
	5. In the Select Program Folder dialog box, click the Microsoft Multimedia
	  folder to select it, and then click Next.
	
	  NOTE: If Microsoft Multimedia is not listed, create it as follows:
	
	  a. Click New Folder
	
	  b. Type the following, and then click Next:
	
	        Microsoft Multimedia
	
	6. In the Select A Title For The Program dialog box, type the following,
	  and then click Finish:
	
	     Microsoft Art Gallery
	
	7. Repeat steps 3 through 6 to create the following shortcut:
	
	  Command Line: notepad.exe c:\artgall\readme.txt
	  Select A Title For The Program: Art Gallery Read Me Tips
	
	Create Program Manager Icons
	----------------------------
	
	If you use Windows Program Manager, use the steps below to create Art
	Gallery icons:
	
	1. Open the Microsoft Multimedia group. If this group does not already
	  exist, create it as follows:
	
	  a. On the File menu, click New.
	
	  b. Click Program Group, and then click OK.
	
	  c. In the Description box, type the following, and then click OK:
	
	     Microsoft Multimedia
	
	2. On the File menu, click New.
	
	3. Click Program Item, and then click OK.
	
	4. Type in the Description and Command Line as listed below, and then
	  click OK:
	
	     Description: Microsoft Art Gallery
	     Command Line: c:\artgall\artgall.exe
	
	5. Repeat steps 2 through 4 to create the following icon:
	
	     Description: Art Gallery Read Me Tips
	     Command Line: notepad.exe c:\artgall\readme.txt
	
	Additional query words: kbhowto multi media multimedia multi-media mmtitles kbmm install create
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbZNotKeyword kbArtGallery
	Version           : 1.00
	
	=============================================================================
	

{% endraw %}
