---
layout: page
title: "Q177359: PRB: Data Control Does Not Work on MDI Forms"
permalink: /kb/177/Q177359/
---

## Q177359: PRB: Data Control Does Not Work on MDI Forms

{% raw %}

	Article: Q177359
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Although the Help files clearly indicate that the Data control can be used on
	MDI forms, the Data control simply does not function when placed on MDI forms.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	In earlier version of Visual Basic, the Data control was used on MDI forms by
	placing it on the PictureBox control. In Visual Basic 5.0, the Align property
	has been added to the Data control so that the PictureBox is no longer required.
	However, the Data control does not function on MDI forms regardless of whether
	the PictureBox control is used or not.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic and create a new Standard EXE. Form1 is created by
	  default.
	
	2. From the Project menu, select Add MDI Form.
	
	3. Add a Data control to MDIForm1 and set the following properties:
	
	     DatabaseName = "C:\Program Files\DevStudio\VB\Biblio.mdb"
	     RecordSource = "Authors"
	
	4. From the Project menu, select Project Properties, and change the Startup
	  Object to MDIForm1.
	
	5. Run the project and note that the Data control is not functional.
	
	REFERENCES
	==========
	
	The following text regarding the Align property of the Data control is from the
	Visual Basic Reference Help file:
	
	  "This property allows a Data control to be placed on an MDI form without
	  requiring an enclosing Picture control."
	
	For more information, search for "Data control" in the Visual Basic Reference or
	Visual Basic Books Online.
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp kbControl
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
