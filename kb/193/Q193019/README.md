---
layout: page
title: "Q193019: BUG: Type Mismatch Error Erasing a Fixed-Size Array in UDT"
permalink: /kb/193/Q193019/
---

## Q193019: BUG: Type Mismatch Error Erasing a Fixed-Size Array in UDT

{% raw %}

	Article: Q193019
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
	
	When you use the Erase Statement to empty a fixed-size array in a variant UDT,
	the following error occurs:
	
	  "Runtime Error 13: Type Mismatch".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX EXE project. Class1 is created by default.
	
	2. Paste the following code in Class1:
	
	        Type test
	           x(5) As Integer
	        End Type
	
	3. Add a standard module to the project by selecting "Add Module" from the
	  "Project" menu.
	
	4. Paste the following code in Module1:
	
	        Sub main()
	           Dim x As test
	           x.x(0) = 5
	           MsgBox x.x(0)
	           Erase x.x
	           MsgBox x.x(0)
	
	           Dim y As Variant
	           y = x
	           y.x(0) = 5
	           MsgBox y.x(0)
	           Erase y.x         'fails
	           MsgBox y.x(0)
	        End Sub
	
	5. Open the Immediate Window by selecting it from the View menu.
	
	6. In the Immediate Window, type "main" (without quotes) and press the ENTER
	  key. After the message boxes "5","0","5" are displayed, the above error will
	  occur on the "Erase y.x" line, instead of emptying the array elements.
	
	Additional query words: kbdss kbDSupport kbVBp kbVBp600bug kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
