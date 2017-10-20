---
layout: page
title: "Q171533: FIX: ActiveX EXE Crashes VB5 When Set to Binary Compatibility"
permalink: /kb/171/Q171533/
---

## Q171533: FIX: ActiveX EXE Crashes VB5 When Set to Binary Compatibility

{% raw %}

	Article: Q171533
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
	
	When compiling an ActiveX EXE with Binary Compatibility, the following error may
	occur:
	
	  "VB5 caused a stack fault in KERNEL32.DLL at 0137:bff7d01c"
	
	CAUSE
	=====
	
	Ambiguous names between an Enum and a Procedure are not handled properly by the
	code that binds the Binary Compatible executable to the original. An infinite
	loop causes the stack fault.
	
	RESOLUTION
	==========
	
	Install Visual Studio 97 Service Pack 2 (SP2). Alternately, ensure that no
	Procedure shares a common name with an Enum to help avoid this error.
	
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
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new ActiveX EXE project.
	
	2. Change the Instancing property of Class1 to 4-GlobalSingleUse.
	
	3. In Class1, paste the following code:
	
	        Public Enum Test
	           Red
	        End Enum
	
	        Public Sub Test()
	
	        End Sub
	
	4. Select File...Make Project1.exe, and press OK to compile.
	
	5. Select Project...Project1 Properties, and choose the Component tab.
	
	6. Set Binary Compatibility with Project1.exe.
	
	7. Choose File...Make Project1.exe, change the name to Project2.exe, and press
	  OK to compile. This results in a stack fault in Kernel32.DLL.
	
	  The above scenario should result in an ambiguity error.
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
