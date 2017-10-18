---
layout: page
title: "Q162086: PRB: @GET...LIST Command Can Cause Errors in VFP Macintosh"
permalink: kb/162/Q162086/
---

## Q162086: PRB: @GET...LIST Command Can Cause Errors in VFP Macintosh

	Article: Q162086
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a program that contains an @GET...LIST command populated with
	values from a long string, one of two error messages may appear. Depending on
	the length of the @GET...LIST command, the following message appears:
	
	  Unknown error code <error code number>
	
	If a longer string populates the @GET...LIST, Visual FoxPro shuts down and the
	following message appears:
	
	  Sorry, a system error occurred.
	  "Microsoft Visual FoxPro"
	  error type 11
	
	You have to click Restart in the error message dialog box. The @GET...LIST does
	not cause either error in Visual FoxPro 2.6a for the Macintosh.
	
	RESOLUTION
	==========
	
	Populate the @GET...LIST from an array or create an @GET...LIST from a popup
	menu. Create the popup menu with the DEFINE POPUP command.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following example illustrates this behavior.
	
	Steps to Reproduce Behavior
	---------------------------
	
	WARNING: Following these steps may cause your machine to terminate abnormally.
	Close all running applications and save your data before following this
	procedure. After running this example, you may want to rebuild the desktop file
	of the Macintosh by holding the Option and Apple keys down while choosing
	Restart from the Special menu pad.
	
	1. Create a program that contains the following code:
	
	     x=" "
	     xc=REPLICATE('aaaaaaaaa;',28)
	     @ 25,15 GET x FUNCTION '^3 '+xc
	
	  (Make sure there is a space character between the 3 and the final quotation
	  mark.)
	
	2. Run the program and the message "Unknown error code <error code
	  number>" appears.
	
	3. Change the line:
	
	     xc=REPLICATE('aaaaaaaaa;',28)
	
	  to
	
	     xc=REPLICATE('aaaaaaaaa;',29)
	
	  and run the program. The "type 11 error" appears and Visual FoxPro shuts down.
	
	Additional query words: VFoxMac kbdsd
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
