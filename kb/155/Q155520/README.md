---
layout: page
title: "Q155520: BUG: Can't Use 3-D GET Fields in Visual FoxPro for Macintosh"
permalink: kb/155/Q155520/
---

## Q155520: BUG: Can't Use 3-D GET Fields in Visual FoxPro for Macintosh

	Article: Q155520
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The "@3" PICTURE clause on an @...GET command does not produce a 3-D GET field
	as it did in FoxPro for Macintosh 2.6.
	
	WORKAROUND
	==========
	
	Place a text box on a form, then set the SpecialEffect property to "0 - 3D" to
	produce a 3-D textbox.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The "3" function code is not documented in the FoxPro 2.6 for Macintosh
	"Language Reference" or in the Help file. It is a check box in the Field dialog
	box for an Input (@...GET) field in the screen designer. Selecting this check
	box produces the PICTURE "@3K" picture clause when the screen is generated. Note
	that you can use the "K" function code to select the entire field on entry.
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. With the Visual FoxPro desktop screen visible, issue the following commands
	  in the Command window:
	
	        x=SPACE(10)
	        @ 2,2 GET x PICTURE "@3" SIZE 1,20
	
	  Note that the GET field does not have the 3-D effect.
	
	2. Repeat the above step in FoxPro 2.6 for Macintosh. Note that the GET field
	  has the 3-D effect.
	
	Additional query words: kbdsd vfoxmac
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
