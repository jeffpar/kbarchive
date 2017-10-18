---
layout: page
title: "Q73357: Dithered Text in Windows"
permalink: kb/073/Q73357/
---

## Q73357: Dithered Text in Windows

	Article: Q73357
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are using a Windows video driver that dithers some display colors (such
	as a 16-color VGA video driver), you may notice that when you choose a dithered
	color for text, the text is displayed in an undithered or pure color. This is to
	prevent you from changing your screen to an unreadable color combination.
	
	Applications that allow text to be formatted to any color include Microsoft
	PowerPoint for Windows and Microsoft Excel for Windows.
	
	MORE INFORMATION
	================
	
	In Excel, if you format text to a dithered shade of blue with RBG (red, green,
	blue) values of R=255, G=64, and B=0, the text is displayed in pure red.
	However, if the worksheet or chart is opened in Excel running under Windows with
	a video driver that can render that shade of red as a pure, undithered color, it
	appears in the colors you selected. An example is opening the same file on a
	computer on which Windows is using a video driver that is capable of displaying
	256 or more colors.
	
	To get pure colors with a 16-color Windows compatible video driver, select the
	appropriate RGB (red, green, blue) values for the colors so that they are not
	dithered. RGB values that give pure colors must be combinations of 0 and 128 or
	combinations of 0 and 255, as entered into the More Colors dialog box in
	PowerPoint for Windows (not including light gray).
	
	Pure Color Table for 16-Color Video Drivers
	-------------------------------------------
	
	  Color Name       Red Value    Green Value    Blue Value
	  ----------       ---------    -----------    ----------
	
	  Black              0             0              0
	  White             255           255            255
	  Red               255            0              0
	  Green              0            255             0
	  Blue               0             0             255
	  Cyan               0            255            255
	  Magenta           255            0             255
	  Yellow            255           255             0
	  Light gray        192           192            192
	  Gray              128           128            128
	  Dark red          128            0              0
	  Dark green         0            128            128
	  Dark blue          0             0             128
	  Teal               0            128            128
	  Purple            128            0             128
	  Tan               128           128             0
	
	Other colors may appear to be pure colors, but when you format text for those
	colors, the text is displayed in one of the 16 colors listed above if the video
	driver does not support more than 16 pure colors.
	
	Additional query words: 3.00 3.0 3.0a 3.00a non-dithered
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
