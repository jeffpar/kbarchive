---
layout: page
title: "Q185157: WD97: ODMA: Word Converts Document When Opening in DOCS Open"
permalink: kb/185/Q185157/
---

## Q185157: WD97: ODMA: Word Converts Document When Opening in DOCS Open

	Article: Q185157
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a document that was created in a non-Word 97 format on a system
	that has DOCS Open (PC DOCS) installed, Word converts the document each time it
	is opened.
	
	CAUSE
	=====
	
	When you save a document, Word saves the document in the file format in which it
	was opened. For example, if you open a WordPerfect 5.1 document in Word, Word
	saves the document back in the WordPerfect 5.1 format. Thus, Word has to convert
	the document again when you reopen it.
	
	RESOLUTION
	==========
	
	After you open a non-Word 97 document and Word has converted the document, save
	the document in Word format and then save the document in the DOCS Open
	library.
	
	Step 1: Saving the Document in Word Format
	------------------------------------------
	
	Use one of the following methods to save your document in Word 97 format.
	
	If you want to the file name to remain the same, follow these steps:
	
	1. On the File menu, click Save With Options.
	
	2. Make sure the Select File Format box is selected as Word Document, and then
	  click OK.
	
	NOTE: In the Save With Options dialog box, you can also save your document with
	any of the following options:
	
	- Protection Password
	
	- Write Reservation Password
	
	- Read-Only Recommended
	
	If you want to give the file a different file name, follow these steps:
	
	1. On the File menu, click Save As.
	
	  NOTE: The DOCS Open "Document Profile - New Document" dialog box will show.
	
	2. In the Document Profile dialog box, click Cancel.
	
	3. DOCS Open will prompt "Do you want MS Word to save this document?"
	
	4. Click Yes.
	
	  NOTE: The default Word Save As dialog box will now show.
	
	5. Change the Save as type box to Word Document.
	
	6. Type a different document name in the File name box.
	
	  NOTE: When you type a new file name in the File Name box, Word will save your
	  converted document to a different file name. Your original file will not be
	  overwritten.
	
	7. Click Save (note that if you click Options before you click Save, you can
	  also save your document with any of the following options: Protection
	  Password, Write Reservation Password, Read-Only Recommended).
	
	Step 2: Save the Document in the DOCS Open Library
	--------------------------------------------------
	
	To save the document in the DOCS Open library, follow these steps:
	
	1. After Word has completed saving your document as a Word Document, click Save
	  As on the File menu.
	
	  NOTE: The DOCS Open "Document Profile - New Document" dialog box will appear.
	
	2. Type in the document name that you want DOCS Open to use for your Word
	  document.
	
	3. After you have filled in the other required information in the Document
	  Profile dialog box, click OK.
	
	  NOTE: DOCS Open will now save the Word document in its library. When you
	  reopen the document from the DOCS Open library, Word will not convert the
	  document again because it is now in Word Document format.
	
	MORE INFORMATION
	================
	
	For additional information about DOCS Open and Word 97, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q185030 WD97: ODMA: How Word 97 Works With DOCS Open (PC DOCS)
	
	Additional query words: pcdocs docsopen fileopen
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
