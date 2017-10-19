---
layout: page
title: "Q257645: FIX: Setting Windowless Control to Transparent Prevents Animatio"
permalink: /kb/257/Q257645/
---

## Q257645: FIX: Setting Windowless Control to Transparent Prevents Animatio

	Article: Q257645
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCtrlCreate kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set the BackStyle property of a windowless control to Transparent,
	animation effects for that control are prevented from taking place. The effects
	are drawn, but they are not animated.
	
	CAUSE
	=====
	
	This behavior is due to the way Visual Basic draws controls.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX Control project in Visual Basic. UserControl1 is created
	  by default.
	
	2. Change the Height and Width property of UserControl1 to 1680.
	
	3. Change the Windowless property of UserControl1 to True.
	
	4. Add the following code to UserControl1:
	
	  Option Explicit
	
	  Private x As Long
	  Private y As Long
	
	  Public Property Get BackStyle() As Integer
	      BackStyle = UserControl.BackStyle
	  End Property
	
	  Public Property Let BackStyle(ByVal New_BackStyle As Integer)
	      UserControl.BackStyle() = New_BackStyle
	      PropertyChanged "BackStyle"
	  End Property
	
	  Public Property Get BackColor() As OLE_COLOR
	      BackColor = UserControl.BackColor
	  End Property
	
	  Public Property Let BackColor(ByVal New_BackColor As OLE_COLOR)
	      UserControl.BackColor() = New_BackColor
	      PropertyChanged "BackColor"
	  End Property
	
	  Private Sub UserControl_Initialize()
	      x = Width
	      y = x
	  End Sub
	
	  Private Sub UserControl_Paint()
	      If Ambient.UserMode = False Then Exit Sub
	      Randomize
	      Dim i As Integer
	      Dim j As Integer
	      For j = 1 To 40
	          For i = 1 To 30000
	              If i Mod 10000 = 0 Then
	                  Circle (x * Rnd, y * Rnd), 50
	              End If
	          Next
	      Next
	  End Sub
	
	  ' Load property values from storage
	  Private Sub UserControl_ReadProperties(PropBag As PropertyBag)
	
	      UserControl.BackStyle = PropBag.ReadProperty("BackStyle", 1)
	      UserControl.BackColor = PropBag.ReadProperty("BackColor", &H8000000F)
	  End Sub
	
	  ' Write property values to storage
	  Private Sub UserControl_WriteProperties(PropBag As PropertyBag)
	
	      Call PropBag.WriteProperty("BackStyle", UserControl.BackStyle, 1)
	      Call PropBag.WriteProperty("BackColor", UserControl.BackColor, &H8000000F)
	  End Sub
	
	5. From the File menu, select Add Project. Choose Standard EXE and click Open.
	  Form1 is created by default.
	
	6. Close the (designer) window for UserControl1.
	
	7. Add two instances of UserControl1 to Form1. They are named UserControl11 and
	  UserControl12.
	
	8. Change the BackColor property of both UserControls to something other than
	  grey.
	
	9. In the Project Explorer, change the startup project by right-clicking on
	  Project2. Select Set as Startup.
	
	10. Press the F5 key to run the project. Note that you can see circles being
	  drawn on the controls (animation.)
	
	11. Stop the project and change the BackStyle property of UserControl12 to 0
	  (Transparent.)
	
	12. Press F5 to run, and note that you do not see the circle animation on
	  UserControl11. The form becomes transparent while animating, but you only
	  see the circles on the control after the animation has taken place.
	
	REFERENCES
	==========
	
	For additional information on Windowless controls, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q184645 HOWTO: Create Lightweight Controls with Visual Basic 6.0
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbCtrlCreate kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
