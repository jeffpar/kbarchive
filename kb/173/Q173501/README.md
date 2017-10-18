---
layout: page
title: "Q173501: WD97: Linked Picture Missing When Word 6.0/95 Document Reopened"
permalink: kb/173/Q173501/
---

## Q173501: WD97: Linked Picture Missing When Word 6.0/95 Document Reopened

	Article: Q173501
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97; :Service Release 1 (SR-1)
	Operating System(s): 
	Keyword(s): kbgraphic kbfield winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Word 97 for Windows, version Service Release 1 (SR-1) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Word 97, when you open, print or print preview a document that you have saved
	as "Word 6.0/95 (*.doc)," linked pictures may not be displayed or printed.
	
	  -or-
	
	In Word 6/95, when you open, print or print preview a document that you have
	saved in Word 97 as a "Word 6.0/95 (*.doc)," linked pictures may not be
	displayed or printed.
	
	This problem occurs when both of the following conditions are true when you
	insert the picture in Word 97:
	
	- You clicked to select the Link To File check box.
	
	  -and-
	
	- You clicked to clear the Save With Document and Float Over Text check boxes.
	
	CAUSE
	=====
	
	This problem occurs if you have installed the Word 6.0/95 Binary File Converter
	in Word 97, or if you have Microsoft Word 97 Service Release 1 (SR-1).
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods.
	
	Method 1: Save Your Document in a Different Format
	--------------------------------------------------
	
	1. You can either update only the IncludePicture fields in your document, or
	  update all fields. Use the appropriate method for your situation.
	
	  To Update IncludePicture Fields Only:
	
	  a. Press ALT+F9 to show the fields in the document.
	
	  b. For each IncludePicture field, click to select the field, and then press
	     F9 to update the field.
	
	  c. Press ALT+F9 to hide the fields in the document.
	
	  NOTE: Your linked picture will now show in your document, when you Print
	  Preview, and when you print the document.
	
	  To Update All Fields:
	
	  a. On the Edit menu, click Select All.
	
	  b. Press F9 to update all fields.
	
	2. On the File menu, click Save As and save your document in a format other than
	  the "Word 6.0/95 (*.doc)" format.
	
	Method 2: Save As a Word 97 Document
	------------------------------------
	
	In Word 97, save your document containing the linked picture as a Word 97
	Document. To do this, click Save As on the File menu, and click Word Document in
	the Save As Type box.
	
	To open the Word 97 document in Microsoft Word 6.0 or Microsoft Word for Windows
	95 version 7.0, install the Word 97 converter.
	
	For additional information about how to obtain the Word 97 converter for Word 6.0
	or Word 7.0, please see the following article in the Microsoft Knowledge Base:
	
	  Q162214 WD: How to Obtain the Word 97 Converter
	
	Method 3: Select "Float over text"
	----------------------------------
	
	1. Repeat step 1 of method 1 to update the IncludePicture fields in your
	  document.
	
	2. Right-click the linked picture, and then click Format Picture on the shortcut
	  menu.
	
	3. Click the Position tab.
	
	4. Click to select the Float Over Text check box, and then click OK.
	
	5. On the File menu, click Save As, and save your document in "Word 6.0/95
	  (*.doc)" format.
	
	6. On the File menu, click Close.
	
	7. On the File menu, click Open, and reopen your document. The linked pictures
	  are now displayed.
	
	Method 4: Insert Picture into Frame
	-----------------------------------
	
	For information about how to use frames in the Word 97, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q159942 General Information About Text Boxes and Frames in Word 97
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q161692 WD97: Problems With Float Over Text Objects
	
	  Q157465 WD97: Can't See Field Codes for Some Objects
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem Microsoft Word 97 for Windows. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When you insert a picture in a Word document, if you select the Link To File
	check box and clear the Save With Document and Float Over Text check boxes, Word
	does not save any information about the picture, such as size and preview
	information. Instead, information about the picture comes from its source file.
	The location of the linked picture is stored in the IncludePicture field, and
	the path to the picture can be seen by pressing ALT+F9 to show the field codes.
	
	When you save a Word 97 document containing a linked picture as "Word 6.0/95
	(*.doc)" format, the Word 6.0/95 converter does not correctly save the preview
	information for the picture. Therefore, when you close and reopen the Word
	6.0/95 document in Word 97 (or open in Word 6 / 95), the linked picture appears
	to be missing.
	
	Also when you update the IncludePicture field(s) the picture will revert back to
	the original size of the source file.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q171684 WD97: Differences Between RTF and Binary Export Converter
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : kbgraphic kbfield winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2 kbWord97SR1
	Version           : WINDOWS:97; :Service Release 1 (SR-1)
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
