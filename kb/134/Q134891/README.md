---
layout: page
title: "Q134891: BUG: DEFINE POPUP PROMPT Can Cause Visual FoxPro to Quit"
permalink: /kb/134/Q134891/
---

## Q134891: BUG: DEFINE POPUP PROMPT Can Cause Visual FoxPro to Quit

	Article: Q134891
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using DEFINE POPUP PROMPT FILES from a user-defined menu can cause Visual FoxPro
	to quit.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Run the following program:
	
	     Define PAD xx OF _msysmenu PROMPT "Whatever"
	     DEFINE POPUP yy PROMPT FILES LIKE *.*
	     KEYBOARD "{ESC}"
	     ACTIVATE POPUP yy
	        * To easily reproduce this, you need to activate the Popup once
	     ON PAD xx of _msysmenu ACTIVATE POPUP yy
	
	2. Click the Whatever menu.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbtool kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
