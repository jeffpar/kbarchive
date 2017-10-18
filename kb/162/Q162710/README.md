---
layout: page
title: "Q162710: WD97: Drawing Objects Incorrect (WD 97 File Opened in 6.x /7.x)"
permalink: kb/162/Q162710/
---

## Q162710: WD97: Drawing Objects Incorrect (WD 97 File Opened in 6.x /7.x)

	Article: Q162710
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
	
	When you open a document containing drawing objects in Word 6.0 or Word 7.0, one
	or more of the following symptoms may occur:
	
	- Auto Shapes (Drawing Objects) are displayed as outlines.
	
	- Half circular objects appear as complete circles.
	
	- Drawing objects are incomplete.
	
	CAUSE
	=====
	
	The document was saved from Word 97 as Word 6.0/95 or Rich Text Format (RTF)
	before you opened the file in Word 6.0 or Word 7.0.
	
	WORKAROUND
	==========
	
	To get the best conversion results for drawing objects between Word 97 and
	previous versions of Word, use the Word 97-2000 Import Converter. For
	information about how to obtain the converter, please see the following article
	in the Microsoft Knowledge Base:
	
	  
	
	  Q162214 WD: How to Obtain the Word 97-2000 Import Converter
	
	To ensure the Word 97 converter is being used, follow these steps:
	
	1. On the Tools menu, click Options.
	
	2. Click the General tab, click to select the the "Confirm conversion at Open"
	  check box.
	
	3. Click OK.
	
	4. Open the Word 97 document containing the drawing objects.
	
	A Convert File dialog box appears. Make sure Word 97 is selected in the list, and
	then click OK.
	
	NOTE: You get better results with the Word 97 converter for Word 7.0
	(Mswrd832.cnv) than with the Word 97 converter for Word 6.0 (Msword8.cnv). Note
	also that there may still be some incomplete or incorrect drawing objects when
	you open the file in either Word 6.0 or Word 7.0, even when you use the Word 97
	converter.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: 97 8.0 word8 word97
	
	======================================================================
	Keywords          : kbinterop kbdta kbconversion 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
