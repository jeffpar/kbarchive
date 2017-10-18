---
layout: page
title: "Q172083: PRB: Cannot Modify DataChanged Property of DBGrid Column Object"
permalink: kb/172/Q172083/
---

## Q172083: PRB: Cannot Modify DataChanged Property of DBGrid Column Object

	Article: Q172083
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0 5.0 97
	Operating System(s): 
	Keyword(s): kbVBp400 kbVBp500 kbGrpDSVBDB
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Trying to change the value of the DataChanged property of a DBGrid's Column
	object generates the error 438:
	
	  "Object does not support this property or method."
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic 5.0. Form1 is created by default.
	
	2. Place a DBGrid on Form1.
	
	3. Place a CommandButton on Form1.
	
	4. Put the following code in the CommandButton's Click Method:
	
	        DBgrid1.columns(1).datachanged = false
	
	5. Run the form and click the CommandButton.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp400 kbVBp500 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.0 5.0 97
	Issue type        : kbprb
	
	=============================================================================
	
