---
layout: page
title: "Q285987: WD97: Picture or Object Does Not Appear in Word Document"
permalink: /kb/285/Q285987/
---

## Q285987: WD97: Picture or Object Does Not Appear in Word Document

	Article: Q285987
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta word8 word97 kblayout
	Last Modified: 03-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have a document that contains a picture or other object, the picture
	may not appear. This problem may occur for a picture, graphic, AutoShape, or
	other object.
	
	
	CAUSE
	=====
	
	Microsoft Word documents consist of separate text and drawing layers. When a
	picture or object is inserted in a Word document as "Float over text", it is
	inserted in the drawing layer. Word does not display the drawing layer when you
	view the document in master document view, normal view, or outline view.
	
	Page layout, online layout, and print preview are the only views in which Word
	can display the drawing layers of a Word document. Because "Float over text"
	pictures and objects reside in a drawing layer, they are only visible in page
	layout view, online layout view, and print preview.
	
	The problem described in the "Symptoms" section can occur for the following
	reasons:
	
	  
	  The picture or object is formatted as "Float over text", and you are viewing your Word document in normal, outline, or master document view.
	
	  The picture or object is formatted as "Float over text", you are viewing your Word document in page layout or online layout view, and the Drawings option is turned off.
	
	  The picture or object is formatted as "Float over text", and the "Drawing objects" option is turned off. This problem occurs when you either print your Word document or view it in print preview.
	
	  The picture or object is formatted as "inline", and the "Draft output" option is turned on. This problem occurs when you either print your Word document
	  or view it in print preview.
	
	  The picture or object is formatted as "inline", and the "Picture placeholders" option is turned on.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q167738 WD97: General Information About Floating Objects
	
	WORKAROUND
	==========
	
	The picture or object is formatted as "Float over text", and you are viewing your Word document in normal, outline, or master document view.
	--------------------------------------------------------------------------------------------------------------------------------------------
	
	Use one of the following methods appropriate for your situation.
	
	Method 1: Change the View:
	
	To allow a picture or object formatted as "Float over text" to appear in your
	Word document, change the view to one that displays the drawing layer. To do
	this, click either Page Layout or Online Layout on the View menu.
	
	Method 2: Change the Picture or Object to Inline:
	
	To allow the picture or object to be displayed in any view, format the picture or
	object as an inline object by removing the "Float over text" formatting. To do
	this, do one of the following:
	
	- To turn off the "Float over text" option, use the following steps:
	
	  1. Click to select the picture or object.
	
	  2. On the Format menu, click Picture.
	
	  3. On the Position tab, click to clear the Float over text check box.
	
	  4. Click OK.
	
	  -or-
	
	- If you cannot turn off the "Float over text" option, follow these steps:
	
	  1. Click to select the picture or object.
	
	  2. On the Edit menu, click Cut.
	
	  3. On the Edit menu, click Paste Special.
	
	  4. In the Paste Special dialog box, click to select Picture, click to clear
	     the "Float over text" check box, and then click OK.
	
	The picture or object is formatted as "Float over text", you are viewing your Word document in page layout view or online layout view, and the Drawings option is turned off.
	-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	
	To allow a picture or object formatted as "Float over text" to appear in page
	layout view or online layout view, turn on the Drawings option. To do this,
	follow these steps:
	
	1. On the Tools menu, click Options.
	
	2. On the View tab, click to select the Drawings check box, and then click OK.
	
	The picture or object is formatted as "Float over text", and the "Drawing objects" option is turned off. This problem occurs when you either print your Word document or view it in print preview.
	--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	
	To allow a picture or object formatted as "Float over text" to appear in print
	preview or to be printed, turn on the Drawing objects option. To do this, follow
	these steps:
	
	1. On the Tools menu, click Options.
	
	2. On the Print tab, click to select the Drawing objects check box, and then
	  click OK.
	
	The picture or object is formatted as "inline", and the "Draft output" option is turned on. This problem occurs when you either print your Word document or view it in print preview.
	-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	
	To allow a picture or object formatted as inline to appear in print preview or to
	be printed, turn off the Draft output option. To do this, follow these steps:
	
	1. On the Tools menu, click Options.
	
	2. On the Print tab, click to clear the "Draft output" check box, and then click
	  OK.
	
	The picture or object is formatted as "inline", and the "Picture placeholders" option is turned on.
	---------------------------------------------------------------------------------------------------
	
	To allow an inline picture or object to be displayed in all views, turn off the
	Picture placeholders option. To do this, follow these steps:
	
	1. On the Tools menu, click Options.
	
	2. On the View tab, click to clear the "Picture placeholders" check box, and
	  then click OK.
	
	NOTE: The Picture placeholders option does not affect pictures or objects that
	are formatted as "Float over text". The Picture placeholders option does affect
	inline pictures and objects in all views.
	
	Additional query words: missing gone lost doesn t
	
	======================================================================
	Keywords          : kbdta word8 word97 kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
