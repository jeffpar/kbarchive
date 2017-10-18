---
layout: page
title: "Q170904: WD97: Inline Picture Inside Text Box Becomes Larger in Word 7.x"
permalink: kb/170/Q170904/
---

## Q170904: WD97: Inline Picture Inside Text Box Becomes Larger in Word 7.x

	Article: Q170904
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a document in Microsoft Word 97 containing an inline picture
	inside of a text box, and then save the document in Word 6.0/95 format or Rich
	Text Format (RTF), the picture will become larger when you open the document in
	Microsoft Word 7.x.
	
	CAUSE
	=====
	
	When the document is opened in Microsoft Word 7.x, the picture is resized to
	take on the size of the text box.
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 Service Release 1 (SR- 1).
	
	To work around this problem, use any of the following methods.
	
	Method 1: Resize the Inline Picture
	-----------------------------------
	
	If you have already saved the document from Microsoft Word 97 in Word 6.0/95 or
	RTF format, you can manually resize the inline picture after you open it in
	Microsoft Word 7.x. To do this, you can do either of the following:
	
	- Move the mouse pointer over one of the sizing handles and either increase or
	  decrease the size of the inline picture.
	
	  -or-
	
	- Follow these steps:
	
	  1. Click the object to select it.
	
	  2. On the Format menu, click Text Box.
	
	  3. Click the Size tab and change the Height and Width to the correct
	     settings.
	
	  4. Click OK.
	
	Method 2: Convert the Inline Picture to a Framed Object
	-------------------------------------------------------
	
	If you have not yet saved the document from Microsoft Word 97 in Word 6.0/95 or
	RTF format, you can convert the inline picture to a framed object in Microsoft
	Word 97. To do this, use the following steps:
	
	1. Click the object to select it.
	
	2. On the Format menu, click Text Box.
	
	3. Click the Text Box tab and click the Convert to Frame button.
	
	  You will receive the following information dialog box:
	
	  When you convert this drawing object to a frame, some of the drawing object's
	  formatting may be lost. Do you want to continue?
	
	4. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	REFERENCES
	==========
	
	For more information about converting floating objects to inline or framed
	objects, please see the following articles in the Microsoft Knowledge Base:
	
	  Q167738 WD97: Can't See or Manipulate Objects (and Other Odd Behavior)
	
	  Q167282 WD97: Equation Object Not Inserted at Insertion Point
	
	For more information about converting floating objects to inline or framed
	objects, click the Office Assistant, type "inline and floating objects," click
	Search, and then click "Change an inline picture to a floating picture and
	vice-versa."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: sr1 release1 8.0 8.00
	
	======================================================================
	Keywords          : kbusage word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
