---
layout: page
title: "Q149434: PRB: Control Not Visible or Partially Visible at Design Time"
permalink: /kb/149/Q149434/
---

## Q149434: PRB: Control Not Visible or Partially Visible at Design Time

{% raw %}

	Article: Q149434
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A control added to a form at design time, such as a text box, is no longer
	visible on that form during design time.
	
	CAUSE
	=====
	
	The Left and Top properties of the control are set to a value outside the
	boundaries of the form or set to a negative number. The SSTab control may also
	reset these properties to a value outside the boundaries of the form.
	
	RESOLUTION
	==========
	
	In the Property windows, click the Object list box and click the control. Check
	the Left and Top properties to make sure they are the appropriate values. If the
	control is still not visible, set these values to 0 to place the control in the
	Top Left corner of the form.
	
	Additional query words: kbVBp400 kbVBp600 kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
