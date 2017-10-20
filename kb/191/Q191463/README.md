---
layout: page
title: "Q191463: PRB: Cannot Create Control Array in VB6 DHTML Application"
permalink: /kb/191/Q191463/
---

## Q191463: PRB: Cannot Create Control Array in VB6 DHTML Application

{% raw %}

	Article: Q191463
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In other Visual Basic projects, you can create a control array by setting the
	index of the control. However, DHTML does not support control arrays, so this
	property is not exposed.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Visual Basic will prompt you to create a control array when adding a control of
	the same name to a form. This does not occur in a DHTML Application project.
	Instead, Visual Basic creates the new control with the same ID and appends a
	number to the end.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a DHTML Application project in Visual Basic. DHTMLPage1 is created by
	  default.
	
	2. Add a Button to DHTMLPage1.
	
	3. Copy and Paste the control back into DHTMLPage1. Note that you have two
	  controls on the page. Note that the ID property for the second control is
	  Button11. You can optionally add a third Button by pasting again. Note that
	  the third Button is Button12.
	
	REFERENCES
	==========
	
	For more information about DHTML Application project in Visual Basic 6.0, refer
	to your Visual Basic documentation.
	
	For more information about the DHTML specification, visit the MSDN Online at:
	
	  http://www.msdn.microsoft.com/workshop/default.asp
	
	Additional query words: kbDHTML kbVBp600 kbdse kbInternet kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
