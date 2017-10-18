---
layout: page
title: "Q158481: WD97: Objects Stacked After Converting to Word 6.x/95 or RTF"
permalink: kb/158/Q158481/
---

## Q158481: WD97: Objects Stacked After Converting to Word 6.x/95 or RTF

	Article: Q158481
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfile kbinterop kbdta
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a Word 97 document in Word 6.x or 7.x, if that document contains
	floating objects and was saved in either Microsoft Word 6.x/95 format or Rich
	Text Format (RTF), the objects are stacked one on top of the other on the first
	page.
	
	NOTE: This problem does not occur when you save a Word 97 document that contains
	inline objects into Microsoft Word 6.x/95 or RTF formats.
	
	CAUSE
	=====
	
	During conversion, the objects become detached from their original anchors.
	
	WORKAROUND
	==========
	
	To work around this problem, save the document in Word 97 native format, and
	install the Word 97 converter on the computer where you have Word 6.x or 7.x
	installed. When you open the document, the objects will be positioned
	correctly.
	
	For additional information about how to obtain the Word 97-2000 Import Converter,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q162214 How to Obtain the Word 97-2000 Import Converter
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	
	
	Additional query words: 8.0 word8 word97 over hiding hidden behind on top of each other jumbled mixed up out order wrong incorrect disorderly float convert
	
	======================================================================
	Keywords          : kbfile kbinterop kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
