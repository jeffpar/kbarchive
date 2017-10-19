---
layout: page
title: "Q172100: PRB: Bound TextBox No Longer Populates During Form's Load Event"
permalink: /kb/172/Q172100/
---

## Q172100: PRB: Bound TextBox No Longer Populates During Form's Load Event

	Article: Q172100
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a form is run, a bound Text box comes up blank even though a value is being
	stored to it's Text property in the Form's Load. In prior version of Visual
	Basic, the Text box came up populated if done in this manner.
	
	RESOLUTION
	==========
	
	In the Form's Load, instead of:
	
	     Text1.Text = "This text should be in the text box."
	
	use:
	
	     Data1.RecordSet("<field name>") = "Text to show."
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Project.
	
	2. On the new form, add a TextBox control and a DataControl.
	
	3. Set the following DataControl's properties as shown:
	
	        Data1
	        .DatabaseName = nwind.mdb
	        .RecordSource = customers
	
	4. Set the following Text Control's properties as shown:
	
	        Text1
	        .DataSource = Data1
	        .DataField = contactname
	
	5. Place the following code in the Form's Load Method:
	
	        Data1.Refresh
	        Data1.Recordset.AddNew
	        Text1.Text = "This text should be in the text box."
	
	6. Run the form.
	
	Additional query words: empty kbVBp500 kbVBp600 kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
