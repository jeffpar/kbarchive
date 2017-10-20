---
layout: page
title: "Q191691: BUG: Sub Moved Above Enum or Type Causes Incompatibility Error"
permalink: /kb/191/Q191691/
---

## Q191691: BUG: Sub Moved Above Enum or Type Causes Incompatibility Error

{% raw %}

	Article: Q191691
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
	
	If you move a procedure to the beginning of a class module above a Enum or Type
	statement and then recompile the project with Binary Compatibility set, a
	version incompatibility error similar to the following occurs where "Test" is
	the name of an Enum:
	
	  "Enum "Test" exists in the version-compatible component, but not in the
	  current project"
	
	RESOLUTION
	==========
	
	If the procedure is placed below the Enum and Type Statements, the project
	recompiles with no compatibility error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX DLL project in Visual Basic. Class1 is created by
	  default.
	
	2. Paste the following code into Class1:
	
	        Public Type Type1
	           i As Integer
	        End Type
	
	        Public Enum Test
	           Red
	           Yellow
	           Green
	        End Enum
	
	        Public Sub Test3()
	        End Sub
	
	3. In the Property window of Class1, set Instancing to GlobalMultiuse.
	
	4. Compile Project1.Dll by selecting Make Project1.Dll from the File menu.
	
	5. From the Project Menu, select Project1 Properties, click the Component tab,
	  and then check Binary Compatibility.
	
	6. In Class1, move the section of Sub Test3() to be above Enum Test.
	
	7. Re-Compile the project as "Project2.dll" by selecting Make Project1.dll from
	  the File menu. Change the filename to Project2. Note that the following error
	  occurs:
	
	  "Enum "Test" exists in the version-compatible component, but not in the
	  current project"
	
	  If you move Sub Test3() back to its original position and recompile as
	  Project2.dll, then it compiles successfully.
	
	Additional query words: kbDSupport kbVBp600bug kbCompiler kbdss kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
