---
layout: page
title: "Q163345: ACC97: Error Running Switchboard Manager in SourceSafe Database"
permalink: /kb/163/Q163345/
---

## Q163345: ACC97: Error Running Switchboard Manager in SourceSafe Database

	Article: Q163345
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbusage
	Last Modified: 15-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multi-user skills.
	
	When you run the Switchboard Manager to create a switchboard form in a database
	that is under source code control, you may receive the following error message:
	
	  The Save action was canceled.
	
	The Switchboard form and table are created, but the Switchboard Manager Wizard
	does not run to completion, and the Switchboard form is blank.
	
	This article assumes that you are familiar with using the client-side
	capabilities of Visual SourceSafe. For more information about Visual SourceSafe,
	please refer to the "Visual SourceSafe User's Guide" or Help topics available
	from the Visual SourceSafe Help menu.
	
	CAUSE
	=====
	
	The Switchboard form was saved and closed in order to place it under source code
	control, but this action occurred before the Switchboard Manager Wizard had
	finished walking you through the design of the form.
	
	RESOLUTION
	==========
	
	When you run the Switchboard Manager, the "Add Objects to SourceSafe" dialog box
	appears, prompting you to add the new form to source code control. Click Cancel
	in the dialog box, and finish running the Switchboard Manager. Then manually add
	the form to SourceSafe by pointing to SourceSafe on the Tools menu, and then
	clicking "Add Objects to SourceSafe."
	
	NOTE: You must have Data and Misc. Objects checked out when you create a
	Switchboard form with the Switchboard Manager Wizard. Because the Wizard creates
	a Switchboard Items table, if you do not have Data and Misc. Objects checked
	out, your Switchboard information will be lost. Any time you use the Switchboard
	Manager to modify an existing Switchboard form, you must check out both Data and
	Misc. Objects and the Switchboard form, or your changes will be lost.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Microsoft Access and create a new database called SwitchErr.mdb.
	
	2. Add the database to SourceSafe control.
	
	3. On the Tools menu, point to Add-Ins, and then click Switchboard Manager.
	
	4. When the manager prompts you to create a new switchboard, click Yes.
	
	5. When SourceSafe prompts you to add the Switchboard form to SourceSafe, click
	  OK.
	
	6. When prompted if you want Microsoft Access to close the Switchboard form,
	  click Yes. Note that you receive the message:
	
	  The Save action was canceled.
	
	Additional query words: ACCSCC VSS SCC menu startup
	
	======================================================================
	Keywords          : kberrmsg kbusage 
	Technology        : kbAccessSearch kbAccess97 kbAccess97Search
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
