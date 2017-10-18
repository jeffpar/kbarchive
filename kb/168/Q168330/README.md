---
layout: page
title: "Q168330: WD97: Alpha: Cannot Use Word 97 Converter with Alpha Word 6.0"
permalink: kb/168/Q168330/
---

## Q168330: WD97: Alpha: Cannot Use Word 97 Converter with Alpha Word 6.0

	Article: Q168330
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbdta
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use the Microsoft Word 97 Import Converter for Word 6.0 and 7.0 with the
	Alpha version of Word 6.0, the following error message may appear when you try
	to open a Word 97 document:
	
	  Cannot start MSWRD832.CNV
	
	CAUSE
	=====
	
	The Word 97 Import Converter is not compatible with the Alpha version of Word
	6.0.
	
	WORKAROUND
	==========
	
	To share documents between Word 97 and the Alpha version of Word 6.0, save the
	Word 97 document in a format that the earlier version of Word can read. To do
	this, follow these steps:
	
	1. In Word 97, open the document you want to share.
	
	2. On the File menu, click Save As.
	
	3. In the Save As Type box, select a format that the earlier version of Word can
	  read, such as Word 6.0/95 or Rich Text Format.
	
	NOTE: For information about changing the default save method to something other
	than Word Documents, see the following article in the Microsoft Knowledge Base:
	
	  
	
	  Q162987 WD97: Supported Non-Word File Formats
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The x86 versions of Word 6.0 and 7.0 use the Word 97 Import Converter
	(Mswrd832.cnv) to read Word 97 documents.
	
	If you are exchanging documents between the Alpha version of Word 97 and the x86
	versions of Word 6.0 and 7.0, the Word 97 Import Converter works correctly,
	because the Import Converter is installed in the Setup process on the computer
	running the earlier version of Word.
	
	REFERENCES
	==========
	
	For more information about the Microsoft Word 97-2000 Import Converter, please
	see the following article in the Microsoft Knowledge Base:
	
	  
	
	  Q162214 WD: How to Obtain the Word 97-2000 Import Converter
	
	Additional query words: 8.0 word8 word97
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
