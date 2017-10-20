---
layout: page
title: "Q124591: Multimedia Applications: &quot;Setup Was Unable to Find SHARE.EXE&quot;"
permalink: /kb/124/Q124591/
---

## Q124591: Multimedia Applications: &quot;Setup Was Unable to Find SHARE.EXE&quot;

{% raw %}

	Article: Q124591
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0,1994 edition,1994-1995 edition,1995 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cinemania 1995 edition 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- Microsoft Bookshelf '95 for Windows 95 
	- Microsoft Complete Baseball for Windows, 1994 edition (see below) 
	- Microsoft Complete Basketball for Windows 1994-1995 edition 
	- Microsoft Dangerous Creatures for Windows, version 1.0 
	- Microsoft Ancient Lands for Windows, version 1.0 
	- Microsoft The Ultimate Frank Lloyd Wright, version 1994 edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Multimedia applications that use the ACME Setup program may display the
	following error message under certain conditions:
	
	  Setup was unable to find SHARE.EXE on your system. It is required to run this
	  application. Please fix your system and rerun Setup.
	
	MORE INFORMATION
	================
	
	The version of the ACME Setup program used by these applications requires and
	searches for the SHARE.EXE command first by checking for its presence and
	location in the CONFIG.SYS or AUTOEXEC.BAT files, and second by searching the
	PATH specified in the AUTOEXEC.BAT file. If it cannot find SHARE.EXE, it
	displays the "Unable to find SHARE.EXE" error message. This can occur even if
	SHARE.EXE is already loaded and running on your computer.
	
	CAUSE
	=====
	
	The Setup program cannot find SHARE.EXE on the PATH in the AUTOEXEC.BAT file if
	the name of the directory in which SHARE.EXE is located is not completely
	specified (for example if \DOS is used instead of C:\DOS).
	
	If an MS-DOS SUBST command has been used to replace the directory specification
	in the PATH (for example, the command SUBST X: C:\DOS has been issued and X:\
	appears in the PATH instead of C:\DOS), the Setup program will also fail to
	locate SHARE.EXE.
	
	RESOLUTION
	==========
	
	1. Modify (or add if necessary) the PATH statement in the AUTOEXEC.BAT file so
	  that it includes a complete specification of the directory where SHARE.EXE is
	  located, including the drive letter.
	
	2. Restart the computer so the change can take effect.
	
	3. Run the multimedia Setup program again.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q109052 Works Err Msg: Setup Is Unable to Find SHARE.EXE
	
	Additional query words: msn_encarta 1995multi media multimedia multi- mmtitles
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbEncartaSearch kbGamesSearch kbZNotKeyword kbBookshelfSearch kbBaseballSearch kbEncartaEncycSearch kbCineManiaSearch kbAncientLands kbCompleteBasketballSearch kbBookShelf1995 kbCinemania1995 kbCompleteBaseball1994 kbCompleteBasketball1994 kbCompleteBasketball1995 kbDangerousCreatures kbUltimateFLW kbEncartaEnCyc1996
	Version           : :1.0,1994 edition,1994-1995 edition,1995 edition
	
	=============================================================================
	

{% endraw %}
