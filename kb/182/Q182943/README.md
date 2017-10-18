---
layout: page
title: "Q182943: BUG: &quot;Key&quot; Argument of SaveToolBar &amp; RestoreToolBar Doesn't Work"
permalink: kb/182/Q182943/
---

## Q182943: BUG: &quot;Key&quot; Argument of SaveToolBar &amp; RestoreToolBar Doesn't Work

	Article: Q182943
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SaveToolbar method of the Toolbar control has three arguments that allow you
	to save a registry key, subkey, and value in the registry. Upon executing this
	method, only the subkey and value are saved in the registry.
	
	CAUSE
	=====
	
	The key argument of the SaveToolbar method is ignored. The following example
	will actually store the value "Toolbar1" at the registry key
	HKEY_CURRENT_USER\User1 rather than HKEY_CURRENT_USER\AppName\User1 as you might
	expect:
	
	     Toolbar1.SaveToolbar "AppName", "User1", "Toolbar1"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a reference to the Microsoft Windows Common Controls 5.0 by completing
	  the following steps:
	
	  a. From the Project menu, click Components to display the Components dialog
	     box.
	
	  b. From the Controls list, check Microsoft Windows Common Controls 5.0.
	
	  c. Click OK to close the Components dialog box.
	
	3. Add a toolbar control to Form1. Add some buttons to the toolbar control.
	
	4. Add a CommandButton to Form1.
	
	5. Copy the following code to the Code window of Form1:
	
	        Option Explicit
	
	        Private Sub Command1_Click()
	           Toolbar1.SaveToolbar "NewKey", "NewSubKey", "NewSubKeyValue"
	        End Sub
	
	6. On the Run menu, click Start or press the F5 key to start the program.
	
	  a. Click the command button to add the new registry key, subkey, and value.
	
	  b. End the program.
	
	  c. Run RegEdit.exe to search for "NewKey". Notice that the new registry key
	     you expect (HKEY_CURRENT_USER\NewKey\NewSubKey) does not exist.
	
	  d. Run RegEdit.exe to search for "NewSubKey". Notice that the new registry
	     key is actually HKEY_CURRENT_USER\NewSubKey.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	
	=============================================================================
	
