---
layout: page
title: "Q168618: WD97: Saving As Word 6.0/95 Format Saves Incorrect File Size"
permalink: /kb/168/Q168618/
---

## Q168618: WD97: Saving As Word 6.0/95 Format Saves Incorrect File Size

	Article: Q168618
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbother
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open a document that was saved in the Word 6.0/95 file
	format from Word 97, you may receive the following error message:
	
	  Word cannot open the document.
	
	CAUSE
	=====
	
	When you save a document as Word 6.0/95 to a directory or drive with
	insufficient free space, a file will be created whose size equals the available
	free space.
	
	For example, if the file size is 100 KB and the free space is 50 KB, a file will
	be created with a size of 50 KB. Likewise, if the free space is 0 KB, a file
	will be created with a size of 0 KB.
	
	You may receive the error message described earlier if you later attempt to
	reopen the document.
	
	RESOLUTION
	==========
	
	To prevent this error message, do one of the following.
	
	Install Office 97 Service Release 2
	-----------------------------------
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	Obtain the Office Converter Pack
	--------------------------------
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q212265 WD: Additional Text Converters and Image Filters Available in
	  Microsoft Office Converter Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in the updated Word 6.0/95 Export Converter.
	
	MORE INFORMATION
	================
	
	The updated Word 6.0/95 Export Converter generates the error message:
	
	  Write error on output file
	
	under the conditions described in the "Cause" section of this article.
	
	Additional query words: word8 word97 8.0 convert conversion 6.x word6 word7
	
	======================================================================
	Keywords          : kberrmsg kbother 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
