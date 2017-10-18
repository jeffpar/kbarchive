---
layout: page
title: "Q176641: FIX: Do Until Loop Evaluates &quot;True&quot; as -1 Exclusively"
permalink: kb/176/Q176641/
---

## Q176641: FIX: Do Until Loop Evaluates &quot;True&quot; as -1 Exclusively

	Article: Q176641
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Do Until loop that uses a literal or a variable of type Integer as a
	conditional will execute endlessly if the value is not -1.
	
	RESOLUTION
	==========
	
	Use a variable of type Variant or Long as the conditional argument for the loop.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Visual Basic defines "True" to mean "non-zero." Any value that is not zero
	should be evaluated as True. The Do Until loop in Visual Basic 5.0, however,
	evaluates only -1 as True if a literal value or a variable of type integer is
	used for the conditional argument.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Method 1:
	
	1. Place the following code on a CommandButton on a Visual Basic 5.0 form:
	
	        Debug.Print "A"
	        Do Until 3
	           Debug.Print "B"
	        Loop
	        Debug.Print "C"
	
	2. Click the button. This loop will print "B" endlessly. (Press CTRL-BRK to stop
	  execution.)
	
	Method 2:
	
	1. Place the following code on a CommandButton on a Visual Basic 5.0 form:
	
	        Dim i As Integer
	        i = 3
	        Debug.Print "A"
	        Do Until i
	           Debug.Print "B"
	        Loop
	        Debug.Print "C"
	
	2. Click on the button. This loop will print "B" endlessly. (Press CTRL-BRK to
	  stop execution.)
	
	  NOTE: In both cases, the loop that prints "B" should not execute.
	
	Additional query words: infinite loop iterate kbVBp500bug kbVBp600fix kbVBp kbdsd kbDSupport kbVBA
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
