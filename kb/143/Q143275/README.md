---
layout: page
title: "Q143275: BUG: GP Fault with DBCombo and Sheridan 3D Control"
permalink: /kb/143/Q143275/
---

## Q143275: BUG: GP Fault with DBCombo and Sheridan 3D Control

	Article: Q143275
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a DBCombo control or a DBList control are bound to a Data Control, and a
	Sheridan 3D Panel control is also bound to the same Data control on the same
	Form, a General Protection Fault results when the project is run.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic, 16-Bit Edition. Form1 is created by
	  default.
	
	2. Add a Data control, and set the Databasename property to Biblio.mdb contained
	  in the VB directory. Set the Recordsource property to Authors.
	
	3. Add a Sheridan 3D Panel control to the form. Set the DataSource property to
	  Data1, and the DataField property to Author.
	
	4. Add a DBCombo control to the form and set the RowSource property to Data1 and
	  the ListField property to Au_ID.
	
	Run the project by pressing F5. A General Protection Fault results. In general,
	the General protection Fault occurs in the Vb.exe module. In one test, the
	address of the fault was 0001:2571.
	
	Additional query words: kbVBp400bug kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : 4.00
	Issue type        : kbbug
	
	=============================================================================
	
