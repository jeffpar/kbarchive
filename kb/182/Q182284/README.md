---
layout: page
title: "Q182284: WD97: Cannot Cross-reference to Caption in Text Box"
permalink: /kb/182/Q182284/
---

## Q182284: WD97: Cannot Cross-reference to Caption in Text Box

	Article: Q182284
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdta kbfield word97 kbframe
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Word, you cannot create a cross-reference to any captions in text
	boxes. These captions are not listed in the Cross-reference dialog box.
	
	CAUSE
	=====
	
	Text boxes, such as captions for "float over text" objects, reside in the
	drawing layer of the document. However, items in the drawing layer are not a
	valid Reference Type in the Cross-reference dialog box.
	
	WORKAROUND
	==========
	
	To reference the caption in the text box, convert the text box to a frame by
	following these steps:
	
	1. Click to select the text box.
	
	2. On the Format menu, click Text Box.
	
	3. Click the Text Box tab.
	
	4. Click Convert to Frame, and then click OK.
	
	MORE INFORMATION
	================
	
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q173404 WD: General Information about Cross-reference Fields
	
	  Q167738 WD97: Can't See or Manipulate Objects (and Other Odd Behavior)
	
	  Q155156 WD: Entries in Text Box or Callout Missing from Table of Content
	
	STATUS
	======
	
	This behavior is by design of Microsoft Word.
	
	Additional query words: sr-1 sr1 textbox crossreference
	
	======================================================================
	Keywords          : kbdta kbfield word97 kbframe 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
