---
layout: page
title: "Q122930: Kids: Program Icons and Groups Disappear from Program Manager"
permalink: kb/122/Q122930/
---

## Q122930: Kids: Program Icons and Groups Disappear from Program Manager

	Article: Q122930
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,1.1,1.1a,3.1,3.11
	Operating System(s): 
	Keyword(s): kbtlckbfaq
	Last Modified: 08-NOV-2001
	
	WINDOWS
	kbother kbprb kbfaq
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, versions 1.0, 1.1, 1.1a 
	- Microsoft Fine Artist for Windows, versions 1.0, 1.1, 1.1a 
	- Microsoft Explorapedia series: World of Nature for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores Inside the Earth for Windows, version 1.0 
	- the operating system: Microsoft Windows versions 3.1, 3.11 
	- Microsoft Explorapedia series: World of People for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Human Body for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Ocean for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Solar System for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install one of the applications listed at the top of this article, the
	next time you enter Microsoft Windows 3.x, the icon(s) or program groups may not
	be visible in Program Manager. This behavior commonly occurs when the
	Progman.ini file contains a corrupt character(s), and can affect any
	application's icons.
	
	RESOLUTION
	==========
	
	You may be able to clear up the character(s) causing the problem by editing the
	Progman.ini file. (The following directions assume your Windows folder resides
	in drive C. If your Windows folder is in a different drive, replace C below with
	the letter of your drive.)
	
	Before editing ANY system file, always make a backup copy:
	
	1. In File Manager, click the Windows folder.
	
	2. On the File menu, click Copy. The current folder should read C:\Windows.
	
	3. In the From box, type:
	
	  "progman.ini"
	
	4. In the To box, type the following and click OK:
	
	  "progman.old"
	
	To repair the Progman.ini file:
	
	1. In the Accessories group in Program Manager, run Notepad.
	
	2. On the File menu in Notepad, click Open. Switch to the Windows folder, and
	  click All Files under List Files Of Type.
	
	3. Click Progman.Ini and then click OK.
	
	4. In the [Groups] section of the Progman.ini file, you will see a listing that
	  looks something like the following:
	
	  Group1=C:\WINDOWS\MAIN.GRP
	        Group2=C:\WINDOWS\ACCESSOR.GRP
	        Group3=C:\WINDOWS\GAMES.GRP
	        Group4=C:\WINDOWS\STARTUP.GRP
	        Group5=C:\WINDOWS\APPLICAT.GRP
	        Group6=C:\WINDOWS\APPLICA0.GRP
	        Group7=C:\WINDOWS\MICROSOF.GRP
	
	  If any line has a character in it that doesn't look like a standard keyboard
	  character, delete that entire line.
	
	  You may need to delete all lines that appear after the first corrupt character
	  because each line after it may also be damaged.
	
	  Although unlikely, this may cause additional icons to disappear from Program
	  Manager, but you can rebuild them using the procedure outlined below in the
	  "To Rebuild Program Manager Icons" section of this article.
	
	5. On the File menu, click Exit. When prompted, choose Yes to save your changes.
	
	6. Exit and restart Windows.
	
	To rebuild Program Manager icons:
	
	1. Double-click the group icon to open the window in which you want to place the
	  icon.
	
	2. On the File menu, click New.
	
	3. Click Program Item and choose OK.
	
	4. In the Description box, type the label you would like to display for the
	  icon. For example, "Creative Writer." (without the quotation marks)
	
	5. In the Command Line box, type the name of the program file, including the
	  path and extension. In most cases, the program has been installed to the
	  Mskids folder. If so, your command line should look like one of the
	  following:
	
	  c:\mskids\writer.exe (for Creative Writer)
	
	  -or-
	
	  c:\mskids\artist.exe (for Fine Artist)
	
	  -or-
	
	  c:\mskids\explora\nature.exe (for Explorapedia World of Nature)
	
	  -or-
	
	  c:\mskids\explora\people\people.exe (for Explorapedia World of People)
	
	  -or-
	
	  c:\mskids\msbsolar\msbsolar.exe (for Magic Shool Bus, Explores The Solar
	  System)
	
	  -or-
	
	  c:\mskids\msbhuman\msbhuman.exe (for Magic School Bus, Explores The Human
	  Body)
	
	  You can also use the Browse button to locate the file.
	
	6. Click OK. The Working Directory, Shortcut Key, and Icon use default settings.
	
	After following these steps, your icons should be restored. These same steps can
	be used to restore icons for any application.
	
	MORE INFORMATION
	================
	
	To prevent this type of problem, run maintenance programs on your hard drive on
	a regular basis, such as those included with MS-DOS listed below:
	
	- CHKDSK (or SCANDISK if you are using MS-DOS 6.2 or later) analyzes the
	  directory on a disk, comparing the directory entries with the locations and
	  lengths of the files, and reports any errors it finds.
	
	- DEFRAG reorganizes files on disks to optimize performance.
	
	For more information about CHKDSK, SCANDISK, or DEFRAG, see your MS-DOS
	documentation.
	
	
	Additional query words: 1.00 1.10 1.10a 3.10 3.11 win mskids icon disappear missing gone msb magic school bus magicbus schoolbus msb-hb msb-ss msbhb winmsbhuman msbhuman msbss frizz frizzle liz cd-rom cd explorapedia nature people world tad mczee kids tadpole xplor program groups icons
	
	======================================================================
	Keywords          : kbtlc kbfaq
	Technology        : kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbZNotKeyword6 kbZNotKeyword kbZNotKeyword2 kbKidsSearch kbCreativeWriter100 kbCreativeWriter110 kbCreativeWriter110a kbExplorapediaNature100 kbExplorapediaPeople100 kbFineArtist100 kbFineArtist110 kbFineArtist110a kbScholasticHuman kbScholasticOcean kbScholasticSolar kbScholasticEarth kbOSWin310 kbOSWin311 kbMSBSearch
	Version           : WINDOWS:1.0,1.1,1.1a,3.1,3.11
	Issue type        : kbprb
	
	=============================================================================
	
