---
layout: page
title: "Q171808: FIX: MDI Child Form Does Not Become Active"
permalink: /kb/171/Q171808/
---

## Q171808: FIX: MDI Child Form Does Not Become Active

{% raw %}

	Article: Q171808
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MDI child forms with UserControls on them may not receive focus when the
	UserControls' constituent controls are selected.
	
	CAUSE
	=====
	
	Windows MDI child activation is based on the MDI client window getting the
	WM_PARENTNOTIFY message, which is being suppressed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual Basic, create a new ActiveX control project. UserControl1 is
	  created by default.
	
	2. Add a CommandButton control to the UserControl and close the UserControl's
	  design window.
	
	3. Select File | Add Project to add a Standard Exe project. Form1 is created by
	  default.
	
	4. Select Project | Add MDI Form to add a MDI form. MDIForm1 is created by
	  default.
	
	5. Select Project | Add Form to add a regular form. Form2 is created by default.
	
	6. Change the MDIChild property on both Form1 and Form2 to TRUE.
	
	7. Add UserControl1 to Form1.
	
	8. In the form_load event of Form1, place the following code:
	
	        Private Sub Form_Load()
	                  Me.Show
	                  Form2.Show
	              End Sub
	    
	
	9. Run the Project.
	
	10. Size Form2 so that you can see Form1 (and the UserControl on it) in the
	  background.
	
	11. Click the CommandButton on the UserControl while Form2 has the focus. Note
	  that the button presses but Form1 does not get the focus as it should.
	
	12. Click the UserControl in an area other than where the CommandButton is. Note
	  that Form1 now gets the focus.
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
