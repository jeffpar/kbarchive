---
layout: page
title: "Q171483: FIX: Crash When Rebuilding EXE Containing UserControl"
permalink: /kb/171/Q171483/
---

## Q171483: FIX: Crash When Rebuilding EXE Containing UserControl

{% raw %}

	Article: Q171483
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
	
	A crash will occur when recompiling an EXE containing a UserControl that has
	been modified and rebuilt with Project Compatibility and Remote Server compile
	options set.
	
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
	
	1. Create a new ActiveX Control Project (Project1) in Visual Basic 5.0.
	  UserControl1 is created by default.
	
	2. Set the BackColor property for UserControl1 to blue or any color other than
	  gray.
	
	3. Save Project1 and Make Project1.ocx.
	
	4. From the File menu, select Add Project.
	
	5. Double-click on Standard EXE. This project is named Project2 by default.
	
	6. Close down the UserControl Window.
	
	7. Click on the UserControl icon on the Toolbox and draw UserControl11 on Form1.
	
	8. Save Project2 and Make EXE using default compile settings.
	
	9. Copy Project1.OCX to Project1.CMP.
	
	10. From the Project menu, select Project1 Properties. On the Component tab of
	  the Project Properties dialog, check Remote Server Files, choose Project
	  Compatibility under Version Compatibility, and set the file to project1.cmp
	  by using the browse button or entering the fully-qualified path.
	
	11. Add the following code to the General Declarations of the UserControl:
	
	        Public Sub foo()
	        End Sub
	
	12. Make Project1.OCX.
	
	13. Make Project2.EXE.
	
	When you try to compile, you will get the following error message:
	
	  "Class not registered. Looking for object with CLSID:
	  {A0CB258A-70D4-11D0-8B96-00A0C903AA86}"
	
	The Class ID entry in the braces will not match the entry on your machine.
	
	If you click the OK button, you will get:
	
	  "Error loading <filename>. A control could not be loaded due to load
	  error. Continue?"
	
	Click the Yes button.
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
