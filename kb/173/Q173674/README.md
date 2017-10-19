---
layout: page
title: "Q173674: WD97: Blue Underline for Hyperlink Not Placed Below Object"
permalink: /kb/173/Q173674/
---

## Q173674: WD97: Blue Underline for Hyperlink Not Placed Below Object

	Article: Q173674
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbui word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you select an object such as a picture and then insert a hyperlink, the blue
	line that normally indicates a hyperlink is not placed below the object. The
	hyperlink still works properly, but there is no visual indication that the
	object is a hyperlink.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods.
	
	Method 1: Inline Object
	-----------------------
	
	If the object was inserted as an inline object, follow these steps:
	
	1. Click once to select the object.
	
	2. Press the RIGHT ARROW key to move the insertion point to the right of the
	  object.
	
	3. Type a non-breaking space ("CTRL+SHIFT+SPACEBAR" (without the quotation
	  marks)).
	
	4. Select the newly created space and the object (the easiest way is to hold the
	  shift key down and press the LEFT ARROW key twice).
	
	5. On the Insert menu, click Hyperlink. Under "Link to file or URL", type the
	  path of the hyperlink, and then click OK.
	
	Method 2: Floating Object (Convert It to an Inline Object)
	----------------------------------------------------------
	
	If the object was inserted as a floating object, you can convert the picture to
	an inline object and then insert the hyperlink as in method 1. To do this,
	follow these steps:
	
	1. Click once to select the object.
	
	2. On the Format menu, click Picture, and then click the Position tab.
	
	3. Click to clear the Float Over Text check box, and then click OK.
	
	4. Press the RIGHT ARROW key to move the insertion point to the right of the
	  object.
	
	5. Type a non-breaking space ("CTRL+SHIFT+SPACEBAR" (without the quotation
	  marks)).
	
	6. Select the newly created space and the object (the easiest way is to hold the
	  shift key down and press the LEFT ARROW key twice).
	
	7. On the Insert menu, click Hyperlink. Under "Link to file or URL", type the
	  path of the hyperlink, and then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	To verify that a hyperlink exists for an object, move the mouse pointer over the
	object. The mouse pointer should change to the correct hyperlink pointer
	(usually a hand), and a ScreenTip for the hyperlink should be displayed.
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : kbui word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
