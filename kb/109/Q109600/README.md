---
layout: page
title: "Q109600: PRB: Migration Application Incorrectly Flags @...SAY as Error"
permalink: /kb/109/Q109600/
---

## Q109600: PRB: Migration Application Incorrectly Flags @...SAY as Error

{% raw %}

	Article: Q109600
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are using the FB+Migration application on a FoxBASE+ for the Macintosh
	program, the Analyzer flags an @ ... SAY command as being incorrect when it
	actually is correct.
	
	CAUSE
	=====
	
	The error message occurs because the FONT clause has been added to the end of
	the @ ... SAY command.
	
	RESOLUTION
	==========
	
	If you choose the Replace button, no changes will be made to the program. The
	line of code will still function properly.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program in FoxBASE+/Mac that contains the following line:
	
	
	        @ 2,15  SAY "This is a test" FONT "Monaco",12
	
	
	2. Save the program and run the FB+Migration application in FoxPro for
	  Macintosh.
	
	3. Choose Analyze Programs and select the program just created.
	
	The line will be flagged as containing the following error:
	
	  Incompatible Pixel coordinates, PICTURE/FUNCTION,SIZE,STYLE,FONT and COLOR
	  clauses
	
	Additional query words: FoxMac errmsg err msg
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxPro250bMac
	Version           : MACINTOSH:2.5b
	
	=============================================================================
	

{% endraw %}
