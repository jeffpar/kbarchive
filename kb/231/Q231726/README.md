---
layout: page
title: "Q231726: HOWTO: Export a DataReport to an RTF file"
permalink: /kb/231/Q231726/
---

## Q231726: HOWTO: Export a DataReport to an RTF file

	Article: Q231726
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbAddIn kbReportWriter kbVBp600 kbGrpDSVBDB
	Last Modified: 29-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If users want to export a Visual Basic DataReport to an .Rtf file, they must use
	automation. There is not a built-in option to send the report directly to this
	file format. You can send a report to a .Txt file, and then use OLE automation
	to save that file as a .Rtf file.
	
	MORE INFORMATION
	================
	
	Steps to Accomplish:
	
	1. Create a Standard EXE Project in Visual Basic. Form1 is created by default.
	
	2. From the Project menu, select Add Data Report and Add Data Environment.
	
	3. In the DataEnvironment, create a Connection to the Nwind.MDB and add a
	  command that uses the Customers table.
	
	4. Drag-and-drop the CustomerID and CompanyName fields to the Detail Band of the
	  DataReport.
	
	5. Select the DataReport and, in the Properties sheet window, set the DataSource
	  property to DataEnvironment1. Set the DataMember property to Command1.
	
	6. Select Form1 and add a CommandButton. Change the Caption property to Show
	  Report. In the Click event for the CommandButton, add the line:
	  "DataReport1.Show." (without the quotation marks)
	
	7. Add another CommandButton and change the Caption property to Export Report.
	  Add the following code to the Click event:
	
	      ' export report to TXT file
	      DataReport1.ExportReport rptKeyText, "c:\Report\mytext1.txt"
	
	      Dim obj As Object
	      Set obj = CreateObject("Word.basic")
	      obj.fileopen "c:\report\mytext1.txt"
	      obj.FileSaveAs "c:\report\myrtf.rtf", 6
	      Set obj = Nothing
	      MsgBox "Your document was converted to RTF format"
	
	8. Be sure that the folder "C:\Report" exists.
	
	9. Press the F5 key to run the program. Click the Show Report button to see the
	  information from the Customers table. Click the Export Report button to
	  export to the .Txt file, and subsequently create the .Rtf file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAddIn kbReportWriter kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
