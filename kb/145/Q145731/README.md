---
layout: page
title: "Q145731: BUG: Z-Order Behavior Different with OLE (.OCX) Controls"
permalink: kb/145/Q145731/
---

## Q145731: BUG: Z-Order Behavior Different with OLE (.OCX) Controls

	Article: Q145731
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00 | 4.00
	Operating System(s): 
	Keyword(s): kbbuglist
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
	
	The z-order behavior of a control which is now an OLE (.OCX) control is
	different than it was for the equivalent .VBX control in Microsoft Visual Basic
	3.0 for Windows. The OLE (.OCX) control does not overlap (appear on top of) a
	windowed control like the PictureBox control at design time. This change in
	z-order behavior is especially noticeable when a Visual Basic 3.0 application is
	imported into Visual Basic 4.0 and the .VBX controls are upgraded to OLE (.OCX)
	controls. A control which overlapped a windowed control is now underneath that
	control. Using the "Bring to Front" command on the Edit menu at design time has
	no effect. Even at run-time most OLE (.OCX) controls are underneath a windowed
	control. No matter how the control is overlapped at design time, at run-time it
	is always on top of lightweight controls and usually underneath windowed
	controls. This is especially confusing when one of these OLE (.OCX) controls is
	underneath a lightweight control at design time.
	
	CAUSE
	=====
	
	Due to a design limitation in most OLE (.OCX) controls, these controls do not
	have a window handle (hWnd) at design time. This is different than .VBX controls
	which have a window handle at design time. Both .VBX and OLE (.OCX) controls
	have window handles at run-time. Thus the z-order behavior of OLE (.OCX)
	controls is not consistent with the z-order behavior of .VBX controls because
	the OLE (.OCX) controls act like lightweight (non-windowed) controls at design
	time and windowed controls at run-time. In addition some controls do not
	correctly preserve the relative z-order among windowed controls at run-time,
	either by forcing themselves on top of or underneath the other windowed
	controls.
	
	WORKAROUND
	==========
	
	Explicitly set the z-order of the OLE (.OCX) controls at run-time with the
	z-order method. There is currently no way to correct this problem at design
	time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. Microsoft is researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following OLE (.OCX) controls act like lightweight (non-windowed) controls
	at design time in Visual Basic 4.0:
	
	AniPushButton      MAPIMessages      Slider
	CommonDialog       MAPISession       SpinButton
	CrystalReport      MaskEdBox         SSCheck
	DBCombo            MhState           SSCommand
	DBGrid             MMControl         SSOption
	DBList             MSComm            SSRibbon
	Graph              MSRDC             StatusBar
	Grid               Outline           TreeView
	ImageList          PictureClip
	ListView           ProgressBar
	
	
	NOTE: The OLE container control is a lightweight control in Visual Basic 4.0.
	
	
	The DBGrid control cannot be placed underneath a windowed control at run-time
	with the z-order method. Use the z-order method of the windowed control to place
	it on top of the DBGrid control instead.
	
	
	The 16-bit Graph control places itself on top of windowed controls at run-time.
	Use its z-order method to place it underneath other windowed controls.
	
	
	The 32-bit MaskEdBox control places itself on top of windowed controls (except
	for the DBGrid control as noted above) at run-time. Use its z-order method to
	place it underneath other windowed controls.
	
	
	The Toolbar control places itself on top of windowed controls (except for the
	DBGrid control as noted above) at run-time. Use its z-order method to place it
	underneath other windowed controls.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Visual Basic or click New Project (ALT, F, N) on the File menu if
	  Visual Basic is already running. Form1 is created by default.
	
	2. Place the following controls on Form1 in the ORDER listed and in the
	  POSITIONS diagrammed below: Command1, Command2, Command3, Command4, Command5,
	  Command6, Label1, Grid1 and Picture1:
	
	       ------------------------------
	      | --------  --------  -------- |
	      ||Command1||Command3||Command5||
	      | --------  --------  -------- |
	      | --------  --------  -------- |
	      ||Command2||Command4||Command6||
	      | --------  --------  -------- |
	      |  --------------              |
	      | |Label1        |             |
	      | |           ---------------  |
	      | |          |Picture1       | |
	      | |   -------|               | |
	      | |  |Grid1  |               | |
	      |  --|       |               | |
	      |    |        ---------------  |
	      |    |                |        |
	      |     ----------------         |
	       ------------------------------
	
	3. Place the following code in Form1:
	
	     Private Sub Form_Load()
	         Command1.Caption = "Bring to Front - Label1"
	         Command2.Caption = "Send to Back - Label1"
	         Label1.BorderStyle = 1
	         Command3.Caption = "Bring to Front - Grid1"
	         Command4.Caption = "Send to Back - Grid1"
	         Command5.Caption = "Bring to Front - Picture1"
	         Command6.Caption = "Send to Back - Picture1"
	     End Sub
	
	4. Place the following code in Command1:
	
	     Private Sub Command1_Click()
	         Label1.ZOrder 0 'Bring to Front
	     End Sub
	
	5. Place the following code in Command2:
	
	     Private Sub Command2_Click()
	         Label1.ZOrder 1 'Send to Back
	     End Sub
	
	6. Place the following code in Command3:
	
	     Private Sub Command3_Click()
	         Grid1.ZOrder 0 'Bring to Front
	     End Sub
	
	7. Place the following code in Command4:
	
	     Private Sub Command4_Click()
	         Grid1.ZOrder 1 'Send to Back
	     End Sub
	
	8. Place the following code in Command5:
	
	     Private Sub Command5_Click()
	         Picture1.ZOrder 0 'Bring to Front
	     End Sub
	
	9. Place the following code in Command6:
	
	     Private Sub Command6_Click()
	         Picture1.ZOrder 1 'Send to Back
	     End Sub
	
	10. Select the Grid control and choose "Send to Back" from the Edit menu. Notice
	  that the Grid control IS underneath the Label control. In Visual Basic 3.0,
	  the Grid control remains on top of the Label control.
	
	11. Select the PictureBox control and on the Edit menu, click "Send to Back".
	  Notice that the PictureBox control IS NOT underneath the Grid control. In
	  Visual Basic 3.0, the PictureBox control is underneath the Grid control.
	
	12. Run the application. If you left the Grid control underneath the Label
	  control, notice that it IS NOT underneath the Label control now. Click the
	  "Send to Back - Grid1" button. Notice that the Grid control IS NOT
	  underneath the Label control now either. This is the way Visual Basic 3.0
	  behaves.
	
	13. Click the "Send to Back - Picture1" button. Notice that the PictureBox
	  control IS now underneath the Grid control. This is the way Visual Basic 3.0
	  behaves.
	
	Experiment with this application at both design and run-time. Notice how at
	design time most OLE (.OCX) controls act like lightweight or non-windowed
	controls while at run-time they act like windowed controls. When porting a
	Visual Basic 3.0 project to Visual Basic 4.0, overlapping controls may no longer
	appear in the desired z-order. Add code using the z-order method so that the
	controls overlap in the desired way at run-time. Under Visual Basic 3.0, the
	Grid control can be placed over the PictureBox control at design time. If that
	project is then ported to Visual Basic 4.0, the Grid control is placed
	underneath the PictureBox control. The only way to place the Grid control over
	the PictureBox control at run-time is to use its z-order method.
	
	REFERENCES
	==========
	
	- Microsoft Visual Basic, Version 4.0, "Programmer's Guide", Appendix C
	"Compatibility with Other Versions", "Visual Basic 3.0 for Windows" section,
	"Z-Order in OCX Controls" subsection.
	
	NOTE: The second sentence which starts "In Visual Basic 4.0, however, most OCX
	controls behave like lightweight controls at run-time, ..." should read "In
	Visual Basic 4.0, however, most OCX controls behave like windowed controls at
	run-time, regardless of the z-order setting at design time.".
	
	Additional query words: 4.00 vb4win vb4all above buglist4.00
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00 | 4.00
	Issue type        : kbbug
	
	=============================================================================
	
