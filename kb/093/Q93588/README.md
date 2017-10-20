---
layout: page
title: "Q93588: PPT: EPS Graphic Displays as Mostly Empty Frame"
permalink: /kb/093/Q93588/
---

## Q93588: PPT: EPS Graphic Displays as Mostly Empty Frame

{% raw %}

	Article: Q93588
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:2.0,3.0,4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbgraphic
	Last Modified: 21-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 2.0, 3.0, 4.0, 4.0a, 4.0c 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you import an encapsulated PostScript (EPS) graphic into Microsoft PowerPoint
	for Windows, it may display as a frame, not as a picture. This frame may contain
	only the name of the file and the name of the application that created it. This
	graphic prints correctly to a PostScript printer. If printed to any other type
	of printer, it prints the same as it appears on the screen.
	
	CAUSE
	=====
	
	This happens if the EPS file does not contain a screen representation of the
	image in the file header. If the file does contain this preview, PowerPoint
	displays a representation of the actual graphic rather than a frame. It is up to
	the application that created the EPS file to provide the image preview.
	
	MORE INFORMATION
	================
	
	According to the EPS File Format published by Adobe Systems, EPS files should
	contain a "graphic representation" so that they "can be manipulated and
	displayed on a workstation's screen prior to printing." This representation is
	usually a low resolution black-and-white TIFF graphic, although it can, in
	theory, be a Windows Metafile. Some programs omit this preview to reduce the
	file size of the image. Others omit the preview because it is more difficult to
	create an EPS image with a preview than one without.
	
	Most EPS files sold as clip art by commercial vendors have an image header. These
	images appear in PowerPoint and other applications.
	
	EPS files created by using the Print To EPS File option in the Windows PostScript
	printer driver do not contain an image header. These appear in PowerPoint and
	other applications as a frame.
	
	Illustration programs such as CorelDRAW and Micrografx Designer enable you to
	create EPS files with or without image headers.
	
	CorelDRAW and Micrografx Designer are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	REFERENCES
	==========
	
	"Encapsulated PostScript File Format," page 5, (c) Adobe Systems Incorporated,
	1987.
	
	Additional query words: 4.00a 4.00c W_MSPub box rectangle area ppt20 ppt30 macppt winppt ppt95 ppt40
	
	======================================================================
	Keywords          : kb3rdparty kbgraphic 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt200 kbPowerPt300 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:2.0,3.0,4.0,4.0a,4.0c,7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
