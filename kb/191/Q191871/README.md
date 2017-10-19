---
layout: page
title: "Q191871: PRB: Error When Properties are Evaluated at Design Time"
permalink: /kb/191/Q191871/
---

## Q191871: PRB: Error When Properties are Evaluated at Design Time

	Article: Q191871
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some object properties may evaluate in the design time mode and produce an error
	message.
	
	CAUSE
	=====
	
	Any variables or arrays used in these properties are not in scope.
	
	RESOLUTION
	==========
	
	In the following example, declare the array, myarray, Public before placing the
	class on the form. The following command typed in the Command window
	accomplishes this:
	
	     PUBLIC ARRAY myarray[1]
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In Visual FoxPro 6.0, the Help file contains the following information about the
	behavior of properties in the design mode:
	
	  Note that some properties are evaluated at design time, so any memory
	  variables or arrays used in expressions for these properties must be in scope
	  at design time.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new visual class based on a container class.
	
	2. Place a list box inside a container and right-click to launch the list box
	  builder from the popup menu.
	
	3. In the "Fill the list with" drop-down combo box, choose "Values from an
	  array" and put in an array name, such as MyArray, in the Array Name text box.
	
	4. Save the new class and create a form.
	
	5. Add the new class library to the Forms Control Toolbar.
	
	6. Attempt to add the new class to the form.
	
	The following error message appears:
	
	  Expression evaluated to an illegal value.
	
	REFERENCES
	==========
	
	Visual FoxPro 6.0 Help; search on: "Properties window"
	
	Additional query words: kbVFp600 kbVFp500a kbVFp500 kbDesigner
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
