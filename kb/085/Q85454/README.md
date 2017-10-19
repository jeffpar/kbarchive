---
layout: page
title: "Q85454: T2HINTS.WRI from Windows Resource Kit Version 3.1"
permalink: /kb/085/Q85454/
---

## Q85454: T2HINTS.WRI from Windows Resource Kit Version 3.1

	Article: Q85454
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the T2HINTS.WRI file included with the
	Microsoft Windows Resource Kit for operating system version 3.1.
	
	MORE INFORMATION
	================
	
	TrueType and Printers
	---------------------
	
	Hewlett-Packard LaserJet, LaserJet+, and LaserJet 500 (PCL III)
	---------------------------------------------------------------
	
	TrueType fonts are always rendered in the graphics band and are only
	available when printing at 300 dpi.
	
	Hewlett-Packard  LaserJet Series II (PCL IV)
	-------------------------------------------
	
	Default setting is to download TrueType fonts to the printer for speed
	and reduced job size. If more than 16 TrueType fonts (each face,
	style, and point size is considered a separate font) are used on the
	same page, the remaining TrueType fonts will be drawn in the graphics
	band. This is done automatically and requires no user intervention.
	
	Cannot print 'white' TrueType text. To print white text on a dark
	background you must turn ON 'Print TrueType as Graphics' in the
	printer setup dialog and print at 300 dpi.
	
	TrueType text shows through an opaque graphics object. To properly
	overlay opaque graphics over TrueType text you must turn ON 'Print
	TrueType as Graphics' in the printer setup dialog and print at 300
	dpi.
	
	Hewlett-Packard  LaserJet IID, LaserJet IIP (PCL IV)
	---------------------------------------------------
	
	Same limitations as the Series II except that more than 16 fonts can
	be on the same page without switching to the graphics band.
	
	On IIP printers with 1MB or more memory, TIFF compression is used.
	
	Hewlett-Packard LaserJet III family (PCL V)
	-------------------------------------------
	
	More than 16 fonts can be on the same page without switching to the
	graphics band.
	
	White text can be printed without using 'TrueType as Graphics'.
	
	PostScript Printers
	-------------------
	
	Some printed characters are slightly different from those on the
	display. This is due to our TrueType fonts being mapped to
	corresponding fonts in the PostScript printer, for example, Arial is
	substituted with Helvetica. This substitution should not effect line
	or page breaks and is on by default.
	
	TrueType and Applications
	-------------------------
	
	Common Application Problems:
	
	At small sizes TrueType fonts look like a simple Serif or Sans Serif
	font on the display. This is because at small sizes, on the display
	only, Windows selects a hand-tuned bitmap font to preserve
	readability.
	
	At small sizes bold or bold italic TrueType fonts don't look bold on
	the display. This is because our TrueType fonts adjust the widths of
	the lines making up the character to preserve readability, even at
	small point sizes. Selecting an expanded or zoomed view of the
	document or printing it will show that the fonts are bold.
	
	Some applications will use a bold or italic style of the font
	requested rather than the regular style. If this happens, check the
	[Fonts] section in your WIN.INI file to see if the bold/italic style
	of the font you selected comes before the regular entry. If this is
	the case, move the non-regular style to below the regular style, exit
	and restart Windows, then see if the problem appears again.
	
	Aldus PageMaker 4.0
	-------------------
	
	PageMaker displays all available fonts in a single column cascaded
	menu. If enough fonts are installed, the list can exceed the available
	height of the screen. If this happens, use the Type->Type specs...
	dialog, all available fonts are in the Fonts combobox.
	
	Ami Pro 2.0
	-----------
	
	If you have letters that run into each other when displaying a
	TrueType font, you should go into View->View Preferences and turn OFF
	'Display as Printed'.
	
	CorelDRAW
	---------
	
	CorelDRAW uses its own fonts and will not enumerate any TrueType
	fonts.
	
	Micrografx  Charisma
	--------------------
	
	With a PostScript printer as the currently selected printer, you will
	see each TrueType font enumerated twice in the choose font dialog box.
	This is because this application sees the font enumerated for the
	screen and also for the printer and will display an entry for each.
	
	Micrografx Designer 3.1
	-----------------------
	
	With a PostScript printer as the currently selected printer, you will
	see each TrueType font enumerated twice in the choose font dialog box.
	This is because this application sees the font enumerated for the
	screen and also for the printer and will display an entry for each.
	
	Micrografx Windows Draw
	-----------------------
	
	With a PostScript printer as the currently selected printer, you will
	see each TrueType font enumerated twice in the choose font dialog box.
	This is because this application sees the font enumerated for the
	screen and also for the printer and will display an entry for each.
	
	Microsoft PowerPoint 2.0e
	-------------------------
	
	PowerPoint will not enumerate TrueType fonts in the Style-Fonts menu
	when the selected target printer is 'Default Target'. To enumerate
	TrueType fonts, select File-Printer Setup... and choose the display or
	appropriate target printer.
	
	Microsoft Word for Windows
	--------------------------
	
	Word for Windows 2.0, when in 'Zoom Page Width' and 'Zoom Whole Page'
	mode, will sometimes cause text that is bold/bold italic to appear to
	normal or just italic. This is because, at the smaller sizes, TrueType
	bold fonts only have 1 pixel wide stems as in the regular font.
	Switching back to 100% view typically returns the font to a bold
	appearance.
	
	WordPerfect for Windows
	-----------------------
	
	In the choose font dialog, you will see every TrueType font
	enumerated, not just the font family name. In WordPerfect for Windows
	you will see Arial, Arial Bold, Arial Bold Italic and Arial Italic.
	
	If you install additional fonts, such as the Lucida fonts, only the
	fonts that have 'standard' styles will be listed. For example, Lucida
	Bright comes in four styles, Regular, Demibold, Demibold Italic and
	Italic. Since Demibold is not a standard style, only Lucida Bright and
	Lucida Bright Italic will show up in the choose font dialog. Select
	DemiBold fonts by clicking on the 'Bold' button in the dialog.
	
	Additional query words: 3.10 corel draw true type page maker word perfect
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
