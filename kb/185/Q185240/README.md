---
layout: page
title: "Q185240: HOWTO: Updating Embedded Excel Sheet When Linked Sheet Changed"
permalink: kb/185/Q185240/
---

## Q185240: HOWTO: Updating Embedded Excel Sheet When Linked Sheet Changed

	Article: Q185240
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An Excel sheet that is embedded in the General field of a FoxPro table, which is
	linked to another Excel sheet, is not automatically updated when the linked
	sheet is modified.
	
	To update the embedded sheet, it has to be displayed and edited using Excel by
	double clicking the sheet. This article shows a way of doing this
	programmatically.
	
	MORE INFORMATION
	================
	
	Following are steps to update an embedded Excel sheet programmatically:
	
	1. Create an Excel workbook. On the first sheet, enter text or numbers in some
	  of the cells, and save the file as XSheet1.xls. Do not close this sheet.
	
	2. Create another Excel workBook, enter text or numbers in some of the cells,
	  and save it as XSheet2.xls.
	
	3. Create a Link from XSheet1 so that some of its cells are linked to cells in
	  XSheet2. One way to do this would be to copy using CTRL+C, one of the cells
	  in XSheet2 to the clipboard. Then, from the Edit menu, select Paste Special
	  and then select Paste Link to copy the cell into XSheet1.
	
	4. Save both Excel files and close the first workbook (XSheet1.xls). Leave the
	  second workbook (XSheet2.xls) open.
	
	5. Run Visual FoxPro and create a table with a General field.
	
	6. Add a new record to the table and then embed the first workbook (XSheet1.xls)
	  into the General field.
	
	7. Create a form and add the table created in step 6, to the Data Environment of
	  the form.
	
	8. Add an OLE Bound Control to the form. Set the ControlSource property of the
	  control to the General field, of the table in the form's data environment,
	  that contains the embedded Excel sheet. Set the name of the control to
	  OLEBoundControl1.
	
	9. Run the form, to display the embedded sheet (XSheet1.xls).
	
	10. Go to the linked sheet, XSheet2.xls in Excel, and change the value of the
	  linked cell. Press ENTER or move to another cell to submit the change.
	
	11. Switch to FoxPro and look at the embedded sheet, XSheet1.xls, as displayed
	  by the form.
	
	  NOTE: The changes to the linked workbook (XSheet2.XLS) are not reflected on
	  the embedded workbook (XSheet1.XLS) as displayed by Visual FoxPro.
	
	12. Close the FoxPro form and then edit the form using the Form Designer.
	
	13. Add the following code to the INIT event and the Refresh of the OLE
	  Control:
	
	        This.DoVerb(-3)
	
	14. Repeat steps 9, 10, and 11.
	
	NOTE: The changes to the linked workbook (XSheet2.XLS) are reflected on the
	embedded workbook (XSheet1.XLS) as displayed by Visual FoxPro.
	
	REFERENCES
	==========
	
	Visual FoxPro Help; search on: "DoVerb"
	
	Additional query words: OLEAutomation
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbhowto
	
	=============================================================================
	
