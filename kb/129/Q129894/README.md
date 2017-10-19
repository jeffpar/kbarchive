---
layout: page
title: "Q129894: PRB: Can't Get Tabstrip Control to Support Hot-Key Activation"
permalink: /kb/129/Q129894/
---

## Q129894: PRB: Can't Get Tabstrip Control to Support Hot-Key Activation

	Article: Q129894
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft Tabstrip Control is used in a program, you cannot activate it
	by using hot keys. The control allows you to underline characters in the
	captions on the tabs by using the ampersand (&) character, but this doesn't
	enable a hot key that will activate the tab. This behavior is by design.
	
	RESOLUTION
	==========
	
	If you want the tabs to be activated by hot keys, use the following method. To
	be able to use the Tabstrip control, you need to make sure the 'Windows Common
	Controls' control is included in your project.
	
	Steps to Create Tabstrip with Hot-Keys
	--------------------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Set the KeyPreview property of Form1 to True in the Properties window.
	
	3. Add a Tabstrip (TabStrip1) to the form.
	
	4. Double-click the Custom property of the Tabstrip in the Properties window to
	  bring up the Tabstrip Control Properties window.
	
	5. In the tabs section of the Tabstrip Control Properties window, add three tabs
	  with the following captions: &First, &Second, and &Third.
	
	6. Close the Tabstrip Control Properties window by clicking the OK button.
	
	7. Add the following code to the KeyDown event of the form:
	
	        If Shift = 4 Then
	           Select Case KeyCode
	              Case Asc("f"), Asc("F")
	                 TabStrip1.Tabs(1).Selected = True
	                 KeyCode = 0
	              Case Asc("s"), Asc("S")
	                 TabStrip1.Tabs(2).Selected = True
	                 KeyCode = 0
	              Case Asc("t"), Asc("T")
	                 TabStrip1.Tabs(3).Selected = True
	                 KeyCode = 0
	           End Select
	        End If
	
	8. Press the F5 key to run the program. Notice that as you press ALT-F, ALT-S,
	  or ALT-T, the appropriate tab is selected.
	
	STATUS
	======
	
	This behavior is by design. The Microsoft Tabstrip functions the way it does in
	order to preserve system resources. As you use this control, you will notice
	that it is missing other features that third-party tab controls provide. This
	gives you, the programmer, better control over your system. You can implement
	only those features that you really need and not waste valuable system resources
	on features you don't need.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
