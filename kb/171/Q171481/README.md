---
layout: page
title: "Q171481: FIX: Cannot Set the Enabled Property of an UpDown Control"
permalink: /kb/171/Q171481/
---

## Q171481: FIX: Cannot Set the Enabled Property of an UpDown Control

{% raw %}

	Article: Q171481
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the Enabled property of an UpDown control has no effect on the enabled
	state of the control. The UpDown control does not appear disabled when its
	Enabled property is set to False. Additionally, the UpDown control responds to
	user events even with its Enabled property set to False.
	
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
	
	1. Open a new "Standard EXE" project in Visual Basic.
	
	2. Click Components on the Project menu. Check "Microsoft Common Controls-2
	  5.0," and click OK.
	
	3. Add an UpDown control to Form1.
	
	4. Set the Enabled property of UpDown1 to False.
	
	5. Add the following code to the Change event of UpDown1.
	
	        Debug.Print "UpDown1 Value = " & UpDown1.Value
	
	6. Press the F5 key to run the project. Click UpDown1. Note that the Change
	  event is triggered even though the Enabled property is set to False.
	
	Additional query words: comct232.ocx up down arrow arrows
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
