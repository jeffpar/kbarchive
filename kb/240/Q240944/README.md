---
layout: page
title: "Q240944: BUG: ListView's Left/Top Properties Return Unexpected Values"
permalink: /kb/240/Q240944/
---

## Q240944: BUG: ListView's Left/Top Properties Return Unexpected Values

{% raw %}

	Article: Q240944
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbsample kbCmnCtrls kbCtrl kbListView kbVBp kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 23-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Left or Top property of the ListView control is assigned a negative
	value, the result is a value greater by 1 pixel. Positive values return the
	expected result.
	
	RESOLUTION
	==========
	
	Step-by-Step Workaround
	-----------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. On the Project menu, click to select Components, check Microsoft Windows
	  Common Controls 6.0, and then click OK.
	
	3. Draw a ListView control on Form1. On the Properties window, set View = 0 -
	  lvwSmallIcon.
	
	4. Add the following code to the General Declarations section of Form1:
	
	  Option Explicit
	
	  Dim itm As ListItem
	
	  Private Sub Form_Click()
	      Dim sngLeft As Single
	      Dim sngTop As Single
	      
	      Me.ScaleMode = vbPixels
	      sngLeft = -2
	      sngTop = -2
	      Set itm = ListView1.ListItems.Add(Text:="item")
	
	      ' Inaccurate
	      itm.Left = sngLeft
	      itm.Top = sngTop
	      MsgBox "Left = " & itm.Left & " Top = " & itm.Top
	
	      ' More accurate
	      LocateListItems itm, sngLeft, sngTop
	      MsgBox "Left = " & itm.Left & " Top = " & itm.Top
	  End Sub
	
	  Private Sub LocateListItems(item As ListItem, x As Single, y As Single)
	      Select Case x
	          Case Is < -1.5
	              x = x - 1
	          Case Is < 0
	              x = x - 1.1
	          Case Else
	      End Select
	      item.Left = x
	      Debug.Print "Item.Left = "; item.Left    
	      
	      Select Case y
	          Case Is < -1.5
	              y = y - 1
	          Case Is < 0
	              y = y - 1.1
	          Case Else
	      End Select
	      item.Top = y
	      Debug.Print "Item.Top = "; item.Top    
	  End Sub
	
	5. Run the project by pressing the F5 key, and note the results in the Immediate
	  window. Without correction, the inaccurate result is displayed. After a call
	  to the correcting function, the more accurate result is displayed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Because these properties are for positions that are stored as real numbers, they
	are usually not whole numbers. However, for any negative value that is assigned,
	the result is always 1 pixel greater than the assigned value.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. On the Project menu, click to select Components, check Microsoft Windows
	  Common Controls 6.0, and then click OK.
	
	3. Draw a ListView control on Form1. On the Properties window, set View =
	  lvwSmallIcon.
	
	4. Add the following code to the General Declarations section of Form1:
	
	  Private Sub Form_Click()
	      ListView1.ListItems(1).Left = -5
	      Debug.Print "Left = "; ListView1.ListItems(1).Left
	      ListView1.ListItems(1).Top = -5
	      Debug.Print "Top = "; ListView1.ListItems(1).Top
	  End Sub
	
	  Private Sub Form_Load()
	     Me.ScaleMode = vbPixels
	     Call ListView1.ListItems.Add(Text:="item")
	  End Sub
	
	5. Run the project by pressing F5, click on the form, and note that this
	  produces the following output in the Immediate window:
	
	Left = -3.968504
	Top = -3.968504
	
	6. Note that the result is 1 pixel greater than the assigned value.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsample kbCmnCtrls kbCtrl kbListView kbVBp kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
