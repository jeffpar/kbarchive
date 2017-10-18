---
layout: page
title: "Q134882: DOCERR: Incorrect Code Sample Coordinating Toolbars and Forms"
permalink: kb/134/Q134882/
---

## Q134882: DOCERR: Incorrect Code Sample Coordinating Toolbars and Forms

	Article: Q134882
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 346 of the Visual FoxPro Developer's Guide provides an incorrect code
	sample that is supposed to show how to coordinate form sets and toolbars
	
	MORE INFORMATION
	================
	
	In the "Coordinating Toolbars and Forms Using Code" section in the Developer's
	Guide there is an example of how to add a toolbar to a form set using code. This
	example is incorrect. The correct code is:
	
	     SET CLASSLIB to inventory
	     This.Addobject("tbrPrint","printing")
	     This.tbrPrint.Show
	
	Note that the comand to specify the library containing the toolbar class is SET
	CLASSLIB, not SET PROCEDURE. Also, the Object Reference "This" must be used to
	reference the instance of the toolbar.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
