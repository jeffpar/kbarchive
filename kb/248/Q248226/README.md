---
layout: page
title: "Q248226: BUG: ListIndex Value Not Updated Correctly In Loop with AddItem"
permalink: kb/248/Q248226/
---

## Q248226: BUG: ListIndex Value Not Updated Correctly In Loop with AddItem

	Article: Q248226
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 30-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Adding items in a list box using the AddItem method and including the ListIndex
	property in a loop gives unordered entries in the list box.
	
	CAUSE
	=====
	
	The problem is due to the fact that the value of ListIndex, which is being used
	to increment ListIndex property, does not return the correct value.
	
	RESOLUTION
	==========
	
	Use a memory variable to store the incrementing value instead of the ListIndex
	property.
	
	Replace the Click event of the Command1 with the following:
	
	  PROCEDURE command1.Click
	  	local lnI, nCn
	  	with thisform
	  		nCn=.list1.ListIndex
	  		FOR lnI = 1 TO 50
	  			.list1.AddItem(" "+STR(lnCounter), nCn+1, 1)
	  			nCn = nCn + 1
	  			lnCounter = lnCounter + 1
	  			.list1.ListIndex=ncn
	  		NEXT
	  	Endwith
	  ENDPROC 
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program and include the following code in it. Save and run the
	  program.
	
	  ******* Start of the Code
	  PUBLIC oform1
	
	  	oform1=NEWOBJECT("form1")
	  	oform1.Show
	
	  RETURN
	
	  DEFINE CLASS form1 AS form
	  	Top = 0
	  	Left = 0
	  	Height = 452
	  	Width = 633
	  	DoCreate = .T.
	  	Caption = "Form1"
	  	WindowState = 2
	  	Name = "Form1"
	
	  	ADD OBJECT command1 AS commandbutton WITH ;
	  		Top = 180, ;
	  		Left = 144, ;
	  		Height = 48, ;
	  		Width = 216, ;
	  		FontBold = .T., ;
	  		FontSize = 15, ;
	  		Caption = "Add Item", ;
	  		Name = "Command1"
	
	  	ADD OBJECT list1 AS listbox WITH ;
	  		ColumnCount = 1, ;
	  		ColumnWidths = "60", ;
	  		RowSourceType = 1, ;
	  		Height = 120, ;
	  		Left = 144, ;
	  		Top = 24, ;
	  		Width = 204, ;
	  		Name = "List1"
	
	  	ADD OBJECT command2 AS commandbutton WITH ;
	  		Top = 240, ;
	  		Left = 144, ;
	  		Height = 48, ;
	  		Width = 216, ;
	  		FontBold = .T., ;
	  		FontSize = 15, ;
	  		Caption = "Quit", ;
	  		Name = "Command2"
	
	  	PROCEDURE Load
	  		PUBLIC lnCounter
	  		lnCounter = 0
	  	ENDPROC
	
	  	PROCEDURE command1.Click
	  		local lnI
	  		with thisform
	  			FOR lnI = 1 TO 50
	  				.list1.AddItem(" "+STR(lnCounter), .list1.ListiNDEX+1, 1)
	  				.list1.ListIndex = .list1.ListIndex + 1
	  				lnCounter = lnCounter + 1
	  			NEXT
	  		Endwith
	  	ENDPROC
	
	  	PROCEDURE command2.Click
	  		thisform.release
	  	ENDPROC
	
	  ENDDEFINE
	
	  ******* End of the Code
	
	2. Click the command button Add Item.
	
	3. Notice the contents of the list box are not ordered correctly.
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
