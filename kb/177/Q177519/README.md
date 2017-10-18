---
layout: page
title: "Q177519: WD97: Comments Lost When Word 2.x File Converted to Word 97"
permalink: kb/177/Q177519/
---

## Q177519: WD97: Comments Lost When Word 2.x File Converted to Word 97

	Article: Q177519
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a Microsoft Word 2.x document in Microsoft Word 97, file property
	comments for the document are lost.
	
	RESOLUTION
	==========
	
	To correct this problem, obtain Microsoft Word 97 Service Release 2 (SR-2).
	
	To temporarily work around this problem, use one of the following methods.
	
	Method 1: Open the document in Word 7.x
	---------------------------------------
	
	If you have access to both Word 7.x and Word 97, follow these steps:
	
	1. In Word 7.x, open the Word 2.x document.
	
	2. Save the document as a Word 7.x document.
	
	3. Open the Word 7.x document in Word 97.
	
	Method 2: Save from Word 2.x as Rich Text Format (RTF)
	------------------------------------------------------
	
	1. In Word 2.x, save the document in Rich Text Format (RTF). To do this, follow
	  these steps:
	
	  a. On the File menu, click Save As.
	
	  b. Change the Save File As Type to Rich Text Format (RTF)
	
	  c. Save the document.
	
	2. In Word 97, open the RTF file.
	
	The file property comments will be retained.
	
	NOTE: To ease the transition of documents from one format to another, you can use
	the batch conversion macros that ship with Microsoft Word.
	
	For more information about the batch conversion macros, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q107439 Word for Windows Batch Conversion Macro
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft Office 97
	Service Release 2 (SR-2).
	
	For additional information about SR-2, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	
	MORE INFORMATION
	================
	
	File property comments is a feature that allows you to store comments about the
	document along with the document. You can then search on the text of these
	comments at a later date using the search feature in Word.
	
	In Microsoft Word 2.x and 6.x, file property comments are added by clicking the
	File menu, clicking Summary Info, and entering information into the Comments
	box.
	
	In Microsoft Word 7.x and later, file property comments are added by clicking
	Properties on the File menu, and entering information into the Comments box.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q177859 WD: Macintosh Word 6.x Comments Missing in File Properties
	
	  Q166868 WD97: Properties (Summary Info) Comments in Wrong Format/Missing
	
	Additional query words: file summary info properties
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
