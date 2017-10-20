---
layout: page
title: "Q215385: BUG:ItemClick Event Fires After First ListItem Added to ListView"
permalink: /kb/215/Q215385/
---

## Q215385: BUG:ItemClick Event Fires After First ListItem Added to ListView

{% raw %}

	Article: Q215385
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,2.0,2.11,3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600bug kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	- Microsoft eMbedded Visual Basic, version 3.0, on platform(s):
	   - Microsoft Windows CE versions 2.0, 2.11 for the Handheld PC 
	   - Microsoft Windows CE version 2.11 for the Palm-size PC 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ItemClick event fires after the first ListItem is added to a ListView, even
	though the item was not clicked.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The ItemClick event fires only after adding the first item. Adding more items
	does not fire the ItemClick event.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Windows CE HPC Project or Windows CE HPC Pro Project in Visual
	  Basic. Form1 is created by default.
	
	2. Select Components from the Project menu and select the Microsoft CE ListView
	  Control 6.0.
	
	3. Add a ListBox, CommandButton, and ListView control to Form1.
	
	4. Paste the following code into Form1:
	
	  Private Sub Command1_Click()
	     ListViewCtrl1.ListItems.Add , , "Item One"
	  End Sub
	
	  Private Sub ListViewCtrl1_ItemClick(ByVal Index As Long)
	     List1.AddItem "ItemClick fired."
	  End Sub
	
	5. Run the project on the target platform.
	
	6. Click the CommandButton, and note that the first ListItem is added to the
	  ListView and the ItemClick event fires.
	
	WorkAround
	----------
	
	You can use the following code as a work around for this behavior:
	
	     Option Explicit
	     Dim first_time As Boolean
	   
	     Private Sub Command1_Click()
	      If first_time Then
	         ListViewCtrl1.ListItems.Add , , ""
	         ListViewCtrl1.ListItems.Add , , "Item One"
	         ListViewCtrl1.ListItems.Remove (1)
	         first_time = False
	      Else
	         ListViewCtrl1.ListItems.Add , , "Item One"
	      End If
	     End Sub
	   
	     Private Sub Form_Load()
	      first_time = True
	     End Sub
	   
	     Private Sub ListViewCtrl1_ItemClick(ByVal Index As Long)
	      If Not first_time Then
	         List1.AddItem "ItemClick fired."
	      End If
	     End Sub
	
	Additional query words: vbce vbce6 wince wce
	
	======================================================================
	Keywords          : kbToolkit kbVBp600bug kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch
	Version           : :1.0,2.0,2.11,3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
