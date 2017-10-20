---
layout: page
title: "Q180435: PRB: ScrollBars Missing in Multiline TextBox"
permalink: /kb/180/Q180435/
---

## Q180435: PRB: ScrollBars Missing in Multiline TextBox

{% raw %}

	Article: Q180435
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp500 kbVBp600 kbVBp600bug kbOSWinCE100 kbGrpDSVB
	Last Modified: 15-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ScrollBars do not appear in a Multiline TextBox. Note that this occurs only in
	the emulation environment and not on the remote device.
	
	MORE INFORMATION
	================
	
	This behavior occurs only in the Windows CE Platform SDK version 2.0 emulation
	environment.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Windows CE (HPC) Project in Visual Basic. Form1 is created by
	  default.
	
	2. Add three TextBoxes to Form1.
	
	3. Make the following property settings:
	
	  +-----------------------------------------+
	  | Control       | Property   | Setting    | 
	  +-----------------------------------------+
	  | All TextBoxes | MultiLine  | True       | 
	  +-----------------------------------------+
	  | Text1         | ScrollBars | Horizontal | 
	  +-----------------------------------------+
	  | Text2         | ScrollBars | Vertical   | 
	  +-----------------------------------------+
	  | Text3         | ScrollBars | Both       | 
	  +-----------------------------------------+
	
	4. Press the F5 key to run the program, and note that the ScrollBars do not
	  appear when the application executes.
	
	Additional query words: wince vbce vbce6
	
	======================================================================
	Keywords          : kbToolkit kbVBp500 kbVBp600 kbVBp600bug kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
