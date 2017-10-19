---
layout: page
title: "Q130343: Reserved Color Schemes in Visual FoxPro Now Include 15"
permalink: /kb/130/Q130343/
---

## Q130343: Reserved Color Schemes in Visual FoxPro Now Include 15

	Article: Q130343
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Error number 1728, "Color Scheme is Reserved." is now generated if any attempt
	to use color scheme 15 is made.
	
	CAUSE
	=====
	
	Visual FoxPro now reserves Color Scheme 15. Prior versions of FoxPro for Windows
	and FoxPro for MS-DOS only reserved Color Schemes 13 and 14.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Any current programs that make use of color scheme 15 must be modified to use
	another color scheme. There are 24 color schemes in Microsoft FoxPro products.
	Schemes 13-15 are reserved in Visual FoxPro and schemes 13-16 are reserved in
	FoxPro for Macintosh.
	
	See the Help menu or the Language Reference Guide for further information on
	Color Schemes.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
