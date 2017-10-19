---
layout: page
title: "Q126953: How FoxPro Passes Parameters to a Form"
permalink: /kb/126/Q126953/
---

## Q126953: How FoxPro Passes Parameters to a Form

	Article: Q126953
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to pass parameters to a form built with the Form
	Designer. Parameters are passed to either the Init or the Load method of a form
	or form set.
	
	MORE INFORMATION
	================
	
	To pass a parameter to a form built with the Form Designer, add a WITH statement
	to the DO FORM command. For example:
	
	     DO FORM frmtest WITH cLastname
	
	The value of the WindowType property determines if a parameter is received by
	either the Load or the Init method of a Form.
	
	WindowType = 1 or WindowType= 0
	-------------------------------
	
	Parameters are passed to the Init of the form or the form set. The parameter is
	visible to the Init and all of the methods that the Init calls. Once the method
	associated with the Init event is completed, the variable is released. The
	parameter is private.
	
	To scope a parameter to a form, add a property at the form level and assign the
	value of the parameter to the member variable.
	
	For more information on how to add a property to a form, refer to the creating
	New Properties and Methods paragraph in the Creating Forms chapter of the
	Developer's Guide. For additional information about the syntax associated with
	passing parameter, refer to the Managing Forms paragraph in the Creating Forms
	chapter of the Developer's Guide.
	
	
	WindowType = 2 or WindowType= 3
	-------------------------------
	
	These settings are available to form sets only. A page frame is necessary to
	access the WindowType values of 2-READ or 3-READ MODAL. This functionality
	emulates a READ, and has been implemented for backwards compatibility. When the
	WindowType = 2 or WindowType = 3, the parameters are received by the LOAD method
	of the form set. They are scoped to the form set.
	
	Additional query words: VFoxWin screen
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
