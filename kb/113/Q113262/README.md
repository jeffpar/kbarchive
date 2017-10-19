---
layout: page
title: "Q113262: Plotting TrueType Characters"
permalink: /kb/113/Q113262/
---

## Q113262: Plotting TrueType Characters

	Article: Q113262
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbOSWin310
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The HPPLOT plotter driver does not support the plotting of TrueType fonts. This
	driver only plots fonts that are native to the plotter or are Windows vector
	fonts. It is sometimes desirable to be able to plot a larger range of fonts.
	Incorporating the use of TrueType fonts on a plotter greatly increases the range
	of fonts a plotter can draw.
	
	The TTPLOT sample demonstrates a method of displaying TrueType fonts on a
	plotter. This method involves selecting a TrueType font into a screen display
	context and calling the GetGlyphOutline() function to retrieve the curve data
	points of a TrueType character in the TrueType font rasterizer's native format.
	Then, with the data it retrieved, it performs a series of MoveTo() and LineTo()
	calls to draw the TrueType character.
	
	This sample can be used with any printer, and it also demonstrates the new
	Windows 3.1 printing functions, SetAbortProc(), StartDoc(), EndDoc(),
	StartPage(), and EndPage(). This sample application will not run on a version of
	Windows earlier than Windows 3.1.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Ttplot.exe
	  (http://download.microsoft.com/download/platformsdk/sample78/3.1/W31/EN-US/TTPLOT.EXE)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	This sample demonstrates how to draw TrueType characters on a plotter with the
	MoveTo() and LineTo() functions. First, it retrieves a glyph's curve data points
	in the rasterizer's native format by calling GetGlyphOutline() with GGO_NATIVE
	specified in the third parameter. It must call this function twice. The first
	time the function is called, NULL is placed in the lpBuffer parameter so the
	required buffer size to hold the data is returned. The second time
	GetGlyphOutline() is called, the native data is placed in the buffer specified
	by the lpBuffer parameter.
	
	A glyph outline is returned as a series of contours, each of which can be a
	straight line or a quadratic curve. The TTPLOT sample interprets the data
	returned from GetGlyphOutline() and then draws the lines specified by calling
	the MoveTo() and LineTo() functions on the plotter device context. The quadratic
	curves, as well as the lines, are both drawn as normal straight lines. A
	description of this native curve data can be found on pages 382-383 of the
	Windows SDK "Programmer's reference, Volume 2: Functions" manual or by searching
	for the GetGlyphOutline() function in the "Win31 Help" Windows help file. This
	sample also lets you choose a desired TrueType font by bringing up the
	ChooseFont() common dialog box. Before drawing the font, the plotter DC is
	placed in the MM_ISOTROPIC mode so the fonts will be the same size on the screen
	as they are on the plotter.
	
	Additional query words: PLOT HPPLOT TRUETYPE softlib TTPLOT.EXE
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbOSWin310 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
