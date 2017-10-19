---
layout: page
title: "Q189808: PRB: UpDown Control May Not Increment As Expected"
permalink: /kb/189/Q189808/
---

## Q189808: PRB: UpDown Control May Not Increment As Expected

	Article: Q189808
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click the up or down button on an UpDown control, you notice that the
	value changes by more than the amount specified for the Increment property. For
	example, if the Increment property is 2, the value of the UpDown control may
	change by 3 instead of 2.
	
	CAUSE
	=====
	
	When you click the up or down button to change the value of an UpDown control,
	the control will first "normalize" the current value before it is changed by the
	amount specified in the Increment property. By normalizing the value, the UpDown
	control may change by more than the amount specified in the Increment property
	so that the new value is evenly divisible by the Increment.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. Choose Components from the Project menu, check "Microsoft Windows Common
	  Controls-2" and click OK. The UpDown control should now be available on the
	  Toolbox.
	
	3. Add a Textbox control to Form1.
	
	4. Add an UpDown control to Form1.
	
	5. Set the properties of the UpDown1 control as follows:
	
	        BuddyControl = Text1
	        BuddyProperty = Text
	        Increment = 2
	        Max = 13
	        Min = 3
	        Value = 3
	
	6. Add the following code to the Form1 module:
	
	        Option Explicit
	
	        Private Sub Form_Load()
	           Text1.Text = UpDown1.Min
	        End Sub
	
	7. Run the project. Form1 appears.
	
	8. Click once on the up arrow of the UpDown control. Although the Increment
	  property is 2, the value of the UpDown control changes from 3 to 6 rather
	  than 3 to 5.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp500 kbCtrl kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	
