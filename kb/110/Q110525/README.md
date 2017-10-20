---
layout: page
title: "Q110525: FoxPro for Mac Doesn't Support Command-Line Switches"
permalink: /kb/110/Q110525/
---

## Q110525: FoxPro for Mac Doesn't Support Command-Line Switches

{% raw %}

	Article: Q110525
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
	
	The command-line switches supported in FoxPro for Windows and FoxPro for MS- DOS
	are not supported in FoxPro for Macintosh.
	
	MORE INFORMATION
	================
	
	Since the Macintosh environment does not allow the use of command-line switches,
	the following switches are not supported in FoxPro for Macintosh:
	
	  -C = Specify configuration file
	  -E = Prevent use of all expanded memory
	  -K = Prevent attempts to use F11 or F12
	  -T = Suppress FoxPro sign-on screen
	
	RESOLUTION
	==========
	
	To emulate the -C switch, double-click the CONFIG.FPM file that is desired.
	FoxPro will then execute and use that configuration file.
	
	The -E and -K switches are not needed in the Macintosh environment.
	
	The -T switch is no longer supported by FoxPro for Macintosh. However, it is
	still supported by FoxPro for Windows & FoxPro for MS-DOS.
	
	
	Additional query words: VFoxMac FoxMac logo
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	

{% endraw %}
