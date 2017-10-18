---
layout: page
title: "Q141464: WD97: Title Bar of Embedded Word Document Missing Document Name"
permalink: kb/141/Q141464/
---

## Q141464: WD97: Title Bar of Embedded Word Document Missing Document Name

	Article: Q141464
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbconversion WordCon word97 kbconvert
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you embed a Word document in another document, such as an Excel 97 workbook
	or a Word 97 document, and you then open the embedded document, the document
	name in the window title bar is missing or incorrect.
	
	RESOLUTION
	==========
	
	To correct this problem, obtain Microsoft Office Service Release 2 (SR-2).
	
	To temporarily work around this problem, use either of the following methods:
	
	- Use underscores instead of spaces in the file name of the document the Word
	  document is embedded in, as in the following example:
	
	  The_name_of_a_new_sample_file.doc
	
	  -or-
	
	- Use capital letters instead of spaces to delimit the words in the file name,
	  as in the following example:
	
	  TheNameOfANewSampleFile.doc
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Word 97 for Windows. This
	problem was corrected in Microsoft Office 97 Service Release 2 (SR-2).
	
	For additional information about SR-2, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	This problem was corrected in Microsoft Word 2000.
	
	MORE INFORMATION
	================
	
	If you embed an unnamed Word document in another document, when the embedded
	document is opened, Word uses the name of the container document in the window
	title bar. If the name of the container document is 28 or more characters long
	and contains one or more blanks, the name displayed may be blank or may be a
	portion of the container document name that does not include the first
	characters of the container document name.
	
	
	Additional query words: heading dialog box name
	
	======================================================================
	Keywords          : kbdta kbconversion WordCon word97 kbconvert 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
