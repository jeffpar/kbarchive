---
layout: page
title: "Q110095: PC Forms: Err Msg: &quot;Invalid Column Value&quot; Using Grid Control"
permalink: /kb/110/Q110095/
---

## Q110095: PC Forms: Err Msg: &quot;Invalid Column Value&quot; Using Grid Control

	Article: Q110095
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you read a message that was created using a custom form created with
	version 1.0 of the Microsoft Electronic Forms Designer, you may receive one of
	the following error messages:
	
	  Invalid Column Value
	
	  -or-
	
	  Invalid Row Value
	
	CAUSE
	=====
	
	This problem can occur if the custom form contains a grid control that is empty
	or has only one row of data.
	
	RESOLUTION
	==========
	
	When the data in a custom form is unpackaged, the MEF ReadTaggedControls
	function expects a token at the end of the grid data string. When the grid has 0
	or 1 rows, it is not there. To resolve this problem, you can update the code for
	the WriteTaggedControls and ReadTaggedControls functions by performing the
	following steps:
	
	1. Open your E-Form project in Visual Basic.
	
	2. In the Project window, select EFORM.BAS.
	
	3. In the Procedures drop-down list box, select WriteTaggedControls.
	
	4. Scroll to the section commented Grid Control.
	
	5. Add the following code below the line:
	
	      gridClip = Format$(ctrl.Rows) & Chr$(9) & Format$(ctrl.Cols) & Chr$(9)
	     &ctrl.Clip
	
	     If Right$(gridClip, 1) <> Chr$(13) Then
	       gridClip = gridClip & Chr$(13)
	     End If
	
	  The line that follows the new code is:
	
	     MEFWriteText package, Tag, gridClip
	
	6. From the Procedures drop-down list box, select ReadTaggedControls.
	
	7. Scroll to the section commented Grid Control.
	
	8. Add the following code below the line:
	
	     gridClip = MEFReadText(package, Tag, "")
	
	     If Right$(gridClip, 1) <> Chr$(13) Then
	       gridClip = gridClip & Chr$(13)
	     End If
	
	  The lines that follow the new code are:
	
	     ctrl.Rows = Val(MEFGetToken(gridClip, Chr$(9)))
	     ctrl.Cols = Val(MEFGetToken(gridClip, Chr$(9)))
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	
