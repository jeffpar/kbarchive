---
layout: page
title: "Q139318: 1996 Encarta World Atlas: Manual Installation Instructions"
permalink: /kb/139/Q139318/
---

## Q139318: 1996 Encarta World Atlas: Manual Installation Instructions

{% raw %}

	Article: Q139318
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1996
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 96 World Atlas for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides instructions to manually install Encarta 96 World Atlas.
	
	MORE INFORMATION
	================
	
	The installation requires approximately 7 MB of free hard disk space.
	
	These instructions assume:
	
	- Your hard disk is drive C:
	
	- Your Windows folder is C:\Windows
	
	- Your CD-ROM drive is drive D
	
	- Your destination folder for Encarta in Windows 95/98 is:
	
	     C:\Program Files\Microsoft Reference\Encarta 96 World Atlas
	
	- Your destination folder for Encarta in Windows NT is:
	
	     C:\Microsoft Reference\Encarta 96 World Atlas
	
	If your hard disk, destination folder, Windows folder, or CD-ROM
	drive letters are different, replace the drive letters and folder
	names throughout this article with the drive letters and folder names
	on your computer.
	
	NOTE: The following instructions discuss copying, editing, and modifying
	folders (directories) and files. For more information about how to
	accomplish these tasks in Windows, see your Windows printed documentation
	or online Help.
	
	1. Create a folder named <destination>.
	
	  NOTE: As mentioned above, the <destination> will vary depending on the
	  operating system you are installing to.
	
	2. Create a folder in the <destination> folder named System.
	
	3. Extract files from the compact disc into the appropriate folders on the
	  hard disk. One at a time, enter the following commands at an MS-DOS
	  prompt, and press ENTER at the end of each line:
	
	     extract /e /l <destination>\system d:\msworld.cab mv*.*
	     extract /e /l <destination>\system d:\msworld.cab bluthing.dll
	     extract /e /l <destination>\system d:\msworld.cab deco_32.dll
	     extract /e /l <destination>\system d:\msworld.cab world_hd.mad
	     extract /e /l <destination>\system d:\msworld.cab world_lc.mad
	     extract /e /l <destination> d:\msworld.cab complinc.dll
	     extract /e /l <destination> d:\msworld.cab msworld.exe
	     extract /e /l c:\windows d:\msworld.cab *.ttf
	
	  NOTE: The first command automatically extracts the following files:
	
	   - Mvbk14n.dll
	   - Mvc114n.dll
	   - Mvfs14n.dll
	   - Mvsr14n.dll
	   - Mvtl14n.dll
	   - Mvut14n.dll
	
	  NOTE: The last command automatically extracts the following font files:
	
	   - Msgeoab1.ttf   Arial Special G1 Bold
	   - Msgeoab2.ttf   Arial Special G2 Bold
	   - Msgeoai1.ttf   Arial Special G1 Italic
	   - Msgeoai2.ttf   Arial Special G2 Italic
	   - Msgeoar1.ttf   Arial Special G1
	   - Msgeoar2.ttf   Arial Special G2
	   - Msgeoax1.ttf   Arial Special G1 Bold Italic
	   - Msgeoax2.ttf   Arial Special G2 Bold Italic
	   - Msgeonb1.ttf   Arial Narrow Special G1 Bold
	   - Msgeonb2.ttf   Arial Narrow Special G2 Bold
	   - Msgeoni1.ttf   Arial Narrow Special G1 Italic
	   - Msgeoni2.ttf   Arial Narrow Special G2 Italic
	   - Msgeonr1.ttf   Arial Narrow Special G1
	   - Msgeonr2.ttf   Arial Narrow Special G2
	   - Msgeotb1.ttf   Times New Roman Special G1 Bold
	   - Msgeotb2.ttf   Times New Roman Special G2 Bold
	   - Msgeoti1.ttf   Times New Roman Special G1 Italic
	   - Msgeoti2.ttf   Times New Roman Special G2 Italic
	   - Msgeotr1.ttf   Times New Roman Special G1
	   - Msgeotr2.ttf   Times New Roman Special G2
	   - Msgeotx1.ttf   Times New Roman Special G1 Bold Italic
	   - Msgeotx2.ttf   Times New Roman Special G2 Bold Italic
	
	4. Copy the Readme.wri file on the compact disc to <destination>.
	
	5. If you are using Windows NT, perform the following step to install the
	  special World Atlas fonts:
	
	  a. Open Control Panel and double-click Fonts.
	
	  b. Click Add.
	
	  c. Click Select All.
	
	  d. Make sure the Copy Fonts To option is selected, and then click
	     OK.
	
	  e. Click Close.
	
	6. Add the program icons or Start menu shortcuts. As a guide, use the
	  appropriate section below.
	
	7. Run the Setup.exe program from the compact disc to complete the World
	  Atlas installation. This program checks if the files have been copied,
	  and then makes certain necessary additions to the Windows Registry.
	
	Creating Start Menu Shortcuts
	-----------------------------
	
	If you are using Windows 95/98, add Encarta 96 World Atlas to the Start
	Menu by following these instructions:
	
	1. Click Start, point to Settings, and then click Taskbar or Taskbar &
	  Start Menu.
	
	2. Click the Start Menu Programs tab.
	
	3. Click Add.
	
	4. In the Command Line box, type the following line, and then click
	  Next:
	
	     <destination>\msworld.exe
	
	5. In the Select Program Folder dialog box, click the Microsoft
	  Reference folder, and then click Next.
	
	  NOTE: If the Microsoft Reference folder is not listed, create it
	  using the following steps:
	
	  a. Click New Folder.
	
	  b. Type the following line, and then click Next:
	
	        Microsoft Reference
	
	6. In the Select A Title For The Program dialog box, type the
	  following line, and then click Finish:
	
	     Encarta 96 World Atlas
	
	7. Repeat steps 3 through 6 to create shortcuts for the following
	  items:
	
	     Command Line:                    <destination>\Readme.wri
	     Select A Title For The Program:  Encarta 96 World Atlas Information
	
	     Command Line:                    d:\mmcat\catppi.exe
	     Select A Title For The Program:  Microsoft Multimedia Catalog
	
	Creating Program Manager Icons
	------------------------------
	
	If you are using Windows Program Manager, create the Encarta 96 World
	Atlas icons using the following instructions:
	
	1. Open the Microsoft Reference group. If this group does not already
	  exist, create it as follows:
	
	  a. On the File menu, click New.
	
	  b. Click Program Group, and then click OK.
	
	  c. In the Description box, type the following, and then click OK:
	
	        Microsoft Reference
	
	2. On the File menu, click New.
	
	3. Click Program Item, and then click OK.
	
	4. Type the Description and Command Line as listed below, and then
	  click OK:
	
	     Description:       Encarta 96 World Atlas
	     Command Line:      <destination>\Msworld.exe
	
	5. Repeat steps 2 through 4 for each item listed below:
	
	     Description:       Encarta 96 World Atlas Information
	     Command Line:      <destination>\Readme.wri
	
	     Description:       Microsoft Multimedia Catalog
	     Command Line:      d:\mmcat\catppi.exe
	
	Additional query words: kbhowto 1.00 1996 96 multi media multimedia multi-media mmtitles kbmm install
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaWorldAtlas1996
	Version           : 1996
	
	=============================================================================
	

{% endraw %}
