---
layout: page
title: "Q138758: How to Print Event Procedures for a Form"
permalink: kb/138/Q138758/
---

## Q138758: How to Print Event Procedures for a Form

	Article: Q138758
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how to print all the event procedures for a form. You can use
	the Documentation Wizard to print methods in a project, but if you want to
	document the procedures for a single form, the Wizard does not easily do it.
	
	MORE INFORMATION
	================
	
	There are at least three ways to print the Event procedures on a single form --
	using the Report Writer, using the Class Browser with Forms as the type of file,
	and making a new Project. These are described below.
	
	Using the Report Writer
	-----------------------
	
	1. Create a new Report on the .scx file for the form.
	
	2. Add a single text box to the Detail band, and base it on the Methods field.
	
	3. Double-click the field, and choose Print When.
	
	4. Select Remove Line if Blank.
	
	5. Select Stretch with overflow.
	
	6. To print the form procedures, open the form's .scx table by typing the
	  following in the Command window:
	
	  " USE myform.scx " (without the quotation marks)
	
	7. Run the report just created. The printout will document all user-defined
	  event procedures.
	
	Using the Class Browser
	-----------------------
	
	1. On the Tools menu, click Class Browser, and change the file type to form.
	
	2. Click the View Class Code Toolbar button (third from the left). A code
	  listing will appear. To print it, click Print on the File menu. This method
	  will also print all the code necessary to create the form.
	
	Making a new Project
	--------------------
	
	1. Create a new Project.
	
	2. Add the form to the Project.
	
	3. Build the Project.
	
	4. Use the Documentation Wizard to print the Project methods. This method will
	  print the code required to build the form as well as the Event procedures.
	
	Additional query words: VFoxWin document
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
