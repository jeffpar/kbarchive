---
layout: page
title: "Q156033: PRB: Unable to Reference SCX with Spaces in Filename"
permalink: /kb/156/Q156033/
---

## Q156033: PRB: Unable to Reference SCX with Spaces in Filename

{% raw %}

	Article: Q156033
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a form contains spaces in its file name, you may be unable to reference the
	form object created when this form is run either from program code or in the
	Debug or Watch window.
	
	RESOLUTION
	==========
	
	Successfully referencing form objects by SCX name requires replacing any space
	character(s) with underscores.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When a form is created by the DO FORM command, Visual FoxPro attempts to use the
	filename, minus the .SCX extension, as a variable to store the object reference
	for the form. If the filename contains spaces, Visual FoxPro determines that it
	is not a valid variable name and transforms it into something valid by replacing
	the spaces with underscores.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form by entering the following in the Command window:
	
	     MODI FORM "X X"
	
	2. From the File menu, choose Save, and then close the Form Designer.
	
	3. Run the form by entering the following in the Command window:
	
	     DO FORM  "X X"
	
	4. In Visual FoxPro 3.0 or 3.0b, open the Debug window and type X X in the
	  left-hand side. In Visual FoxPro 5.0, open the Visual FoxPro Debugger and
	  type X X in the Watch window.
	
	Following this behavior, note that:
	
	- You will not see (Object) next to the X X in the Debug or Watch window.
	
	- If the X X is replaced with X_X, the form object can be correctly referenced.
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	
	=============================================================================
	

{% endraw %}
