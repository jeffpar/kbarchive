---
layout: page
title: "Q171482: FIX: Crash When Enum Name Referenced Incorrectly"
permalink: /kb/171/Q171482/
---

## Q171482: FIX: Crash When Enum Name Referenced Incorrectly

{% raw %}

	Article: Q171482
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
	
	When incorrectly referring to an Enum name of a UserControl, such as treating
	the Enum name as a Property of the UserControl, Visual Basic will give a fatal
	error and close.
	
	The error received will be similar to one of the following;
	
	  VB5 caused an invalid page fault in module VB5.Exe...
	
	  - or -
	
	  The instruction at "0x004762d3 referenced memory at "0x0000000".
	  The memory could not be "read"...
	
	CAUSE
	=====
	
	The fatal error is the end result of incorrectly referencing a Enum name within
	a UserControl. For example, if the following Enum is declared in the General
	Declarations of a UserControl:
	
	        Public Enum Salsa
	           Mild
	           Medium
	           Hot
	        End Enum
	
	then an instance of UserControl is added to a form, and the Salsa enumeration is
	referred to as:
	
	        UserControl1.Salsa
	
	The fatal error described above will occur. Enumerations behave like public
	constants and cannot be referenced like a variable or property. To reference the
	Salsa enumeration correctly, the user should reference Salsa.<membername>,
	such as:
	
	     Salsa.Hot
	
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
	
	1. Create a new Standard Exe project in Visual Basic 5.0. Form1 is created by
	  default.
	
	2. From the Project menu, select Add UserControl to add a UserControl
	  (UserControl1) to the Project.
	
	3. Add the following enumeration to the General Declarations section of the
	  UserControl:
	
	        Public Enum Salsa
	                 Mild
	                 Medium
	                 Hot
	              End Enum
	
	4. Close both the UserControl1 code Window and the UserControl1 design Window.
	
	5. Place an instance of the UserControl1 (UserControl11) onto Form1.
	
	6. Add a CommandButton to Form1.
	
	7. In the Click event of the CommandButton, add the following code:
	
	        Usercontrol11.Salsa
	
	8. Save and run the Project. Click the CommandButton to reproduce the problem in
	  Visual Basic 5.0.
	
	NOTE: This can also be reproduced simply by typing in the "UserControl11.Salsa"
	line in the Click event. After typing the line, press the spacebar and note that
	you get the same result.
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
