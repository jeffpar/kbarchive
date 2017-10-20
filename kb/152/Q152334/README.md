---
layout: page
title: "Q152334: Bookshelf '96-'97: Manual Installation on Windows 95/98 and NT"
permalink: /kb/152/Q152334/
---

## Q152334: Bookshelf '96-'97: Manual Installation on Windows 95/98 and NT

{% raw %}

	Article: Q152334
	Product(s): Microsoft Home Multimedia Titles
	Version(s): '96-'97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 1996-97 for Windows 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	- the operating system: Microsoft Windows NT 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following article provides instructions to manually install Microsoft
	Bookshelf '96-'97 for Windows in Windows 95/98 or Windows NT Workstation,
	version 3.51.
	
	MORE INFORMATION
	================
	
	Manually Installing Bookshelf
	-----------------------------
	
	The following instructions assume:
	
	- Your hard drive is drive C:
	
	- Your Windows folder is C:\Windows
	
	- Your CD-ROM drive is drive D
	
	- Your Destination Bookshelf folder for Windows 95/98 is:
	
	     C:\Program Files\Microsoft Reference\Bookshelf 96
	
	- Your Destination Bookshelf folder for Windows NT is:
	
	     C:\Microsoft Reference\Bookshelf 96
	
	If your hard disk drive, destination folder (subdirectory), Windows
	folder, or CD-ROM drive letters are different, replace the drive letters
	and folder names throughout this article with the drive letters and
	folder names on your computer.
	
	NOTE: The following instructions discuss copying, editing, and modifying
	folders and files. For more information about how to accomplish these
	tasks in Windows, see your Windows printed documentation or online Help.
	
	1. Create a folder named:
	
	     C:\Program Files\Microsoft Reference\Bookshelf 96
	
	  NOTE: Your destination folder will be different if you are using Windows
	  NT. Please refer to the above destination and replace the folder name
	  accordingly.
	
	2. Copy the following files from the D:\Aamsstp\App to the Bookshelf 96
	  folder you just created. The files are:
	
	     Bs96ingn.lst
	     Bs96sp32.dll
	     Bshelf96.cnt
	     Bshelf96.exe
	     Bshelf96.fts
	     Bshelf96.gid
	     Bsmmplyr.exe
	     Deco_32.dll
	     Mmb.dll
	     Mssp2_en.lex
	     Qshelf96.cnt
	     Qshelf96.exe
	     Qshelf96.fts
	     Qshelf96.gid
	     Qshelf96.hlp
	     Subwiz.exe
	     Tv32dcmp.dll
	
	3. Copy the following file from D:\ to the Bookshelf 96 folder:
	
	     Readme.txt
	
	4. If you are using Windows 95/98, install the fonts included on the
	  compact disc using the following steps:
	
	  a. Click the Start button, point to Settings, and then click Control
	     Panel.
	
	  b. Double-click Fonts.
	
	  c. On the File menu, click Install New Font.
	
	  d. Change the drive letter to match the letter of your CD-ROM drive.
	
	  e. In the Folders area, double-click the Aamsstp folder, then
	     double-click the Fonts folder.
	
	  f. Click Select All, and then click OK.
	
	  g. If messages appear that say the fonts are already installed, click
	     OK.
	
	  h. Click Close.
	
	  i. Close the Control Panel.
	
	5. If you are using Windows NT, version 3.51, install the fonts included
	  on the compact disc using the following steps:
	
	  a. Open the Control Panel and double-click the Fonts icon.
	
	  b. Click Add.
	
	  c. Change the drive letter to match the letter of your CD-ROM drive.
	
	  d. In the Folders area, double-click the Aamsstp folder, then
	     double-click the Fonts folder.
	
	  e. Click Select All.
	
	  f. Make sure the Copy Fonts To... option is selected, and then
	     click OK.
	
	  g. If messages appear that say the fonts are already installed, click
	     OK.
	
	  h. Click Close.
	
	  i. Close the Control Panel.
	
	6. Add the program icons or Start menu shortcuts. As a guide, use the
	  information in the "Creating Start Menu Shortcuts" or "Creating Program
	  Manager Icons" sections in this article.
	
	7. Run Setup.exe from the compact disc to complete the installation.
	  This program makes sure the files have been copied, and then makes
	  certain necessary additions to the Windows Registry.
	
	Creating Start Menu Shortcuts
	-----------------------------
	
	If you are using Windows Explorer, use the following instructions to add
	Bookshelf to the Start Menu:
	
	1. Click the Start button, point to Settings, and then click Taskbar.
	
	2. Click the Start Menu Programs tab.
	
	3. Click Add.
	
	4. Type the following in the Command Line box, and then click Next:
	
	     "C:\Program Files\Microsoft Reference\Bookshelf 96\Bshelf96.exe"
	
	  NOTE: Make sure you include the quotation marks.
	
	5. In the Select Program Folder dialog box, click the Microsoft
	  Reference folder, and then click Next.
	
	  NOTE: If the Microsoft Reference folder is not listed, create it
	  using the following steps:
	
	  a. Click New Folder.
	
	  b. Type the following, and then click Next:
	
	        Microsoft Reference
	
	6. In the Select A Title For The Program dialog box, type the
	  following, and then click Finish:
	
	     Bookshelf 1996-97
	
	7. Repeat steps 3-6 to create shortcuts for the following items:
	
	     Item 2
	     ------
	
	     Command Line:                  "C:\Program Files\Microsoft
	                                    Reference\ Bookshelf 96\Readme.txt"
	     Select A Title For The Program: Bookshelf 1996-97 ReadMe
	
	     Item 3
	     ------
	
	     Command Line:                   "D:\mmcat\mmcat.exe"
	     Select A Title For The Program: Microsoft Multimedia Catalog
	
	     Item 4
	     ------
	
	     Command Line:                   "C:\Program Files\Microsoft
	                                     Reference\ 
	                                     Bookshelf 96\qshelf96.exe"
	     Select A Title For The Program: QuickShelf 1996-97
	
	8. Repeat steps 3-6 for Item 4 above (QuickShelf), but select the
	  Startup folder instead of the Microsoft Reference folder.
	
	Creating Program Manager Icons
	------------------------------
	
	1. Open the Microsoft Reference group. If this group does not already
	  exist, create it using the following instructions:
	
	  a. On the File menu, click New.
	
	  b. Click Program Group, and then click OK.
	
	  c. In the Description box, type the following, and then click OK:
	
	        Microsoft Reference
	
	2. On the File menu, click New.
	
	3. Click Program Item, and then click OK.
	
	4. Type the following Description and Command Line information, and then
	  click OK:
	
	     Description:       Bookshelf 1996-97
	     Command Line:      C:\Microsoft Reference\Bookshelf 96\ 
	                        Bshelf96.exe
	
	5. Repeat steps 2-4 for each of the following items:
	
	     Item 2
	     ------
	
	     Description:       QuickShelf 1996-97
	     Command Line:      C:\Microsoft Reference\Bookshelf 96\ 
	                        qshelf96.exe
	
	     Item 3
	     ------
	
	     Description:       Bookshelf 1996-97 ReadMe
	     Command Line:      C:\ Microsoft Reference\Bookshelf 96\ 
	                        Readme.txt
	
	     Item 4
	     ------
	
	     Description:       Microsoft Multimedia Catalog
	     Command Line:      d:\mmcat\mmcat.exe
	
	6. Open the Startup group.
	
	7. On the File menu, click New.
	
	8. Click Program Item, and then click OK.
	
	9. Type the following Description and Command Line information, and then
	  click OK:
	
	     Description:       QuickShelf 1996-97
	     Command Line:      C:\Microsoft Reference\Bookshelf 96\ 
	                        qshelf96.exe"
	
	Additional query words: '96-'97 mmtitles kbmm 96 1996 97 1997 96-97 multi media multimedia multi-media mmtitles kbmm install setup set up installation
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWin98 kbOSWin95 kbOSWinSearch kbOSWinNT351 kbHomeMMsearch kbBookshelfSearch kbOSWinNTSearch kbBookShelf1996 kbBookShelf1997
	Version           : '96-'97
	
	=============================================================================
	

{% endraw %}
