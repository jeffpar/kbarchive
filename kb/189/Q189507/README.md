---
layout: page
title: "Q189507: PRB: Pset Method Does Not Work When DrawWidth Property &lt; 2"
permalink: kb/189/Q189507/
---

## Q189507: PRB: Pset Method Does Not Work When DrawWidth Property &lt; 2

	Article: Q189507
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 5.x, the Pset method of the form does not set a point on the
	form when the DrawWidth property of the form is less then two. The default value
	for the DrawWidth property is one.
	
	RESOLUTION
	==========
	
	Set the DrawWidth property of the form to two or greater.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Place the following code in the Click event of the form:
	
	        InXLimit = This.Width
	        InYLimit = This.Height
	
	        For InPoint = 1 to 3000
	           InXCoord = int(InXLimit * rand() + 1)
	           InYCoord = int(InYLimit * rand() + 1)
	           This.Pset(InXCoord, InYCoord)
	        Endfor
	
	3. Place the following code in the RightClick event of the form:
	
	        Wait Window "DrawWidth = 2" Nowait
	        This.DrawWidth = 2
	
	4. Save and run the form.
	
	Note: When you first click the form, nothing happens. However, right-click the
	form, and then click the form again. You will see some dots generated on the
	form.
	
	Additional query words: kbVFp500a kbVFp500 kbOOP
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	
