---
layout: page
title: "Q171598: BUG: Properties Dialog Appears When TabStrip Double-Clicked"
permalink: /kb/171/Q171598/
---

## Q171598: BUG: Properties Dialog Appears When TabStrip Double-Clicked

	Article: Q171598
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbVBp400 kbGrpDSVB kb32bitOnly
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Tabstrip control resides on a form with other controls, the Properties
	dialog for the Tabstrip may inadvertently appear at run-time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been corrected with the version of
	COMCTL32.OCX that ships with Microsoft Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	Properties dialogs for controls should be available only at design time.
	However, if you use the Click event of the Tabstrip control to set the focus to
	another control on the form and then double-click the work area of the Tabstrip,
	the Property dialog for the TabStrip will appear.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project.
	
	2. Add a Tabstrip control to Form1.
	
	3. Add a TextBox control to Form1.
	
	4. In the Click event of Tabstrip1 add the following code.
	
	        Text1.setfocus.
	
	5. Press the F5 key to run the program.
	
	6. Click once on the tab of TabStrip1.
	
	7. Double-click on the work area of TabSrip1.
	
	  The Properties dialog appears as if you are in design mode.
	
	Additional query words: tab strip comctl32.ocx
	
	======================================================================
	Keywords          : kbVBp400 kbGrpDSVB kb32bitOnly 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
