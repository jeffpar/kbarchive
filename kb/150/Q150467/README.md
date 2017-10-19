---
layout: page
title: "Q150467: PRB: Modal Form Flickers When Exiting Form with DBGrid Control"
permalink: /kb/150/Q150467/
---

## Q150467: PRB: Modal Form Flickers When Exiting Form with DBGrid Control

	Article: Q150467
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00 | 4.00
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
	
	Under certain circumstances, unloading a form containing a DBGrid control causes
	Visual Basic to hang and other open forms to flicker. After hiding the third
	form of the program, the second form flickers or blinks. Under the 16-bit
	edition of Visual Basic, an application error follows the blinking, and displays
	the following error message:
	
	  VB caused a general protection fault in module VB.EXE at 000b:000039f3.
	
	
	CAUSE
	=====
	
	The problem is limited to the following combination of circumstances:
	
	- A project contains at least three forms with each form containing the DBGrid
	  control.
	
	- The first form shows a second, modal form. The problem does not occur if the
	  second form is not shown modally.
	
	- A single form creates two or more instances of the original form.
	
	RESOLUTION
	==========
	
	There are two possible resolutions to the problem. Either solution prevents the
	problem from occurring:
	
	- Do not show the second form as a modal form.
	
	- or -
	
	- In the Unload event of the third form, add the following line of code:
	
	     Me.Enabled = False
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a Visual Basic project with three forms.
	
	2. Add a Command button to Form1. Place the following code in the Click event of
	  the Command button:
	
	     Form2.Show 1
	
	3. Add a Command button to Form2. Place the following code in the Click event of
	  the Command button:
	
	     Form3.Show 1
	
	4. Add a DBGrid control to Form3. Run the project.
	
	5. From Form1, click the Command button to show Form2. From Form2, click the
	  Command button to show Form3. Close Form3.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00 | 4.00
	Issue type        : kbprb
	
	=============================================================================
	
