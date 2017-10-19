---
layout: page
title: "Q157721: HOWTO: Determine FileFormat Values for Excel SaveAs Method"
permalink: /kb/157/Q157721/
---

## Q157721: HOWTO: Determine FileFormat Values for Excel SaveAs Method

	Article: Q157721
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbExcel
	Last Modified: 20-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual Basic for Excel Help often specifies constant names rather than values to
	be used in calling object methods. When performing OLE Automation from Visual
	FoxPro, FoxPro does not understand these constants and, therefore, requires
	their initial values.
	
	Below are the steps used to determine what the constant value is for a specific
	file format to be used for the FileFormat portion of the SaveAs method.
	
	MORE INFORMATION
	================
	
	1. Create a worksheet in Excel and save it in the format that you want. Make
	  sure that you close the file before continuing.
	
	2. Issue the following commands in Visual FoxPro:
	
	        * First get an object reference to the Excel application
	        oXL = CREATEOBJECT("Excel.Application")  && starts excel
	
	        * Open the worksheet created in step 1 (be sure to include
	        * the full path and file name
	        oXL.WorkBooks.Add("myfile.xls")
	
	        * Retrieve the FileFormat
	        nFileFormat = oXL.WorkBooks(1).FileFormat
	
	        * Save the file under a new name with the same format
	        oXL.WorkBooks(1).SaveAs("new.xls",nFileFormat)
	
	        * Quit Excel
	        oXL.Quit
	
	        * Release the object reference
	        RELEASE oXL
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbExcel 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
