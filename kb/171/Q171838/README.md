---
layout: page
title: "Q171838: FIX:Crash Compiling Native Code for Assignment of Variant Array"
permalink: /kb/171/Q171838/
---

## Q171838: FIX:Crash Compiling Native Code for Assignment of Variant Array

{% raw %}

	Article: Q171838
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
	
	When compiling to native code with an assignment of a variant array, you may see
	an application error in Visual Basic 5.0. This does not occur when compiling to
	p-code.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	A crash will occur when compiling to native code in either of the following two
	scenarios:
	
	Scenario 1:
	
	1. Start Visual Basic 5.0 and create a new Standard EXE. This creates a form
	  named Form1 by default as part of a project named Project1 by default.
	
	2. From the General Declarations area of Form1, add the following code:
	
	        Sub MySub(arvArray1 as variant)
	            Dim arvArray2() as variant
	            arvArray2(1,1) = arvArray1()
	        End Sub
	
	3. From the Project menu, select Project1 Properties. In the Project Properties
	  dialog, select Compile to Native Code on the Compile tab.
	
	4. Click OK.
	
	5. From the File menu, select Make Project1.exe. This will produce an
	  application error in VB5.exe.
	
	Scenario 2:
	
	1. Start Visual Basic 5.0 and create a new Standard EXE. This creates a form
	  named Form1 by default as part of a project named Project1 by default. Add a
	  class module to this project by clicking on Add Class Module from the Project
	  menu.
	
	2. In the General Declarations area of the Class module, add the following
	  code:
	
	        Public Property Get MyProp( _
	             arvArray1 As Variant) As Variant
	             Dim arvArray2() As Variant
	             arvArray2(1, 1) = arvArray1()
	        End Property
	
	3. From the Project menu, select Project1 Properties. In the Project Properties
	  dialog select Compile to Native Code on the Compile tab.
	
	4. Click OK.
	
	5. From the File menu. select Make Project1.exe. This will produce an
	  application error in Visual Basic 5.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
