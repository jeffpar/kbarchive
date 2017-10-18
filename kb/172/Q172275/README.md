---
layout: page
title: "Q172275: FIX: DBCombo's Drop-Down Does Not Work with Mouse in Modal Form"
permalink: kb/172/Q172275/
---

## Q172275: FIX: DBCombo's Drop-Down Does Not Work with Mouse in Modal Form

	Article: Q172275
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400bug kbVBp600fix kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The mouse does not select items in the drop-down combo box of DBCombo on a Modal
	Form in an executable.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Visual Basic 6.0.
	
	In Visual Basic 4.0, the following code will work around the problem:
	
	     Private Sub Form_Initialize()
	     ' Loop thru each form in the FormS collection
	     For Each Form in Forms
	     'Find each form that is not the current form
	       If Form.Name <> Me. Name Then
	         Form. Enabled = True ' and Disable it
	       End If
	     End Sub
	
	     Private Sub Form_Unload()
	
	     ' Loop thru each form in the FormS collection
	     For Each Form in Forms
	
	     'Re-enable all the forms in the FormS collection
	       If Form.Name <> Me. Name Then
	         Form. Enabled = True
	     End If
	
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Microsoft Visual Basic
	Professional and Enterprise editions, version 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a New Project in Visual Basic 4.0.
	
	2. Insert a module.
	
	3. Add the following code:
	
	        Sub main()
	           Form1.Show vbModal
	        End Sub
	
	4. On Form1, add a Data Control (Data1) and a DBCombo (DBCombo1). Set the
	  following properties:
	
	        Data1.DatabaseName = biblio.mdb
	        Data1.Recordsource = Authors
	        DBCombo1.RowSource = Data1
	        DBCombo1.ListField = Author
	
	5. Under the Tools menu, select Options.
	
	6. Select the Project Tab.
	
	7. Set the Main Procedure for the Startup Form.
	
	8. Build an executable.
	
	9. Run the executable.
	
	10. Drop down the combo box, and try to select an option.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q150210 FIX: DBCombo Control Does Not Allow Selection on Modal Form
	
	Additional query words: vb
	
	======================================================================
	Keywords          : kbVBp400bug kbVBp600fix kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
