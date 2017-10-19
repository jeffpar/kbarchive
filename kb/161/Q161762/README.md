---
layout: page
title: "Q161762: PRB: NumberFormat Property of DBGrid Does Not Change Format"
permalink: /kb/161/Q161762/
---

## Q161762: PRB: NumberFormat Property of DBGrid Does Not Change Format

	Article: Q161762
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set the NumberFormat Property through the Property page of the DBGrid
	control, it does not affect the column displayed in the control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this issue and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start 16-bit or 32-bit Visual Basic 4.0, or if it is already running, click
	  New Project on the File menu.
	
	2. Add a data control and a DBGrid Control to the Form1 form. Set the controls
	  to the following properties:
	
	  Control         Default Name        Property            Setting
	  ---------------------------------------------------------------
	  Data              Data1            DatabaseName        Biblio.mdb
	                                     RecordSource        Titles
	
	  DBGrid            DBGrid1          DataSource          Data1
	
	3. Right-click the DBGrid control and click Retrieve Fields. Note that the
	  column headers are now set to field names from the Titles table.
	
	4. Right-click the DBGrid control and click Properties to open the Properties
	  page. Click the Columns Tab and choose Column1 (Year Published) in the Column
	  list box. In the Number Format Combo box, enter ##. The "Year Published"
	  field is of type Integer in the database. Click OK to close the Properties
	  page.
	
	5. On the Run menu, click Start or press the F5 key to start the program. The
	  Year Published column still appears with four instead of two digits.
	
	Additional query words: 4.00 kbdsd vb4win vb4all pound sign format numerical
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	Issue type        : kbprb
	
	=============================================================================
	
