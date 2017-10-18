---
layout: page
title: "Q103459: Cinemania: Words Do Not Fit on the Buttons"
permalink: kb/103/Q103459/
---

## Q103459: Cinemania: Words Do Not Fit on the Buttons

	Article: Q103459
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1992 edition
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cinemania for Windows 1992 edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Cinemania, the words on the buttons may not fit or will look corrupted if the
	MS Sans Serif font is either missing, corrupt, or incorrectly substituted in the
	Windows environment.
	
	RESOLUTION 1
	------------
	
	1. Verify the MS Sans Serif font is installed in the Fonts option in Control
	  Panel.
	
	2. If it is present, make sure the sample appears uncorrupted.
	
	  If it is missing, press the Add button and double-click the SYSTEM
	  subdirectory in the WINDOWS directory and see if this font is in that
	  directory. If you are using Windows 95, click on the File menu and select
	  Install New Font, then double-click the SYSTEM subdirectory in the WINDOWS
	  directory and see if this font is in that directory.
	
	  If it is not in the SYSTEM subdirectory or if the sample is corrupt, install a
	  new font from the Windows disks by reinstalling Windows or by decompressing
	  those font files.
	
	RESOLUTION 2
	------------
	
	1. To determine if the font is incorrectly substituted, open the WIN.INI file in
	  Notepad and make sure that the following line is the only line in the [Fonts
	  Substitutes] section that is referencing MS Sans Serif:
	
	  Helv=MS Sans Serif
	
	2. If there are any other substitutions referring to MS Sans Serif, remark them
	  out and make sure the line shown above is in this section of the WIN.INI
	  file.
	
	For more information, query on the following words in the Microsoft Knowledge
	Base:
	
	  decompress and expand and switch and w_win
	
	Microsoft has confirmed this to be a problem in Cinemania 1992. This problem was
	corrected in Cinemania 1994.
	
	Additional query words: 1992 multi media multimedia multi-media incorrect corruption display Viewer 1.0 Video Usage
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbHomeProdSearch kbHomeMMsearch kbCineManiaSearch kbCinemania1992
	Version           : :1992 edition
	
	=============================================================================
	
