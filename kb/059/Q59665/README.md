---
layout: page
title: "Q59665: Loss of Colors in Paintbrush File"
permalink: /kb/059/Q59665/
---

## Q59665: Loss of Colors in Paintbrush File

	Article: Q59665
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Windows Paintbrush can save files only up to the number of
	simultaneous colors the current display allows. For example, if you are using
	the standard Windows 16-color VGA video driver, Paintbrush can save files with
	16 colors or less. If you are using a 256-color video driver, Paintbrush can
	save 256 color files. Even if you select a specific number of colors when saving
	a file, the file is saved only with the maximum number of colors that the
	current display supports.
	
	Applications such as Microsoft Word for MS-DOS version 5.0 don't recognize
	pictures in the 256-color format and are unable to use pictures in that format.
	
	WORKAROUND
	==========
	
	To convert these pictures to a 16-color format, do the following:
	
	1. Run Windows Setup and install the standard VGA driver.
	
	2. Restart Windows and run the Windows Paintbrush.
	
	3. Load the 256-color files and then save them in the .PCX format. This will
	  save them in a format Word 5.0 can read.
	
	4. Run Windows Setup again and reinstall the original 256-color video driver.
	
	Paintbrush can load files with any number of colors. However, if you load a
	256-color file on a 16-color VGA and immediately save it, the file is
	irrevocably converted to 16 colors.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows Paintbrush versions 3.0
	and 3.0a. This problem was corrected in later versions of Paintbrush.
	
	Additional query words: 3.0 3.00 3.0a 3.00a 5 5.0 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
