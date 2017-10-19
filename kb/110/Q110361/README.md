---
layout: page
title: "Q110361: How to Find the Current Video Resolution"
permalink: /kb/110/Q110361/
---

## Q110361: How to Find the Current Video Resolution

	Article: Q110361
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b; WINDOWS:2.5,2.5a,2.5b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can programmatically determine the current video resolution by using the
	SYSMETRIC() function. SYSMETRIC(1) returns the current screen width in pixels,
	and SYSMETRIC(2) returns the current screen height in pixels. Combining these
	two function calls will give the current video resolution.
	
	Example
	-------
	
	     WAIT WINDOW "The Current Video Resolution is ";
	        + LTRIM(STR(SYSMETRIC(1)))+ " X " + LTRIM(STR(SYSMETRIC(2)))
	
	REFERENCES
	==========
	
	FoxPro for Windows "Language Reference," page L3-1064 FoxPro for Macintosh
	"Language Reference," pages 840-841
	
	Additional query words: VFoxWin FoxMac FoxWin 2.50 mode
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : MACINTOSH:2.5b; WINDOWS:2.5,2.5a,2.5b,3.0
	
	=============================================================================
	
