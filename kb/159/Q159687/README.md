---
layout: page
title: "Q159687: WD97: How to Convert WordPerfect 6.x Data Files and Address Book"
permalink: kb/159/Q159687/
---

## Q159687: WD97: How to Convert WordPerfect 6.x Data Files and Address Book

	Article: Q159687
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kb3rdparty kbdta kbconversion word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to convert WordPerfect 6.x for Windows data source
	(secondary) and address book files to the versions of Word listed above.
	WordPerfect 6.x for Windows must be installed to use these procedures.
	
	MORE INFORMATION
	================
	
	Converting WordPerfect 6.x .dat Files
	-------------------------------------
	
	To convert a WordPerfect 6.x data source (.dat) file, follow these steps:
	
	1. Open the data source file in WordPerfect 6.x.
	
	2. On the File menu, click Save As.
	
	3. In the Save File As Type list (in WordPerfect 6.1) or the File Format list
	  (in WordPerfect 6.0), click WordPerfect 5.1/5.2.
	
	4. Type a new file name. For example, change the extension from .dat to .wp5 to
	  indicate that the file is in WordPerfect 5.x format.
	
	5. Switch to Microsoft Word and open the data source file you created in step 4.
	
	6. On the File menu, click Save As.
	
	7. In the Save As Type list (in Word 7.x and 97) or the Save File As Type list
	  (in Word 6.x and Word 98 Macintosh Edition), click Word Document.
	
	Converting a WordPerfect 6.x Address Book
	-----------------------------------------
	
	To convert a WordPerfect 6.x address book, follow these steps:
	
	1. In WordPerfect 6.x, on the Tools menu, point to Macro, and then click Play.
	
	2. In the macro list, select Adrs2mrg.wcm, and then click Play.
	
	  The macro is finished when all the address book records are added to the
	  document.
	
	3. On the File menu, click Save As.
	
	4. In the Save File As Type list (in WordPerfect 6.1) or the File Format list
	  (in WordPerfect 6.0), click WordPerfect 5.1/5.2.
	
	5. Type a new file name. For example, change the extension from .dat to .wp5 to
	  indicate that the file is in WordPerfect 5.x format.
	
	6. Switch to Microsoft Word and open the file you created in step 5.
	
	7. On the File menu, click Save As.
	
	8. In the Save As Type list, click Word Document.
	
	In WordPerfect 6.x, you can create an address book using the Adrsbook.wcm macro.
	The address book is not available unless you are creating a new document based
	on a template that uses address information. Because the address book is not
	directly accessible by WordPerfect's merge feature, WordPerfect 6.x includes the
	Adrs2mrg.wcm macro to change the address book into a standard mail merge data
	(secondary) file.
	
	To use the data file in Word, first convert it from WordPerfect 6.x format to
	WordPerfect 5.x format. The WordPerfect 5.x converter correctly converts valid
	WordPerfect secondary files into a valid format for a Word mail merge data
	document.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q72117 WD: How to Convert WordPerfect Merge Data Documents to Word
	
	
	  Q157085 Limitations of Converting from Word 97 to WordPerfect 5.x
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: conversion envelope fax form insert label print primary secondary wordperfect wpwin wpft
	
	======================================================================
	Keywords          : kb3rdparty kbdta kbconversion word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
