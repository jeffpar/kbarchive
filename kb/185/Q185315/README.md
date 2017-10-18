---
layout: page
title: "Q185315: WD97: How to Change an Existing Linked Excel Object"
permalink: kb/185/Q185315/
---

## Q185315: WD97: How to Change an Existing Linked Excel Object

	Article: Q185315
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you use the Paste Link command in a Microsoft Word document to insert a
	link to a Microsoft Excel worksheet, there is no direct way to change the number
	of rows or columns being linked from Excel.
	
	WORKAROUND
	==========
	
	To change the number of rows or columns linked to an Excel worksheet from a Word
	document, use one of the following methods.
	
	Method 1: Change the Linked Field Code
	--------------------------------------
	
	To change the linked field code, follow these steps:
	
	1. Open the document that contains the links to Excel worksheets.
	
	2. On the Tools menu, click Options, and then click the View tab.
	
	3. Under Show, select the Field Codes check box, and then click OK.
	  NOTE: For each link to the Excel worksheet, you should see a field similar to
	  the following:
	  {LINK Excel.Sheet.8 "C:\\My Documents\\EXCEL 97\\TEST1.XLS" Sheet1!R1C1:R7C6
	  \a \r }
	
	4. This example shows that you have a link to the cells of R1C1:R7C6 of an Excel
	  worksheet called Test1.xls. To change the cells of the link, you need to
	  change the cell reference of R1C1:R7C6. For example, to increase the number
	  of rows and columns by 2, you need to change R7C6 to R9C8.
	
	5. After you change the cell reference to what you want, press F9 to update the
	  field.
	
	6. On the Tools menu, click Options, and then click the View tab.
	
	7. Under Show, click to clear the Field Codes check box, and then click OK.
	
	Method 2: Edit the Excel Link
	-----------------------------
	
	To edit the Excel worksheet link and change the referenced cells, do the
	following steps:
	
	1. Open the document that contains the links to Excel worksheets.
	
	2. On the Edit menu, click Links.
	
	3. In the Links dialog box, select the link you want to change, and then click
	  Change Source.
	
	4. In the Item box, change the sheet cell references to your updated cell
	  references, click to select your Excel worksheet, and then click Open.
	  NOTE: The worksheet cell references in the Item box should appear similar to
	  the following example:
	  Sheet1!R1C1:R3C3
	
	5. In the Links dialog box, click Update Now and then click Close.
	
	Method 3: Re-create the Link from Excel
	---------------------------------------
	
	To re-create the link from Excel, follow these steps:
	
	1. In Excel, select the new cell range in the worksheet that you want.
	
	2. On the Edit menu, click Copy.
	
	3. Switch to Word, and open the document to insert the link.
	  Select the existing link and press DELETE.
	
	4. On the Edit menu, click Paste Special, and then click Paste Link.
	
	5. Click OK.
	
	For additional information about the LINK field, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q78400 WD: Using Include and Link Fields with Word for Windows
	
	Additional query words: paste linked paste-link
	
	======================================================================
	Keywords          : kbinterop kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
