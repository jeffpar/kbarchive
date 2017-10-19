---
layout: page
title: "Q171837: FIX: Run-time Error 6 &quot;Overflow When Compiled to Native Code&quot;"
permalink: /kb/171/Q171837/
---

## Q171837: FIX: Run-time Error 6 &quot;Overflow When Compiled to Native Code&quot;

	Article: Q171837
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error may occur when the if expression uses Byte data type:
	
	  "Run-time error '6'. Overflow."
	
	CAUSE
	=====
	
	Visual Basic does not evaluate Byte data type correctly in the if expression
	when compiled to Native code with optimizations.
	
	RESOLUTION
	==========
	
	Install Visual Studio 97 Service Pack 2 (SP2). The problem can also be addressed
	by compiling to P-code, compiling to Native Code with no optimizations, or using
	a data type other than the byte data type in the if expression.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	The following code (known as the "Triangle Inequality") will run as expected in
	the Visual Basic IDE or compiled as P-code but will fail when compiled as a
	Native EXE file with optimizations.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a New Standard EXE project. Form1 is created by default.
	
	2. In the General Declarations section of Form1, place the following code:
	
	        Sub Checksides (a as Byte, b as Byte, c as Byte)
	
	            If (c > a + b) or (a > b + c) or (b > a + c) then
	                MsgBox "Not a triangle"
	            Else
	                MsgBox "Triangle"
	            End If
	
	        End Sub
	
	3. In the Form_Load() event of Form1, place the following code:
	
	        Private Sub Form_Load()
	          CheckSides 1,1,1
	          End
	        End sub
	
	4. Select Project Properties from the Project menu. Open the Compile tab and
	  make sure the project is set to compile to Native Code with some sort of
	  optimization selected, such as Optimize for fast code.
	
	5. Select Make Project1.exe from the File Menu.
	
	6. Execute the Project1.exe file.
	
	This will produce the error message "Run-time error 6. OverFlow."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
