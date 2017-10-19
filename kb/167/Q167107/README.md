---
layout: page
title: "Q167107: FIX: Missing Controls on the SSTAB Control Tabs"
permalink: /kb/167/Q167107/
---

## Q167107: FIX: Missing Controls on the SSTAB Control Tabs

	Article: Q167107
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
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
	
	One or more of the tabs on the SSTAB control is missing its controls when
	displayed at run-time.
	
	CAUSE
	=====
	
	The SSTab control does not respond correctly when attempting to manipulate the
	Tab or TabVisible properties from the Form-Load event. If the SSTab control has
	not completely finished initializing when you attempt to set the Tab property to
	reflect a value different than the default, then the controls are still located
	in their temporary holding area at -72960. The Tab will display without its
	controls. To guarantee that the SSTab control has finished initializing, you can
	access its properties from any event after Form_Load has completed and the SSTab
	can receive the focus. This will occasionally work from the Form_Load event but
	has inconsistent behavior when you have various controls on one the tabs.
	
	RESOLUTION
	==========
	
	Tab Property
	------------
	
	If you attempt to set a certain tab as the current tab on initial display, then
	setting the Tab property in either the Form_Activate event or the
	SSTab1.Got_Focus event instead of the Form_Load event fixes this problem, as
	follows:
	
	     Private Sub Form_Activate
	     Static bReactivate as Boolean  'default is false
	     If Not bReactivate Then
	      SSTab1.Tab = GetSetting("MyApp","Settings","MyTab",0)
	      bReactivate = True
	     End If
	     End Sub
	
	TabVisible Property
	-------------------
	
	If you attempt to display only a certain tab on initial display, then setting the
	desired tab as the current tab and then setting the REMAINING tabs TabVisible
	property to false in reverse order (leaving the current tab set to visible) from
	either the Form_Activate event or the SSTab.Got_Focus events solves this
	problem, as follows:
	
	     Private Sub Form_Activate()
	     Static bReactivate as Boolean  'default is false
	      If Not bReactivate Then
	       SSTab1.Tab = GetSetting("MyApp","Settings","MyTab",0)
	       For i = SSTab1.Tabs - 1 To 0 Step -1
	        If SSTab1.Tab <> i Then
	         SSTab1.TabVisible(i) = False
	        End If
	       Next i
	       bReactivate = True
	      End If
	     End Sub
	
	This code assumes that have stored an entry "MyTab" in the registry.
	
	The GetSetting function can be replaced with a module level Public integer
	variable and set as needed.
	
	- You should not make the current tab invisible using SSTab1.TabVisible() =
	  False.
	
	- You should not set an invisible tab as the current tab.
	
	- You should always leave at least one 'tab' set to visible. If you want to
	  make all the tabs invisible, use SSTab1.Visible = False
	
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
	
	Activate & Got_Focus
	--------------------
	
	If you do not want the tab selected every time the SSTab control or the form its
	on receives focus, then use a Static flag such as bReactivate in the sample. If
	you do want the tab to be set every time the form receives focus, then remove
	the flag:
	
	     Private Sub Form_Activate
	      SSTab1.Tab = GetSetting("MyApp","Settings","MyTab",0)
	     End Sub
	
	Steps to Reproduce Behavior
	---------------------------
	
	SSTab Control
	-------------
	
	Tab property:
	
	1. Put an SSTab control with five tabs on a form.
	
	2. Add a textbox to each tab.
	
	3. Click on tab 0 to set design time current tab to 0.
	
	4. In Form_Load, add:
	
	        SSTab1.Tab = 3
	
	5. Run the project and note that the textbox will be gone. The textbox is
	  actually at -72960.
	
	Tabvisible property:
	
	1. Put an SSTab control with three tabs on a form.
	
	2. Add a textbox to each tab.
	
	3. In form load, add:
	
	        sstab1.tabvisible(0) = false
	        sstab1.tabvisible(1) = false
	        sstab1.tabvisible(2) = false
	        *(this will fail with the older SSTab, giving invalid property value)
	
	4. Put three CommandButtons on the form, reversing what was done in form load:
	
	        sstab1.tabvisible(0) = true
	        sstab1.tabvisible(1) = true
	        sstab1.tabvisible(2) = true
	
	Note that the textbox will be gone; it is actually at -72960.
	
	REFERENCES
	==========
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q149328 : Selecting Invisible Tab Can Cause GPF with SSTab Control
	
	Additional query words: missing invisible kbVBp500fix kbVBp kbWinOS98 kbDSupport kbdse kbVBp400fix
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : 4.0 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
