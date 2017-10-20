---
layout: page
title: "Q190085: BUG: No Binary Compatibility Error With Null GUIDs Enums"
permalink: /kb/190/Q190085/
---

## Q190085: BUG: No Binary Compatibility Error With Null GUIDs Enums

{% raw %}

	Article: Q190085
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
	
	If you use Enums from some Microsoft libraries as parameters and then change the
	Enum to a different one with the project set to Binary Compatibility, an
	incompatibility error is not generated as expected.
	
	CAUSE
	=====
	
	Most Microsoft libraries and all Visual Basic generated DLLs contain Enums that
	have GUIDs. However, the libraries listed in the MORE INFORMATION section below
	have Enums with NULL GUIDs.
	
	If a library has NULL GUIDs for the Enums, it is possible to change parameters of
	methods to different Enums and still not get an incompatibility error, even
	though Binary Compatibility is set.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following libraries have NULL GUIDs for Enums, and will therefore exhibit
	this problem when used as a parameter:
	
	  Microsoft DAO 2.5/3.51 Compatibility Library
	  Microsoft DAO 3.51 Object Library
	  Microsoft Data Environment Extensibility Objects 1.0
	  Microsoft Dialog Automation Objects
	  Microsoft OLE DB Service Component 1.0 Type Library
	  Microsoft OLE DB Simple Provider 1.5 Library
	  Microsoft Remote Data Services 2.0 Library
	  Microsoft Scripting Runtime
	  Microsoft Transaction Server Type Library
	  Microsoft WebClass Library v1.0
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX DLL project in Visual Basic. Class1 is created by
	  default.
	
	2. Add a Reference to one of the libraries listed above by selecting References
	  from the Project menu.
	
	3. Paste the following code into Class1:
	
	        Public Sub Test(a As <<choose an Enum from a library above>>) End Sub
	
	4. Compile as Project1.dll.
	
	5. Set Binary Compatibility to Project1.dll by selecting Project Properties from
	  the Project menu, then selecting the Components tab. Check Binary
	  Compatibility and select the Project1.dll.
	
	6. Modify the code in Class1 to be:
	
	      Public Sub Test(a As <<choose a different Enum from the library chosen
	      in Step 2>>)
	      End Sub
	
	7. Compile Project2.dll. Note that the DLL compiles without any incompatibility
	  error.
	
	Additional query words: kbDSupport kbVBp600bug kbCompiler kbdss kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
