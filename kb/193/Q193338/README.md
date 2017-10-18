---
layout: page
title: "Q193338: PRB: Setting RightToLeft to True Returns Out Of Memory Error"
permalink: kb/193/Q193338/
---

## Q193338: PRB: Setting RightToLeft to True Returns Out Of Memory Error

	Article: Q193338
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to change the "RightToLeft" property of either a Horizontal or
	Vertical ScrollBar control to True generates an "Out Of Memory" error.
	
	CAUSE
	=====
	
	The RightToLeft property is a design feature in localized Arabic and Hebrew
	versions of Visual Basic 6.0 and should have no effect in other language
	versions. The above error can be ignored in non-Arabic and non-Hebrew language
	versions.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Place either a Horizontal or Vertical ScrollBar control on Form1.
	
	3. Click the control and press the F4 key to bring up the Property Window.
	
	4. Change the value of "RightToLeft" from False to True. This results in an "Out
	  Of Memory" error. Further attempts to set the property will result in the
	  same error.
	
	  NOTE: In Visual Basic 5.0, any attempt to set the RightToLeft property of
	  either the Horizontal or Vertical ScrollBar control will be ignored instead
	  of generating an error.
	
	Additional query words: kbdss kbDSupport kbVBp kbVBp600 kbIDE kbVBp500
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
