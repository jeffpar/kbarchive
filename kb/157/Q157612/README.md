---
layout: page
title: "Q157612: WD97: No Warning When You Edit EPS Image (Image Converted)"
permalink: kb/157/Q157612/
---

## Q157612: WD97: No Warning When You Edit EPS Image (Image Converted)

	Article: Q157612
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click an EPS picture in a Word document, you do not get a
	warning message indicating the picture contains embedded PostScript information.
	If you convert the picture to a Drawing Object, you lose the PostScript
	information in the file and the picture will not print to a PostScript printer.
	
	This problem occurs when you attempt to edit an EPS image stored in a document
	converted from Word 6.x or 7.x. This problem does not occur when you insert the
	image into a Word 97 document and then attempt to edit the image.
	
	
	CAUSE
	=====
	
	The Word 97 EPS graphics filter is not analyzing the embedded image to determine
	whether it contains embedded PostScript information.
	
	WORKAROUND
	==========
	
	To work around this problem, insert or reinsert the PostScript image in the
	document after you convert it to Word 97.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	This problem has been corrected in Word 2000.
	
	Additional query words: 8.0 word8 word97
	
	======================================================================
	Keywords          : kbualink97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
