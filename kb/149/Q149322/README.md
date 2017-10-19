---
layout: page
title: "Q149322: FIX: Tag Changed Incorrectly After Linking to Invalid ImageList"
permalink: /kb/149/Q149322/
---

## Q149322: FIX: Tag Changed Incorrectly After Linking to Invalid ImageList

	Article: Q149322
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400bug kbVBp600fix kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the Icons property of a ListView control to an invalid ImageList control
	will correctly result in error '35613 - Uninitialized ImageList'. However, if
	the Listview.Icons.Tag property is examined after this aborted attempt has been
	made, it will have been set to the tag of the ImageList control. It should be
	blank after an unsuccessful attempt to link to an ImageList control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic 4.0. Form1 is created by default.
	
	2. Add an ImageList control, a command button, and a ListView control to Form1.
	
	3. Add this code to the form:
	
	        Private Sub Command1_Click()
	           On Error Resume Next
	
	           ListView1.Icons = ImageList1
	           MsgBox "Tag after linking to invalid imagelist: " & _
	              ListView1.Icons.Tag
	        End Sub
	
	        Private Sub Form_Load()
	           ImageList1.Tag = "ImageList1"
	        End Sub
	
	4. Press F5 or select Start from the Run menu to run the application. Click the
	  command button. The message box that is displayed will indicate that the tag
	  for the ImageList linked to the ListView control is 'ImageList1'; it should
	  be blank.
	
	Additional query words: kbVBp400bug kbVBp600fix kbVBp kbdsd kbDSupport kbCtrl
	
	======================================================================
	Keywords          : kbVBp400bug kbVBp600fix kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
