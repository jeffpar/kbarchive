---
layout: page
title: "Q89957: Sound Finder Ignores Working Directory Setting"
permalink: /kb/089/Q89957/
---

## Q89957: Sound Finder Ignores Working Directory Setting

	Article: Q89957
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows Sound System Sound Finder ignores the working directory specified in the
	Program Manager Program Item Properties dialog box for Sound Finder.
	
	MORE INFORMATION
	================
	
	Because Sound Finder is intended to be used to browse across an entire hard disk
	or even a network, it maintains its own initial directory setting in the
	[SNDFINDER] section of the SNDSYS.INI file. To change this setting, open the
	SNDSYS.INI file using Windows Notepad, set the StartDirectory= line to the
	default drive and directory of your choice, and save the file. Sound Finder will
	now use that directory as its initial directory to browse.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a
	
	=============================================================================
	
