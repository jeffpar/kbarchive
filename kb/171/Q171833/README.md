---
layout: page
title: "Q171833: FIX: Statement Builder Crashes Referencing GlobalMultiUse Server"
permalink: /kb/171/Q171833/
---

## Q171833: FIX: Statement Builder Crashes Referencing GlobalMultiUse Server

{% raw %}

	Article: Q171833
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
	
	When referencing a function contained in a project that has its instancing
	property set to GlobalMultiUse, the Statement Builder may crash with the one of
	the following Application Error in VB5.EXE:
	
	  "The instruction at <address> referenced memory at <address>. The
	  memory could not be "read"."
	
	  -or-
	
	  "VB5 caused an invalid page fault in module VBA5.DLL at <address>"
	
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
	
	1. Create a new ActiveX DLL project (Project1). Class1 is created by default.
	
	2. Paste the following code in the General Declarations section of Class1:
	
	        Public Function Test(a,b)
	           Test = 3
	        End Function
	
	  NOTE: The exact function is not important. This error may also occur with
	  Property Let and Property Get statements.
	
	3. Change the Instancing property of Class1 to 6 - GlobalMultiUse.
	
	4. Save Project1.
	
	5. Go to File | Add Project to add a Standard EXE (Project2) to the project
	  group.
	
	6. From Project2, go to Project | References, to reference Project1 by clicking
	  on its check box.
	
	7. In the Form_Load event procedure of Form1, type "Project1.test" (without the
	  quotation marks), and then hit the space key. An application error should
	  occur.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
