---
layout: page
title: "Q175084: SAMPLE: PRTLGPCT.EXE: Print a Large Bitmap on Multiple Pages"
permalink: kb/175/Q175084/
---

## Q175084: SAMPLE: PRTLGPCT.EXE: Print a Large Bitmap on Multiple Pages

	Article: Q175084
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbprint kbSample kbPrinting kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSuppor
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The PaintPicture method of the Picture object allows you to print the picture.
	However, this method will adjust the picture size to fit on a single sheet of
	paper. This article shows you how to print a large picture on multiple sheets of
	paper.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Prtlgpct.exe
	  (http://download.microsoft.com/download/vb60pro/samp41/1/WIN98/EN-US/Prtlgpct.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	When you run the self-extracting file, the following files are expanded into the
	Printing Large Pictures Project on your hard drive:
	
	- Form1.frm 4,570 bytes
	
	- Prtlgpct.vbp 650 bytes
	
	- Prtlgpct.vbw 49 bytes
	
	- Readme.txt 5,113 bytes
	
	MORE INFORMATION
	================
	
	To print a large picture over several sheets, you start by calculating the ratio
	of the picture's height and width to the maximum height and width the printer
	can print. From this ratio, you can calculate the number of pages required to
	print the picture completely. With each page, you use the PrintPicture method to
	print the maximum image on that sheet. Keep repeating this process on each
	successive page until the picture is completely printed.
	
	The next section shows you how to create a sample program to demonstrate this
	technique.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add three CommandButtons, a Common Dialog control, and a Picture control to
	  Form1.
	
	3. Copy the following code to the Code window of Form1:
	
	        Option Explicit
	
	        Const constMaxValue = 32767
	
	        Dim lngPrinterWidth As Long, lngPrinterHeight As Long
	        Dim lngPictureWidth As Long, lngPictureHeight As Long
	        Dim lngXCoor As Long, lngYCoor As Long
	        Dim sngWidthRatio As Single, sngHeightRatio As Single
	        Dim intPageWidth As Integer, intPageHeight As Integer
	        Dim bytWidthCount As Byte, bytHeightCount As Byte
	
	        Private Sub Form_Load()
	           Command1.Caption = "Load Picture"
	           Command2.Caption = "Print Single Page"
	           Command3.Caption = "Print Multiple Pages"
	        End Sub
	
	        Private Sub Command1_Click()
	           'Opens the common dialog box so you can select a picture file
	           'to load into the Picture object.
	           Dim picFile As Picture
	           CommonDialog1.Filter = "JPEG files|*.jpg|BMP files|*.bmp"
	           CommonDialog1.ShowOpen
	
	           If CommonDialog1.filename <> "" Then
	              Set picFile = LoadPicture(CommonDialog1.filename)
	              Set Picture1.Picture = picFile
	              Form1.Height = Picture1.Height + 1700
	              Form1.Width = Picture1.Width + 1400
	              Picture1.Left = 700
	              Picture1.Top = 700
	           End If
	        End Sub
	
	        Private Sub Command2_Click()
	           'Print the picture on a single sheet. Picture object automatically
	           'adjusts picture size to fit into a single sheet.
	           Printer.PaintPicture Picture1.Picture, lngXCoor, lngYCoor
	           Printer.EndDoc
	           MsgBox "Done Sending Info to Printer"
	        End Sub
	
	        Private Sub Command3_Click()
	           'Print the picture on multiple sheets.
	
	           'Load the dimensions of the image and printer into memory
	           lngPictureWidth = Picture1.Picture.Width
	           lngPictureHeight = Picture1.Picture.Height
	           lngPrinterWidth = Printer.Width
	           lngPrinterHeight = Printer.Height
	
	           'Calculate the ratios
	           sngWidthRatio = lngPictureWidth / lngPrinterWidth
	           sngHeightRatio = lngPictureHeight / lngPrinterHeight
	
	           'Calculate how many pages are required to print the picture
	           intPageWidth = constMaxValue - Int(constMaxValue - sngWidthRatio)
	           intPageHeight = constMaxValue - Int(constMaxValue - _
	                                                           sngHeightRatio)
	
	           For bytWidthCount = 1 To intPageWidth
	
	              'Calculate the x-offset
	              lngXCoor = -lngPrinterWidth * (bytWidthCount - 1)
	
	              For bytHeightCount = 1 To intPageHeight
	
	              'Calculate the y-offset
	                 lngYCoor = -lngPrinterHeight * (bytHeightCount - 1)
	
	                 'Use the Paint Picture method to print the picture
	                 Printer.PaintPicture Picture1.Picture, _
	                                      lngXCoor, _
	                                      lngYCoor, _
	                                      lngPictureWidth, _
	                                      lngPictureHeight
	                 'start a new page
	                 Printer.NewPage
	              Next bytHeightCount
	           Next bytWidthCount
	
	           Printer.EndDoc
	           MsgBox "Done Sending Info to Printer"
	        End Sub
	
	4. Press the F5 key to run the program. Click Load Picture to open the Common
	  Dialog, and choose a picture file. Click Print Single Page to print the
	  picture to a single page or Print Multiple Pages to print to multiple pages.
	
	Additional query words: Prtlgpct
	
	======================================================================
	Keywords          : kbfile kbprint kbSample kbPrinting kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
