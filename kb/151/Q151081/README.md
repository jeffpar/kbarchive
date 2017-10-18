---
layout: page
title: "Q151081: BUG: Incorrect Error Message When Setting Read-Only Count Prop"
permalink: kb/151/Q151081/
---

## Q151081: BUG: Incorrect Error Message When Setting Read-Only Count Prop

	Article: Q151081
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to set the Count property of the Forms collection, the following
	error message is displayed:
	
	  Error 380 - Invalid Property Value
	
	This error message is incorrect. Visual Basic should display an error message
	indicating that the property is read-only at run time.
	
	RESOLUTION
	==========
	
	Do not try to set the Count property of the Forms collection. This property is
	read-only because it describes the number of open forms of the project. The
	Count property can only be set indirectly by loading and unloading forms.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this issue and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. In the Load event for Form1, place the following code:
	
	     Private Sub Form_Load()
	           Dim x As Object
	           Set x = Forms
	           x.Count = 1
	     End Sub
	
	3. Run the project by pressing the F5 key. The following error results:
	
	  Error 380 - Invalid Property Value
	
	Additional query words: kbVBp400bug kbVBp500bug kbVBp600bug kbVBp kbdsd kbDSupport kbvba
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbbug
	
	=============================================================================
	
