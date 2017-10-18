---
layout: page
title: "Q173069: WD97: Error Message or IPF Saving to Nearly Full Disk"
permalink: kb/173/Q173069/
---

## Q173069: WD97: Error Message or IPF Saving to Nearly Full Disk

	Article: Q173069
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): winword word97kbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a document in Microsoft Word 97 and save it to a floppy disk
	that is nearly full, you may receive the following error message, or an invalid
	page fault (IPF) in Kernel32.dll may occur.
	
	For example, one of the following error messages may appear:
	
	- This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	  When you click the Details button, the following error message is displayed:
	
	  WINWORD caused an invalid page fault in module KERNEL32.DLL.
	
	  -or-
	
	  Write error on output file.
	
	  -or-
	
	  Word 2.0: Cannot open the document.
	
	  -or-
	
	  Disk write error.
	
	CAUSE
	=====
	
	This problem occurs when the file contains an embedded object, and you save the
	document in a file format other than the standard Word format.
	
	WORKAROUND
	==========
	
	To save your document, use one of the following procedures:
	
	- Free some space on the disk to which you want to save your document.
	
	  -or-
	
	- Use a disk with more free space.
	
	  -or-
	
	- Save to a location containing sufficient free space.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	MORE INFORMATION
	================
	
	When you try to save your document to a disk that is nearly full, one of the
	following error messages may appear:
	
	  The disk is full trying to write to A:
	
	  -or-
	
	  There is not enough memory or disk space to convert this document.
	
	The following are errors you may see when you try to save a document in a file
	format other than Word 97 to a disk that is nearly full.
	
	Saving Your Document in Word 6.0/95 Format
	------------------------------------------
	
	When you save your document in Word 6.0/95 using the binary export converter (the
	updated Word 6.0/95 converter), the following error message may appear:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	When you click the Details button, the following error message shows:
	
	  WINWORD caused an invalid page fault in module KERNEL32.DLL.
	
	To prevent this error message, do one of the following.
	
	Install Office 97 Service Release 2:
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	Obtain the Office Converter Pack:
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q212265 WD: Additional Text Converters and Image Filters Available in
	  Microsoft Office Converter Pack
	
	Saving Your Document in Word for Macintosh 5.0, 5.1 or WordPerfect Format
	-------------------------------------------------------------------------
	
	When you save your document in Word for Macintosh 5.0, 5.1 or WordPerfect format,
	Word generates the following error message:
	
	  Write error on output file.
	
	Saving Your Document in Word for Windows 2.0 Format
	---------------------------------------------------
	
	When you save your document in Word for Windows 2.0 format, Word generates the
	following error message:
	
	  Word 2.0: Cannot open the document.
	
	Saving in HTML Format
	---------------------
	
	When you save your document in HTML format, Word generates the following error
	message:
	
	  Disk write error.
	
	NOTE: This problem only occurs when the disk is very low on space. If the disk
	has more than a few kilobytes (KB) of free space remaining, you will receive a
	correct error stating that the "disk is full...."
	
	
	REFERENCES
	==========
	
	For more information on exchanging documents between Microsoft Word 97 and
	earlier versions of Word, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q162602 Questions About Saving in the Word 6.0/95 File Format
	
	  Q162987 Supported Non-Word File Formats
	
	  Q157091 WD97: How to Import Documents into an Earlier Version of Word
	
	For more information about what formatting is retained when you save in other
	formats, click the Office Assistant, type "Save as Word 7.0," click Search, and
	then click "Results of saving Word 97 documents in other formats."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: 8.0 8.00 krnl386.exe kernel32.exe
	
	======================================================================
	Keywords          : winword word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
