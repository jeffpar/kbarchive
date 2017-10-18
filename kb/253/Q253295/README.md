---
layout: page
title: "Q253295: FIX: Loading/Unloading Form w/MSHFlexGrid Causes Resource Leak"
permalink: kb/253/Q253295/
---

## Q253295: FIX: Loading/Unloading Form w/MSHFlexGrid Causes Resource Leak

	Article: Q253295
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0,97
	Operating System(s): 
	Keyword(s): kbCtrl kbResource kbVBp kbVBp500bug kbVBp600bug kbVBp600fix kbDevStudio kbGrpDSVB _IK
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a form containing an MSHFlexGrid (Msflxgrd.ocx) control is loaded and
	unloaded, a leak in the Graphics Device Interface (GDI) system resource occurs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual Basic 6.0 Service
	Pack 4.
	
	To download Visual Basic 6.0 SP4, see the following Microsoft Web site:
	
	  http://msdn.microsoft.com/vstudio/sp/vs6sp4
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On a Microsoft Windows NT 4.0 or Microsoft Windows 2000 computer, start a new
	  standard EXE project with a default form (Form1).
	
	2. From the Project menu, add another form (Form2).
	
	3. From the Project menu, select Components, check Microsoft Hierarchical
	  FlexGrid Control 6.0 (SP3) (MSHFLXGD.OCX), and click OK.
	
	4. Add a CommandButton (Command1) to both Form1 and Form2. Place four
	  MSHflexgrid controls on Form2.
	
	5. Add the following code to Form1:
	
	  Private Sub Command1_Click()
	      Form2.Show
	  End Sub
	  Private Sub Form_Load()
	      Command1.Caption = "Show Form2"
	  End Sub
	
	6. Add the following code to Form2:
	
	  Private Sub Command1_Click()
	      Unload Me
	  End Sub
	  Private Sub Form_Load()
	      Command1.Caption = "Unload Me"
	  End Sub
	
	7. Press the F5 key to run the project.
	
	8. Start Task Manager (CTRL+ALT+DELETE), and select the Processes tab.
	
	9. Under the View menu, click on Select Columns, and choose GDI Objects.
	
	10. Click the CommandButtons on Form1 and Form2 to load and unload Form2, and
	  note that for each iteration, there is an increase in one GDI object.
	
	Additional query words: memory
	
	======================================================================
	Keywords          : kbCtrl kbResource kbVBp kbVBp500bug kbVBp600bug kbVBp600fix kbDevStudio kbGrpDSVB _IK 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0,97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
