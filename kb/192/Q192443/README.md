---
layout: page
title: "Q192443: PRB: Error 438 Using TabOrder Sample Add-in"
permalink: /kb/192/Q192443/
---

## Q192443: PRB: Error 438 Using TabOrder Sample Add-in

{% raw %}

	Article: Q192443
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kberrmsg kbAddIn kbide kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the TabOrder sample Add-In has focus in the Visual Basic integrated
	development environment (IDE), shortcut keys (such as Alt+F for the File menu)
	are trapped and not passed properly. This results in the following error
	message:
	
	  Run-time error '438':
	  Object doesn't support this property or method
	
	RESOLUTION
	==========
	
	Follow these steps to edit the TabOrder.vbp project. For the location of this
	project, see the MORE INFORMATION section later in this article.
	
	1. Add the following function to the docTabOrder user document:
	
	        Public Function Hwnd()
	           Hwnd = UserDocument.Hwnd
	        End Function
	
	2. Edit the HandleKeyDown procedure in the modMain module to read as follows:
	
	        Sub HandleKeyDown(ud As Object, KeyCode As Integer, Shift As Integer)
	           On Error GoTo ErrExit
	
	           If Shift <> 4 Then Exit Sub
	           If KeyCode < 65 Or KeyCode > 90 Then Exit Sub
	           If gVBInstance.DisplayModel = vbext_dm_SDI Then Exit Sub
	
	           If hwndMenu = 0 Then hwndMenu = FindHwndMenu(ud.hwnd)
	
	           PostMessage hwndMenu, WM_SYSKEYDOWN, KeyCode, &H20000000
	           KeyCode = 0
	           SetFocus hwndMenu
	           Exit Sub
	
	        ErrExit:
	
	        End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The TabOrder Add-In (TabOrder.vbp), which is supplied as a sample project with
	Visual Basic, does not trap and pass keystrokes (such as Alt+F) intended for the
	Visual Basic IDE as it should. Instead, the user receives run-time error 438, as
	described in the SYMPTOMS section earlier in this article.
	
	The location of this sample may differ depending on the installation of Visual
	Basic, but you can use the "Find: All Files" dialog box in Windows to find
	Taborder.vbp.
	
	Steps to Reproduce Behavior in Visual Basic, version 5.0
	--------------------------------------------------------
	
	1. Locate and open the TabOrder project (Taborder.vbp).
	
	2. On the File menu, click Make TabOrder.dll and compile the project.
	
	3. Create a new Standard EXE Visual Basic project. Form1 is created by default.
	
	4. On the Add-Ins menu, click Add-In Manager and make sure that the VB Add-In
	  Toolbar box is selected.
	
	5. On the Add-In Toolbar, click the Add/Remove Toolbar Items button and make
	  sure the VB TabOrder Window box is selected. If the add-in is not listed,
	  click the Browse button and go to the folder that contains the compiled
	  TabOrder.dll sample. Click TabOrder.dll, and then click Open to add VB
	  TabOrder Window to the list.
	
	6. On the Add-In Toolbar, click the VB TabOrder Window button to view the
	  TabOrder window.
	
	7. While the TabOrder window has the focus, press Alt+F to open the design
	  environment's File menu.
	
	  You receive run-time error 438. The expected behavior is for the File menu to
	  open (drop down).
	
	Steps to Reproduce Behavior in Visual Basic, version 6.0
	--------------------------------------------------------
	
	1. Locate and open the TabOrder project (Taborder.vbp).
	
	2. On the File menu, click Make TabOrder.dll and compile the project.
	
	3. Create a new Standard EXE Visual Basic project. Form1 is created by default.
	
	4. On the Add-Ins menu, click Add-In Manager. In the Available Add-Ins list,
	  click VB 6 Add-In Toolbar, and then make sure the Loaded/Unloaded box is
	  selected under Load Behavior.
	
	5. On the Add-In Toolbar, click the Add/Remove Toolbar Items button and make
	  sure the Tab Order Sample Add-In box is selected. If the add-in is not
	  listed, click the Browse button and go to the folder that contains the
	  compiled TabOrder.dll sample. Click TabOrder.dll, and then click Open to add
	  Tab Order Sample Add-In to the list.
	
	6. On the Add-In Toolbar, click the Tab Order Sample AddIn button to view the
	  TabOrder window.
	
	7. While the TabOrder window has the focus, press Alt+F to open the design
	  environment's File menu.
	
	  You receive run-time error 438. The expected behavior is for the File menu
	  open (drop down).
	
	To verify the workaround, edit the TabOrder project source code as described in
	the RESOLUTION section earlier in this article, and then repeat steps 2 through
	7.
	
	NOTE: Be sure to unload the TabOrder Add-In from the Add-In Toolbar and any open
	Visual Basic projects before editing the TabOrder project or permission to
	recompile the Taborder.dll will be denied. To delete the Tab Order Sample Add-In
	button from the Add-In Toolbar, click the Add/Remove Toolbar Items button,
	select Tab Order Sample Add-In in the list, and then click Delete. Click OK.
	
	Additional query words: checked directory
	
	======================================================================
	Keywords          : kbcode kberrmsg kbAddIn kbide kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
