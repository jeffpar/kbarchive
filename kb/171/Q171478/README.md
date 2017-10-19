---
layout: page
title: "Q171478: FIX: Cannot Set Width/Height of UserControl in Resize Event"
permalink: /kb/171/Q171478/
---

## Q171478: FIX: Cannot Set Width/Height of UserControl in Resize Event

	Article: Q171478
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbvbp500sp2fix
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
	
	In the versions of Microsoft Visual Basic listed at the beginning of this
	article, you may be unable to enforce a UserControl's maximum size, minimum
	size, or fixed size in the UserControl's Resize event. If you set the
	UserControl's Height and/or Width property during the Resize event, the
	UserControl may not be set to the specified dimensions when resized in a
	container.
	
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
	
	1. Start a new "ActiveX Control" project in Visual Basic.
	
	2. Set the following properties of UserControl1.
	
	  Property           Value
	  --------           -----
	  Height             1995
	  Width              1995
	  BackColor          &H000000FF&
	
	3. Add the following code to the Resize Event of UserControl1.
	
	        Height = 1995
	        Width = 1995
	
	4. Close the window for UserControl1.
	
	5. Click Add Project on the File menu. Select "Standard EXE" and click Open.
	
	6. Draw an instance of UserControl1 on Form1.
	
	7. Resize the control by dragging the top-left sizing handle. Note that the
	  control does not resize to 1995 by 1995 as expected.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
