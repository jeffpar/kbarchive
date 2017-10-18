---
layout: page
title: "Q171816: FIX: IPF Opening or Saving Form with Tab Control"
permalink: kb/171/Q171816/
---

## Q171816: FIX: IPF Opening or Saving Form with Tab Control

	Article: Q171816
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fixkbbuglist kbfixlist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to open or save a form containing an SSTab control may cause Visual
	Basic to terminate with one of the following errors:
	
	  "VB5 caused an invalid page fault in module TABCTL32.OCX at 0137:212fef0b"
	
	  -or-
	
	  "VB5 caused an invalid page fault in module OLEAUT32.DLL at 0137:653468ec"
	
	  -or-
	
	  "VB5.exe Exception: Access violation (if using Windows NT or Windows 2000)"
	
	CAUSE
	=====
	
	This problem can occur if the form (.frm file) contains incorrect information
	for the SSTab's child controls. This problem should only occur when the .frm
	file has been incorrectly edited outside of Visual Basic (such as with a text
	editor), or if the .frm file is otherwise corrupt.
	
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
	
	1. Start a new "Standard EXE" project in Visual Basic 5.0.
	
	2. Choose Components from the Project menu and select "Microsoft Tabbed Dialog
	  Control 5.0."
	
	3. Place an SSTab control on Form1.
	
	4. Add two TextBox controls (Text1, Text2) to Tab 0.
	
	5. Add two TextBox controls (Text3, Text4) to Tab 1.
	
	6. Save the project (Form1.frm and Project1.vbp).
	
	7. Exit Visual Basic.
	
	8. Start Notepad and open Form1.frm.
	
	9. Delete the following lines from Form1.frm:
	
	        Tab(0).Control(1)=   "Text2"
	        Tab(0).Control(1).Enabled=   0   'False
	        ...
	        Tab(1).Control(1)=   "Text4"
	        Tab(1).Control(1).Enabled=   0   'False
	        ...
	        Begin VB.TextBox Text4
	           Height          =   495
	           Left            =   840
	           TabIndex        =   4
	           Text            =   "Text4"
	           Top             =   1200
	           Width           =   2775
	        End
	        ...
	        Begin VB.TextBox Text2
	           Height          =   495
	           Left            =   -74160
	           TabIndex        =   2
	           Text            =   "Text2"
	           Top             =   1200
	           Width           =   2055
	
	        End
	
	10. Save Form1.frm and close Notepad.
	
	11. Restart Visual Basic and open Project1.vbp. Note that an error occurs.
	
	These steps will also reproduce the problem if you create the original project in
	Visual Basic 4.0, edit the .frm file, then open the project in Visual Basic 5.0.
	In this case, the problem will occur when attempting to save the form.
	
	Additional query words: crash gpf
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix kbbuglist kbfixlist
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
