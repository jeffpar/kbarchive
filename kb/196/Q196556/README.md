---
layout: page
title: "Q196556: WD97: Text Won't Wrap Around Frame or Text Box in Header/Footer"
permalink: /kb/196/Q196556/
---

## Q196556: WD97: Text Won't Wrap Around Frame or Text Box in Header/Footer

{% raw %}

	Article: Q196556
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kbframe
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Microsoft Word, when you insert a frame or text box into a header or footer,
	you cannot wrap the header and footer text around that object. Also, the frame
	or text box may obscure or overwrite the header and footer text.
	
	For example, this behavior occurs when you align the text on the left, insert an
	object before the text, and then apply a frame to the object.
	
	CAUSE
	=====
	
	This behavior is by design, because if text could wrap in the header or footer
	of a Word document, text in the main document would have to move out of the
	way.
	
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods:
	
	- Format the paragraph with an indent to offset the text to the left or right
	  of the framed object.
	
	  -or-
	
	- Insert a table into the header, and then place the graphic in one cell and
	  the text in the other cell.
	
	  -or-
	
	- Move the framed object to another location, away from the text.
	
	MORE INFORMATION
	================
	
	If you set the Wrapping Style of a text box in the header or footer to Tight (on
	the Wrapping tab of the Format Text Box dialog box), the text box behaves as if
	you set the Wrapping Style to Through. After style is set, you cannot change
	this behavior.
	
	For additional information about objects in headers and footers, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q106518 Header or Footer Text Overlaps Page Number
	
	  Q41750 Headers and Footers Do Not Wrap Around APOs in WinWord
	
	Additional query words: frame text header graphic covering obscuring
	
	======================================================================
	Keywords          : word97 kbframe 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
