---
layout: page
title: "Q185082: WD97: How to Rotate or Flip Clip Art"
permalink: /kb/185/Q185082/
---

## Q185082: WD97: How to Rotate or Flip Clip Art

{% raw %}

	Article: Q185082
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbgraphic kbdta
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you insert a Windows Metafile (.wmf) or a Computer Graphics Metafile
	(.cgm) into a Word document, the Rotate and Flip commands on the Draw menu of
	the Drawing toolbar are unavailable.
	
	CAUSE
	=====
	
	The object is not an inline, ungrouped object.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Follow these steps to make sure the clip art is an inline object:
	
	  a. Click to select the picture.
	
	  b. On the Format menu, click Picture, and then click Position.
	
	  c. Click to select the "Float Over Text" check box, and then click OK.
	
	2. Follow these steps to ungroup and group the elements of the picture:
	
	  a. Click to select the picture.
	
	  b. On the Drawing toolbar, click Draw.
	
	  c. Click Ungroup.
	
	  d. On the Drawing toolbar, click Draw.
	
	  e. Click Group.
	
	The Rotate and Flip commands on the Draw menu of the Drawing toolbar will be
	available.
	
	NOTE: To rotate or flip the object, make sure the object is selected. Click on
	the rotate or flip button and then hold down the left mouse button and drag the
	object.
	
	Additional query words: rotated
	
	======================================================================
	Keywords          : kbgraphic kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
