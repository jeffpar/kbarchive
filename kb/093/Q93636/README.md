---
layout: page
title: "Q93636: ERR: &quot;Incorrect Results&quot; When Using SET EXACT in FoxBASE+/Mac"
permalink: kb/093/Q93636/
---

## Q93636: ERR: &quot;Incorrect Results&quot; When Using SET EXACT in FoxBASE+/Mac

	Article: Q93636
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When SET EXACT is set to ON, checking memory variables that contain different
	numbers of spaces does not produce the expected results.
	
	CAUSE
	=====
	
	The error occurs because the SET EXACT ON command removes the spaces from each
	memory variable before they are compared.
	
	RESOLUTION
	==========
	
	The following code displays the message
	
	  Incorrect results.
	
	However, if the first line of code is changed to SET EXACT OFF, the code displays
	"Correct results."
	
	     SET EXACT ON
	     var1 = " "    && 1 space
	     var2 = "   "  && 3 spaces
	     IF var1 = var2
	       WAIT "Incorrect results"
	     ELSE
	       WAIT "Correct results"
	     ENDIF
	
	Additional query words: 2.01 FoxBASE+/Mac errmsg err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	
