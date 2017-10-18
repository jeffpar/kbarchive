---
layout: page
title: "Q95417: VidCap: Preview Is Black and White with Video Blaster"
permalink: kb/095/Q95417/
---

## Q95417: VidCap: Preview Is Black and White with Video Blaster

	Article: Q95417
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you capture a video input signal using Creative Lab's Video Blaster capture
	card with Video for Windows, the preview window in VidCap may appear in black
	and white. This will be noticed whenever the video format in VidCap is set to
	8-bit palletized. This occurs because the default palette used by the Video
	Blaster consists of greyscale, black and white colors only. To capture in color
	when the desired color depth is 8 bit, a previously created palette must be
	applied, or a new palette must be captured from VidCap.
	
	The following steps describe the method to apply a previously created palette to
	the current capture file:
	
	1. From the File menu in VidCap, choose Load Palette.
	
	2. Select the .PAL palette file and choose the OK button.
	
	The following steps describe how to create a palette from the incoming video
	signal:
	
	1. From the Capture menu, choose Palette or click the Capture Palette button on
	  the toolbar.
	
	2. Select the number of colors to be used in the palette (must be less than
	  256).
	
	3. Choose the Start button to create a palette from the incoming video signal or
	  click the Frame button to build a palette from the currently displayed frame.
	
	4. Click the Close or the Stop button to build a palette from the selected
	  frame(s).
	
	NOTE: A Windows palette may hold 256 colors; however, 20 of these colors are
	normally reserved by the system, leaving 236 colors that may be specified by the
	system. Palettes that do not redefine the 20 system colors will be processed
	more quickly within the Windows environment. This "236" color palette is known
	as an "identity palette" and may be created in PalEdit.
	
	Creative Lab's Video Blaster is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 1.00 bit edit vid cap 8 bit videoblaster
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100
	
	=============================================================================
	
