---
layout: page
title: "Q183162: BUG: VB Crashes After Ending Application While in Break Mode"
permalink: /kb/183/Q183162/
---

## Q183162: BUG: VB Crashes After Ending Application While in Break Mode

{% raw %}

	Article: Q183162
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp500bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While debugging your application in Break mode, Visual Basic may terminate,
	hang, or cause one or both of the following errors when you end the
	application:
	
	  Run-time error '28': Out of stack space
	
	  -or-
	
	  VB5 caused a stack fault in module KERNEL32.DLL at 0137:bff725c5.
	
	NOTE: The memory address at which the error occurs may vary.
	
	CAUSE
	=====
	
	This problem can occur when multiple forms are shown modally. The problem only
	occurs at design-time when you use the Immediate Window while in Break mode and
	then end the application.
	
	RESOLUTION
	==========
	
	One workaround for this problem is to avoid using the Immediate Window while
	your forms are shown modal or to show your forms modeless instead of modal. You
	can show a form modeless yet simulate most of the functionality of showing a
	form modal by setting the form's ShowInTaskbar property to False and by setting
	the Enabled property of the other visible forms to False, which prevents users
	from setting focus to the other forms. When the user dismisses the form, reset
	the Enabled property of the other visible forms as appropriate.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Put a CommandButton on Form1.
	
	3. Add the following code to Form1:
	
	        Private Sub Command1_Click()
	           Dim frm as Form1
	           Set frm = New Form1
	           frm.Show vbModal 'problem does not occur when showing
	                            'forms modeless: frm.Show vbModeless
	        End Sub
	
	4. Run the project. Press enter 29 times to load 30 forms. (Each time you press
	  Enter, the Command1_Click code shows a modal copy of Form1.)
	
	5. Press the CTRL+BREAK keys to enter Break mode.
	
	6. Press the CTRL+G keys to view the Immediate Window, and then type:
	
	  ? "Hello"
	
	7. End the project by clicking the END button on the toolbar. Note Visual Basic
	  hangs or terminates as described previously.
	
	
	Additional query words: access violation illegal operation page fault ipf Gpf
	
	======================================================================
	Keywords          : kbVBp kbVBp500bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
