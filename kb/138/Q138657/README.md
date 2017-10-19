---
layout: page
title: "Q138657: PRB: AutoForm and AutoReport Tools on Toolbar Don't Work"
permalink: /kb/138/Q138657/
---

## Q138657: PRB: AutoForm and AutoReport Tools on Toolbar Don't Work

	Article: Q138657
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to use the AutoForm or AutoReport Wizard tools located on the
	Standard toolbar, you find that they are disabled and non-functional. Whether or
	not tables, databases, projects, forms, or reports are open, these tools remain
	non-functional.
	
	CAUSE
	=====
	
	The Autoform and Autoreport icons are enabled when you select a table in a
	database in the project manager. They are not available otherwise.
	
	RESOLUTION
	==========
	
	To enable the Autoform and Autoreport feature, open a database, and select a
	table in the database.
	
	WORKAROUND
	==========
	
	You can also invoke the Form Wizard in one of these ways:
	
	- On the File menu click Form, and then click the Wizard button.
	
	- On the Tools menu, click Wizards, and then click Form.
	
	- In the Command window, type:
	
	        DO (_WIZARD) WITH 'FORM'
	
	Invoke the Report Wizard in one of these ways:
	
	- On the File menu, click Report, and then click the Wizard button.
	
	- On the Tools menu, click Wizards, and then click Report.
	
	- In the Command window, type:
	
	     DO (_WIZARD) WITH 'REPORT'
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin malfunction disabled
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
