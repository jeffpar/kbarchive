---
layout: page
title: "Q194753: BUG: Divide Error When Compiling Project From Command Line"
permalink: /kb/194/Q194753/
---

## Q194753: BUG: Divide Error When Compiling Project From Command Line

{% raw %}

	Article: Q194753
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCommandLine kbCompiler kbide kbVBp600bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling a Visual Basic project from the command line results in the following
	error:
	
	  "VB6 caused a divide error in module VB6.EXE at 0137:00482a61"
	
	NOTE: The actual memory address may be different for your project.
	
	CAUSE
	=====
	
	This problem is caused by custom "tabs" added to the Visual Basic 6.0 IDE's
	Toolbox that contain controls.
	
	RESOLUTION
	==========
	
	Remove the custom "tabs" from Visual Basic IDE's Toolbox.
	
	Step-by-Step Example
	--------------------
	
	1. Open a project in Microsoft Visual Basic.
	
	2. Secondary-mouse click on the custom tab in the Visual Basic Toolbox. If the
	  Toolbox is not visible, select it from the View menu. Select "delete tab"
	  from the shortcut menu.
	
	3. Repeat this process for each tab on the Toolbox.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Right-click on the Toolbox, and select "Add Tab."
	
	3. When the "New Tab Name" dialog appears, name the tab "Test." The new tab will
	  appear at the bottom of the Toolbox.
	
	4. Select a control in the Toolbox, and drag it on top of the "Test" tab. This
	  action will place the control onto the tab.
	
	5. Press the ALT+F4 key combination to close Visual Basic.
	
	6. Open an MS-DOS Command Prompt and execute the following command:
	
	  SET PATH="C:\Program Files\Microsoft Visual Studio\VB98"
	
	  Modify the above path as appropriate.
	
	7. From the command line, attempt to compile a Microsoft Visual Basic project.
	  An example of compiling a project from the command line is:
	
	  VB6.EXE /Make C:\Source\Project1.VBP
	
	  The following error message will appear:
	
	  "This program has performed an illegal operation and will be shut down"
	
	  Select "Details" from the error dialog box. The following details will be
	  reported:
	
	  "VB6 caused a divide error in module VB6.EXE at 0137:00482a61".
	
	  NOTE: The actual memory address may be different for each project.
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbCommandLine kbCompiler kbide kbVBp600bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
