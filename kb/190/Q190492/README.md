---
layout: page
title: "Q190492: BUG: New Implements Does Not Generate Incompatibility Error"
permalink: /kb/190/Q190492/
---

## Q190492: BUG: New Implements Does Not Generate Incompatibility Error

	Article: Q190492
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
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
	
	If you remove a Public data member and add an Implements statement with the same
	class name as the removed Public data member and with Binary Compatibility set,
	Visual Basic does not generate a compatibility error as expected.
	
	Existing client applications using the data member may generate a fatal error
	(GPF) with the new compatible server.
	
	RESOLUTION
	==========
	
	If you comment out Public data members, ensure you are not using the same
	identifier name in an Implements statement.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX DLL project in Visual Basic. Class1 will be created by
	  default.
	
	2. Set the Instancing Property of Class1 to 2-PublicNotCreateable.
	
	3. Add a Class to the project by selecting Add Class Module from the Project
	  menu.
	
	4. Add the following code to Class1:
	
	        Public Class2 As Class2
	
	5. Add the following code to Class2:
	
	        Public Class1 As Class1
	
	6. From the File Menu, click on Make Project1 to compile the Project and make
	  Project1.dll
	
	7. From the Project Menu, select Project1 Properties.
	
	8. Select the Component tab, check the Binary Compatibility Radio Button, and
	  then click OK to set Binary Compatibility.
	
	9. Comment out the data member in Class2 as shown below:
	
	        ' Public Class1 As Class1
	
	10. In Class2, paste the following code:
	
	        Implements Class1
	        Private Property Set Class1_Class2(ByVal RHS As Class2)
	
	        End Property
	
	        Private Property Get Class1_Class2() As Class2
	
	        End Property
	
	11. Recompile the project, and make the Project1.Dll. Note that the ActiveX DLL
	  compiles as expected. However, a compatibility error should have been
	  raised.
	
	Additional query words: kbdss kbDSupport kbVBp kbVBp600bug kbCompiler
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	
