---
layout: page
title: "Q150185: INFO: Tab Keyword Cannot Be Used as Object Type in Visual Basic"
permalink: /kb/150/Q150185/
---

## Q150185: INFO: Tab Keyword Cannot Be Used as Object Type in Visual Basic

{% raw %}

	Article: Q150185
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
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The TabStrip control contains an object, Tab, which supports the various
	properties of a tab in the control. The word Tab cannot be used in a declaration
	to dimension an object. This is because Tab is a keyword in Visual Basic.
	
	STATUS
	======
	
	This is by design. Since Tab is a keyword in Visual Basic, it cannot be used in
	a declaration without employing one of the workarounds documented below.
	
	WORKAROUND
	==========
	
	There are several ways to dimension a Tab object, which is part of the TabStrip
	control:
	
	- Preface the object with the library in which it is contained. In the case of
	  Tab:
	
	     Dim x As ComctlLib.Tab
	
	  Later in the code, x has to be set to the correct tab object. For example:
	
	     Set x = New TabStrip1.Tabs(0)
	
	-or-
	
	- Use late binding, and dimension the Tab as a generic object:
	
	     Dim x As Object
	
	     Set x = New TabStrip1.Tabs(0)
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new project in Visual Basic. Form1 is created by default. Add a
	  TabStrip control to a form.
	
	2. In the Form_Load event place the following code:
	
	        Private Sub Form_Load()
	
	     Dim x As Tab
	
	     End Sub
	
	3. Run the project by pressing F5. Visual Basic will correctly highlight the
	  dimension statement and report a Syntax Error.
	
	Additional query words: kbVBp400 kbVBp600 kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
