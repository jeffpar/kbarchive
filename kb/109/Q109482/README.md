---
layout: page
title: "Q109482: How to Change the Creator and Type Set by FCREATE()"
permalink: kb/109/Q109482/
---

## Q109482: How to Change the Creator and Type Set by FCREATE()

	Article: Q109482
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, version 2.5b 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the FCREATE() function is used, FoxPro for Macintosh creates a FoxPro
	document; by default, the Creator and Type of the file are set to:
	
	  Creator - foxx
	  Type    - TEXT
	
	You can change the Creator and Type of a Macintosh file from within FoxPro for
	Macintosh. For example, to change the Creator of the file to TeachText (ttxt),
	issue the following commands:
	
	  SET LIBRARY TO FOXTOOLS
	  =FxSetType( "<filename>", "TEXT", "ttxt" ) && To change to
	  TeachText
	
	Additional query words: VFoxMac FoxMac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	
