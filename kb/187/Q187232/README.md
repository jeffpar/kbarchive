---
layout: page
title: "Q187232: HOWTO: Add Multiple Controls to a CoolBar Control Band"
permalink: kb/187/Q187232/
---

## Q187232: HOWTO: Add Multiple Controls to a CoolBar Control Band

	Article: Q187232
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can have only one child control per Band of a CoolBar, so that a given Band
	cannot have multiple child controls. If you want to emulate multiple child
	controls on a single Band of a CoolBar control, you will need to use a container
	control, such as a PictureBox (or UserControl) to contain all of the "child"
	controls and then set the Child property of the Band to the PictureBox.
	
	MORE INFORMATION
	================
	
	Using this technique, you have to add code to handle the resizing of the
	controls within the PictureBox because when the CoolBar Band is resized only the
	PictureBox gets resized, not the controls inside the PictureBox.
	
	Step-by-Step Example
	--------------------
	
	1. In a new Standard EXE project, select Components from the Projects menu,
	  check "Microsoft Windows Common Controls-3 6.0," and click OK.
	
	2. Add a CommandButton, a TextBox and a CoolBar to Form1. Select CoolBar1, and
	  add a PictureBox and a TextBox to it. Right-click the CoolBar and select
	  Properties. Select the Bands Tab. In the Child combo box, choose Picture1.
	
	3. Advance the Index (upper-left) to 2 and choose Text2 from the Child combo
	  box. Advance the Index to 3, click the "Remove Band" button, and then click
	  OK.
	
	4. Select Picture1 and add a TextBox, a ComboBox and a CommandButton to
	  Picture1, so that they fill the PictureBox. Add the following code to the
	  module of Form1:
	
	         Option Explicit
	
	         Dim MyBox As PICTSIZE
	
	         Private Sub Form_Load()
	         DoCoolResize = False ' Flag for CoolBar Resize Event
	         MyBox.Height = Picture1.Height ' Remember the original size
	         MyBox.Width = Picture1.Width
	         End Sub
	
	         Private Sub Command1_Click()
	         ' Changing CoolBar1.Height will have no effect
	         CoolBar1.Width = CoolBar1.Width * 1.1  ' grow 10%
	         End Sub
	
	         Private Sub CoolBar1_Resize()
	         Dim ScaleFactorX As Single, ScaleFactorY As Single
	         If Not DoCoolResize Then  ' To avoid infinite loop
	            DoCoolResize = True
	            Exit Sub
	         End If
	         ScaleFactorX = Picture1.Width / MyBox.Width   ' How much change?
	         ScaleFactorY = Picture1.Height / MyBox.Height
	         ' UnComment the next line to scale the controls in the PictureBox
	         'Resize_For_Container ScaleFactorX, ScaleFactorY, Me, _
	          Picture1, CoolBar1.Name
	         MyBox.Height = Picture1.Height ' Remember the new size
	         MyBox.Width = Picture1.Width
	         End Sub
	
	5. From the Project menu, add a new Module and insert the following code:
	
	         Type PICTSIZE
	            Height As Long
	            Width As Long
	         End Type
	
	         Public DoCoolResize As Boolean
	
	         Sub Resize_For_Container(ByVal SFX As Single, _
	          ByVal SFY As Single, MyForm As Form, _
	          MyContainer As PictureBox, MyCoolName As String)
	         Dim I As Integer
	         Dim SFFont As Single
	
	         SFFont = (SFX + SFY) / 2  ' average scale
	         ' Size the Controls for the new container size
	         On Error Resume Next  ' for read-only or nonexistent properties
	         With MyForm
	           For I = 0 To .Count - 1
	             ' Do not try to resize the CoolBar or PictureBox
	             If Not .Controls(I).Name = MyContainer.Name _
	                And Not .Controls(I).Name = MyCoolName Then
	              If .Controls(I).Container.Name = MyContainer.Name Then
	               If TypeOf .Controls(I) Is ComboBox Then  ' can't change Height
	                  .Controls(I).Left = .Controls(I).Left * SFX
	                  .Controls(I).Top = .Controls(I).Top * SFY
	                  .Controls(I).Width = .Controls(I).Width * SFX
	               Else
	                  .Controls(I).Move .Controls(I).Left * SFX, _
	                  .Controls(I).Top * SFY, _
	                  .Controls(I).Width * SFX, _
	                  .Controls(I).Height * SFY
	               End If
	                  .Controls(I).FontSize = .Controls(I).FontSize * SFFont
	             End If
	            End If
	           Next I
	         End With
	         End Sub
	
	6. Run the Project. Each time you Click on Command1, the Bands, the lone TextBox
	  and the PictureBox will grow, but the controls within the PictureBox will
	  not.
	
	7. Stop the Project and uncomment the call to Resize_For_Container in the
	  CoolBar's Resize Event. (Uncomment by removing the single quote from the
	  beginning of the line.)
	
	8. Run the Project. Now, each time you Click on Command1, the CoolBar Bands, the
	  lone TextBox, the PictureBox and all the controls within it will also grow
	  proportionately, while the controls that are outside of the CoolBar remain
	  unaffected.
	
	REFERENCES
	==========
	
	Search On-line Help for "CoolBar" and select the following topics:
	
	- "Using the CoolBar Control"
	
	- "Using Other Controls with the CoolBar"
	
	- "Adding Controls to the CoolBar"
	
	Additional query words: kbDSupport kbdsd kbCtrl kbUsage change kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	
