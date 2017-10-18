---
layout: page
title: "Q216480: PRB: Error Setting Default Value of Optional Byte Arg to TRUE"
permalink: kb/216/Q216480/
---

## Q216480: PRB: Error Setting Default Value of Optional Byte Arg to TRUE

	Article: Q216480
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the default value of an Optional Byte argument to TRUE causes the
	following error when the project is compiled with Binary Compatibility:
	
	  <procedure> in the <class> class module has arguments and/or a
	  return type that is incompatible with a similar declaration in the
	  version-compatible component
	
	RESOLUTION
	==========
	
	Use 255 instead of TRUE for the default value.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX DLL project.
	
	2. Insert the following code into Class1:
	
	  Option Explicit
	
	  Public Function meth1(pf1 As String, Optional pf2 As Byte = True) As Boolean
	  ' Sample method
	  End Function
	
	3. From the File menu, select Make Project1.DLL.
	
	4. From the Project menu, select Project1 Properties.
	
	5. Click on the Component tab.
	
	6. Set the Version Compatibility to Binary Compatibility.
	
	7. Verify that Project1.dll is listed in the File Location box at the bottom of
	  the form.
	
	8. Close the Project Properties dialog box.
	
	9. Select Make Project1.dll from the File menu. Change the path to the DLL so
	  that it is in a different location than the originally-compiled version of
	  project1.dll and click OK. The error occurs at this point.
	
	REFERENCES
	==========
	
	For additional information about a similar problem with optional String argument
	default value, please click the article number below to view it in the Microsoft
	Knowledge Base:
	
	  Q176164 FIX: Optional Argument Default Value Breaks Binary Compatibility
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
