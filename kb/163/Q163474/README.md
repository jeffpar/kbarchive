---
layout: page
title: "Q163474: BUG: MessageBox with Keycomp=Windows Returns Incorrect Value"
permalink: /kb/163/Q163474/
---

## Q163474: BUG: MessageBox with Keycomp=Windows Returns Incorrect Value

	Article: Q163474
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp kbvfp300bBUGkbbuglist
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Set Keycomp is equal to Windows in Visual FoxPro for the Macintosh, the
	MessageBox function returns an incorrect value. According to Visual FoxPro Help,
	the value returned for a "No" selection is supposed to be a 7.
	
	RESOLUTION
	==========
	
	There are a couple of ways you can resolve this issue. One is to hit the
	spacebar after moving with the arrow or tab keys to the "No" button in the
	MessageBox dialog box. The other alternative is to Set Keycomp to MAC. This
	forces the user to use the mouse to select the "No" button. Both of these
	options return the correct value (7) for a "No" selection.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Type the following commands in the command window:
	
	        SET KEYCOMP to WINDOWS
	        msg=MESSAGEBOX("Yes/No Question",36) && Yes/No dialog box buttons
	                                &&displayed as well as question mark icon
	
	2. Arrow over or tab to the No button. (Note that the thick border does not
	  appear around the No button.) Click Enter.
	
	3. Type the following command in the command window:
	
	        DISPLAY MEMORY LIKE msg  &&Note the value of msg is equal to 6
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHWMAC kbvfp kbvfp300bBUG kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
