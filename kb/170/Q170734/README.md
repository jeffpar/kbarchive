---
layout: page
title: "Q170734: WD97: Cut or Copy Object in Label Causes IPF"
permalink: /kb/170/Q170734/
---

## Q170734: WD97: Cut or Copy Object in Label Causes IPF

{% raw %}

	Article: Q170734
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
	
	When you cut or copy some objects inserted into a page of labels created by
	clicking New Document on the Label tab, the following error message may appear:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	When you click Details, the following error message is shown:
	
	  Winword caused an invalid page fault in module WINWORD.EXE at
	  0137:<address>.
	
	NOTE: The Label tab can be accessed by clicking Envelopes And Labels on the Tools
	menu.
	
	CAUSE
	=====
	
	The object was inserted as Float Over Text by one of the following methods.
	
	Method 1
	--------
	
	1. On the Insert menu, click Object.
	
	2. Click the Create New tab.
	
	3. Click an object (for example: Microsoft Map), and then click OK.
	
	Method 2
	--------
	
	1. On the Insert menu, point to Picture and then click Clip Art.
	
	2. Click to select the graphic you want, and then click Insert.
	
	WORKAROUND
	==========
	
	To prevent the error from occurring, use any of the following methods to change
	the object from a floating object to an inline object.
	
	Method 1: Object Already in the Document
	----------------------------------------
	
	1. Click the object to select it, and then click Picture on the Format menu.
	
	2. Click the Position Tab, and then click to clear the Float Over Text check
	  box.
	
	NOTE: When clip art is inserted from the Microsoft Clip Gallery, the clip art is
	always inserted as a floating object. Method 1 should be used to turn off the
	Float Over Text option before you copy or cut an image inserted from Microsoft
	Clip Gallery.
	
	Method 2: Insert Picture as Inline
	----------------------------------
	
	1. On the Insert Menu, point to Picture, and then click From File.
	
	2. Look In should point to the Clipart directory or the directory where your
	  clip art has been stored.
	
	3. If necessary, double-click Popular or a different folder.
	
	4. Click to select the image you want to insert.
	
	5. Click to clear the Float Over Text check box, and then click Insert.
	
	Method 3: Insert Object as Inline
	---------------------------------
	
	1. On the Insert Menu, click Object.
	
	2. Click to clear the Float Over Text check box, scroll through the list of
	  objects, and then click to select the object you want to insert.
	
	3. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	REFERENCES
	==========
	
	For additional information on instances of Word not responding (hanging), please
	see the following article in the Microsoft Knowledge Base:
	
	  Q163365 WD97: Hang During Copy/Paste or Drag/Drop of Object After Undo
	
	For additional information on Float Over Text, please see the following articles
	in the Microsoft Knowledge Base:
	
	  Q161692 WD97: Problems With Float Over Text Objects
	
	  Q163276 OFF97: Office 97 Clipart Not Available
	
	When inserting a graphic into a label, it is very common to insert the graphic as
	an inline object rather than a floating object. For more information about
	converting floating objects to inline objects, please see the following articles
	in the Microsoft Knowledge Base:
	
	  Q167738 WD97: Can't See or Manipulate Objects (and Other Odd Behavior)
	
	For more information about floating objects, click the Office Assistant, type
	"floating objects," click Search, and then click "Label a graphic or insert text
	in a shape."
	
	For more information about adding graphics to labels, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q123312 WD: How to Add a Graphic or Logo to Every Label on a Page
	
	For more information about positioning objects, click the Office Assistant, type
	"float over text," click Search, and then click one of the following topics:
	
	- About positioning text and graphics
	
	- Type over existing text
	
	- Select text and graphics
	
	- Change a floating picture to an inline picture and vice-versa
	
	Additional query words: 8.0 word97
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
