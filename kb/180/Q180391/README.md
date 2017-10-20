---
layout: page
title: "Q180391: PRB: ScrollBars Appear Incorrectly in Run-Mode"
permalink: /kb/180/Q180391/
---

## Q180391: PRB: ScrollBars Appear Incorrectly in Run-Mode

{% raw %}

	Article: Q180391
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB
	Last Modified: 15-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0 
	- Microsoft Windows CE Toolkit for Visual Basic 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you place a horizontal or vertical ScrollBar on a form and make it small,
	the ScrollBar may either appear or not appear with arrows, depending on the size
	of the control and the device that is targeted.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This behavior occurs because of the way that Windows CE handles the painting of
	the control.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE project in eMbedded Visual Basic or Visual Basic 6.0.
	  Form1 is created by default.
	
	2. Add a Vertical ScrollBar to Form1.
	
	3. Add the following code to Form1:
	
	        Private Sub Form_Load()
	           VScroll1.Height = 450
	        End Sub
	
	4. Press F5 to run the project, and note that no arrows appear in the ScrollBar.
	
	5. Change the code above to read:
	
	       Private Sub Form_Load()
	             VScroll1.Height = 250
	       End Sub
	
	6. Press F5 to run the project, and note that the ScrollBar is longer drawn on
	  the form.
	
	Additional query words: wince vbce vbce5 vbce6 evb
	
	======================================================================
	Keywords          : kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
