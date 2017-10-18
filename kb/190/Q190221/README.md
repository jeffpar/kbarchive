---
layout: page
title: "Q190221: BUG: Queries or Views Do Not Appear in Data Form Wizard"
permalink: kb/190/Q190221/
---

## Q190221: BUG: Queries or Views Do Not Appear in Data Form Wizard

	Article: Q190221
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbAddIn kbVBp600bug kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Data Form Wizard, queries or views do not appear in the list of
	available record sources.
	
	CAUSE
	=====
	
	The Data Form Wizard incorrectly queries only for tables to populate the
	drop-down combo box of available record sources.
	
	RESOLUTION
	==========
	
	Select a table that closely matches the desired query to build your form, then
	change the RecordSource property of the generated ActiveX Data Objects (ADO)
	control (datPrimaryRS) to the desired query.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open Visual Basic 6.0 and create a new Standard EXE project.
	
	2. Use the Data Form Wizard to add a new form to the project (either through the
	  Add-Ins menu or by adding a form and selecting the Data Form Wizard.)
	
	3. Select "(None)" for "From what profile do you want to use to load your
	  settings?" and click Next.
	
	4. Select Access from the list of available database formats and click Next.
	
	5. Supply the location of the sample Northwind database (Nwind.mdb) in the
	  Database Name box and click Next.
	
	6. Name the form "frmDemo" in the Form Name box and select Single Record for the
	  form layout. Click Next.
	
	7. Click Record Source. Notice the lack of Access queries.
	
	Steps to View Queries
	---------------------
	
	Follow these steps to view queries using the RecordSource property:
	
	1. Select Categories from the Record Source box, and add all the fields by
	  clicking ">>". Click Next, and then Finish in the next dialog box.
	
	2. Select the ADO data control (datPrimaryRS) on the form that was just
	  generated for you (frmDemo).
	
	3. Locate the RecordSource property and click the ellipses (...) on the right
	  side of the properties box.
	
	4. Change the command type in the Property Pages dialog box from "8 -
	  adCmdUnknown" to "2 - adCmdTable".
	
	5. Click on "Table or Stored Procedure Name". Notice all the tables and stored
	  queries are displayed.
	
	======================================================================
	Keywords          : kbAddIn kbVBp600bug kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
