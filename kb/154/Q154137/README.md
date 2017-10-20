---
layout: page
title: "Q154137: XCLN: How to View, Print MS Exchange Personal Address Book Files"
permalink: /kb/154/Q154137/
---

## Q154137: XCLN: How to View, Print MS Exchange Personal Address Book Files

{% raw %}

	Article: Q154137
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot view or print the Personal Address Book (PAB) from Microsoft
	Exchange.
	
	RESOLUTION
	==========
	
	You can use the Personal Address Book as a Mail Merge data source in Word 7.0.
	There are two methods that can be used to view and/or print the PAB.
	
	Method 1: View or print the entire PAB
	--------------------------------------
	
	1. Start a new Word document. On the Tools menu, click Mail Merge.
	
	2. Click Create and then click Form Letters.
	
	3. Click Active Window.
	
	4. Click Get Data, and then click Use Address Book.
	
	5. In the Use Address Book dialog box, click Personal Address Book, and then
	  click OK.
	
	  If the Choose Profile dialog box appears, select your profile, and then click
	  OK.
	
	6. In the message box that instructs you to click Edit Main Document to insert
	  merge fields, click Cancel.
	
	7. In the Mail Merge Helper, under Data Source, click Edit, and then click Data:
	  Personal Address Book.
	
	8. In the Data Form dialog box, click View Source.
	
	  The data source opens in a Word document. The information from your PAB file
	  is stored in a Word table. Some of the columns may not be visible and the
	  text may wrap oddly.
	
	9. Select the entire table. With the insertion point in a table cell, click
	  Select Table on the Table menu.
	
	10. On the Edit menu, click Copy.
	
	11. Start Microsoft Excel.
	
	12. On the Edit menu, click Paste.
	
	13. Select the entire worksheet. On the Format menu, point to Column, and then
	  click AutoFit Selection.
	
	  The columns expand making it easier to read the text.
	
	14. To print the worksheet, click Print on the File menu.
	
	Method 2: View or print selected fields and/or records in the PAB:
	------------------------------------------------------------------
	
	1. Start a new Word document. On the Tools menu, click Mail Merge.
	
	2. Click Create and then click Catalog.
	
	3. Click Active Window.
	
	4. Click Get Data, and then click Use Address Book.
	
	5. In the Use Address Book dialog box, click Personal Address Book, and then
	  click OK.
	
	  If the Choose Profile dialog box appears, select your profile, and then click
	  OK.
	
	6. Click Edit Main Document.
	
	You can now insert the merge fields you want, you can filter or sort the data,
	and you can send the data to a new document or to the printer.
	
	Additional query words: personal address book PAB view print
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
