---
layout: page
title: "Q150320: Bookshelf '96-'97: No Sound or Setup Using UNC Path"
permalink: /kb/150/Q150320/
---

## Q150320: Bookshelf '96-'97: No Sound or Setup Using UNC Path

	Article: Q150320
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:3.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 1996-97 for Windows 
	- the operating system: Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Bookshelf '96-'97 from a UNC network path to a computer using
	Microsoft Windows operating system version 3.x, you receive the following error
	message:
	
	  Bad Argument Value. STOP.
	  Bad Argument Value:
	  Number 1
	  File: .\path.c, Line: 392
	  <OK>
	
	After you click OK, you see the following message:
	
	  Setup Message!
	  Could not open the file named:
	  '<UNC Path>'.
	  <Abort>,<Retry><Ignore>
	
	If you click Ignore, Bookshelf appears to install successfully, but some features
	of the program, such as sound in animations with audio, do not work correctly.
	
	NOTE: A UNC network path is a path specifying a particular network server and
	share. For example:
	
	  \\Bookshelf\Install\Setup.exe.
	
	Compare this to using a standard drive connection, such as:
	
	  D:\Setup.exe.
	
	
	RESOLUTION
	==========
	
	Remove the Bookshelf program files, if installed, and run Setup from a local
	CD-ROM drive.
	
	MORE INFORMATION
	================
	
	Bookshelf '96-'97 Setup is not designed to be run from a network drive.
	
	
	Additional query words: 1996 '96 multi media multimedia multi-media mmtitles kbmm kbsetup
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbHomeMMsearch kbZNotKeyword6 kbBookshelfSearch kbBookShelf1996 kbBookShelf1997 kbOSWin310 kbOSWin311 kbOSWin300 kbOSWin300a
	Version           : WINDOWS:3.x
	
	=============================================================================
	
