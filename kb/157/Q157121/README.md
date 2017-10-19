---
layout: page
title: "Q157121: WD97: Can't Remove Background Sound Object in HTML Document"
permalink: /kb/157/Q157121/
---

## Q157121: WD97: Can't Remove Background Sound Object in HTML Document

	Article: Q157121
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbualink97 word97
	Last Modified: 13-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	There is no button or option to remove a background sound object in the
	Background Sound dialog box.
	
	RESOLUTION
	==========
	
	To resolve this problem, download and install the Web Authoring Tool Update. For
	information about how to do this, see the following Microsoft World Wide Web
	site:
	
	  http://office.microsoft.com/downloads/9798/wd97au.aspx
	
	After installing the upgrade, follow these steps to remove a background sound
	object:
	
	1. Start Word.
	
	2. Open the HTML document that contains the background sound.
	
	3. On the Insert menu, point to Background Sound, and then click Remove.
	
	To work around this problem use any of the following methods to remove the
	background sound object.
	
	Method 1: Edit the HTML Source and Remove the <BGSOUND> Tag
	-----------------------------------------------------------
	
	1. On the View menu, click HTML Source.
	
	2. In the HTML source, remove the <BGSOUND> tag.
	
	3. Click the Exit HTML Source button on the Standard Toolbar.
	
	4. Click Yes when prompted to save changes.
	
	Method 2: Specify an Invalid Sound File as the Sound Element
	------------------------------------------------------------
	
	1. On the Insert menu, point to Background Sound, and then click Properties.
	
	2. In the Sound box, type "None" (without the quotation marks) and then click
	  OK.
	
	3. In the message box indicating that the file could not be found, click Allow.
	
	Word inserts None as the name of the source file in the BGSOUND element. Since
	this file does not exist, your web browser ignores it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in the Microsoft Word 97 Web Authoring Tools Update.
	
	
	Additional query words: 8.0 8.00 bgsound hypertext markup language
	
	======================================================================
	Keywords          : kbualink97 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	
	=============================================================================
	
