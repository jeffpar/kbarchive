---
layout: page
title: "Q172818: WD97: Insert WordArt/AutoShape Opens Blank Picture Object"
permalink: kb/172/Q172818/
---

## Q172818: WD97: Insert WordArt/AutoShape Opens Blank Picture Object

	Article: Q172818
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta word97 kbwdinternet
	Last Modified: 13-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert a WordArt or AutoShape object in an HTML document, a blank Word
	picture object is opened.
	
	NOTE: This problem occurs whether you use the Insert menu or the Drawing toolbar
	to insert the WordArt or AutoShape object.
	
	CAUSE
	=====
	
	This problem is a design limitation of the OLE implementation of inserting a
	picture object in an HTML document.
	
	This problem occurs after the Web Page Authoring Tools Update is installed. The
	version of the Web Page Authoring Tools Update is 3.0.4405.0. To check the
	version of the HTML Update in Word, follow these steps:
	
	1. In Word, open an HTML document.
	
	2. On the Help menu, click About Microsoft Word.
	
	3. Click System Info.
	
	4. Click Active Modules.
	
	5. Under Module Name, find HTML and note the version number.
	
	If the version number is 3.0.4405.0, you have the Web Page Authoring Tools Update
	installed.
	
	NOTE: This behavior does not occur in Word 2000.
	
	WORKAROUND
	==========
	
	When you are in the blank picture object, use one of the following methods:
	
	- To insert a WordArt object, click the Insert WordArt button again.
	
	  -or-
	
	- To insert an AutoShape object, click the AutoShape button again, point to the
	  style of AutoShape, and then click the AutoShape you want. Draw the AutoShape
	  in the blank Word Picture object as you want.
	
	NOTE: After inserting the WordArt or AutoShape object in the blank Word Picture
	object, you must click the Reset Picture Boundary button on the Edit Picture
	toolbar before you click Close Picture.
	
	MORE INFORMATION
	================
	
	After you install the Web Page Authoring Tools Update, two new options will be
	installed on the Insert menu when you point to Picture. Both WordArt and
	AutoShape will be available to insert into an HTML document. These objects
	cannot exist in an HTML document without being contained in a picture object.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q163299 WD97: Web Page Authoring Tools AutoUpdate
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : kbdta word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
