---
layout: page
title: "Q110765: PRB: FONTMETRIC Returns Different Values for Courier Font"
permalink: /kb/110/Q110765/
---

## Q110765: PRB: FONTMETRIC Returns Different Values for Courier Font

	Article: Q110765
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	FONTMETRIC(6) and FONTMETRIC(7) do not return the same values for the Courier
	font. The Courier font on the Macintosh platform is not a monospaced font.
	
	FONTMETRIC(6) returns the average character width in pixels. FONTMETRIC(7)
	returns the maximum character width in pixels. For monospace fonts, these return
	values should be identical.
	
	RESOLUTION
	==========
	
	As an alternative, you can use the following code. These commands will return
	the same value if the font is monospace.
	
	     ? TXTWIDTH('m','Courier',12)
	     ? TXTWIDTH('i','Courier',12)
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To reproduce this problem, type the following commands in the Command window:
	
	     ? FONTMETRIC(6,'Courier',12)
	     ? FONTMETRIC(7,'Courier',12)
	
	The first command returns 7 and the second command returns 11.
	
	Additional query words: vFoxMac FoxMac mono-spaced monospaced
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	
