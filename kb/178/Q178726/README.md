---
layout: page
title: "Q178726: PRB: Error Message &quot;User-defined Type Not Defined&quot;"
permalink: /kb/178/Q178726/
---

## Q178726: PRB: Error Message &quot;User-defined Type Not Defined&quot;

	Article: Q178726
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message displays on the code line that dimensions a
	user-defined variable:
	
	  "Compile Error
	  User-defined type not defined"
	
	CAUSE
	=====
	
	The most common cause of this error message is the Object library that contains
	the variable information was not referenced in the project.
	
	RESOLUTION
	==========
	
	To correct this error, reference the Object library in your project.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Use the following steps to reference the Object library in your project:
	
	1. From the Project menu, click References. The References dialog box appears.
	
	2. Check the appropriate object library in the Available References list box. If
	  your object library is not in the list, click the Browse button to add the
	  file.
	
	REFERENCES
	==========
	
	If you are trying to use the object library from a custom ActiveX DLL file, the
	following article in the Microsoft Knowledge Base shows you how to register the
	file:
	
	  Q173407 HOWTO: Register Your Custom ActiveX DLL from a Client
	
	Additional query words: kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbCompiler
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	
