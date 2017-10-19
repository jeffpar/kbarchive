---
layout: page
title: "Q133352: Desktop Theme Cannot Find Existing .wav Files"
permalink: /kb/133/Q133352/
---

## Q133352: Desktop Theme Cannot Find Existing .wav Files

	Article: Q133352
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you modify a desktop theme to use sounds other than the default sounds,
	some of the sounds may not work correctly even though the .wav files exist and
	are in the proper location. This problem can also occur when you apply a custom
	desktop theme.
	
	CAUSE
	=====
	
	This problem can occur if a .wav file's filename contains a comma.
	
	RESOLUTION
	==========
	
	Rename any .wav file whose filename contains a comma. To rename a file, use the
	right mouse button to click the file, then click Rename on the menu that
	appears.
	
	MORE INFORMATION
	================
	
	When you apply a theme, the theme switcher tries to confirm that all the .wav
	files used in the theme exist. Filenames containing a comma are truncated at the
	comma by the theme switcher.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
