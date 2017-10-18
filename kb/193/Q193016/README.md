---
layout: page
title: "Q193016: PRB: Error Compiling VB5 Project Using LPVOID in Type Library"
permalink: kb/193/Q193016/
---

## Q193016: PRB: Error Compiling VB5 Project Using LPVOID in Type Library

	Article: Q193016
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
	
	While compiling a Visual Basic 5.0 project in Visual Basic 6.0, if the Visual
	Basic 5.0 project uses a type library that has a function that returns a LPVOID
	or a structure that contains a LPVOID field, the following error occurs:
	
	  Compile Error : Variable uses an Automation type not supported in Visual
	  Basic
	
	CAUSE
	=====
	
	LPVOID is a Typedef to "void *." Visual Basic 6.0 is changed to explicitly
	prohibit the use of pointers in structures and as function return values.
	
	RESOLUTION
	==========
	
	Avoid using LPVOID as a field in a structure or as a return value in the type
	library. Instead, change them to type LONG respectively.
	
	NOTE: Do not change the Typedef for LPVOID to LONG, because that would change the
	meaning of LPVOID in function parameters where it is valid and desirable.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: kbdss kbDSupport kbVBp kbVBp600 kbCompiler
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
