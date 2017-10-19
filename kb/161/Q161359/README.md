---
layout: page
title: "Q161359: PRB: Class Names in VFP 5.0 are Case Sensitive"
permalink: /kb/161/Q161359/
---

## Q161359: PRB: Class Names in VFP 5.0 are Case Sensitive

	Article: Q161359
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,6.0; :3.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 6.0 
	- Microsoft Visual FoxPro for Macintosh, Professional Edition, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When referencing an object class or base class for comparison, the class name is
	case sensitive.
	
	When testing the class property of a command button and comparing the property
	setting to the string "commandbutton" rather than "Commandbutton," the code
	fails. The 'c' in Commandbutton must be capitalized.
	
	RESOLUTION
	==========
	
	The text used for comparison must match the property setting exactly.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form with a command button. The base class is Commandbutton and the
	  class is Commandbutton.
	
	2. Place the following code in the Click event of a command button:
	
	        i=1
	        FOR i = 1 to ThisForm.ControlCount
	           IF ThisForm.Controls(i).Class = "commandbutton" THEN
	              WAIT WINDOW ThisForm.Controls(i).Name
	           ELSE
	              WAIT WINDOW "This is not a Command Button:  "  + ;
	                           ThisForm.Controls(i).Name
	           ENDIF
	        NEXT i
	
	The code above returns a Wait window indicating the commandbutton class is not a
	command button because the 'c' in commandbutton is lowercase. Replace the
	lowercase "c" with an uppercase "C," and it works properly.
	
	Replace:
	
	     IF ThisForm.Controls(i).Class = "commandbutton" THEN
	
	With:
	
	     IF ThisForm.Controls(i).Class = "Commandbutton" THEN
	
	Additional query words: VFoxWin kbdse VFoxMac
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300Mac kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0b,5.0,6.0; :3.0
	
	=============================================================================
	
