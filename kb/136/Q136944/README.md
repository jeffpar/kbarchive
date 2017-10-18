---
layout: page
title: "Q136944: PRB: Cannot Ignore Activate Event When It Contains an Error"
permalink: kb/136/Q136944/
---

## Q136944: PRB: Cannot Ignore Activate Event When It Contains an Error

	Article: Q136944
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a form or an object's Activate event has code that generates a syntax
	error, it is not possible to click Ignore to skip the offending code without
	reactivating the Activate event.
	
	CAUSE
	=====
	
	When an error is generated, the Error message window is displayed. When the
	error window is closed, control returns to the object. When the focus returns to
	the object, the Activate event fires, and the error appears again.
	
	RESOLUTION
	==========
	
	Click Cancel to cancel the execution, and return to the form object.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	FoxPro does not control the firing of the Activate event. It is automatically
	fired by the operating system.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. In the Activate event handler, type "&x" (without the quotation marks).
	
	3. Save and run the form. The error "Unrecognized Command Verb" appears.
	
	4. Click Ignore. The error appears again, until you click Cancel.
	
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
