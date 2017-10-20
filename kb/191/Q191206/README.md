---
layout: page
title: "Q191206: PRB: Compiler Error Overriding VBA Conversion Functions"
permalink: /kb/191/Q191206/
---

## Q191206: PRB: Compiler Error Overriding VBA Conversion Functions

{% raw %}

	Article: Q191206
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbCompiler kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You might receive the following Visual Basic Compiler Error Message when you try
	to override a VBA Conversion function such as Cdate:
	
	  Expected Identifier
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create the following function in Visual Basic:
	
	        Public Function CDate(vExp) as Date
	           MsgBox "Won't Compile"
	        End Function
	
	2. Select "Start With Full Compile" from the Run menu.
	
	RESULTS: The compile error "Expected: Identifier" appears. In Visual Basic 6.0,
	you can override the CVDate function.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbCompiler kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
