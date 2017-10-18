---
layout: page
title: "Q248285: FIX: Cannot Edit UserControl When You Host Another UserControl"
permalink: kb/248/Q248285/
---

## Q248285: FIX: Cannot Edit UserControl When You Host Another UserControl

	Article: Q248285
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbActiveX kbVBp500bug kbGrpDSVB kbDSupport
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to edit the code for a form or UserControl that is hosting an
	instance of a UserControl (which is defined within the same project), the
	project cannot be edited. For example, if you modify a line of code, it reverts
	to its unmodified state when you move off the line.
	
	If you continually try to edit the form or UserControl after the first try proves
	unsuccessful, you may receive one of the following error messages:
	
	  Compile error: invalid outside procedure
	
	  -or-
	
	  Error loading 'c:\temp\vb3c6.tmp'. A control could not be loaded due to load
	  error. Continue?
	
	The control instance may lose its control class; that is, the control instance is
	no longer an instance of a UserControl but an instance of a picture box.
	
	CAUSE
	=====
	
	When a UserControl is in the design environment and is hosted on a form or
	UserControl, the UserControl is running. If the UserControl is defined in the
	same project as the host, when you edit the host's code, the Visual Basic editor
	raises the error message when the edit invalidates the procedural layout of the
	code.
	
	RESOLUTION
	==========
	
	There are two ways to work around this problem in Visual Basic 5.0:
	
	- Develop the control in a separate project than its host. This is the
	  preferred workaround.
	
	- Comment out the ReadProperties and WriteProperties events in the UserControl
	  before you edit the host.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic 5.0. Form1 is created by
	  default.
	
	2. From the Project menu, add a new User Control to the project.
	
	3. Select the ReadProperties event in the User Control, and edit the code so
	  that the stub for the function exists. You do not need to add any code.
	
	4. Close the design windows for the User Control, and add an instance of the
	  control to Form1.
	
	5. Double-click the control instance to edit one of the event procedures for the
	  control instance.
	
	6. Add three valid lines of code (such as MsgBox "Hello").
	
	7. Block comment this event procedure. To do this, add a single quotation mark
	  (') to the beginning of each line. You can also highlight all of the code,
	  and click Comment Block from the Edit toolbar.
	
	Notice that only the first two lines of the procedure are commented out. (You may
	also receive one of the above-mentioned error messages.) Furthermore, you cannot
	add or edit any other lines of code; all that you can do is unload Visual Basic.
	Do not save your project at this stage because you may corrupt it.
	
	This problem may also occur when you edit an Enum declaration in the declarations
	section of the form.
	
	Additional query words: usercontrol uneditable invalid picturebox
	
	======================================================================
	Keywords          : kbActiveX kbVBp500bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
