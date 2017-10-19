---
layout: page
title: "Q190038: BUG: Windowless OptionButton Events Not in Correct Order"
permalink: /kb/190/Q190038/
---

## Q190038: BUG: Windowless OptionButton Events Not in Correct Order

	Article: Q190038
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The events of a Windowless OptionButton do not fire in the correct sequence when
	navigating with ARROW keys.
	
	RESOLUTION
	==========
	
	Use the windowed intrinsic Visual Basic OptionButton instead of the windowless
	(Lightweight) OptionButton control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The proper sequence is the following order: the LostFocus event of the previous
	control followed by the GotFocus and Click events of the active control.
	
	Instead, the order when navigating with the ARROW keys is the following: the
	Click event of the active control, then the LostFocus event of the previous
	control, followed by the GotFocus event of the active control.
	
	NOTE: The Microsoft Windowless Controls are not part of the default Visual Basic
	installation. Please refer to the REFERENCES section below for details.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Using the Projects menu, select Components to bring up the Components dialog
	  box. On the Controls Tab, check "Microsoft Windowless Controls." Then click
	  OK.
	
	3. Add a Frame, Frame1, to Form1.
	
	4. Add two Windowless OptionButtons, WLOption1 and WLOption2, to Frame1.
	
	5. Add the following code to Form1:
	
	        Private Sub WLOption1_Click()
	           Debug.Print "WLOption1_Click"
	        End Sub
	
	        Private Sub WLOption1_GotFocus()
	           Debug.Print "WLOption1_GotFocus"
	        End Sub
	
	        Private Sub WLOption1_LostFocus()
	           Debug.Print "WLOption1_LostFocus"
	        End Sub
	
	        Private Sub WLOption2_Click()
	           Debug.Print "WLOption2_Click"
	        End Sub
	
	        Private Sub WLOption2_GotFocus()
	           Debug.Print "WLOption2_GotFocus"
	        End Sub
	
	        Private Sub WLOption2_LostFocus()
	           Debug.Print "WLOption2_LostFocus"
	        End Sub
	
	6. Run the Project.
	
	7. Click on the OptionButtons with the mouse. When the OptionButtons are
	  navigated by clicking with the mouse, the events are fired in the proper
	  order:
	
	  LostFocus
	  GotFocus
	  Click
	
	8. Use the ARROW keys to navigate between the OptionButtons. When the
	  OptionButtons are navigated by using the ARROW keys, the events are not fired
	  in the proper order:
	
	  Click
	  LostFocus
	  GotFocus
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q189950 HOWTO: Install the Microsoft Windowless Controls for VB6
	
	Additional query words: kbDSupport kbDSD Option Button kbVBp kbCtrl kbVBp600bug radio
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	
