---
layout: page
title: "Q140795: Bookshelf 95: Upgrading Doesn't Remove Older Versions"
permalink: /kb/140/Q140795/
---

## Q140795: Bookshelf 95: Upgrading Doesn't Remove Older Versions

{% raw %}

	Article: Q140795
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf '95 for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Bookshelf '95 for Windows 95 over an older version of Bookshelf,
	the program does not delete the older versions of the programs files even when
	you reply Yes to the upgrade prompt.
	
	This behavior occurs when you install Bookshelf '95 for Windows 95 over Bookshelf
	1993 or Bookshelf 1994.
	
	RESOLUTION
	==========
	
	To resolve this problem, remove previous versions of Bookshelf from the system.
	
	To remove Bookshelf 1994
	------------------------
	
	Run the Setup program for Bookshelf 1994, and select the Remove All option.
	
	To do this, use the following steps:
	
	1. Run Setup from the Bookshelf 1994 compact disc.
	
	2. In the maintenance mode setup, click Remove All.
	
	3. Click Yes to confirm this action.
	
	Bookshelf 1994 is now removed from the system.
	
	NOTE: When you use the Remove All option, not all files installed by Bookshelf
	are removed from the system. Because some of these files are shared or used by
	other programs, these files remain on the system to allow other programs to
	continue running correctly.
	
	To remove Bookshelf 1993
	------------------------
	
	Bookshelf 1993 requires you to manually delete system files. Bookshelf 1993 Setup
	does not contain the Remove All option.
	
	The instructions below assume the following:
	
	- Your hard disk is drive C.
	
	- Your destination folder is C:\Bshelf93
	
	- Your Windows folder is C:\Windows
	
	- Your CD-ROM drive is drive D.
	
	- Bookshelf '95 was installed in C:\Program Files\Microsoft Reference\Bookshelf
	  95.
	
	To manually delete these files, do the following:
	
	1. Delete the file Bshelf93.exe from the C:\Windows folder.
	
	2. Delete the following files from C:\Bshelf93:
	
	  Books93.dll
	  Books93.ico
	  Bsover.ico
	
	3. If you manually installed Bookshelf 93 on your system, delete the following
	  .ico files:
	
	  Bquote93.ico
	  Cquote93.ico
	  Encyc93.ico
	  Roget93.ico
	  Atlas93.ico
	  Alman93.ico
	  Dict93.ico
	
	For more information about how to delete a file or folder in Windows, see your
	Windows printed documentation or online Help.
	
	To remove Bookshelf 1993 icons
	------------------------------
	
	1. Click Start, point to Settings, and click Taskbar.
	
	2. Click Start Menu Programs, and then click Advanced.
	
	3. Click the Programs folder.
	
	4. Click the Microsoft Multimedia folder.
	
	5. Click the Bookshelf 1993 icon, and then press the DELETE key.
	
	6. Click Yes.
	
	7. Repeat steps 5 and 6 for the remaining Bookshelf 1993 icons:
	
	  Bookshelf 1993 Overview
	  Bookshelf 1993 Readme
	
	To remove a manual installation of Bookshelf 1993
	-------------------------------------------------
	
	1. Click Start, point to Settings, and click Taskbar.
	
	2. Click Start Menu Programs, then click Advanced.
	
	3. Click the Programs folder.
	
	4. Click the Microsoft Bookshelf 1993 folder.
	
	5. Click the Bookshelf 1993 icon, and press the DELETE key.
	
	6. Click Yes.
	
	7. Repeat steps 5 and 6 to remove the remaining Bookshelf 1993 icons. These
	  include the following:
	
	  Bookshelf 1993 Overview
	  Bookshelf 1993 Readme
	  Concise Quotes
	  Bartlett's Quotations
	  Concise Encyclopedia
	  Dictionary
	  Thesaurus
	  Atlas
	  1993 Almanac
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Bookshelf 95 for Windows 95. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 1995multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeMMsearch kbBookshelfSearch kbBookShelf1995
	Version           : WINDOWS:
	
	=============================================================================
	

{% endraw %}
