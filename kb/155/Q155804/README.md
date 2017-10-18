---
layout: page
title: "Q155804: WD97: Inserted Picture or Drawing Object Moves Down Page"
permalink: kb/155/Q155804/
---

## Q155804: WD97: Inserted Picture or Drawing Object Moves Down Page

	Article: Q155804
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert a picture or drawing object into a Microsoft Word 97 document,
	pressing ENTER causes the picture or drawing object to move down the page with
	the insertion point.
	
	CAUSE
	=====
	
	Microsoft Word 97 for Windows (non-SR version) inserts pictures and drawing
	objects with the "Float over text" and "Move with text" options selected by
	default.
	
	RESOLUTION
	==========
	
	This behavior was modified in SR-1. For more information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170564 WD97: Pictures and Objects Inserted as Inline by Default in SR-1
	
	If you are not able to upgrade to SR-1, use one of the following methods to work
	around this problem.
	
	Method 1: Move to the End of the Paragraph Containing the Object Anchor
	-----------------------------------------------------------------------
	
	1. If it is not already selected, select the picture or drawing object.
	
	2. Press the ESC key. This will cancel the selection of the picture.
	
	3. Press the END key. This will move the insertion point to the end of the
	  paragraph that contains the picture or drawing object anchor.
	
	4. Press ENTER or type any text. The picture or drawing object will not move
	  when you press the ENTER key.
	
	Method 2: Clear the "Move Object With Text" Option
	--------------------------------------------------
	
	1. If it is not already selected, select the picture or drawing object.
	
	2. On the Format menu, click Picture or AutoShape.
	
	3. On the Position tab, click to clear the "Move object with text" check box,
	  and then click OK.
	
	Method 3: Move the Object Anchor to Above the Insertion Point
	-------------------------------------------------------------
	
	If you want to insert text or press ENTER without affecting the placement of the
	picture or drawing object, move the object anchor to a different paragraph above
	the insertion point. To view the object anchors (you must be in Page Layout
	View), click Options on the Tools menu, and then, on the View tab, click to
	select the Object Anchors check box.
	
	To move an object anchor, place the mouse pointer over the object anchor. When
	the four-ended arrow appears with the mouse pointer, click and hold the mouse
	button and then drag the object anchor to a different paragraph above the
	insertion point.
	
	MORE INFORMATION
	================
	
	Microsoft Word 97 for Windows uses a new drawing layer named Office Art. Office
	Art is a rich and sophisticated drawing layer that replaces the Word drawing
	layer and is shared by all Microsoft Office programs.
	
	What Is the Difference Between a Floating Object and an Inline Object?
	----------------------------------------------------------------------
	
	Float over text objects are inserted in the drawing layer so that you can
	position them precisely on the page or in front of or behind text or other
	objects. By default, Microsoft Word 97 inserts pictures and drawing objects as
	floating objects.
	
	Inline pictures are positioned directly in the text layer at the insertion point
	and will move with the text when you press ENTER. In earlier versions of Word,
	pictures are inserted as inline.
	
	Additional query words: word8 word97
	
	======================================================================
	Keywords          : kbualink97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
