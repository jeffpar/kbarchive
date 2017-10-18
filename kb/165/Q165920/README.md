---
layout: page
title: "Q165920: PRB: Correct Usage of &quot;&amp;&quot; and &quot;AND&quot; in Visual Basic"
permalink: kb/165/Q165920/
---

## Q165920: PRB: Correct Usage of &quot;&amp;&quot; and &quot;AND&quot; in Visual Basic

	Article: Q165920
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This code works in Visual Basic 3.0:
	
	       If Form1.Text1.Text = "" & Form1.Text2.Text = "" Then...
	
	but fails in Visual Basic 4.0 and later with a "type mismatch" error.
	
	The correct syntax for this statement is:
	
	       If Form1.Text1.Text = "" And Form1.Text2.Text = "" Then...
	
	Confusing the concatenation operator "&" with the logical operator "AND" will
	result in "type mismatch errors."
	
	CAUSE
	=====
	
	This is a result of the data type of (Boolean) being added to Visual Basic 4.0
	and later.
	
	RESOLUTION
	==========
	
	When performing logical comparisons between operands, be sure to use the logical
	operators (AND, OR) as opposed to the concatenation operator "&" in Visual
	Basic 4.0.
	
	STATUS
	======
	
	This is by design.
	
	MORE INFORMATION
	================
	
	In Visual Basic 3.0, a logical comparison between operands would result in
	either a 1 or a 0 being returned. With Visual Basic 4.0 and later, a logical
	data type has been added so that a logical comparison between two operands will
	result in either a "TRUE" or "FALSE" value being returned. Attempting to use the
	concatenation operator "&" can not be performed in Visual Basic 4.0 and
	later on these logical data types. Therefore, an error is raised.
	
	Additional query words: kbVBp kbdsd kbDSupport kbVBA kbVBp400 kbVBp500 kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
