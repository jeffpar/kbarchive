---
layout: page
title: "Q157776: WD97: Horizontal Lines Are Displayed with Different Widths"
permalink: /kb/157/Q157776/
---

## Q157776: WD97: Horizontal Lines Are Displayed with Different Widths

{% raw %}

	Article: Q157776
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kblayout
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some horizontal lines expand the width of the display window and appear to be
	left-aligned, and other horizontal lines appear to be centered and have a fixed
	width of 6.5 inches. This problem occurs when formatting Web pages.
	
	CAUSE
	=====
	
	The horizontal line inserted by using the Horizontal Line button or the first
	line style in the Horizontal Line dialog box is centered in the document but
	expands the width of the document window, giving it the appearance of being
	left-aligned.
	
	The graphical line styles, beginning with the second line style in the Horizontal
	Line dialog box, are GIF images that have a fixed length.
	
	By default, all horizontal lines are formatted with the Align=center attribute.
	
	WORKAROUND
	==========
	
	To work around the problem, choose one of the following methods:
	
	Method 1. Use the same style for all horizontal lines on your Web page.
	
	Method 2. Modify the HTML source and change the HR tag attributes so that they
	resemble the attributes of the IMG SRC tag used by the graphical lines.
	
	For example, if the tag for the graphical line looks like this:
	
	  <IMG SRC Align="Center" Width=575 Height=10>
	
	change the HR tag so that it looks like this:
	
	  <HR Align="Center" Width=575 Height=10>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	
	
	Additional query words: 97 8.0 word8 word97
	
	======================================================================
	Keywords          : kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
