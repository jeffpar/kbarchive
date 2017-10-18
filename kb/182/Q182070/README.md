---
layout: page
title: "Q182070: HOWTO: Create a Resolution-Independent Form"
permalink: kb/182/Q182070/
---

## Q182070: HOWTO: Create a Resolution-Independent Form

	Article: Q182070
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbdisplay kbVBp kbVBp400 kbVBp500 kbVBp600 kbForms kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a Form takes up most of the screen at 640 x 480 (VGA) resolution, it only
	takes up a small portion of the screen at 1600 x 1200. Normally, this is exactly
	what you want to happen, but some circumstances arise where you want a Form to
	retain the same proportional size and position regardless of screen resolution.
	This article discusses a simple way to accomplish this for an Single Document
	Interface (SDI) application. It does not address special considerations for
	Multiple Document Interface (MDI) applications.
	
	MORE INFORMATION
	================
	
	When designing Forms to be resized at run time, keep the following in mind:
	
	- When designing Forms, it is best to design them for the lowest screen
	  resolution you expect users to run. Even using the technique outlined here,
	  it is best to stay with this rule because Forms resize better going to higher
	  resolutions than they do going to lower ones.
	
	- Use TrueType Fonts because they are scalable. Also, try to use Fonts that
	  will be available on the user's system. Otherwise, a substituted Font may not
	  scale properly.
	
	- Because resizing may not always be exact, especially with Fonts, make the
	  controls a little larger than the minimum necessary. Also, try to leave a
	  little space between controls.
	
	- Some controls, like CheckBoxes and Option buttons, do not resize, and some
	  controls may require special handling. For example, the Height property of
	  ComboBoxes is read-only at run-time, but changing the font size adjusts the
	  Height. Other controls may not have a FontSize property and need some other
	  property set to make FontSize appear correctly.
	
	Step-by-Step Example
	--------------------
	
	1. Change the video resolution to 800 x 600.
	
	2. Start a new project in Visual Basic. Form1 is created by default.
	
	3. Add a Label, a CommandButton, and any other types of controls you would like
	  to test.
	
	4. Copy the following code into the Form's module:
	
	        Option Explicit
	
	        Dim MyForm As FRMSIZE
	        Dim DesignX As Integer
	        Dim DesignY As Integer
	
	        Private Sub Form_Load()
	        Dim ScaleFactorX As Single, ScaleFactorY As Single  ' Scaling factors
	        ' Size of Form in Pixels at design resolution
	        DesignX = 800
	        DesignY = 600
	        RePosForm = True   ' Flag for positioning Form
	        DoResize = False   ' Flag for Resize Event
	        ' Set up the screen values
	        Xtwips = Screen.TwipsPerPixelX
	        Ytwips = Screen.TwipsPerPixelY
	        Ypixels = Screen.Height / Ytwips ' Y Pixel Resolution
	        Xpixels = Screen.Width / Xtwips  ' X Pixel Resolution
	
	        ' Determine scaling factors
	        ScaleFactorX = (Xpixels / DesignX)
	        ScaleFactorY = (Ypixels / DesignY)
	        ScaleMode = 1  ' twips
	        'Exit Sub  ' uncomment to see how Form1 looks without resizing
	        Resize_For_Resolution ScaleFactorX, ScaleFactorY, Me
	        Label1.Caption = "Current resolution is " & Str$(Xpixels) + _
	         "  by " + Str$(Ypixels)
	        MyForm.Height = Me.Height ' Remember the current size
	        MyForm.Width = Me.Width
	        End Sub
	
	        Private Sub Form_Resize()
	        Dim ScaleFactorX As Single, ScaleFactorY As Single
	
	        If Not DoResize Then  ' To avoid infinite loop
	           DoResize = True
	           Exit Sub
	        End If
	
	        RePosForm = False
	        ScaleFactorX = Me.Width / MyForm.Width   ' How much change?
	        ScaleFactorY = Me.Height / MyForm.Height
	        Resize_For_Resolution ScaleFactorX, ScaleFactorY, Me
	        MyForm.Height = Me.Height ' Remember the current size
	        MyForm.Width = Me.Width
	        End Sub
	
	        Private Sub Command1_Click()
	        Dim ScaleFactorX As Single, ScaleFactorY As Single
	
	        DesignX = Xpixels
	        DesignY = Ypixels
	        RePosForm = True
	        DoResize = False
	        ' Set up the screen values
	        Xtwips = Screen.TwipsPerPixelX
	        Ytwips = Screen.TwipsPerPixelY
	        Ypixels = Screen.Height / Ytwips ' Y Pixel Resolution
	        Xpixels = Screen.Width / Xtwips  ' X Pixel Resolution
	
	        ' Determine scaling factors
	        ScaleFactorX = (Xpixels / DesignX)
	        ScaleFactorY = (Ypixels / DesignY)
	        Resize_For_Resolution ScaleFactorX, ScaleFactorY, Me
	        Label1.Caption = "Current resolution is " & Str$(Xpixels) + _
	         "  by " + Str$(Ypixels)
	        MyForm.Height = Me.Height ' Remember the current size
	        MyForm.Width = Me.Width
	        End Sub
	
	5. Add a Module from the Project menu and paste in the following code:
	
	        Public Xtwips As Integer, Ytwips As Integer
	        Public Xpixels As Integer, Ypixels As Integer
	
	        Type FRMSIZE
	           Height As Long
	           Width As Long
	        End Type
	
	        Public RePosForm As Boolean
	        Public DoResize As Boolean
	
	        Sub Resize_For_Resolution(ByVal SFX As Single, _
	         ByVal SFY As Single, MyForm As Form)
	        Dim I As Integer
	        Dim SFFont As Single
	
	        SFFont = (SFX + SFY) / 2  ' average scale
	        ' Size the Controls for the new resolution
	        On Error Resume Next  ' for read-only or nonexistent properties
	        With MyForm
	          For I = 0 To .Count - 1
	           If TypeOf .Controls(I) Is ComboBox Then   ' cannot change Height
	             .Controls(I).Left = .Controls(I).Left * SFX
	             .Controls(I).Top = .Controls(I).Top * SFY
	             .Controls(I).Width = .Controls(I).Width * SFX
	           Else
	             .Controls(I).Move .Controls(I).Left * SFX, _
	              .Controls(I).Top * SFY, _
	              .Controls(I).Width * SFX, _
	              .Controls(I).Height * SFY
	           End If
	             ' Be sure to resize and reposition before changing the FontSize
	             .Controls(I).FontSize = .Controls(I).FontSize * SFFont
	          Next I
	          If RePosForm Then
	            ' Now size the Form
	            .Move .Left * SFX, .Top * SFY, .Width * SFX, .Height * SFY
	          End If
	        End With
	        End Sub
	
	Try running this under different screen resolutions and the Form should take up
	the same desktop area and retain its look and screen position. You may notice
	that your design resizes better when changing to a higher resolution than it
	does when changing to a lower one. You can also use the Mouse to Resize the Form
	and it will re-scale automatically. Finally, if you change video resolution
	while the Form is open, you can click on Command1 and it adjusts for the new
	resolution.
	
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q187562 HOWTO: Resize the Controls in SSTab When Form is Resized
	
	  Q253940 PRB: Incorrect Screen Object Width/Height After Desktop Resized
	
	  Q206907 BUG: Reposition or Resize a Control After Changing Font Causes
	  Incorrect Positioning and Sizing
	
	Additional query words: scale
	
	======================================================================
	Keywords          : kbdisplay kbVBp kbVBp400 kbVBp500 kbVBp600 kbForms kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
