---
layout: page
title: "Q190451: BUG: Exiting VB While T-SQL Debugger Is Running Causes Hang"
permalink: /kb/190/Q190451/
---

## Q190451: BUG: Exiting VB While T-SQL Debugger Is Running Causes Hang

{% raw %}

	Article: Q190451
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB kbGrpDSVBDB
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Closing down Visual Basic while the T-SQL debugger is running hangs them both.
	
	RESOLUTION
	==========
	
	Before closing down Visual Basic, make sure T-SQL Debugging is not running.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a New Standard EXE project. Form1 is created by default.
	
	2. Launch Add-In Manager under menu Add-Ins. Make sure Visual Basic T-SQL
	  Debugger is checked.
	
	3. From the Add-Ins menu, select T-SQL Debugger. This will bring up a dialog box
	  titled "Visual Basic Batch T-SQL Debugger."
	
	4. On the Settings tab, fill in the appropriate information to establish a
	  connection.
	
	5. On the Stored Procedure tab, choose a stored procedure from the drop-down
	  combobox. Fill in the value of parameters, if applicable.
	
	6. Click Execute to start running the debugging.
	
	7. When the T-SQL debugger loads, press the F8 key (or click the Step Into
	  button) to step into the code.
	
	8. Close down Visual Basic by clicking Exit under the File menu.
	
	Additional query words: kbdss kbDSupport kbVBp kbDebug kbStoredProc kbVBp600bug kbVBp500bug
	
	======================================================================
	Keywords          : kbGrpDSVB kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
