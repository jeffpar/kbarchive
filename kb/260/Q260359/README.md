---
layout: page
title: "Q260359: PRB: KEYBOARD &quot;{RIGHTMOUSE}&quot; Fails"
permalink: /kb/260/Q260359/
---

## Q260359: PRB: KEYBOARD &quot;{RIGHTMOUSE}&quot; Fails

	Article: Q260359
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbOLDocs kbCodeSni
	Last Modified: 09-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Without an ON KEY LABEL in effect, no noticeable effect occurs when you issue
	the following command:
	
	  KEYBOARD "{RIGHTMOUSE}"
	
	RESOLUTION
	==========
	
	To resolve this problem, issue the following command (with the appropriate
	coordinates) instead:
	
	  MOUSE RIGHT CLICK AT MROW(), MCOL()
	
	  -or-
	
	  MOUSE RIGHT CLICK AT 0,0
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	At first glance, it seems as though KEYBOARD "{RIGHTMOUSE}" fails if you issue
	it from the Command window. However, it is not that simple.
	
	  ON KEY LABEL RIGHTMOUSE WAIT WINDOW "He plays the violin..."
	  KEYBOARD "{RIGHTMOUSE}"
	
	This code produces the specified message, and right-clicking the mouse also
	produces the message. If you use the MOUSE RIGHT CLICK command above, the wait
	window flashes briefly. When you press the context menu key on keyboards that
	include it, though, it does not trigger a {RIGHTMOUSE}; instead, you get a
	context menu.
	
	REFERENCES
	==========
	
	Microsoft Visual FoxPro Help file; topic: "KEYBOARD"; topic: "ON KEY LABEL".
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbOLDocs kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
