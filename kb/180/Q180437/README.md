---
layout: page
title: "Q180437: BUG: Text Is Aligned Too Far Left and Up in TextBox"
permalink: /kb/180/Q180437/
---

## Q180437: BUG: Text Is Aligned Too Far Left and Up in TextBox

{% raw %}

	Article: Q180437
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp kbVBp500 kbVBp600bug kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB
	Last Modified: 21-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	- Microsoft Windows CE Toolkit for Visual Basic 5.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Text is aligned too close to the upper-left edge of a TextBox control if the
	TextBox Appearance property is set to "1 - 3D." When the TextBox receives the
	focus, the cursor overwrites the upper-left TextBox border, leaving a white
	space when the TextBox loses focus.
	
	NOTE: This occurs only in the emulation environment and not on the Handheld PC
	device.
	
	RESOLUTION
	==========
	
	To avoid losing a portion of the border after the TextBox has lost focus, put
	the following code in the LostFocus event of the TextBox to refresh the
	TextBox:
	
	  Text1.Refresh
	
	Although this does not solve the minor problem of the text being too close to the
	edges, it does solve the cosmetic problem caused by the cursor erasing the
	border.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Windows CE (HPC) Project in Visual Basic. Form1 is created by
	  default.
	
	2. Add two TextBoxes to Form1 and ensure that the Appearance property of each is
	  set to "1 - 3D."
	
	3. Leave the default text in the TextBoxes.
	
	4. Press the F5 key to run the project.
	
	5. Tab between the two TextBoxes and note that when the cursor is in a TextBox,
	  it covers part of the black border. After exiting the TextBox, that part of
	  the border has been erased.
	
	Additional query words: wince vbce vbce5 vbce6
	
	======================================================================
	Keywords          : kbToolkit kbVBp kbVBp500 kbVBp600bug kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB500
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
