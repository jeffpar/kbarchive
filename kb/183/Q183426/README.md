---
layout: page
title: "Q183426: WD97: How to Merge a Single Data Source to Multiple Documents"
permalink: kb/183/Q183426/
---

## Q183426: WD97: How to Merge a Single Data Source to Multiple Documents

	Article: Q183426
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta kbfield word97 kbmerge
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you use the Mail Merge feature of Microsoft Word, you can only use one main
	document with one data source. With the use of If and AutoText fields, or If and
	IncludeText fields, you can simulate merging one data source into several
	letters. Using AutoText fields will store your information into AutoText entries
	while using IncludeText fields will store your information into separate
	letters. Either method will produce the same results with no particular
	advantage of one method over the other. This article describes how you can use
	these fields to produce several letters with one data source.
	
	Set Up the Mail Merge Main Document
	-----------------------------------
	
	To create a mail merge to produce several different letters going to different
	people based on a set criteria, you first must create and save separate
	documents as either AutoText entries or as documents that contain the merge
	fields you want to use.
	
	AutoText Method
	---------------
	
	In a new document, set the document up as a mail merge main document. To do this,
	follow these steps:
	
	1. On the Tools menu, click Mail Merge.
	
	2. Under Create, click Form Letters, and click Active Window.
	
	3. Under Get Data, select Open Data Source. Find your data source, and then
	  click Open.
	
	4. Click Edit Main Document.
	
	5. Create the first letter. Enter the appropriate merge fields.
	
	6. Click Select All on the Edit menu.
	
	7. On the Insert menu, point to AutoText, and click New. Enter a name, for
	  example, Letter1, and then click OK.
	
	8. Modify this letter to reflect the format or style you want for your second
	  merge document. Enter merge fields as appropriate.
	
	9. Repeat steps 6-8 for each type of letter you need. When you name the AutoText
	  entry, use a different name, such as letter2, letter3, and so on.
	
	IncludeText Method
	------------------
	
	In a new document, set the document up as a mail merge main document. To do this,
	follow these steps:
	
	1. On the Tools menu, click Mail Merge.
	
	2. Under Create, click Form Letters, and click Active Window.
	
	3. Under Get Data, click Open Data Source, find your data source, and then click
	  Open.
	
	4. Click Edit Main Document.
	
	5. Create the first letter. Enter merge fields as appropriate.
	
	6. On the File menu, click Save As, and name the file (for example, name the
	  file "letter1"), and click Save.
	
	  NOTE: You must also note the path of this file; for example, if letter1 is in
	  the "My Documents" folder on the C drive, the path is "C:\My
	  Documents\letter1."
	
	7. Change this letter as appropriate for the second letter. Enter any merge
	  fields as appropriate.
	
	8. Repeat steps 6-7 for each letter you want to create. When naming the files,
	  use distinct file names, such as letter2, letter3, and so on.
	
	Modify the Data Source
	----------------------
	
	Once all of the letters have been created as either AutoText entries or as
	separate files, you need to modify your data source to include a field that will
	be helpful in identifying which letter you will create for a particular record.
	To do this, follow these steps:
	
	1. Using the mail merge main document you created in the "Set Up the Mail Merge
	  Main Document" section of this article, on the Edit menu, click Select All,
	  and then press DELETE to create an empty document.
	
	2. On the file menu, click Save As, give it a different file name and click
	  Save.
	
	3. On the Tools menu, click Mail Merge, and under Data Source, click Edit. Click
	  the name of the data file to open the Data Form dialog box.
	
	4. Click View Source to open the data file.
	
	5. To create a new field, click the Manage Fields button on the Mail Merge
	  toolbar.
	
	6. In the Field Name box, type a field name (for example, type "Code") click
	  Add, and then click OK.
	
	7. For each record, follow the steps below for the appropriate method:
	
	  AutoText Method
	  ---------------
	
	  Enter a code in the Code field to identify which AutoText "letter" entry will
	  be used for that particular record. For example, if you created three letters
	  as AutoText entries, for each record in your Data source, enter a 1, 2, or 3
	  into the Code field: code 1 will represent your first AutoText entry
	  "letter1"; code 2 will represent your second AutoText entry "letter2"; code 3
	  will represent your third AutoText entry "letter3," and so on.
	
	  IncludeText Method
	  ------------------
	
	  Enter a code to identify which letter will be used for that particular record.
	  For example, if you created 3 letters, for each record in you data source,
	  enter a 1, 2, or 3 into the Code field: Code 1 will represent your first
	  letter1; Code 2 will represent your second letter2; Code 3 will represent
	  your third letter, and so on.
	
	8. Save the data file and click the Mail Merge Main Document button on the Mail
	  Merge toolbar to return to your main document.
	
	Modify the Main Document
	------------------------
	
	You will need to modify the blank main document to include IF fields that
	identify which AutoText letter or IncludeText letter will be merged for each
	particular record.
	
	AutoText Method
	---------------
	
	To modify the main document, follow these steps:
	
	1. At the top of the blank document, follow these steps to enter an If field
	  into your document:
	
	  a. Press CTRL+F9 to enter field braces {} in the document.
	
	  b. Type the following text so that the end result of the field resembles this
	     example:
	
	  {IF{MERGEFIELD Code}="1" "{autotext "letter1"}"}
	
	     NOTE: Everywhere you see a left field brace ({), you need to enter it by
	     pressing CTRL+F9.
	
	  c. For each AutoText "letter" entry that you have, create the same type of
	     field. For example, if you create three letters, you would have the
	     following three IF fields:
	
	  {IF{MERGEFIELD Code}="1" "{AutoText "letter1"}"}
	  {IF{MERGEFIELD Code}="2" "{AutoText "letter2"}"}
	  {If{MERGEFIELD Code}="3" "{AutoText "letter3"}"}
	
	     NOTE: The Code number changes along with the AutoText letter number.
	
	2. Save your main document.
	
	IncludeText Method
	------------------
	
	To modify the main document, follow these steps:
	
	1. At the top of the blank document, follow these steps to enter an If field
	  into your document:
	
	  a. Press CTRL+F9 to enter field braces {} in the document.
	
	  b. Modify the field so that it resembles the following:
	
	  {if{MERGEFIELD Code}="1" "{IncludeText "C:\\<path>\\letter1.doc"}"}
	
	     NOTE: Everywhere you see a left field brace ({), you need to enter it by
	     pressing CTRL+F9. The path is the path to your file. In this example, it
	     would be C:\\My Documents\\letter1.
	
	  c. For each letter that you have, create the same type of field.
	
	     For example, if you create three letters in the "My Documents" folder, you
	     would have the following three fields:
	
	  {IF{MERGEFIELD Code}="1" "{IncludeText "C:\\My Documents\ letter1.doc"}"}
	  {If{MERGEFIELD Code}="2" "{IncludeText "C:\\My Documents\ letter2.doc"}"}
	  {IF{MERGEFIELD Code}="3" "{IncludeText "C:\\My Documents\ letter3.doc"}"}
	
	     NOTE: The Code number changes along with the letter number.
	
	2. Save your main document.
	
	What Happens When You Merge the Documents
	-----------------------------------------
	
	AutoText Method
	---------------
	
	When you perform the mail merge, Word produces the AutoText letter designated for
	the code the data file has for a particular record. For example, if record 1 has
	the value 1 in the Code field, the fields from this record will be displayed in
	Letter1. If record 2 has a code of 3, the merge produces Letter3.
	
	IncludeText Method
	------------------
	
	When you perform the mail merge, Word produces the letter based on the code the
	data file has for a particular record. For example, if record 1 has a Code value
	of 1, Word will produce Letter1. If record 2 has a Code value of 3, Word will
	use Letter3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kbfield word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
