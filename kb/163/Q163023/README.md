---
layout: page
title: "Q163023: FIX: VFP 3 Form or Class Modified in VFP 5 Loses Method Code"
permalink: /kb/163/Q163023/
---

## Q163023: FIX: VFP 3 Form or Class Modified in VFP 5 Loses Method Code

	Article: Q163023
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Modifying a form created in Visual FoxPro 3.0 or 3.0b may, under certain
	circumstances, result in temporary or permanent loss of event or method
	procedure code.
	
	-or-
	
	Instantiating a class created in Visual FoxPro 3.0 or 3.0b may, under certain
	circumstances, result in temporary or permanent loss of event or method
	procedure code.
	
	This can happen if both of the following conditions are true:
	
	- Code is contained in method or event procedures within dependent controls,
	  such as the following:
	   - Option buttons in option groups
	
	   - Command buttons in CommandGroups
	
	   - Grid columns in grids or headers within columns
	
	   - Pages in PageFrames
	
	- The Visual FoxPro 3.0x form is modified under Visual FoxPro 5.0 without being
	  first run or compiled under Visual FoxPro 5.0, or the Visual FoxPro 3.0x
	  class is instantiated under Visual FoxPro 5.0 without being first compiled
	  under Visual FoxPro 5.0.
	
	This loss of code does not occur if any of the following are true:
	
	- If code is not contained in dependent controls.
	
	- If the Visual FoxPro 3.x form or class is run or instantiated prior to
	  modification in Visual FoxPro 5.
	
	- The form or class is compiled with COMPILE FORM or COMPILE CLASSLIB before
	  form modification or class instantiation.
	
	RESOLUTION
	==========
	
	Issuing a COMPILE FORM or COMPILE CLASSLIB command against the form or class
	library sometimes, but not always, repairs the file in question. If any other
	changes are made to the form or class and the form or class is saved, compiling
	is not likely to retrieve the lost code.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro
	5.0a.
	
	MORE INFORMATION
	================
	
	The format of compiled object code has been changed between Visual FoxPro 3.0x
	and Visual FoxPro 5.0. Any event or method procedure code is automatically
	recompiled when a Visual FoxPro 3.0x form is modified or run in Visual FoxPro
	5.0. Classes created in Visual FoxPro 3.0x must be first run or compiled in
	Visual FoxPro 5.0 in order to be modified in Visual FoxPro 5.0.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Use the following steps to demonstrate the behavior in the Form Designer:
	
	1. Create a form in Visual FoxPro 3.0b.
	
	2. Add a command group to the form.
	
	3. In the Click method of each command button, add a WAIT WINDOW command.
	
	4. Close the Form Designer and save the form.
	
	5. Modify the form in Visual FoxPro 5.
	
	6. Attempt to view the click method code for each of the command buttons. They
	  appear empty.
	
	7. Run the form in Visual FoxPro 5.0, and click on the command buttons. No code
	  is executed.
	
	In the above example, issuing a COMPILE FORM <form file name> command
	repairs the form. More complex forms may or may not be successfully repaired
	with COMPILE FORM.
	
	Use the following steps to demonstrate the behavior in the Class Designer:
	
	1. Create a class in Visual FoxPro 3.0b based on CommandGroup:
	
	        CREATE CLASS cmdgroup OF cmdgrp3 AS COMMANDGROUP
	
	2. In the Click method of each command button, add a WAIT WINDOW command.
	
	3. Close the Class Designer and save the class.
	
	4. Instantiate the class in Visual FoxPro 5.0 by issuing the following commands
	  in the Command window or from a program file:
	
	        SET CLASSLIB TO cmdgrp3
	        x=CREATEOBJECT('cmdgroup')
	        x.command1.CLICK()
	        RELEASE x
	
	  Note that no WAIT WINDOW is executed.
	
	5. Modify the class:
	
	        MODIFY CLASS cmdgroup OF cmdgrp3
	
	6. Attempt to view the Click method code for each of the command buttons. They
	  will appear empty.
	
	In the above example, issuing the following:
	
	     COMPILE CLASSLIB cmdgrp3
	
	will repair the class. More complex classes may or may not be successfully
	repaired with COMPILE CLASSLIB.
	
	
	Additional query words: delete program remove object
	
	======================================================================
	Keywords          : kbtool kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
