---
layout: page
title: "Q241481: BUG: Internal Protection Fault When Using Format Function"
permalink: kb/241/Q241481/
---

## Q241481: BUG: Internal Protection Fault When Using Format Function

	Article: Q241481
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbVBp kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Format function to format a numeric character sequence, and
	include a format sequence that includes a numeric value to be used in the Null
	section of the format, you may get this error:
	
	  The instruction at "0x65396ac3" referenced memory at "0x00000028". The memory
	  could not be "read"
	
	NOTE: The exact memory locations may vary from system to system.
	
	RESOLUTION
	==========
	
	To work around this problem, you need to escape all of the characters in the
	fourth section of the numeric format. For example, instead of:
	
	  format$(Null,"#,##0.00;;;0.00")
	
	you should do:
	
	  format$(Null,"#,##0.00;;;\0\.\0\0")
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. Add a Command Button to the form. It is Command1.
	
	3. Add the following code to the form:
	
	  Private Sub Command1_Click()
	       Msgbox format$(Null,"#,##0.00;;;0.00")
	  End Sub
	
	4. Run the Code. When you press Command1, you should get an error that says:
	
	  The instruction at "0x65396ac3" referenced memory at "0x00000028". The memory
	  could not be "read".
	
	  NOTE: The exact memory locations may vary from system to system.
	
	REFERENCES
	==========
	
	Numeric formats are covered in the Visual Basic Documentation under the section:
	"Different Formats for Different Numeric Values (Format Function)"
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbVBp kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
