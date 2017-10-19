---
layout: page
title: "Q171532: FIX: Crash Stepping Thru Code After Using Locals/Watch Window"
permalink: /kb/171/Q171532/
---

## Q171532: FIX: Crash Stepping Thru Code After Using Locals/Watch Window

	Article: Q171532
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
	
	While expanding and collapsing a Watch or Locals Window and then stepping
	through the code, you may see the Visual Basic IDE crash. This problem can occur
	if you have a variant property that returns an object. See the MORE INFORMATION
	below.
	
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
	
	1. Start a new ActiveX DLL Project (Project1) in Visual Basic 5.0. Class1 is
	  created by default.
	
	2. In the General Declarations section of Class1, add the following code:
	
	        Public Property Get Prop1() as Variant
	               Set Prop1 = me
	        End Property
	
	3. From the File menu, select Add Project, and add a Standard EXE project to the
	  group. This project is named Project2 by default.
	
	4. The DLL is named Project1.dll by default. From the Project menu, select
	  References, and check Project1.
	
	5. In the load event of the default form (Form1) of Prject2, add the following
	  code:
	
	        Dim x as Class1
	        Set x = New Class1
	        Stop
	
	6. Set the Standard EXE project as the Startup Project by right-clicking
	  Project2 in the Project Explorer, and selecting the Set as StartUp item.
	
	7. Run the project.
	
	8. When the Stop statement is hit, open up the Locals Window. This can be done
	  by selecting the Locals Window in the View menu. (You could also use the
	  Watch window to get the same result, adding a watch on the object variable
	  x.)
	
	9. In the Locals Windows, expand the Class1 object variable x, and then expand
	  the Prop1 property.
	
	10. Collapse the branch from x.
	
	11. Press the F8 key. The IDE will crash and you may see an error message
	  indicating that an application error has occurred in VB5.exe.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
