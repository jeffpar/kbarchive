---
layout: page
title: "Q138526: PRB: Loading Controls from Array Gives Several Error Messages"
permalink: /kb/138/Q138526/
---

## Q138526: PRB: Loading Controls from Array Gives Several Error Messages

{% raw %}

	Article: Q138526
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Visual Basic 3.0, attempting to load any control as a new element of a
	control array when the control is not part of a control array consistently gave
	the error message "Object not part of an array." In Visual Basic 4.0, the error
	message can vary depending on the type of control being used.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following table shows some of the error messages for the controls if a new
	member of a control array is loaded when the control is not part of an array.
	Other controls exhibit one of the error messages below but there is no
	consistency between the error message and type of control.
	
	Control    Error Message
	------------------------------------------------------------------
	
	Command    Wrong Number of arguments or invalid property assignment
	Button
	
	Picture    Type Mismatch
	Control
	
	OLE        Invalid use of property
	Control
	
	Video      Object doesn't support this property or method
	Clip
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic 4.0. Form1 is created by default.
	
	2. Place the Picture control on Form1.
	
	3. In the Click event for the form, place the following code:
	
	      Load Picture1(1)
	
	4. Run the program by pressing the F5 key. Click the form, and an error message
	  will be generated. It is appropriate that an error message is generated, but
	  the message is not consistent from one control to another.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
