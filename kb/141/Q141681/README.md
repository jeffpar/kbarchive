---
layout: page
title: "Q141681: FIX: Error if Listview Cleared Using the AfterLabeledit Event"
permalink: kb/141/Q141681/
---

## Q141681: FIX: Error if Listview Cleared Using the AfterLabeledit Event

	Article: Q141681
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400bug kbOSWin98fix kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you edit a ListItem object in a ListView control in the 32-bit edition of
	Visual Basic for Windows, the following Windows Common Controls message appears
	and your Visual Basic program ends due to an application error:
	
	  This item's control has been deleted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been fixed in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start the 32-bit version of Visual Basic 4.0 or if it is already running, on
	  the File menu, click New Project.
	
	2. Add a ListView control to the Form1 form.
	
	3. Add the following code to the Form1 code window:
	
	        Private Sub Form_Load()
	           Call ListView1.ListItems.Add(, , "Edit this Line")
	        End Sub
	
	        Private Sub ListView1_AfterLabelEdit(Cancel As Integer, _
	                                              NewString As String)
	           ListView1.ListItems.Clear
	        End Sub
	
	        Private Sub ListView1_Click()
	           'Without this line in this event, you have to triple-click
	           'in order to edit the listitem
	           ListView1.StartLabelEdit
	        End sub
	
	4. Press the F5 key to start the program. Click the ListItem in the ListView
	  control.
	
	5. Delete the ListItem text by pressing the DEL key, and then press the ENTER
	  key. The Windows Common Controls dialog box with the message, "This item's
	  control has been deleted." displays. Click the OK button. An application
	  error occurs with one of the following messages and Visual Basic stops with
	  an application error:
	
	
	  
	
	     Windows NT 3.51-An application error has occurred and an application
	                     error log is being generated. VB32.exe. Exception:
	                     Access violation (0xc0000005), Address: 0x77d86066)
	
	  
	
	     Windows 95-VB32 caused an invalid page fault in module COMCTL32.DLL
	                at 0137:bff0110b.
	
	Additional query words: kbCtrl
	
	======================================================================
	Keywords          : kbVBp400bug kbOSWin98fix kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
