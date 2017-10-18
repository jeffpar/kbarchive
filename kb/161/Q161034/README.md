---
layout: page
title: "Q161034: PRB:Cannot Open File AppleGuideGlueLib When Trying to Quit VFP"
permalink: kb/161/Q161034/
---

## Q161034: PRB:Cannot Open File AppleGuideGlueLib When Trying to Quit VFP

	Article: Q161034
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message appears when you try to quit Visual FoxPro. Or if
	you are in a Visual FoxPro executable, this error message appears over and over
	when you try to quit the executable. In both cases, you cannot quit the
	program:
	
	  Cannot open file AppleGuideGlueLib.
	
	CAUSE
	=====
	
	Help has been set to an Apple Guide Help file, and the Apple Guide extension is
	not loaded.
	
	RESOLUTION
	==========
	
	Type the SET HELP TO command in the Command window so that Help is not set to
	anything. If you are using Apple Guide Help in an executable, type the SET HELP
	TO command immediately after the CLEAR EVENTS command.
	
	Also, make sure that the Apple Guide extension is loaded. Visual FoxPro does not
	install the Apple Guide extension. It is provided with the Macintosh System
	software.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: kbdsd vfoxmac
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
