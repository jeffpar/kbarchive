---
layout: page
title: "Q177088: BUG: Run-Time Error 380 &quot;Invalid Property Value&quot; with MaskEdBox"
permalink: kb/177/Q177088/
---

## Q177088: BUG: Run-Time Error 380 &quot;Invalid Property Value&quot; with MaskEdBox

	Article: Q177088
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With Microsoft Visual Basic 4.0, when you set the Text property of a Mask Edit
	control at run-time, you receive the following error.
	
	  Run-time Error 380:
	  Invalid Property Value
	
	CAUSE
	=====
	
	This error occurs under the following circumstances:
	
	- The Visible property of the Mask Edit control is set to False at
	  design-time.
	
	  -and-
	
	- A later version of MSMASK32.OCX is installed. The error occurs with
	  MSMASK32.OCX version 5.00.3714, which ships with Microsoft Visual Basic 5.0.
	
	RESOLUTION
	==========
	
	To work around this problem, set the Visible property of the Mask Edit control
	to True at design-time and then change it to False at run-time, perhaps during
	the Load event of the form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic 4.0. Form1 is created by default.
	
	2. Click Custom Controls on the Tools menu, and check "Microsoft Mask Edit
	  Control."
	
	3. Add a Mask Edit control to Form1, and set the following properties for the
	  control:
	
	  Property                 Value
	  --------                 -----
	  Visible                  False
	  Mask                     &-&
	
	4. Add the following code to the Click event of Form1.
	
	        MaskEdBox1.Text = " - "
	        MaskEdBox1.Visible = True
	
	5. Press the F5 key to run the project.
	
	6. Click the Form and note that the code should run as expected.
	
	7. Click Make EXE on the File menu, and make an executable.
	
	8. At a machine where Visual Basic 5.0 is installed, run the executable you
	  created in the previous step.
	
	  NOTE: If you receive an error that VB40032.DLL cannot be found when you run
	  the executable, you will need to copy VB40032.DLL to the Windows\System
	  directory.
	
	9. Click the form. You will receive the run-time error 380 "Invalid Property
	  Value" when your code attempts to set the Text property of the MaskEdBox.
	
	Additional query words: masked edit box editbox kbVBp400bug kbVBp500bug kbVBp kbdsd 
	kbDSupport kbnoupdate
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbVB400Search kbVB400
	Issue type        : kbbug
	
	=============================================================================
	
