---
layout: page
title: "Q191857: BUG: Scrollbar Disabled in IDE When Enabled is Set to False"
permalink: /kb/191/Q191857/
---

## Q191857: BUG: Scrollbar Disabled in IDE When Enabled is Set to False

{% raw %}

	Article: Q191857
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When designing a form, if you add a horizontal or vertical ScrollBar and set one
	or both to disabled, then you cannot use click-and-drag to move the ScrollBar(s)
	unless you close and re-open the form.
	
	RESOLUTION
	==========
	
	To avoid this problem, set the Enabled property of the ScrollBars in the Form
	Load event. See step 5 in the MORE INFORMATION section below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a vertical ScrollBar control and a horizontal ScrollBar control to to
	  Form1.
	
	3. Set the Enabled property of each ScrollBar to False. Note that you can not
	  change the positions of the ScrollBars by clicking and dragging the control
	  with the mouse.
	
	4. Close the form and re-open it. The ScrollBars can now be re-positioned.
	
	5. Set the Enabled property of the horizontal and vertical ScrollBars to True,
	  and then add the following code to the Form Load event:
	
	        HScroll1.Enabled = False
	        VScroll1.Enabled = False
	
	  You can now reposition the ScrollBars as expected.
	
	Additional query words: kbDSupport kbDSD kbVBp kbCtrl kbVBp600bug kbVBp500bug
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
