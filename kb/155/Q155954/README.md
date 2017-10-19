---
layout: page
title: "Q155954: Lines with Arrowheads Distorted When Pasted into Word"
permalink: /kb/155/Q155954/
---

## Q155954: Lines with Arrowheads Distorted When Pasted into Word

	Article: Q155954
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbgraphic kbinterop
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft Word for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you copy a line with an arrowhead from Microsoft PowerPoint for Windows 95
	and paste it into Microsoft Word for Windows 95, the line comes in distorted.
	The arrowhead may appear as a block, or it may not appear at all.
	
	CAUSE
	=====
	
	Line objects in PowerPoint are actually longer than they appear. They include a
	clipping rectangle to square off the ends. When you paste one of these objects
	into Word, Word interprets the clipping rectangle as the picture boundary and
	puts it in the wrong place. This will crop some or all of an arrowhead.
	
	RESOLUTION
	==========
	
	You can manually reset the picture boundary by doing the following:
	
	1. Paste the arrow into Word.
	
	2. Double-click the arrow to start the Word drawing layer.
	
	3. Click the arrow to see the resize handles.
	
	4. Drag the resize handles until the arrow is the proper size and proportion.
	
	5. On the Picture toolbar, click the Reset Picture Boundary button.
	
	6. Click the Close Picture button to return to your document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article. This problem has been corrected in Microsoft Office
	97.
	
	Additional query words: 7.00 powerpt ppt95 word95 winword word7 chopped cropped cut off blocky missing arrowed
	
	======================================================================
	Keywords          : kbgraphic kbinterop 
	Technology        : kbWordSearch kbPowerPtSearch kbWord700Search kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbWord700
	Version           : WINDOWS:7.0
	
	=============================================================================
	
