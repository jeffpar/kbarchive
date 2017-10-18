---
layout: page
title: "Q265884: BUG: Optional Parameter with Default Value Null Causes Error 458"
permalink: kb/265/Q265884/
---

## Q265884: BUG: Optional Parameter with Default Value Null Causes Error 458

	Article: Q265884
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you declare an optional parameter of type Variant with the default value set
	to Null in your ActiveX Component Project (such as ActiveX DLL, ActiveX control
	(OCX), or ActiveX EXE), you receive the following error message (458) when you
	compile the project:
	
	  Variable uses an Automation Type not supported in Visual Basic
	
	Visual Basic does not give you any details on which line of code causes the
	error.
	
	RESOLUTION
	==========
	
	The workaround is to replace Null with the predefined constant vbNull.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new ActiveX DLL project in Visual Basic 6.0. Class1 is added by
	  default.
	
	2. Paste the following code into the code window of Class1:
	
	  Option Explicit
	
	  Public Sub Method1(Optional ByVal x As Variant = Null)
	  '
	  End Sub
	
	3. On the File menu, select Save Project.
	
	4. On the File menu, select Make Project1.dll, and note that you receive the
	  previous error message immediately.
	
	5. Change Null to vbNull in the preceding code, repeat steps 3 and 4, and note
	  that the project compiles without error.
	
	Additional query words: Error 458 compile-time
	
	======================================================================
	Keywords          : kbActiveX kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
