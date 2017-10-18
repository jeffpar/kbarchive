---
layout: page
title: "Q165978: WD97: Cannot Change Word 95 Document Text Box After Opening It"
permalink: kb/165/Q165978/
---

## Q165978: WD97: Cannot Change Word 95 Document Text Box After Opening It

	Article: Q165978
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbui winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Word 97 to open a Word 95 document that contains a picture
	
	within a text box, the following problems may occur:
	
	- You cannot change the settings of the text box.
	
	  -and-
	
	- You cannot move the text box to a different location.
	
	CAUSE
	=====
	
	The text box was converted to a Word 97 AutoShape object.
	
	WORKAROUND
	==========
	
	Changing the Settings of the Autoshape (Text Box) Object
	--------------------------------------------------------
	
	1. Click once on the object to select the picture.
	
	2. Press any ARROW key on the keyboard to select the "text box."
	
	  NOTE: The selection border will change from a single line to a diagonal line
	  border.
	
	3. On the Format menu, click AutoShape.
	
	Moving the AutoShape (Text Box) Object
	--------------------------------------
	
	1. Click once on the object to select the picture.
	
	2. Press any ARROW key on the keyboard to select the "text box."
	
	  NOTE: The selection border will change from a single line to a diagonal line
	  border.
	
	3. Position the mouse pointer over one of the sides of the diagonal border, and
	  then click and hold down the mouse button to drag the text box to the new
	  position.
	
	NOTE: If you place the mouse pointer on top of the object and then try to move
	it, the AutoShape (text box) will no longer be selected. You will not be able to
	move the object until you press one of the ARROW keys to select the AutoShape
	(text box).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	After you open the document containing a picture in a text box in Word 97, when
	you click the text box, you are actually selecting the picture inside the text
	box.
	
	Additional query words: position reposition place
	
	======================================================================
	Keywords          : kbui winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
