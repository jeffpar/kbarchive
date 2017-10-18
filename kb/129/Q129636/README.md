---
layout: page
title: "Q129636: PRB: &quot;Ambiguous name detected&quot; Compile-Time Error in VB 4.0"
permalink: kb/129/Q129636/
---

## Q129636: PRB: &quot;Ambiguous name detected&quot; Compile-Time Error in VB 4.0

	Article: Q129636
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Better type checking in Microsoft Visual Basic version 4.0 causes it to return a
	compile-time error message when you declare two functions (or subroutines) with
	the same name in the same module or form. This is a change in behavior from
	Microsoft Visual Basic version 3.0.
	
	The error message returned is:
	
	  Ambiguous name detected: <function or sub name>
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add the following code to the general declarations section of Form1:
	
	     Private Declare Function GetSystemDirectory Lib "Kernel" _
	        (ByVal strBuffer As String, ByVal intSize As Integer) As Integer
	     Private Declare Function GetSystemDirectory% Lib "Kernel" _
	        (ByVal lpBuffer$, ByVal nSize%)
	
	3. Attempt to run the application by pressing the F5 key. Visual Basic will not
	  run the application. Instead you will get this error message:
	
	  Ambiguous name detected: GetSystemDirectory
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
