---
layout: page
title: "Q155318: HOWTO: Hide a Form at Startup Using the DO FORM Command"
permalink: kb/155/Q155318/
---

## Q155318: HOWTO: Hide a Form at Startup Using the DO FORM Command

	Article: Q155318
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbDesigner kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual FoxPro 5.0 DO FORM command now has a NOSHOW clause, which specifies
	that the Show method of the form is not called when the form is run. When you
	include NOSHOW and run the form, the form is not visible until you set the
	Visible property to true (.T.) or call the Show method.
	
	MORE INFORMATION
	================
	
	The NOSHOW clause allows you to manipulate an .scx form before it appears on the
	screen. To do this, insert code between the DO FORM and the
	<formname>.Show or <formname>.Visible commands. In the example
	below, the form's caption is set to "Test" and the form is centered before it
	appears. Type the following example into a program file or type each line into
	the Command window:
	
	     DO FORM <formname> NOSHOW
	     <formname>.AutoCenter=.T.
	     <formname>.Caption ="Test"
	     <formname>.Show
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDesigner kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
