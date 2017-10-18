---
layout: page
title: "Q83076: PostScript WIN.INI Settings for Windows 3.1"
permalink: kb/083/Q83076/
---

## Q83076: PostScript WIN.INI Settings for Windows 3.1

	Article: Q83076
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the WIN.INI settings used by the Windows version 3.1
	PostScript driver (PSCRIPT.DRV) versions 3.5, 3.51, 3.52, and 3.53.
	
	MORE INFORMATION
	================
	
	Example:
	
	     WIN.INI
	     [QMS-PS 810,COM2]
	     ATM=placeholder
	     LandscapeOrient=90
	     CtrlD=0
	     minoutlineppem=N
	     favortt=0
	
	[Modelname,Port] LandscapeOrient=angle [default: 90]
	----------------------------------------------------
	
	This setting determines the angle to which the paper is rotated in order to get
	landscape orientation. Earlier versions of the driver use 270 degree rotation;
	however, this is opposite to most other laser printers that use 90 degrees. To
	get the earlier landscape orientation, change this value to 270.
	
	If envelopes appear to print rotated 180 degrees from normal, changing this
	switch's setting may also help.
	
	Printing imported images (EPS files, and so on) in landscape mode from some
	particular applications (for example, Aldus PageMaker 4.0) may result in
	improper placement/orientation of the image. Setting this switch to 270 may
	correct the problem.
	
	[ModelName,Port] CtrlD=0,1 [default 1]
	--------------------------------------
	
	Under normal circumstances, the Windows PostScript driver places a CTRL+D
	character at the start of a print job to put the printer back into a clean
	state, or reset it. Some printers and/or environments do not want CTRL+D
	characters placed in the beginning of the PostScript output. If CtrlD is set to
	0, no initial CTRL+D character is generated. If CtrlD is set to 1, the driver
	generates CTRL+D characters if the printer description states that the printer
	accepts CTRL+D characters.
	
	[Modelname,Port] minoutlineppem=N   [default: 101]
	--------------------------------------------------
	
	When TrueType fonts are downloaded as Adobe Type 1 fonts (set in the Control
	Panel, Printers, Setup, Options, Advanced dialog box) the driver downloads Adobe
	Type 3 bitmaps for fonts whose points-per-em (PPEM) are less than this INI
	setting, and Type 1 fonts that are larger.
	
	To conserve memory, lower this value (0=use one outline for all point sizes). To
	maintain absolute quality at higher point sizes, make this value larger
	(32767=use bitmaps for all point sizes), but the same thing can be accomplished
	by setting use Type 3 bitmaps in the Advanced dialog box.
	
	Note: If you change the minoutlineppem setting, you must exit and restart Windows
	for the changes to take effect.
	
	[Modelname,Port] favortt=0,1  [default: 0]
	------------------------------------------
	
	If a request for a font can be equally satisfied by both a device font or a
	TrueType font, use the TrueType font if favortt is set to 1. Otherwise use a
	device font.
	
	These ties can easily occur. For example, if the application requests Tms Rmn but
	only Times and Times New Roman are available, this is considered a tie.
	
	Additional query words: 3.10 POSTQA old minoutlineppm minoutlineeppem minoutlineeppm
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
