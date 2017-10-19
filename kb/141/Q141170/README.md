---
layout: page
title: "Q141170: PRB: DBGrid Has No Default Property"
permalink: /kb/141/Q141170/
---

## Q141170: PRB: DBGrid Has No Default Property

	Article: Q141170
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to use the default property of the DBGrid control results in the
	error:
	
	  Run-time error '438':
	  Object doesn't support this property or method
	
	CAUSE
	=====
	
	Despite what the Programmer's Guide and the online help say, the DBGrid control
	has no default property. The default value for the standard, data unaware,
	Microsoft Grid control is Text. That property was erroneously listed in the
	Programmer's Guide as the default property for the DBGrid control.
	
	RESOLUTION
	==========
	
	Refer explicitly to any properties of the DBGrid control you want to use.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Start Visual Basic.
	
	2. On the File menu, click New Project.
	
	3. Double-click the DBGrid icon in the Toolbox to add a new data-bound grid to
	  your project.
	
	4. On the Run menu, click Start (ALT, R, S) or press F5. Press CTRL+BREAK, or
	  press the PAUSE button to pause execution of the program. In the debug
	  window, type the following
	
	        Print DBGrid1
	
	  and press ENTER. Visual Basic should output the value of the default property
	  of the DBGrid control. However, since the DBGrid control has no default
	  property, Visual Basic will give the error mentioned above.
	
	Additional query words: 4.00 vb4win vb4all DBGrid
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	Issue type        : kbprb
	
	=============================================================================
	
