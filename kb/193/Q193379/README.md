---
layout: page
title: "Q193379: HOWTO: Print Preview in Visual Basic Applications"
permalink: /kb/193/Q193379/
---

## Q193379: HOWTO: Print Preview in Visual Basic Applications

{% raw %}

	Article: Q193379
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows you how to create a sample project that adds print preview
	capabilities to your Visual Basic program by using a generic object and the
	Printer object. The article assumes you are familiar with objects and the Common
	Dialog control in Visual Basic.
	
	MORE INFORMATION
	================
	
	Create the Sample Project
	-------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a reference to the Microsoft Common Dialog Control 6.0 by completing the
	  following steps:
	
	  a. From the Project menu, select Components to display the Components dialog
	     box.
	
	  b. From the Controls tab, check Microsoft Common Dialog Control 6.0.
	
	  c. Click OK to close the Components dialog box.
	
	3. Add three CommandButtons, two PictureBox controls, and one Common Dialog
	  control to Form1.
	
	4. Copy the following code to the Code window of Form1:
	
	        Option Explicit
	
	        Private Sub Form_Load()
	           CommonDialog1.CancelError = True
	           Command1.Caption = "Load Picture"
	           Command2.Caption = "Print Preview"
	           Command3.Caption = "Print"
	        End Sub
	
	        Private Sub Command1_Click()
	           Dim sFileFilter As String
	
	           On Error GoTo ErrHandler
	
	           sFileFilter = "Bitmap Files (*.bmp)|*.bmp|"
	           sFileFilter = sFileFilter & "GIF Files (*.gif)|*.gif|"
	           sFileFilter = sFileFilter & "Icon Files (*.ico)|*.ico|"
	           sFileFilter = sFileFilter & "JPEG Files (*.jpg)|*.jpg|"
	           sFileFilter = sFileFilter & "Windows MetaFiles (*.wmf)|.wmf"
	           With CommonDialog1
	              .Filter = sFileFilter
	              .ShowOpen
	              If .FileName <> " " Then
	                 Picture2.Picture = LoadPicture(.FileName)
	              End If
	           End With
	
	           ErrHandler:
	              Exit Sub
	        End Sub
	
	        Private Sub Command2_Click()
	           Dim dRatio As Double
	           dRatio = ScalePicPreviewToPrinterInches(Picture1)
	           PrintRoutine Picture1, dRatio
	        End Sub
	
	        Private Sub Command3_Click()
	           Printer.ScaleMode = vbInches
	           PrintRoutine Printer
	           Printer.EndDoc
	        End Sub
	
	        Private Function ScalePicPreviewToPrinterInches _
	           (picPreview As PictureBox) As Double
	
	           Dim Ratio As Double ' Ratio between Printer and Picture
	           Dim LRGap As Double, TBGap As Double
	           Dim HeightRatio As Double, WidthRatio As Double
	           Dim PgWidth As Double, PgHeight As Double
	           Dim smtemp As Long
	
	           ' Get the physical page size in Inches:
	           PgWidth = Printer.Width / 1440
	           PgHeight = Printer.Height / 1440
	
	           ' Find the size of the non-printable area on the printer to
	           ' use to offset coordinates. These formulas assume the
	           ' printable area is centered on the page:
	           smtemp = Printer.ScaleMode
	           Printer.ScaleMode = vbInches
	           LRGap = (PgWidth - Printer.ScaleWidth) / 2
	           TBGap = (PgHeight - Printer.ScaleHeight) / 2
	           Printer.ScaleMode = smtemp
	
	           ' Scale PictureBox to Printer's printable area in Inches:
	           picPreview.ScaleMode = vbInches
	
	           ' Compare the height and with ratios to determine the
	           ' Ratio to use and how to size the picture box:
	           HeightRatio = picPreview.ScaleHeight / PgHeight
	           WidthRatio = picPreview.ScaleWidth / PgWidth
	
	           If HeightRatio < WidthRatio Then
	              Ratio = HeightRatio
	              smtemp = picPreview.Container.ScaleMode
	              picPreview.Container.ScaleMode = vbInches
	              picPreview.Width = PgWidth * Ratio
	              picPreview.Container.ScaleMode = smtemp
	           Else
	              Ratio = WidthRatio
	              smtemp = picPreview.Container.ScaleMode
	              picPreview.Container.ScaleMode = vbInches
	              picPreview.Height = PgHeight * Ratio
	              picPreview.Container.ScaleMode = smtemp
	           End If
	
	           ' Set default properties of picture box to match printer
	           ' There are many that you could add here:
	           picPreview.Scale (0, 0)-(PgWidth, PgHeight)
	           picPreview.Font.Name = Printer.Font.Name
	           picPreview.FontSize = Printer.FontSize * Ratio
	           picPreview.ForeColor = Printer.ForeColor
	           picPreview.Cls
	
	           ScalePicPreviewToPrinterInches = Ratio
	        End Function
	
	        Private Sub PrintRoutine(objPrint As Object, _
	                                 Optional Ratio As Double = 1)
	           ' All dimensions in inches:
	
	           ' Print some graphics to the control object
	           objPrint.Line (1, 1)-(1 + 6.5, 1 + 9), , B
	           objPrint.Line (1.1, 2)-(1.1, 2)
	           objPrint.PaintPicture Picture2, 1.1, 1.1, 0.8, 0.8
	           objPrint.Line (2.1, 1.2)-(2.1 + 5.2, 1.2 + 0.7), _
	                          RGB(200, 200, 200), BF
	
	           ' Print a title
	           With objPrint
	              .Font.Name = "Arial"
	              .CurrentX = 2.3
	              .CurrentY = 1.3
	              .FontSize = 35 * Ratio
	              objPrint.Print "Visual Basic Printing"
	           End With
	
	           ' Print some circles
	           Dim x As Single
	           For x = 3 To 5.5 Step 0.2
	              objPrint.Circle (x, 3.5), 0.75
	           Next
	
	           ' Print some text
	           With objPrint
	              .Font.Name = "Courier New"
	              .FontSize = 30 * Ratio
	              .CurrentX = 1.5
	              .CurrentY = 5
	              objPrint.Print "It is possible to do"
	
	              .FontSize = 24 * Ratio
	              .CurrentX = 1.5
	              .CurrentY = 6.5
	              objPrint.Print "It is possible to do print"
	
	              .FontSize = 18 * Ratio
	              .CurrentX = 1.5
	              .CurrentY = 8
	              objPrint.Print "It is possible to do print preview"
	           End With
	        End Sub
	
	5. On the Run menu, select Start, or press the F5 key to start the program.
	  Click the Load Picture CommandButton to open the Common Dialog box. Select an
	  appropriate graphic file and click OK. The graphic is displayed in a
	  PictureBox. Click the Print Preview CommandButton to display the graphic and
	  some text in the other PictureBox. Click the Print CommandButton to print the
	  contents of the PictureBox.
	
	REFERENCES
	==========
	
	To add Print Preview to your 16-bit Visual Basic program, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q113236 HOWTO: Add Print Preview to Visual Basic Applications
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp500 kbVBp600 kbPrinting
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
