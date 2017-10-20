---
layout: page
title: "Q171510: FIX: Setting Font Property Causes Error 438 with RichTextBox"
permalink: /kb/171/Q171510/
---

## Q171510: FIX: Setting Font Property Causes Error 438 with RichTextBox

{% raw %}

	Article: Q171510
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the RichTextBox control (richtx32.ocx), setting the Font property
	will cause the following message to be displayed:
	
	  Run-time error '438':
	  Object doesn't support this property or method
	
	This behavior occurs when a RichTextBox is placed on a form using the RichTextBox
	Control (RICHTX32.OCX) that comes with Visual Basic 4.0 and subsequently
	executed after the RICHTX32.OCX file has been upgraded to the one that shipped
	with Visual Basic 5.0.
	
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
	
	1. On a Visual Basic 4.0 development machine, create a new project.
	
	2. Insert a RichTextBox control onto the default form.
	
	3. In the Form's code window add the following code:
	
	        Private Sub Form_Load()
	           RichTextBox1.Font="fixedsys"
	        End Sub
	
	4. Compile the project into an EXE.
	
	5. Take this EXE to a machine that has Visual Basic 5.0 and run the application.
	
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kberrmsg kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : 4.0 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
