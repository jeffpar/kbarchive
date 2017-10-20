---
layout: page
title: "Q173678: WD97: Incorrect Results When Undo Dragging of Objects"
permalink: /kb/173/Q173678/
---

## Q173678: WD97: Incorrect Results When Undo Dragging of Objects

{% raw %}

	Article: Q173678
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you undo the dragging of an AutoShape or Text Box object from one document
	to another (shown as Move Object in the list of actions you can undo), you can
	receive unexpected results.
	
	Case 1: Dragging an AutoShape
	-----------------------------
	
	When you click Undo, the AutoShape reappears in the original document but does
	not disappear from the second document.
	
	Case 2: Dragging a Text Box
	---------------------------
	
	When you click Undo, the Text Box disappears from the second document but does
	not reappear in the original document.
	
	WORKAROUND
	==========
	
	To work around this problem, click Undo in both documents. To do this, follow
	these steps.
	
	1. Immediately after dragging the object, click the Undo button on the Standard
	  toolbar.
	
	2. Click the mouse pointer in the other document to make that document active.
	
	3. Click the Undo button on the Standard toolbar.
	
	The object reappears in the original document and disappears from the second
	document.
	
	RESOLUTION
	==========
	
	To prevent this problem from occurring, drag the paragraph that the object is
	anchored to instead of just dragging the object. To do this, follow these
	steps.
	
	NOTE: If you need to show both documents, click Arrange All on the Window menu.
	
	1. Select the text (including the paragraph mark) of the paragraph that contains
	  the object's anchor.
	
	  NOTE: Make sure there are at least two paragraphs in the document, and that
	  you select the correct paragraph mark. To show paragraph marks, press the
	  Show/Hide button on the Standard toolbar.
	
	2. Drag the text to the second document. Both the text and AutoShape object are
	  moved.
	
	The Undo button now makes the object reappear in the original document and
	disappear from the second document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	
	MORE INFORMATION
	================
	
	
	For additional information about the Undo feature, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q172542 OFF97: Using the Undo Feature with Inserted Objects
	
	  Q142751 How To Disable the Undo Function in Word
	
	  Q118987 WD: How to Clear the Undo Stack
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
