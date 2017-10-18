---
layout: page
title: "Q101464: Bookshelf 1991 Err Msg: Close Font Progress"
permalink: kb/101/Q101464/
---

## Q101464: Bookshelf 1991 Err Msg: Close Font Progress

	Article: Q101464
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1991 edition,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows 1991 edition 
	- the operating system: Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing Bookshelf into Windows version 3.1, you may receive the
	following error message when Setup is completed:
	
	  Fatal Error CloseFontProgress:
	  Error writing to the system setup file:
	  <drive:>\<windowsdir>\SYSTEM\SETUP.INF
	
	where <drive:> is your hard drive and <windowsdir> is your WINDOWS
	directory.
	
	CAUSE
	=====
	
	Bookshelf 1991 Setup fails because the SETUP.INF file is too large and the
	[Fonts] section is not being successfully loaded into the 64kb buffer that
	Windows 3.x provides.
	
	WORKAROUND
	==========
	
	The following are workarounds to complete the installation of Bookshelf.
	
	Workaround 1
	------------
	
	Edit the SETUP.INF file:
	
	1. Make a backup of the SETUP.INF file.
	
	2. Open SETUP.INF in a Word Processor (such as Write, it will be too large for
	  Notepad). You can use almost any editor as long as you ensure no formatting
	  is saved with the file. The SETUP.INF file is too large to open in the
	  Notepad program.
	
	3. Search for the [Fonts] section of the SETUP.INF file.
	
	4. Select the entire [Fonts] section including the heading "[Fonts]".
	
	5. Cut the selected section.
	
	6. Paste the information to the top of the file below the [RUN] section.
	
	7. Save the changes and rerun Bookshelf Setup.
	
	Workaround 2
	------------
	
	Reduce the size of the SETUP.INF file.
	
	1. Make a backup of the SETUP.INF file.
	
	2. Open the SETUP.INF file in a text editor (such as Notepad). You may use any
	  editor as long as you ensure no formatting is saved with the file.
	
	3. Remove only the comment entries (that is, lines preceded by a semicolon [;])
	
	4. Save the file and rerun Bookshelf Setup.
	
	Workaround 3
	------------
	
	Use a manual installation of Bookshelf to complete the setup.
	
	When Setup encounters the error, Bookshelf has been completely setup. The only
	thing remaining to do is create the Bookshelf Program Group and insert the
	Bookshelf icons. This information is described in the Bookshelf manual
	installation instructions. For additional information about manually setting up
	Bookshelf, query on the following words in the Microsoft Knowledge Base using
	the CDG database:
	
	  manual setup Bookshelf
	
	
	Additional query words: fonts error message Viewer 1.00 Usage closed install 64k 64kb buffer
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbHomeMMsearch kbZNotKeyword6 kbBookshelfSearch kbBookShelf1991 kbOSWin310
	Version           : :1991 edition,3.1
	
	=============================================================================
	
