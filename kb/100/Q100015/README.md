---
layout: page
title: "Q100015: Converting to 8-Bit Color Results in Gray Scale from VidEdit"
permalink: /kb/100/Q100015/
---

## Q100015: Converting to 8-Bit Color Results in Gray Scale from VidEdit

	Article: Q100015
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you convert an AVI file from 16-bit RGB or 24-bit RGB to 8-bit PAL using
	the VidEdit program that ships with Video for Windows, the resulting AVI file
	may use a color palette that is composed of 256 shades of gray.
	
	MORE INFORMATION
	================
	
	Microsoft Video for Windows contains a "default" palette that consists of 256
	shades of gray. When an AVI file is converted from RGB values to 8-bit PAL, if
	no palette has been specified, VidEdit will use this default palette. This
	behavior is by design because it is not possible to create a color palette that
	will match all possible AVI files.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open or switch to VidEdit and open an AVI file that uses 16-bit or 24-bit
	  RGB.
	
	2. From the Video menu, choose Video Format and select 8 Bit. Choose the OK
	  button.
	
	3. From the File menu, choose Save As and select the Compression Options button.
	
	4. If the current Video Compression Method is Indeo, switch to Microsoft Video 1
	  or Microsoft RLE. This must be done because Indeo supports 24-bit color depth
	  only.
	
	5. Choose the OK button and then save the file. The resulting AVI file will use
	  the default 256 gray scale palette.
	
	Solution
	--------
	
	If you create a palette from the AVI file, and then apply that palette to the
	file prior to saving, the resulting 8-bit AVI file will use the created palette
	rather than the default gray scale palette.
	
	To convert a 16- or 24-bit RGB AVI file to 8-bit PAL using a created palette:
	
	1. Open or switch to VidEdit and open a 16-bit or 24-bit RGB AVI file.
	
	2. From the Video menu, choose Custom Palette and set the desired attributes for
	  your palette (number of colors, and so on). Choose the OK button.
	
	3. Once the palette has been created, choose Paste from the Palette Created
	  dialog box. Choose the All Frames radio button and choose OK.
	
	4. From the File menu, choose Save As and select the Compression Options button.
	
	5. If the current Video Compression Method is Indeo, switch to Microsoft Video 1
	  or Microsoft RLE. This must be done because Indeo supports 24-bit color depth
	  only.
	
	6. Choose the OK button and then save the file. The resulting AVI file will use
	  the created 8-bit palette.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a
	
	=============================================================================
	
