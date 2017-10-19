---
layout: page
title: "Q182073: WD97: Picture Becomes Red &quot;X&quot; When Mac Word 98 File Saved in 97"
permalink: /kb/182/Q182073/
---

## Q182073: WD97: Picture Becomes Red &quot;X&quot; When Mac Word 98 File Saved in 97

	Article: Q182073
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbconversion
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Word 97, if you open a Microsoft Word 98 Macintosh Edition document
	containing a floating picture (PICT) graphic, the picture may resemble a red
	"X."
	
	This problem will occur when you use the Save As command to save the file without
	first scrolling through the document and viewing the graphics. When you run the
	Save As command, the new document that is created during the Save As process
	will contain red "X" images instead of the PICT graphics.
	
	
	
	NOTE: This problem does not occur when you open a Word 97 document in Microsoft
	Word 98 Macintosh Edition.
	
	CAUSE
	=====
	
	For performance reasons, graphics are not loaded immediately after the document
	is opened. When you use the Save As command without first viewing the document,
	the picture data is not yet copied to the new document.
	
	RESOLUTION
	==========
	
	To correct this problem, obtain Microsoft Word 97 Service Release 2 (SR-2).
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Word 97. This problem was
	corrected in Microsoft Office 97 Service Release 2 (SR-2).
	
	For additional information about SR-2, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kbconversion 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
