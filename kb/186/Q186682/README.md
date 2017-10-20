---
layout: page
title: "Q186682: FIX: DBCombo BoundText Incorrect When Setting Text Property"
permalink: /kb/186/Q186682/
---

## Q186682: FIX: DBCombo BoundText Incorrect When Setting Text Property

{% raw %}

	Article: Q186682
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Studio versions 97, 97sp1, 97sp2, 97sp3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When setting the DBCombo Text property to a new value that exists in the
	database, the BoundText property is not updated to hold the contents of the
	BoundColumn for the record.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0 with the
	Microsoft Bound Data List Controls 6.0.
	
	
	MORE INFORMATION
	================
	
	The DBLIST32.OCX control that ships with Visual Basic 4.0 returned the BoundText
	properly in this situation. It is possible that the Visual Basic 5.0 version of
	DBLIST32.OCX could break an application built with Visual Basic 4.0 when the
	DBLIST32.OCX control is upgraded.
	
	Steps to Reproduce Behavior
	---------------------------
	
	These steps use the BIBLIO.MDB sample database that ships with Visual Basic.
	
	1. Start a new Standard EXE Project in Visual Basic. Form1 is created by
	  default.
	
	2. Place a data control (Data1) on Form1. Set the DataBaseName property to
	  BIBLIO.MDB. Set the RecordsSource to the Authors table.
	
	3. From the Project menu, choose Components. Add the "Microsoft Data Bound List
	  Controls" to the project.
	
	4. Add a DBCombo control (DBCombo1) to the form. Set the RowSource property to
	  Data1. Set the BoundColumn to AU_ID. Set the ListField to Author.
	
	5. Add a CommandButton (Command1) to Form1. Add the following code to the Click
	  event of Command1:
	
	        Private Sub Command1_Click()
	           DBCombo1.Text = "Curry, Dave"
	           MsgBox DBCombo1.BoundText
	        End Sub
	
	6. Save and run the project.
	
	7. Click the CommandButton and note that a blank message box pops up. It should
	  have popped up with the AU_ID corresponding to the Author "Curry, Dave."
	
	Additional query words: kbCtrl kbVBp500 kbVBp400bug kbVBp500bug kbVS97sp1 kbVS97sp2 kbVS97sp3 
	kbDSupport kbdss vb6fix
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVSsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500 kbVS97 kbVS97SP1 kbVS97SP2 kbVS97SP3 kbVS97Search
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
