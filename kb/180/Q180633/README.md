---
layout: page
title: "Q180633: BUG: ScrollBar Slider Does Not Stop at the Cursor"
permalink: /kb/180/Q180633/
---

## Q180633: BUG: ScrollBar Slider Does Not Stop at the Cursor

{% raw %}

	Article: Q180633
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp kbVBp500bug kbVBp600bug kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB
	Last Modified: 15-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0 
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When holding down the stylus of a Windows CE device (or the left-mouse button in
	emulation) to move the scroll bar slider, the slider does not stop at the
	cursor. It keeps going until it reaches the end of the scroll bar.
	
	RESOLUTION
	==========
	
	When the scrollbar slider reaches the desired location, remove your finger
	pressure from the mouse button or stylus.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE project in either Visual Basic or eMbedded Visual
	  Basic. Form1 is created by default.
	
	2. Add a vertical or horizontal scroll bar to Form1.
	
	3. Set the Max property of the scroll bar to 100.
	
	4. Set the LargeChange property of the scroll bar to 5.
	
	5. Press F5 to run the project.
	
	6. Place the stylus cursor between the slider and one end of the scroll bar.
	  Hold down the the stylus and note that the slider moves past the cursor and
	  continues moving until the stylus is released or it reaches the end of the
	  scroll bar. The expected behavior is that it should stop when it reaches the
	  mouse cursor.
	
	Additional query words: wince vbce vbce6 evb
	
	======================================================================
	Keywords          : kbToolkit kbVBp kbVBp500bug kbVBp600bug kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
