---
layout: page
title: "Q141676: PRB: &quot;No PARAMETER statement is found&quot; When Running Own Wizard"
permalink: kb/141/Q141676/
---

## Q141676: PRB: &quot;No PARAMETER statement is found&quot; When Running Own Wizard

	Article: Q141676
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After creating your own wizard and registering it to the system in Wizard.dbf,
	running by on the Tools menu clicking Wizards, results in the following error
	and returns you to the Command window:
	
	  No PARAMETER statement is found"
	
	CAUSE
	=====
	
	Visual FoxPro is expecting the PARAMETERS statement to be present in the Wizard
	program or application because it will pass three parameters to it. The
	PARAMETERS statement needs to be in a "top-level" program because it will not
	work if the statement is in an event of the form.
	
	NOTE: If the wizard is based on a form class, the PARAMETERS statement should be
	in the Init event of the form class and you should use the Classname and
	Classlib fields of Wizard.dbf.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following steps show how to create a form that can be activated as a Wizard
	from the Wizards option on the Tools menu.
	
	1. Create a new form, and place a single command button on it. Place the
	  following code in the command button's Click event:
	
	     RELEASE THISFORM
	
	2. Save the form as Wizform.scx
	
	3. Create a new program that contains the following code:
	
	     PARAMETERS uP1,uP2,uP3
	     DO FORM Wizform
	
	4. Create a new project, and add the form and the program to it. Set the program
	  as the Main element (on the Project menu, click Set Main).
	
	5. Build an application (.app) file from the project named Testwiz.app.
	
	6. Copy Testwiz.app to the \Vfp\Wizards directory
	
	7. Modify the table \Vfp\Wizards\Wizard.dbf. Add a new record to the table.
	
	8. In the new record, add the following entries for the indicated fields:
	
	  Name      : Test Wizard
	  Type      : Form
	  Program   : Testwiz.app
	
	9. On the Tools menu, click Wizards, and then click Form. In the Wizard
	  Selection dialog box, select Test Wizard.
	
	Additional query words: VFoxWin akz
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
