---
layout: page
title: "Q198508: HOWTO: Insert and Format a Picture in Word 97 w/ OLE Automation"
permalink: /kb/198/Q198508/
---

## Q198508: HOWTO: Insert and Format a Picture in Word 97 w/ OLE Automation

	Article: Q198508
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0a,6.0
	Operating System(s): 
	Keyword(s): kbole kbvfp500a kbvfp600
	Last Modified: 19-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to insert a graphic, such as a company logo, into a
	Word 97 document created with OLE automation.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     oWord=CREATEOBJECT("Word.Application")
	        WITH oWord
	        * Uncomment this line to open different BMPS with GETFILE() function
	        * pic=GETFILE("bmp")
	        * Comment this line below if using the GETFILE() function
	        * Change the path according to your installed TASTRADE directory
	        pic="C:\VFP\SAMPLE\TASTRADE\BITMAPS\BEVERAGE.BMP"
	        futuredate=DATE()+14
	        .Documents.Add
	        .ActiveDocument.Shapes.AddPicture(pic)
	        .ActiveDocument.Shapes("Picture 2").Select
	        .Selection.ShapeRange.RelativeHorizontalPosition = 2
	        .Selection.ShapeRange.RelativeVerticalPosition = 0
	        .Selection.ShapeRange.Left=4.2*72 && Move 4.2 inches x 72 points/inch
	        .Selection.ShapeRange.Top = 0
	        .Selection.ShapeRange.LockAnchor = .T.
	        .Visible=.T.
	        .Selection.MoveRight
	        .Selection.InsertParagraphAfter
	        .Selection.MoveDown
	        .Selection.Font.Name = "Arial"
	        .Selection.Font.Bold = .T.
	        .Selection.Font.Size = 8
	        .Selection.InsertDateTime("dddd, MMMM dd, yyyy", 1)
	        .Selection.ParagraphFormat.Alignment = 1      && Center date
	        .Selection.InsertParagraphAfter
	        .Selection.MoveDown
	        .Selection.ParagraphFormat.Alignment = 3      && Justify
	        .Selection.InsertParagraphAfter
	        .Selection.MoveDown
	        .Selection.InsertAfter("Dear ")
	        .Selection.MoveRight
	        .Selection.Fields.Add(oWord.Selection.Range,-1,"author")
	        .Selection.MoveRight
	        .Selection.InsertAfter(":")
	        .Selection.InsertParagraphAfter
	        .Selection.InsertParagraphAfter
	        .Selection.MoveDown
	        .Selection.InsertAfter("This letter is to inform you that ")
	        .Selection.InsertAfter("you have been selected as the")
	        .Selection.InsertAfter("grand prizewinner in our contest. ")
	        .Selection.InsertAfter("To claim your prize, please complete ")
	        .Selection.InsertAfter("the entry form and return it no later than ")
	        .Selection.InsertAfter(futuredate)
	        .Selection.InsertAfter(".")
	        .Selection.InsertParagraphAfter
	        .Selection.InsertParagraphAfter
	        .Selection.InsertAfter("If we have not received your entry within ")
	        .Selection.InsertAfter("fourteen days, that is, on or before ")
	        .Selection.InsertAfter(cmonth(futuredate))
	        .Selection.InsertAfter(" ")
	        .Selection.InsertAfter(day(futuredate))
	        .Selection.InsertAfter(", ")
	        .Selection.InsertAfter((year(futuredate)))
	        .Selection.InsertAfter(", we will remove your name from the ")
	        .Selection.InsertAfter("list of eligible winners.")
	        .Selection.InsertParagraphAfter
	        .Selection.InsertParagraphAfter
	        .Selection.InsertAfter("Thank you,")
	        .Selection.InsertParagraphAfter
	        .selection.Moveright
	        .Selection.InsertAfter("The Prize Selection Committee")
	        .Selection.Font.Name = "Lucida Handwriting"
	        .selection.Font.Bold=.T.
	        .Selection.MoveRight
	        .Application.Activate      && Activate Word.
	        =INKEY(3)                  && Wait a couple seconds.
	        * Uncomment the line below to Save the document
	        *.QUIT(-1)                 && Quit with saving.
	        * Comment the line below Save the document.
	        .QUIT(0)                   && Quit w/o saving.
	     ENDWITH
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Dean
	Christopher, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
