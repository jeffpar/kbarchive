---
layout: page
title: "Q173289: WD97: Graphic Does Not Appear or Print in a Master Document"
permalink: /kb/173/Q173289/
---

## Q173289: WD97: Graphic Does Not Appear or Print in a Master Document

{% raw %}

	Article: Q173289
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
	
	When you insert a subdocument containing a graphic into a master document, the
	graphic seems to disappear and does not print.
	
	CAUSE
	=====
	
	The graphic is formatted as Float Over Text (click Picture on the Format menu,
	and then click the Position tab), and you are not in a view that displays Float
	Over Text objects.
	
	WORKAROUND
	==========
	
	To enable the graphic to be displayed and printed in a master document, use one
	of the following methods.
	
	Method 1: Change Views
	----------------------
	
	On the View menu, click either Page Layout or Online Layout.
	
	Method 2: Change Object to "Inline"
	-----------------------------------
	
	Format the graphic as an inline object by removing the Float Over Text
	formatting. To do so, follow these steps:
	
	1. Open the subdocument that contains the object.
	
	2. Select the graphic.
	
	3. On the Format menu, click Picture.
	
	4. Click the Position tab.
	
	5. Click to clear the Float Over Text check box.
	
	6. Click OK.
	
	MORE INFORMATION
	================
	
	Microsoft Word documents consist of separate text and drawing layers. Master
	document view, normal view, and outline view do not display objects in the
	drawing layers. Page layout, online layout, and print preview are the only views
	that can display the drawing layers of a Word document. Floating objects reside
	on one of the document's drawing layers and, therefore, are visible only in page
	layout, online layout, and print preview views.
	
	For information about floating objects, inline objects, and the layers of a Word
	document, please see the following articles in the Microsoft Knowledge Base:
	
	  Q167738 WD97: Can't See or Manipulate Objects (and Other Odd Behavior)
	
	  Q161692 WD97: Problems With Float Over Text Objects
	
	  Q155802 WD97: Word Doesn't Find "Float Over Text" Objects
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
