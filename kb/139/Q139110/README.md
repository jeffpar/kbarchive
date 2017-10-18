---
layout: page
title: "Q139110: DOC: Code on Pages 75-76 of Developer's Guide Causes Error"
permalink: kb/139/Q139110/
---

## Q139110: DOC: Code on Pages 75-76 of Developer's Guide Causes Error

	Article: Q139110
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbdocfix
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the code example listed on pages 75-76 of the Developer's Guide,
	the following error occurs:
	
	  Error with <ObjectName>- Height: Expression evaluated to an illegal
	  value
	
	This documentation error has been fixed in Visual FoxPro 5.0 for Windows.
	
	MORE INFORMATION
	================
	
	The error occurs because 12 is not a valid size for the Height property of the
	object when the ScaleMode property is set to 3 (Pixels). The default ScaleMode
	property of the form is set to Pixels, and the object is designed to use Foxels,
	even though there is a line in the DEFINE CLASS grdProducts AS Grid stating:
	
	     ScaleMode = 0
	
	The ScaleMode property is a property of the form, not the grid.
	
	To use the code example, make these two changes:
	
	1. Move the ScaleMode property into the code for the DEFINE CLASS GridForm AS
	  FORM.
	
	2. Place "Height = 12" in the PROCEDURE INIT of the grid.
	
	By the time the grid is to be shown, the form's ScaleMode property will now be
	set to 0 (Foxels).
	
	
	After you make the two changes, the code from the Developer's Guide should look
	like this:
	
	     DEFINE CLASS GridForm AS FORM
	         ScaleMode = 0
	         <other statements>
	     ENDDEFINE
	
	     DEFINE CLASS grdProducts AS Grid
	      <other statements>
	
	       PROCEDURE INIT
	         This.Height = 12
	       ENDPROC
	
	     ENDDEFINE
	
	Additional query words: docerr VFoxWin 5.00
	
	======================================================================
	Keywords          : kbdocfix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
