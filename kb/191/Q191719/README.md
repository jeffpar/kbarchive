---
layout: page
title: "Q191719: BUG: UpDown Control's BuddyProperty Returns Empty String in EXE"
permalink: /kb/191/Q191719/
---

## Q191719: BUG: UpDown Control's BuddyProperty Returns Empty String in EXE

	Article: Q191719
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
	
	When an UpDown control's BuddyControl property is set to an intrinsic control,
	the BuddyProperty returns an empty string in a compiled EXE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The BuddyProperty sets or returns the property used to synchronize the UpDown
	control with its buddy control. When the buddy control is a Visual Basic
	intrinsic control, the BuddyPropery returns a blank string in a compiled exe.
	The BuddyProperty works correctly in the IDE for intrinsic controls. It also
	returns the correct value in an EXE or the IDE if the BuddyControl property is
	set to an ActiveX control.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new standard EXE project. Form1 is created by default.
	
	2. From the Project menu, select Components, check both "Microsoft Windows
	  Common Controls" and "Microsoft Windows Common Controls-2," And then click
	  OK.
	
	3. Add two UpDown controls, a TextBox, a Slider, and a CommandButton to Form1.
	
	4. Add the following code to the module of Form1:
	
	        Private Sub Command1_Click()
	          MsgBox "Updown1 BuddyPropery is " & UpDown1.BuddyProperty
	          MsgBox "Updown2 BuddyPropery is " & UpDown2.BuddyProperty
	        End Sub
	
	        Private Sub Form_Load()
	          UpDown1.BuddyControl = Text1
	          UpDown1.BuddyProperty = "text"
	          UpDown2.BuddyControl = Slider1
	          UpDown2.BuddyProperty = "value"
	        End Sub
	
	5. From the File menu, Save the project and Make an EXE.
	
	6. Run the project in the Visual Basic IDE and click on Command1, and note that
	  the BuddyProperty returns the correct value for both Text1 and Slider1.
	
	7. Run the compiled EXE from Windows Explorer and click on Command1. Note that
	  the BuddyPropery only returns the correct value for Slider1 and not for
	  Text1.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp600bug kbVBp500bug kbCmnCtrls
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	
