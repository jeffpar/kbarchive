---
layout: page
title: "Q185880: BUG: Access Key for Constituent Control is Ignored"
permalink: /kb/185/Q185880/
---

## Q185880: BUG: Access Key for Constituent Control is Ignored

	Article: Q185880
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You create an ActiveX control that contains constituent controls, such as labels
	and command buttons, in Visual Basic. You assign these constituent controls
	access keys by including an ampersand (&) character within the Caption
	property. However, when you try to access one of the constituent controls using
	its access key, the control is not activated as expected.
	
	CAUSE
	=====
	
	The first time you access any control on the form by using an access key, any
	constituent controls that are disabled or hidden at that time are excluded from
	what you might call a "usercontrol access key map." When one of these
	constituent controls later becomes enabled or visible by programmatically
	setting its Enabled or Visible properties to True, the "map" does not get
	refreshed. This causes the unexpected behavior of not being able to access the
	control with its access key although the control is now enabled and visible.
	
	RESOLUTION
	==========
	
	Each time you programmatically set a constituent control's Enabled or Visible
	property to True, refresh its Caption property. By refreshing the constituent
	control's Caption property, you cause the access key mapping to include that
	control. See the MORE INFORMATION section for an example.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new ActiveX Control project in Visual Basic 5.0. UserControl1 is
	  created by default.
	
	2. Place two command buttons on UserControl1.
	
	3. Set the Caption properties of the command buttons to Command&1 and
	  Command&2.
	
	4. Paste the following code into the UserControl1 code window:
	
	        Option Explicit
	
	        Private Sub Command1_Click()
	           Command1.Visible = False
	           Command2.Visible = True
	        End Sub
	
	        Private Sub Command2_Click()
	           Command2.Visible = False
	           Command1.Visible = True
	        End Sub
	
	5. Close the UserControl1 code and designer windows so that UserControl1 is
	  available on the Toolbox.
	
	6. Choose Add Project from the File menu to add a Standard EXE project. Form1 is
	  created by default.
	
	7. Using the Toolbox, place UserControl1 on Form1.
	
	8. Run the project. Form1 appears.
	
	9. Click Command1 using the mouse.
	
	10. Press ALT+2, the access key to activate Command2.
	
	11. Press ALT+1, the access key to activate Command1.
	
	  RESULT: Command1 is not activated since Command1 was hidden at the time you
	  first accessed any control with its access key.
	
	Workaround
	----------
	
	Use the following code in place of the code for step 4 above:
	
	     Option Explicit
	
	     Private Sub Command1_Click()
	        Command1.Visible = False
	        Command2.Visible = True
	        RefreshAccessKey Command2
	     End Sub
	
	     Private Sub Command2_Click()
	        Command2.Visible = False
	        Command1.Visible = True
	        RefreshAccessKey Command1
	     End Sub
	
	     Private Sub RefreshAccessKey(ctl As Object)
	     'Assign caption to itself to cause refresh:
	        ctl.Caption = ctl.Caption
	     End Sub
	
	Additional query words: kbDSupport kbDSD kbCtrlCreate custom control ocx accelerator hot
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
