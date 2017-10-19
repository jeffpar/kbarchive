---
layout: page
title: "Q171814: FIX: System Menu Appears When MouseDown Event Invokes a Drag"
permalink: /kb/171/Q171814/
---

## Q171814: FIX: System Menu Appears When MouseDown Event Invokes a Drag

	Article: Q171814
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
	
	When the MouseDown event of a FileListBox control invokes a Drag method on a
	right click, the system menu for the Form appears.
	
	CAUSE
	=====
	
	This problem will only occur with certain combinations of the FileListBox's
	location and the display setting for the Font.
	
	
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
	
	1. To set your font to "Large Fonts," right-click the desktop.
	
	2. Select "Properties."
	
	3. Click the "Settings" tab.
	
	4. In the "Font Size" combobox, select "Large Fonts."
	
	5. Click "OK." (This may require that you reboot your system.)
	
	6. Open a new "Standard EXE" project.
	
	7. Add a FileListBox control (File1) to Form1.
	
	8. Set the following properties for File1:
	
	     Property       Value
	     --------       -----
	     Left           2520
	     Top            1080
	
	9. Add the following code to the MouseDown event of File1:
	
	        If Button = 2 Then File1.Drag vbBeginDrag
	
	10. Press the F5 key to run the application.
	
	11. Right-click File1. Note that the system menu of Form1 appears.
	
	Additional query words: FileList ListBox
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
