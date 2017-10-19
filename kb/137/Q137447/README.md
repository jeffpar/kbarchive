---
layout: page
title: "Q137447: Form Wizard Default Settings"
permalink: /kb/137/Q137447/
---

## Q137447: Form Wizard Default Settings

	Article: Q137447
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides information about what the Form Wizard produces when the
	default options are selected. This will help you learn what to expect when steps
	are skipped if you select the Finish button.
	
	MORE INFORMATION
	================
	
	There are two kinds of Form Wizards: the Form Wizard (Normal) and the
	One-to-Many Form Wizard. The following describes the defaults for each step in
	the Form Wizard and the One-to-Many Form Wizard.
	
	Form Wizard Defaults
	--------------------
	
	Step 1: Field Selection
	
	The default is based on the data of the current work area. If a free table is
	open, the fields of the table are available. If a free table is not open but a
	database is open, the first fields of the first table in the database are
	available for selection. After selecting one or more fields, the Finish button
	is enabled and will bypass all remaining steps using the default values.
	
	Step 2: Style
	
	The default is Standard form style with Text Buttons button type.
	
	Step 3: Sort Order
	
	The default is Natural record order.
	
	Step 4: Finish
	
	The default is Save Form for Later Use.
	
	One-to-Many Form Wizard Defaults
	--------------------------------
	
	These defaults are all the same as those listed for the Form Wizard except that
	the Field Selection step (step 1) is replaced by these three steps:
	
	Step 1: Select Fields from Parent Table
	
	This step is similar to Step 1 of the Form Wizard.
	
	Step 2 : Select Fields from Child Table
	
	This defaults to a free table of the current work area or an open database if no
	table is open. If no fields are selected in this step, the One-to- Many Form
	Wizard is essentially the same as the standard Forms Wizard.
	
	Step 3: Relationship
	
	If fields are selected in Step 2, the default relationship is the one specified
	as a persistent relation in a database, or the active relation if the tables are
	free.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
