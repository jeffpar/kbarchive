---
layout: page
title: "Q169239: PPT: Cannot Unpack Presentation on a Macintosh Computer"
permalink: /kb/169/Q169239/
---

## Q169239: PPT: Cannot Unpack Presentation on a Macintosh Computer

{% raw %}

	Article: Q169239
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:4.0; WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbpng
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Macintosh, version 4.0 
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to unpack a presentation on a Macintosh computer, you receive
	one of the following errors:
	
	  Could not find the application program that created the document named
	  "Pngsetup.exe".
	
	  To open the document, select an alternate program, with or without
	  translation.
	
	  -or-
	
	  The document "Pngsetup.exe" could not be opened, because the application
	  program that created it could not be found. Do you want to open it using
	  "SimpleText"?
	
	  -or-
	
	  Sorry, PowerPoint cannot read the Outline from "Pngsetup.exe". No text
	  converter is installed for this file type. Try saving the file again as RTF
	  or in the format of one of the text converters you have installed.
	
	CAUSE
	=====
	
	Pack and Go is intended to run only on the Microsoft Windows platform. The Pack
	and Go installation program (Pngsetup.exe) is a Windows-based application. In
	other words, this program does not run on a Macintosh computer. If you
	double-click a Windows-based executable file (.exe) on a Macintosh computer, the
	Macintosh attempts to open the file as a document and displays a list of
	programs you can use if you are running the Macintosh Easy Open control panel.
	
	RESOLUTION
	==========
	
	To use your presentation on a Macintosh computer, save the file in the
	PowerPoint 95 or PowerPoint 4.0 file format instead of using Pack and Go.
	
	Additional query words: 4.00 7.00 pack n' go compress
	
	======================================================================
	Keywords          : kbpng 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerptMacSearch kbPowerPt700Search kbPowerPt400Mac
	Version           : MACINTOSH:4.0; WINDOWS:7.0
	Hardware          : MAC x86
	
	=============================================================================
	

{% endraw %}
