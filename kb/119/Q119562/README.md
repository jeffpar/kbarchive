---
layout: page
title: "Q119562: PC Forms: Working with Multiple-Selection List Boxes"
permalink: /kb/119/Q119562/
---

## Q119562: PC Forms: Working with Multiple-Selection List Boxes

	Article: Q119562
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	1.00
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	- Microsoft Electronic Forms Designer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a custom form using Microsoft Electronic Forms Designer, the
	selected items in a multiple-selection list box are not automatically written to
	the electronic form (E-form) package. Therefore, the selected lines do not
	appear in the list box on the Read form.
	
	MORE INFORMATION
	================
	
	The WriteTaggedControls function does not include code to automatically package
	a multiple-selection list box. You can, however, add code to the WriteMessage
	and ReadMessage functions so the selected items in a multiple- selection list
	box are transferred to the Read form.
	
	The following example shows the code that should be added to each function.
	
	1. Add the following code to the WriteMessage function in the EFORM.BAS file.
	  Note the comments that describe the various steps.
	
	  'Declare the variables
	     Dim n As Integer
	     Dim theText As String
	     Dim theTotal As Long
	
	     'Process the list, writing each item to the package using a unique
	     'itemID,
	      ("List0". "List1", etc.)
	     theTotal = 0
	     For n = 0 To (frmCompose.lstColor.ListCount - 1)
	        If frmCompose.lstColor.Selected(n) = True Then
	          theText = frmCompose.List1.List(n)
	          MEFWriteText gPackage, "List" & Str$(theTotal), theText
	          theTotal = theTotal + 1
	        End If
	     Next
	
	     'Write the number of items to the package
	     MEFWriteLong gPackage, "theTotal", theTotal
	
	2. Add the following code to the ReadMessage function to unpackage the data:
	
	  'Declare variables
	     Dim n As Integer
	     Dim theTotal As Long
	
	     'Find the number of items in the list by reading the package.
	     theTotal = MEFReadLong(gPackage, "theTotal", 0)
	
	     'Read in each of the items and add it to the list using AddItem
	     For n = 0 To theTotal
	        frmRead.lstColor.AddItem MEFReadText(gPackage, "List" & Str$(n), "")
	     Next
	
	Additional query words: 1.00 e-forms eforms multiple selection list box multiselect
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbEForms kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	
