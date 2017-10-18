---
layout: page
title: "Q243278: WD97: How to Export a Table to Database/Spreadsheet Application"
permalink: kb/243/Q243278/
---

## Q243278: WD97: How to Export a Table to Database/Spreadsheet Application

	Article: Q243278
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft Word does not allow you to directly save your Word document as a
	Microsoft Excel, Lotus 1-2-3, dBase, or other database or spreadsheet file. This
	article provides the steps for converting your Word table into a file format
	that can be easily imported into a database or spreadsheet application.
	
	MORE INFORMATION
	================
	
	To export information from a Word table to your particular spreadsheet or
	database, use one of the following methods:
	
	NOTE: These procedures assume that your Word document only contains a table that
	you want to import into either a database or a spreadsheet application. If your
	Word document contains other text outside the Word table, you may get unwanted
	results.
	
	Method 1: Save Using the Text with Layout Converter
	---------------------------------------------------
	
	NOTE: This method saves a copy of your Word document containing a table into a
	fixed-width delimited text file. Make sure that the application you want to
	import this file into is capable of importing this type of file format.
	
	1. Open your Word document that contains the table you want to import into your
	  database or spreadsheet application.
	
	2. On the File menu, click Save As.
	
	3. In the Save As dialog box, change the Save as type box to Text with Layout
	  (*.ans) and click Save.
	
	  NOTE: You may also want to rename your file to a new file name before you
	  click Save. Your new file will have the *.ans file extension.
	
	4. When Word prompts you with the following message, click Yes.
	
	  This document may contain formatting which will be lost upon conversion to
	  Text with Layout format. To preserve the initial document, click No to exit
	  this dialog, then save the document in Word format before converting.
	
	  Continue with save?
	
	Your database or spreadsheet application should now import your file as a
	fixed-width delimited text file.
	
	Method 2: Convert Your Word Table to Text
	-----------------------------------------
	
	1. Determine which field delimiting character your spreadsheet or database
	  software recognizes when importing ASCII or ANSI text files.
	
	2. In Word, place the insertion point inside a cell of the table. On the Table
	  menu, click Select Table.
	
	3. On the Table menu, click Convert Table to Text.
	
	4. In the Convert Table to Text dialog box, click to select either Tabs or
	  Commas, based on the delimiter your spreadsheet or database application
	  accepts, and then click OK.
	
	5. On the File menu, click Save As. Change the Save as type box to Text Only
	  (*.txt) and click Save.
	
	  NOTE: You may also want to rename your file to a new file name before you
	  click Save. Your new file will have the *.txt file extension.
	
	Your database or spreadsheet application should now import your new file as a
	tab-delimited or comma-delimited text file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
