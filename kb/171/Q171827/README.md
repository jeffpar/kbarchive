---
layout: page
title: "Q171827: FIX: Printing userdrawn usercontrol in IE Doesn't Work"
permalink: kb/171/Q171827/
---

## Q171827: FIX: Printing userdrawn usercontrol in IE Doesn't Work

	Article: Q171827
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
	
	Where the painting of control is done in the Paint Event of the control (User
	Drawn), ActiveX control does not print in IE 3.0x and other control containers.
	
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
	
	The following code can be used to duplicate the problem in Visual Basic 5.0:
	
	1. Run Visual Basic or, if Visual Basic is already running, choose New Project
	  from the File menu (ALT, F, N). Select create "ActiveX Control."
	
	2. In the Controls paint event, add some code to draw a line. You could draw
	  anything in the Paint event, but just draw a line for this sample.
	
	3. Select "Make YourControl.ocx" from the file menu.
	
	4. Create an HTML page and put YourControl on it.
	
	5. Load your HTML page into IE 3.0x.
	
	6. Select File.Print from the IE menu. Note that the control does not print.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
