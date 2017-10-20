---
layout: page
title: "Q173233: WD97: Borders Overlap When You Position Frames Side by Side"
permalink: /kb/173/Q173233/
---

## Q173233: WD97: Borders Overlap When You Position Frames Side by Side

{% raw %}

	Article: Q173233
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbframe kblayout
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The left and right borders overlap by about 4 points on frames positioned side
	by side when you use the Format Frames dialog box. For example if you create 2
	frames and set the width of each to 1 inch, and then set the horizontal position
	of the first frame to 1 inch and the horizontal position of the second frame to
	2 inches, the borders of the frames will overlap by about 4 points.
	
	
	CAUSE
	=====
	
	The left and right borders of a frame are approximately 4 points larger than the
	dimension specified in the Width setting of the Format Frame dialog box. The
	Horizontal Position of the left frame border is offset approximately 2 points to
	the left of the position specified in the Horizontal Position of the Format
	Frame dialog box. When you try to position two frames next to each other so that
	their left and right borders touch, they will overlap by approximately 4 points
	if the frame width and horizontal position do not compensate for these offsets.
	
	WORKAROUND
	==========
	
	To work around this behavior, do one of the following:
	
	- Use text boxes instead of frames.
	
	  -or-
	
	- Adjust the width and horizontal position of the frames to compensate for the
	  offsets.
	
	MORE INFORMATION
	================
	
	For additional information about borders in frames, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q118517 Framed Border Displays Incorrectly in Print Preview
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: frame, format, size, align, touch, backup, overlap
	
	======================================================================
	Keywords          : kbframe kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
