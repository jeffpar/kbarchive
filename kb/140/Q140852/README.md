---
layout: page
title: "Q140852: Encarta 1996: Manual Install Instructions for Windows 95"
permalink: /kb/140/Q140852/
---

## Q140852: Encarta 1996: Manual Install Instructions for Windows 95

{% raw %}

	Article: Q140852
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:95; winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	1996
	WINDOWS
	kbusage kbmm kbsetup kbref kbfaq
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows NT 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides instructions to manually install Encarta Encyclopedia for
	Windows, 1996 edition in Windows 95 and Windows NT Workstation version 3.51.
	
	MORE INFORMATION
	================
	
	Manually Installing Encarta Encyclopedia
	----------------------------------------
	
	The following instructions assume:
	
	- Your hard drive is drive C:
	- Your Windows folder is C:\Windows
	- Your CD-ROM drive is drive D
	- Your destination folder for Windows 95 is:
	
	  C:\Program Files\Microsoft Reference\Encarta 96 Encyc
	
	- Your destination folder for Windows NT is:
	
	  C:\Microsoft Reference\Encarta 96 Encyclopedia
	
	If your hard drive, destination folder, Windows folder, or CD-ROM drive letters
	are different, replace the drive letters and folder names throughout this
	article with the drive letters and folder names on your computer.
	
	NOTE: The following instructions discuss copying, editing, and modifying folders
	(directories) and files. For more information about how to accomplish these
	tasks in Windows, see your Windows printed documentation or online Help.
	
	Manual Installation Instructions for Windows 95 and Windows NT
	--------------------------------------------------------------
	
	1. Create a folder named:
	
	  C:\Program Files\Microsoft Reference\Encarta 96 Encyc
	
	NOTE: Your destination folder will be different if you are using Windows NT.
	Please refer to the above destination and replace the folder name accordingly.
	
	2. Create a folder in the C:\Program Files\Microsoft Reference\Encarta 96 Encyc
	  folder named:
	
	  Yearbook
	
	3. Create a folder in the C:\Program Files\Microsoft Reference\Encarta 96 Encyc
	  folder named Setup.
	
	4. Copy the following files from the D:\Aamstp32\System folder into the
	  C:\Windows\System folder:
	
	  Mvbk14n.dll
	  Mvtl14n.dll
	  Mvsr14n.dll
	  Mvut14n.dll
	  Mvmg14n.dll
	  Mvcl14n.dll
	  Mvfs14n.dll
	
	5. Copy the following file from the D:\Encarta\Encarapi folder into the
	  C:\Windows\System folder:
	
	  Encapi32.dll
	
	6. Copy the following files from the D:\Aamsstp\Fonts folder into the
	  C:\Windows\Fonts folder:
	
	  Msref1.ttf
	  Msref2.ttf
	  Arial.ttf
	  Symbol.ttf
	  Phonetic.fon
	  Msgeotr1.ttf
	  Msgeotr2.ttf
	
	7. Copy the following files from the D:\Encarta folder into the C:\Program
	  Files\Microsoft Reference\Encarta 96 Encyc folder:
	
	  Encart96.dat
	  Deco_32.dll
	  Wtrmrk32.dll
	  Enc9632.exe
	  Enc96f.str
	
	8. Copy the following file from the D:\Encarta\Yearbook folder into the
	  C:\Program Files\Microsoft Reference\Encarta 96 Encyc folder:
	
	  Ybstate.dat
	
	9. Copy the following file from the D:\Encarta\Yearbook folder into the
	  C:\Program Files\Microsoft Reference\Encarta 96 Encyc\Yearbook folder:
	
	  Yb895a.ybk
	
	10. Copy the following files from the D:\Aamstp32 folder into the C:\Program
	  Files\Microsoft Reference\Encarta 96 Encyc\Setup folder:
	
	  Mssetup.dll
	  Enc96-32.dll
	  Complinc.dll
	
	11. Copy the Setup.exe file on the compact disc to C:\Program Files\Microsoft
	  Reference\Encarta 96 Encyc\Setup folder.
	
	12. Copy the following file from the D:\Aamsstp folder into the C:\Program
	  Files\Microsoft Reference\Encarta 96 Encyc\Setup folder:
	
	  Encrta96.inf
	
	13. Copy the Readme.wri file on the compact disc to C:\Program Files\Microsoft
	  Reference\Encarta 96 Encyc.
	
	14. If you are using Windows NT, do the following to install the Encarta fonts:
	
	  a. Open the Control Panel and double-click the Fonts icon.
	
	  b. Click Add.
	
	  c. Click Select All.
	
	  d. Make sure the Copy Fonts To... option is selected, and then click OK.
	
	  e. Click Close.
	
	15. Add the program icons or Start menu shortcuts. As a guide, use the
	  information in the Creating Start Menu Shortcuts or Creating Program Manager
	  Icons sections in this article.
	
	16. Run Setup.exe from the compact disc to complete the installation. This
	  program makes sure the files have been copied, and then makes certain
	  necessary additions to the Windows Registry.
	
	Creating Start Menu Shortcuts
	-----------------------------
	
	If you are using Windows 95, add Encarta 96 Encyclopedia to the Start Menu by
	following these instructions:
	
	1. Click the Start button, point to Settings, and then click Taskbar.
	
	2. Click the Start Menu Programs tab.
	
	3. Click Add.
	
	4. Type the following in the Command Line box, and then click Next:
	
	  C:\Program Files\Microsoft Reference\Encarta 96 Encyc\Enc9632.exe
	
	  NOTE: Be sure to include the quotation marks.
	
	5. In the Select Program Folder dialog box, click the Microsoft Reference
	  folder, and then click Next.
	
	  NOTE: If the Microsoft Reference folder is not listed, create it using the
	  following steps:
	
	  a. Click New Folder.
	
	  b. Type the following, and then click Next:
	
	  Microsoft Reference
	
	6. In the Select A Title For The Program dialog box, type the following, and
	  then click Finish:
	
	  Encarta 96 Encyclopedia
	
	7. Repeat steps 3 through 6 to create shortcuts for the following items:
	
	  Command Line: "C:\Program Files\Microsoft Reference\Encarta 96
	  Encyc\Readme.wri"
	
	  NOTE: Be sure to include the quotation marks.
	
	  Select A Title For The Program: Encarta 96 Encyclopedia Information
	  Command Line: D:\mmcat\mmcat.exe
	
	  Select A Title For The Program: Microsoft Multimedia Catalog
	
	Creating Program Manager Icons
	------------------------------
	
	If you are using Windows Program Manager in Windows 95, create the Encarta icons
	using the following instructions:
	
	1. Open the Microsoft Reference group. If this group does not already exist,
	  create it as follows:
	
	  a. On the File menu, click New.
	
	  b. Click Program Group, and then click OK.
	
	  c. In the Description box, type the following, and then click OK:
	
	  Microsoft Reference
	
	2. On the File menu, click New.
	
	3. Click Program Item, and then click OK.
	
	4. Type the Description and Command Line as listed below, and then click OK:
	
	  Description: Encarta 96 Encyclopedia
	  Command Line: <destination>\enc9632.exe
	
	5. Repeat steps 2 through 4 for each item listed below:
	
	  Description: Encarta 96 Encyclopedia Information
	
	  Command Line: <destination>\Readme.wri
	
	  Description: Microsoft Multimedia Catalog
	  Command Line: d:\mmcat\mmcat.exe
	
	Additional query words: kbhowto 1996 96 multi media multimedia multi- mmtitles kbmm howto kbimu multi-media mm
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWin95 kbOSWinSearch kbHomeProdSearch kbOSWinNT351 kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbOSWinNTSearch kbEncartaEnCyc1996
	Version           : WINDOWS:95; winnt:3.51
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
