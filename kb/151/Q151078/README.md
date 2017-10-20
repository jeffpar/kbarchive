---
layout: page
title: "Q151078: FIX: Arrows to Scroll Tabs in TabStrip Control Not Shown"
permalink: /kb/151/Q151078/
---

## Q151078: FIX: Arrows to Scroll Tabs in TabStrip Control Not Shown

{% raw %}

	Article: Q151078
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The TabStrip control provides arrows to scroll Tabs inside the control if there
	are more Tabs than can be displayed in the available width of the control.
	However, these arrows only appear on the Tabstrip control after certain
	properties of the control have been used in code.
	
	RESOLUTION
	==========
	
	To cause the arrows to appear, refer to a property such as the Caption of the
	Tab in the Load event of the Form on which the TabStrip control is contained.
	For example, placing the following code in the Load event causes the spin
	controls to correctly appear on the Tabs:
	
	    Private Sub Form_Load()
	       Dim TmpStr As String
	       Me.Show
	       DoEvents
	       TmpStr = TabStrip1.Tabs(1).Caption
	       TabStrip1.Tabs(1).Caption = TmpStr
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce the Problem
	------------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Place a TabStrip control on Form1.
	
	3. Invoke the Custom property page for the TabStrip control by choosing the
	  ellipsis (...) adjacent to the Custom property. In the Tabs tab of the
	  property pages, press the Insert tab button 20 times.
	
	4. Press the F5 key to run the project. Note that there are no spin buttons to
	  move to different Tabs.
	
	To correct the problem above, place the code in the WORKAROUND section into the
	Form_Load event of Form1. Then the spin buttons correctly show on the TabStrip
	control when the form appears.
	
	Additional query words: kbVBp400bug kbVBp500fix kbVBp kbdsd kbDSupport kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
