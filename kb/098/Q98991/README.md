---
layout: page
title: "Q98991: Bookshelf 1993: Manual Installation Instructions"
permalink: /kb/098/Q98991/
---

## Q98991: Bookshelf 1993: Manual Installation Instructions

	Article: Q98991
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1993 edition,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows 1993 edition 
	- Microsoft Multimedia Viewer, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides instructions to manually set up Bookshelf 1993.
	
	MORE INFORMATION
	================
	
	These instructions assume:
	
	- Your hard drive is drive C:
	
	- Your Windows folder is C:\Windows
	
	- Your CD-ROM drive is drive D
	
	- Your Destination folder is C:\Bshelf93
	
	If your hard disk drive, destination folder, Windows folder, or CD-ROM drive
	letters are different, replace the drive letters and folder names throughout
	this article with the drive letters and folder names on your computer.
	
	NOTE: The following instructions discuss copying, editing, and modifying folders
	(directories) and files. For more information about how to accomplish these
	tasks in Windows, see your Windows printed documentation or online Help.
	
	Steps to Manually Install Bookshelf 1993
	----------------------------------------
	
	1. Copy D:\Viewer\Bshelf93.exe to C:\Windows.
	
	2. Copy the following files from D:\Viewer To C:\Windows\System:
	
	  If you are using Windows 95 or Windows NT, do not overwrite any existing files
	  during this step.
	
	  CAUTION: Allowing system files to be overwritten in Windows 95 or Windows NT
	  may cause improper system performance.
	
	  - Ctl3d.dll
	  - Mmp.dll
	  - Msacm.drv
	  - Msadpcm.acm
	  - Mvaff.dll
	  - Mvapi2.dll
	  - Mvbmp2.dll
	  - Mvbrkr2.dll
	  - Mvfs2.dll
	  - Mvftsui2.dll
	  - Mviewer2.exe
	  - Mvmci2.dll
	  - Mvsrch2.dll
	  - Mvtitle2.dll
	  - Qkeys.drv
	
	3. Create a folder named Bshelf93 on drive C.
	
	  For example, at the MS-DOS command prompt, type the following and press the
	  ENTER key:
	
	  "md c:\bshelf93" (without the quotation marks)
	
	4. Copy D:\Viewer\Books93.dll to C:\Bshelf93.
	
	5. Copy the following files from D:\Books to C:\Bshelf93:
	
	  - Alman93.ico
	  - Atlas93.ico
	  - Books93.ico
	  - Bquote93.ico
	  - Bsover.ico
	  - Cquote93.ico
	  - Dict93.ico
	  - Encyc93.ico
	  - Roget93.ico
	
	6. The Bookshelf Setup program installs special screen fonts. To install these
	  fonts manually, do the following:
	  a. Open the Windows Control Panel, and double-click Fonts.
	
	  b. If you are using Windows 95, on the File menu, click Install New Font.
	
	     If you are using Windows 3.x, click Add.
	
	  c. Change the drive to your CD-ROM drive.
	
	  d. Double-click the Viewer folder.
	
	  e. Click Select All to select all the fonts. The fonts are:
	
	  - Lucida Sans B 10,12,14
	  - Lucida Sans B1 10,12,14
	  - Lucida Sans B2 10,12,14
	  - Symbol B
	
	  f. Make sure the Copy Fonts To... box is selected.
	
	  g. Click OK.
	
	7. Use a text editor, such as Microsoft Notepad, to make the following changes
	  to the Viewer.ini file, which is located in the Windows folder. If the
	  Viewer.ini file does not already exist, create one in the Windows folder with
	  these entries:
	
	        [Files]
	        BOOKS93.MVB=D:\BOOKS\,Please insert the Bookshelf - 1993 CD.
	        MVTITLE2.DLL=C:\WINDOWS\SYSTEM\ 
	        MVFS2.DLL=C:\WINDOWS\SYSTEM\ 
	        MVSRCH2.DLL=C:\WINDOWS\SYSTEM\ 
	        MVAPI2.DLL=C:\WINDOWS\SYSTEM\ 
	        MVBMP2.DLL=C:\WINDOWS\SYSTEM\ 
	        MVBRKR2.DLL=C:\WINDOWS\SYSTEM\ 
	        MVMCI2.DLL=C:\WINDOWS\SYSTEM\ 
	        MVIEWER2.DLL=C:\WINDOWS\SYSTEM\ 
	        MVAFF.DLL=C:\WINDOWS\SYSTEM\ 
	        MVFTSUI2.DLL=C:\WINDOWS\SYSTEM\ 
	        CTL3D.DLL=C:\WINDOWS\SYSTEM\ 
	        MMP.DLL=C:\WINDOWS\SYSTEM\ 
	        BOOKS93.DLL=C:\BSHELF93
	
	        [MVAPI]
	        Version=2
	        File=MVAPI2.DLL
	
	8. Use a text editor to make the following changes to the Windows initialization
	  files, which are located in the Windows folder:
	
	  Changes to the Win.ini File
	  ---------------------------
	
	        [Microsoft Word 2.0]
	        LoadToolbarBitmaps=Yes
	
	        [Quickeys]
	        +^%Q=BS93 3I,BSHELF93 /I:Cquote
	        +^%E=BS93 5I,BSHELF93 /I:Encyc
	        +^%W=BS93 7I,BSHELF93 /I:Alman
	        +^%T=BS93 6I,BSHELF93 /I:Roget
	        +^%D=BS93 4I,BSHELF93 /I:Dict
	        +^%B=BS93 2I,BSHELF93 /I:Bquote
	        +^%A=BS93 1I,BSHELF93 /I:Atlas
	
	        [Bookshelf]
	        TBOX=1
	        SendToDlg=1
	        Integration=2
	        LastQuote=0
	        ViewerPath=C:\WINDOWS\SYSTEM\MVIEWER2
	        BooksPath=D:\BOOKS\ 
	        HelpFile=D:\WORD\WINWORD.HLP
	
	  Changes to the System.ini File - Windows 95
	  -------------------------------------------
	
	        [boot]
	        drivers=MMSYSTEM.DLL qkeys.drv
	
	        [drivers]
	        qkeys=qkeys.drv
	
	  Changes to the System.ini File - Windows 3.x
	  --------------------------------------------
	
	        [boot]
	        drivers=MMSYSTEM.DLL qkeys.drv
	
	        [drivers]
	        wavemapper=msacm.drv
	        qkeys=qkeys.drv
	
	9. Add the program icons or Start menu shortcuts. As a guide, use the
	  appropriate section below.
	
	Restart Windows to complete your installation.
	
	Creating Start Menu Shortcuts
	-----------------------------
	
	If you are using Windows 95, add Bookshelf 1993 to the Start Menu by following
	these instructions:
	
	1. With your right mouse button, click the taskbar, and then click Properties.
	
	2. Click the Start Menu Programs tab, and then click Advanced.
	
	3. Double-click the Programs folder
	
	4. Look for the Microsoft Bookshelf - 1993 folder. If it is not listed, create
	  it as follows:
	  a. On the File menu, point to Folder, and then click New.
	
	  b. Type the following and then press the Enter key:
	
	  "Microsoft Bookshelf - 1993" (without the quotation marks)
	
	5. Double-click the Microsoft Bookshelf - 1993 folder to open it.
	
	6. Add a shortcut for the item listed below as follows:
	  a. On the File menu, point to New, and then click Shortcut.
	
	  b. Type the information for the Command Line, then click Next.
	
	  c. Type the information for the name, and then click Finish.
	
	  Item 1
	  ------
	
	     Command line:        c:\windows\system\mviewer2.exe books93.mvb
	     Name (Description):  Bookshelf 1993
	     Icon File Name:      c:\bshelf93\books93.ico
	
	7. If an Icon File Name is listed for the item, do the following to change the
	  icon that appears in the Start Menu:
	  a. With your right mouse button, click the shortcut, and then click
	     Properties.
	
	  b. Click the Shortcut tab, and then click Change Icon
	
	  c. Type the information for the File Name.
	
	  d. Click OK, and then click OK again to finish.
	
	8. (Optional) Repeat step 6 & 7 for items 2-8 in the Item Table section
	  below.
	
	Creating Program Manager Icons
	------------------------------
	
	If you are using Windows Program Manager, create the Bookshelf 1993 icons using
	the following instructions:
	
	1. Open the Microsoft Bookshelf - 1993 program group. If this group does not
	  already exist, create it as follows:
	  a. On the File menu, click New.
	
	  b. Click Program Group, and then click OK.
	
	  c. In the Description box, type the following, and then click OK:
	
	  "Microsoft Bookshelf - 1993" (without the quotation marks)
	
	2. On the File menu, click New.
	
	3. Click Program Item, and then click OK.
	
	4. Type the Description and Command Line as listed below:
	
	     Description:       Bookshelf 1993
	     Command Line:      c:\windows\system\mviewer2.exe books93.mvb
	
	5. Click the Change Icon button. In the Change Icon dialog box, type the Icon
	  File Name as listed below, and then click OK.
	
	     Icon File Name:    c:\bshelf93\books93.ico
	
	6. (Optional) Repeat steps 2 through 5 for each in the Item Table section
	
	below.
	
	Item Table
	----------
	
	  Item 2
	  ------
	
	  Description:     Concise Quotes
	  Command Line:    c:\windows\system\mviewer2.exe -iccq_contents
	                      books93.mvb
	  Icon File Name:  c:\bshelf93\cquote93.ico
	
	  Item 3
	  ------
	
	  Description:     Bartletts Quotations
	  Command Line:    c:\windows\system\mviewer2.exe -ibfq_contents
	                      books93.mvb
	  Icon File Name:  c:\bshelf93\bquote93.ico
	
	  Item 4
	  ------
	
	  Description:     Concise Encyclopedia
	  Command Line:    c:\windows\system\mviewer2.exe -icce_contents
	                      books93.mvb
	  Icon File Name:  c:\bshelf93\encyc93.ico
	
	  Item 5
	  ------
	  Description:    Dictionary
	  Command Line:    c:\windows\system\mviewer2.exe -iahd_contents
	                    books93.mvb
	  Icon File Name:  c:\bshelf93\dict93.ico
	
	  Item 6
	  ------
	
	  Description:     Thesaurus
	  Command Line:    c:\windows\system\mviewer2.exe -iret_contents
	                      books93.mvb
	  Icon File Name:  c:\bshelf93\roget93.ico
	
	  Item 7
	  ------
	
	  Description:     Atlas
	  Command Line:    c:\windows\system\mviewer2.exe -iham_contents
	                      books93.mvb
	  Icon File Name:  c:\bshelf93\atlas93.ico
	
	  Item 8
	  ------
	  Description:     1993 Almanac
	  Command Line:    c:\windows\system\mviewer2.exe -iwa_contents
	                      books93.mvb
	  Icon File Name:  c:\bshelf93\alman93.ico
	
	  Item 9
	  ------
	
	  Description:     Bookshelf 1993 Overview
	  Command Line:    winhelp.exe -imenuhelpdemo d:\books\bks93.hlp
	  Icon File Name:  c:\bshelf93\bsover.ico
	
	Additional query words: 1993 manual install bookshelf kbmm multi media multimedia multi-media books 93 setup usage
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbBookshelfSearch kbBookShelf1993 kbMMViewer200
	Version           : :1993 edition,2.0
	
	=============================================================================
	
