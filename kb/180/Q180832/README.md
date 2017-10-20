---
layout: page
title: "Q180832: FIX: Toolbar Buttons Do Not Appear Correctly at Run-time"
permalink: /kb/180/Q180832/
---

## Q180832: FIX: Toolbar Buttons Do Not Appear Correctly at Run-time

{% raw %}

	Article: Q180832
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbCtrl kbToolbar kbVBp kbVBp400 kbVBp500 kbGrpDSVB kbDSupport kb32bitOnly
	Last Modified: 10-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The toolbar buttons on a Toolbar control do not appear at run-time. With Visual
	Basic 5.0, a Toolbar control with buttons on it appears as an empty, gray band.
	With Visual Basic 4.0, the Toolbar buttons appear but the Toolbar is not tall
	enough to display the captions.
	
	CAUSE
	=====
	
	The problem occurs due to a bug in Comctl32.dll version 4.00.950 that ships with
	Windows 95.
	
	RESOLUTION
	==========
	
	Use an ImageList control to add an image to at least one button, and then all
	the buttons display correctly. To resolve this problem, install any newer
	version of Comctl32.dll. You can download an updated version of Comctl32.dll
	from the Microsoft Download Center. See the "References" section for more
	information.
	
	STATUS
	======
	
	This problem has been corrected in later versions of Comctl32.dll.
	
	MORE INFORMATION
	================
	
	If you do not add any images to your Toolbar buttons, the buttons may not appear
	at run-time. But, if you add a ToolTip and/or code behind the button's Click
	Event, these will work properly when the mouse is placed over the button's
	location. Also, the gray band is taller when a Caption is used.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE on new installation of Windows 95 (without Internet
	  Explorer installed).
	
	2. Add a reference to the Windows Common Controls.
	
	3. Add a Toolbar control to Form1.
	
	4. Add the following code to Form1:
	
	        Private Sub Form_Load()
	          Dim btnX As Button
	          Set btnX = Toolbar1.Buttons.Add(, , "Test", tbrDefault)
	        End Sub
	
	5. Run the Project. Note that the Toolbar appears as an empty, gray band across
	  the top of the Form. It should have a single button with "Test" as its
	  Caption.
	
	REFERENCES
	==========
	
	For additional information about how download a newer version of Comctl32.ocx,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q167121 FILE: COMCTLZP.EXE: Comctl32.ocx Updated to Version 5.00.3828
	
	NOTE: Versions 3.51 and 4.0 of Comctl32.dll in Windows NT 3.51 and 4.0,
	respectively, do not exhibit the problem in Visual Basic 5.0.
	
	Additional query words: visible tool bar comctl32
	
	======================================================================
	Keywords          : kbCtrl kbToolbar kbVBp kbVBp400 kbVBp500 kbGrpDSVB kbDSupport kb32bitOnly 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbVB400Search kbVB400
	Version           : :4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
