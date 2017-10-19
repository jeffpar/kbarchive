---
layout: page
title: "Q174651: PRB: Unexpected Message: &quot;Add this project to SourceSafe&quot; in VB"
permalink: /kb/174/Q174651/
---

## Q174651: PRB: Unexpected Message: &quot;Add this project to SourceSafe&quot; in VB

	Article: Q174651
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbSSafe500 kbSSafe600 kbVBp500
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click on a Visual Basic project from Windows, you receive the
	following Visual SourceSafe integration message:
	
	  Add this project to SourceSafe?
	
	even though you have already placed this project under Visual SourceSafe control.
	
	CAUSE
	=====
	
	When you double-click on a .vbp file with a long name format from Windows 95 or
	Windows NT, the project is opened with the name converted into an 8.3 format.
	
	Visual SourceSafe integration originally added the .vbp as a long file name
	project, so the integration is not recognizing the short name and the long name
	as the same project.
	
	RESOLUTION
	==========
	
	Do one of the following:
	
	- Open the project file (.vbp) through Visual Basic, instead of double-clicking
	  on it in Windows, to retain the long file name.
	
	- Edit the application's file-type association. Please see the following
	  article in the Microsoft Knowledge Base for the step-by-step procedure to do
	  this:
	
	  Q150706 PRB: Long File Names are Converted to Short by Association
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic project, and save it with a name more than 8
	  characters (for example, TheLongNameProject.vbp).
	
	2. Add the project to Visual SourceSafe.
	
	3. Close Visual Basic.
	
	4. Double-click the .vbp file in Windows Explorer.
	
	5. You see the "Add this project to SourceSafe?" dialog box even though you just
	  added the project in step 2.
	
	6. If you click "No", the project filename is "THELON~1.VBP" in the Visual Basic
	  Project Explorer. If you click "Yes", Visual SourceSafe will not recognize it
	  as the same project and try to add it again using the short name.
	
	Additional query words: source code launch
	
	======================================================================
	Keywords          : kbinterop kbSSafe500 kbSSafe600 kbVBp500 
	Technology        : kbVBSearch kbSSafeSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500 kbSSafe600 kbSSafe500
	Issue type        : kbprb
	
	=============================================================================
	
