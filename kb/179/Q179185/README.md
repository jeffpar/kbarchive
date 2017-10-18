---
layout: page
title: "Q179185: WD97: Text Disappears Behind Floating Object"
permalink: kb/179/Q179185/
---

## Q179185: WD97: Text Disappears Behind Floating Object

	Article: Q179185
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
	
	When a floating object is placed over a single line of text, the text may
	disappear.
	
	CAUSE
	=====
	
	This problem occurs when the following conditions are true:
	
	- The floating object has a Tight or Through wrapping style applied to it.
	
	  -and-
	
	- The floating object is placed over a single-line paragraph that has Space
	  After formatting applied to it.
	
	NOTE: This problem may occur with a drawing object, AutoShape, text box, or
	picture.
	
	WORKAROUND
	==========
	
	To work around this problem, use the method appropriate to your situation.
	
	Method 1: Remove the Space After Paragraph Formatting
	-----------------------------------------------------
	
	If Space After formatting is applied to the paragraph, follow these steps to
	remove it:
	
	1. In page layout view, move the object away from the text that disappeared.
	
	  The text should reappear.
	
	2. Select the text.
	
	3. On the Format menu, click Paragraph.
	
	4. On the Indents And Spacing tab, under Spacing, change the After box to 0 pt,
	  and then click OK.
	
	5. Move the object back over the text as appropriate.
	
	Method 2: Remove the Tight or Through Wrapping Style from the Object
	--------------------------------------------------------------------
	
	If a Tight or Through Wrapping Style is applied to the object, follow these steps
	to remove the style:
	
	1. In page layout view, select the object.
	
	2. On the Format menu, click one of the following:
	
	   - Text Box
	   - Picture
	   - AutoShape
	   - Object
	
	  NOTE: Depending on the object selected, one of these object types will appear
	  at the bottom of the Format menu.
	
	3. On the Wrapping tab, click to select either Square, None, or Top & Bottom
	  under Wrapping Style, and then click OK.
	
	NOTE: When you remove the Tight or Through wrapping style, the text should
	reappear.
	
	Method 3: Convert the Text Box to a Frame
	-----------------------------------------
	
	If the object is in a text box, convert the text box to a frame. To do this,
	follow these steps:
	
	1. In page layout view, select the text box.
	
	2. On the Format menu, click Text Box, and then click the Text Box tab.
	
	3. Click Convert To Frame.
	
	4. Click OK.
	
	NOTE: You can use the Frame command on the Format menu to size, position, and
	wrap text around the contents of the frame.
	
	Method 4: Move or Resize the Object
	-----------------------------------
	
	Move the object to a different position on the page, or change the size of the
	object. This may allow the text to appear.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: gone missing disappear hidden
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
