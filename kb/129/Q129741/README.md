---
layout: page
title: "Q129741: PRB: Call List Takes Longer to Display"
permalink: /kb/129/Q129741/
---

## Q129741: PRB: Call List Takes Longer to Display

{% raw %}

	Article: Q129741
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp400 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It takes a long time to display the Call List after running out of stack space
	with 32-bit Visual Basic version 4.0 in comparison to the time it takes in the
	16-bit version 4.0 and 3.0.
	
	CAUSE
	=====
	
	The call stack in the 32-bit version 1 megabyte, which is approximately 30 times
	the size of the 16-Bit versions.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in 32-Bit Visual Basic version 4.0.
	
	2. Add a Basic Module to the Project, and enter this code:
	
	        Sub Main()
	           Main
	        End Sub
	
	3. Change the default start up module by choosing Options... from the Tools
	  menu. Select the project property sheet, and change the start-up module to
	  Sub Main
	
	4. Start the program by choosing Start from the Run menu or by pressing the F5
	  key.
	
	5. Select the debug window when the "Out of Stack Space" error occurs.
	
	6. Press CTRL+L to bring up the calls list. After a few moments, a list with a
	  large number of procedure calls should appear.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp400 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
