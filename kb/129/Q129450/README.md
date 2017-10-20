---
layout: page
title: "Q129450: PRB: &quot;For Each&quot; Behavior on Dynamically Changing Control Array"
permalink: /kb/129/Q129450/
---

## Q129450: PRB: &quot;For Each&quot; Behavior on Dynamically Changing Control Array

{% raw %}

	Article: Q129450
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
	
	When using "For Each" to iterate through the elements of a control array that
	changes dynamically during the execution of the loop, the following unexpected
	behavior may occur:
	
	- Elements added after the For Each is started are not visited during its
	  execution.
	
	- Elements deleted after the For Each is started are visited and generate error
	  340:
	
	  Control array element 'n' doesn't exist.
	
	CAUSE
	=====
	
	The set of items (to be iterated over by the For Each) is set at the beginning
	of the iteration. Items added or deleted during the iteration do not affect the
	set of items iterated over.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a Command button (Command1) to your form.
	
	3. Set the Index property of Command1 to 0 (zero). This will create a control
	  array with one element. You then refer to your control as Command1(0).
	
	4. Add the following code to the Form_Click event of Form1.
	
	        Sub Form_Click()
	           On Error GoTo ErrorHandler
	           Load Command1(1)
	           Load Command1(2)
	           Load Command1(3)
	
	           For Each Elt In Command1
	              Print "This is Command1("; Elt.Index; ")"
	              If Elt.Index = 0 Then
	                 Unload Command1(2)
	                 Load Command1(4)
	              End If
	
	        SkipToHereOnError:
	           Next
	           Exit Sub
	
	        ErrorHandler:
	           Print Error$
	           Resume SkipToHereOnError
	        End Sub
	
	5. Start the program by choosing Start from the Run (or press the F5 key).
	
	6. Click Form1 to run the code in the Click event.
	
	The following will be printed on Form1:
	
	  This is Command1(0)
	  This is Command1(1)
	  Control array element '2' doesn't exist
	  This is Command1(3)
	
	NOTE: Attempting to access Command1(2) generates an error because it is unloaded
	at the first iteration of the loop, and that Command1(4) is not printed.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
