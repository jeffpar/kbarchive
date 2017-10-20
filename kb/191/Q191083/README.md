---
layout: page
title: "Q191083: BUG: IPF When Replacing Class Module with UserControl"
permalink: /kb/191/Q191083/
---

## Q191083: BUG: IPF When Replacing Class Module with UserControl

{% raw %}

	Article: Q191083
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbide kbVBp600bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When replacing a Class module with a UserControl in an ActiveX Control project
	that has Binary Compatibility set, an Invalid Page Fault (IPF) in module
	VBA6.dll will occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce Behavior
	---------------------------
	
	1. Start a new ActiveX Control project in Visual Basic.
	
	2. From the Project menu, click Add Class Module. Class1 is created.
	
	3. Paste the following code into Class1:
	
	        Public a As Class1
	
	4. From the File menu, click Make Project1.ocx to compile the project.
	
	5. Select Project1 Properties from the Project menu. From the Component tab
	  choose Binary Compatibility.
	
	6. Remove Class1.
	
	7. Select Add User Control from the Project menu to create a new UserControl.
	  UserControl2 is created.
	
	8. Rename UserControl2 to Class1.
	
	9. Paste the following code into Class1:
	
	        Public a As Class1
	
	10. Compile as Project2.ocx.
	
	The following error occurs:
	
	  VB caused an Invalid Page Fault in module VBA6.dll
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVBp600bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
