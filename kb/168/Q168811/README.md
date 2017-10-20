---
layout: page
title: "Q168811: WD97: Cannot Paste or Drag Text to Text Box"
permalink: /kb/168/Q168811/
---

## Q168811: WD97: Cannot Paste or Drag Text to Text Box

{% raw %}

	Article: Q168811
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:6.0,6.0a,6.0c,7.0,7.0a,97; winnt:6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbusage winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Word for Windows, versions 6.0, 6.0a, 6.0c 
	- Microsoft Word for Windows 95, versions 7.0, 7.0a 
	- Microsoft Word for Windows NT, version 6.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to paste or drag text into a text box, the following symptoms
	may occur
	
	Copying and Pasting Text into a Text Box
	----------------------------------------
	
	You receive the following error message:
	
	  You cannot put drawing objects into a text box, callout, comment, footnote,
	  or endnote.
	
	Dragging Text to a Text Box
	---------------------------
	
	Nothing happens after you release the mouse button.
	
	CAUSE
	=====
	
	This problem occurs when you copy and paste a selection that contains an entire
	paragraph that includes an object anchor.
	
	You may experience this problem if either of the following conditions are true:
	
	- The text you are attempting to place into a text box includes either a text
	  box, callout, comment, footnote, or endnote.
	
	  -or-
	
	- The anchor of the object is part of the text selection.
	
	When you insert a text box into a document, Word anchors the text box to the
	first character in a paragraph.
	
	When you drag a selection that contains the first character of a paragraph to
	which an object is anchored, the selected text will not be moved or copied to
	the text box, and no error message is given.
	
	
	WORKAROUND
	==========
	
	To work around this problem, do not select the anchor when you select a text
	box, callout, comment, footnote, endnote.
	
	Copying and Pasting Text into a Text Box
	----------------------------------------
	
	If you select an entire paragraph containing an object anchor, do not include the
	paragraph mark in the selection.
	
	Dragging Text to a Text Box
	---------------------------
	
	If you drag a selection containing an object anchor, do not include the first
	character of the paragraph in the selection.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbusage winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbWord700Search kbZNotKeyword2 kbZNotKeyword3 kbWord600 kbWord600a kbWord600c kbWord700 kbWord600NT kbWord700a
	Version           : WINDOWS:6.0,6.0a,6.0c,7.0,7.0a,97; winnt:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
