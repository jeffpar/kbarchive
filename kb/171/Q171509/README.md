---
layout: page
title: "Q171509: FIX: Access Violation on NT4.0 or Windows 2000 on Multi-line Tex"
permalink: /kb/171/Q171509/
---

## Q171509: FIX: Access Violation on NT4.0 or Windows 2000 on Multi-line Tex

	Article: Q171509
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When stopping a debugging session for an application within the Visual Basic 5.0
	IDE, you may receive the following message:
	
	  "An application error has occurred and an application error log is being
	  generated.
	
	  VB5.EXE
	  Exception: access violation (0xc0000005), Address: <xxxxxxxx>"
	
	This occurs if the application uses a UserControl that contains a TextBox control
	positioned within a container-like a Tab control.
	
	
	RESOLUTION
	==========
	
	An alternative to upgrading to Visual Basic 5.0 Service Pack 2 is to use the
	RichTextBox control to provide multi-line 'TextBox' functionality (as described
	in Section 2 of the README.TXT file included on the Visual Basic 5.0 CD-ROM).
	
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
	
	1. Create a new ActiveX Control project.
	
	2. Insert a Tab control on the UserControl.
	
	3. Insert a Textbox control into the Tab control.
	
	4. Set the Textbox control's Multi-line property to TRUE.
	
	5. Close the UserControl's designer.
	
	6. Click Add Project from the File menu. Select Standard EXE.
	
	7. Insert an instance of your UserControl into Form1.
	
	8. Run the Standard EXE application by pressing the F5 key.
	
	9. Stop execution of the Standard EXE by clicking End from the Run menu.
	
	  Result: An access violation occurs.
	
	Additional query words: multiline
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
