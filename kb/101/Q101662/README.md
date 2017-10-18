---
layout: page
title: "Q101662: How to Change the Background Color When Playing Fullscreen"
permalink: kb/101/Q101662/
---

## Q101662: How to Change the Background Color When Playing Fullscreen

	Article: Q101662
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
	
	When playing an .AVI file using MediaPlayer with the Fullscreen option selected,
	the playback window is surrounded by a solid border. The color of this border
	may be modified by altering the palette associated with the AVI sequence. The
	border color used during playback is selected from color position (0) of the
	color palette. This color may be modified using the PalEdit utility that ships
	with Microsoft Video for Windows.
	
	The following procedure describes how to change the color of the border used when
	playing an .AVI file back from MediaPlayer with the Fullscreen option selected:
	
	1. Open or switch to VidEdit and open an .AVI file.
	
	2. From the Edit menu, choose create Palette.
	
	3. Select the Create From All Frames radio button, select 236 colors (identity
	  palette), and choose OK.
	
	4. Choose OK from the Palette Created dialog box.
	
	5. Minimize VidEdit and open or switch to PalEdit.
	
	6. From the Edit menu, choose Paste.
	
	7. Select Palette Order from the Order Down list box.
	
	8. Double-click the color in the upper-left corner of the palette display
	  window. This is position (0) of the palette.
	
	9. Modify this color in the Edit Color dialog box to the desired border color
	  and choose OK.
	
	10. From the Edit menu, choose Select All.
	
	11. From the Edit menu, choose Copy and close PalEdit.
	
	12. Switch to VidEdit and choose Paste Palette from the Edit menu.
	
	13. Choose the In All Frames button and the Remap Video To Best Palette Colors
	  check box. Choose OK.
	
	14. From the File menu, choose Save or Save As. (If you are choosing Save As,
	  select the compression attributes, filename, and so on.)
	
	15. Close VidEdit and open or switch to MediaPlayer. Open the modified AVI
	  sequence.
	
	16. From the Device menu, choose Configure and select the Fullscreen button (do
	  not select the Zoom-by 2 check box) and choose OK.
	
	17. Choose the Play button. The border color will reflect the changes made in
	  step 9 above.
	
	NOTE: The above procedure may be applied to a selected sequence of frames to
	cause the border to change colors during playback.
	
	Additional query words: 1.00 video
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100
	
	=============================================================================
	
