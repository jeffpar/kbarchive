---
layout: page
title: "Q114791: PRB: SET COLOR TO Results in Differing Shades of Gray"
permalink: kb/114/Q114791/
---

## Q114791: PRB: SET COLOR TO Results in Differing Shades of Gray

	Article: Q114791
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The default desktop color is a different shade of gray than the default color
	pair displayed for scheme 1 in FoxPro for Macintosh.
	
	CAUSE
	=====
	
	This behavior occurs because the default color set is actually using an RGB
	value for the color information. The color pair listing returned by scheme(1)
	returns information in color pair letters, which are an approximation of the
	current RGB settings. The SET COLOR TO n/w* command uses a different set of RGB
	values to represent gray.
	
	RESOLUTION
	==========
	
	To restore the default desktop color programmatically, issue the following
	commands:
	
	     SET COLOR TO
	     CLEAR
	
	For more precise control over the colors, use RGB values instead of color pairs.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start FoxPro for Macintosh.
	
	2. Issue the following commands in the Command window:
	
	        SET COLOR TO
	        CLEAR
	        ?SCHEME(1)
	
	  Note that the desktop is a pale gray. The first color pair listed for scheme 1
	  is "N/W*".
	
	3. Issue the following commands in the Command window:
	
	        SET COLOR OF SCHEME 1 TO "n/w*"
	        CLEAR
	        ?SCHEME(1)
	
	Note that the desktop is now a darker shade of gray, although the color pair
	information returned by the second ?SCHEME(1) command is identical to the color
	pair information returned by the first command.
	
	REFERENCES
	==========
	
	For more information about color schemes and color pairs, see the SET COLOR
	commands in the "Language Reference."
	
	Additional query words: VFoxMac FoxMac colorset grey colour colourset
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro250cMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,2.5c,3.0b
	
	=============================================================================
	
