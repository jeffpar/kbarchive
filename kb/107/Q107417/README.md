---
layout: page
title: "Q107417: PRB: &quot;Error Creating OLE Object&quot; with APPEND GENERAL"
permalink: kb/107/Q107417/
---

## Q107417: PRB: &quot;Error Creating OLE Object&quot; with APPEND GENERAL

	Article: Q107417
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you issue the command APPEND GENERAL <general field name> FROM
	<bitmap.bmp> CLASS "PBRUSH", you receive the error message "Error creating
	OLE object."
	
	CAUSE
	=====
	
	This error occurs because there is not an OLE server for .BMP files on the
	Macintosh. This is a limitation of general fields. General fields must have a
	program that is capable of acting as an OLE server before files can be appended
	into the general field.
	
	RESOLUTION
	==========
	
	Install a program on the Macintosh that can act as an OLE server for bitmaps, if
	one exists. Microsoft Imager, an OLE server, is installed with Visual FoxPro 3.0
	for Macintosh, and you can use it to edit PICT files.
	
	
	MORE INFORMATION
	================
	
	This same command does not cause any errors when it is issued in FoxPro for
	Windows.
	
	REFERENCES
	==========
	
	FoxPro for Macintosh online help (HELP APPEND GENERAL)
	
	Additional query words: vFoxMac FoxMac errmsg err msg
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	
