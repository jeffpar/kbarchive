---
layout: page
title: "Q139438: PRB: 3D Effect Does Not Appear If Object Is too Small"
permalink: /kb/139/Q139438/
---

## Q139438: PRB: 3D Effect Does Not Appear If Object Is too Small

	Article: Q139438
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Many objects in the Visual FoxPro Form Designer have a SpecialEffect property.
	This property changes the format options for the object. One of the options for
	this property is a 3D format. If an object is made too small, the 3D effect does
	not appear regardless of the setting of the SpecialEffect property
	
	RESOLUTION
	==========
	
	Resize the object in the Form Designer to make it larger.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Add a check box to the form.
	
	3. Set the SpecialEffect property to 0 - 3D.
	
	4. Resize the check box on the form to make it smaller. When the check box
	  reaches a certain size, the 3D effect goes away.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
