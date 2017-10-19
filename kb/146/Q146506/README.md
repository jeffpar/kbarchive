---
layout: page
title: "Q146506: WD97: After Save As, Original Doc Unavailable to Other Programs"
permalink: /kb/146/Q146506/
---

## Q146506: WD97: After Save As, Original Doc Unavailable to Other Programs

	Article: Q146506
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbdta kbconversion
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Word 97, when you use the Save As command to save a Rich Text
	Format (RTF) document with a different file name or in a different file format,
	the original document cannot be opened in another program until the file with
	the new name or format is closed.
	
	For example, if you save a document called Test.rtf as Test2.rtf, Word closes
	Test.rtf. However, if you try to open Test.rtf in another program, such as
	WordPad, the following error message will appear:
	
	  The document Test.rtf is in use by another application and cannot be
	  accessed.
	
	CAUSE
	=====
	
	Word 97 does not release the temporary file lock on RTF files when you save the
	document as a new file.
	
	RESOLUTION
	==========
	
	To correct this problem, obtain Microsoft Word 97 Service Release 2 (SR-2).
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Office 97 Service Release 2 (SR-2).
	
	For additional information about SR-2, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	This problem does not occur in Office 2000.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbdta kbconversion 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
