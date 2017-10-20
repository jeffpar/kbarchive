---
layout: page
title: "Q177450: WD97: Cannot Edit Graphic After Choosing Undo Picture"
permalink: /kb/177/Q177450/
---

## Q177450: WD97: Cannot Edit Graphic After Choosing Undo Picture

{% raw %}

	Article: Q177450
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you click Undo Picture (on the toolbar or on the Edit menu), you cannot
	select or edit a graphic.
	
	CAUSE
	=====
	
	The Undo Picture function does not work correctly with graphics that you entered
	with the Float Over Text option turned on.
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods.
	
	Method 1: Close and Reopen the Document
	---------------------------------------
	
	Save your document, close it, and reopen it.
	
	Method 2: Clear the Float Over Text Check Box
	---------------------------------------------
	
	To turn off the Float Over Text option when inserting a picture, follow these
	steps:
	
	1. On the Insert menu, point to Picture, and then click From File.
	
	2. Select a picture file and then click to clear (remove the check mark from)
	  the Float Over Text check box.
	
	3. Click Insert.
	
	Method 3: Copy and Paste the Picture
	------------------------------------
	
	1. Select the paragraph mark above the picture (if there is one), the picture,
	  and the paragraph mark below the picture.
	
	  NOTE: The picture will not appear to be selected.
	
	2. On the Edit menu, click Copy.
	
	3. Position the insertion point at another place within the document, and click
	  Paste on the Edit menu.
	
	4. Click the pasted picture once to select it.
	
	  You can now click the original picture to select it, and you can open the
	  Picture Editor by double-clicking it.
	
	5. Delete the pasted copy of the graphic.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	This problem does not occur in Word 2000.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q161692 WD97: Problems with Float Over Text Objects
	
	  Q155802 WD97: Word Doesn't Find "Float Over Text" Objects
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
