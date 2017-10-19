---
layout: page
title: "Q163509: ACC97: Object Description Property Not Saved in SourceSafe"
permalink: /kb/163/Q163509/
---

## Q163509: ACC97: Object Description Property Not Saved in SourceSafe

	Article: Q163509
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 15-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	When you create a database from a Microsoft Visual SourceSafe project, the
	Description property of your database objects does not appear. This also happens
	when you perform a source code control action that replaces an object in your
	database, such as when you undo a check out.
	
	This article assumes that you are familiar with using the client-side
	capabilities of Visual SourceSafe. For more information about Visual SourceSafe,
	please refer to the "Visual SourceSafe User's Guide" or Help topics available
	from the Visual SourceSafe Help menu.
	
	CAUSE
	=====
	
	With the exception of queries, the Description property for database objects is
	not stored in Microsoft Visual SourceSafe. When you create a new database from a
	SourceSafe project, or when you replace an existing database object with one
	from a SourceSafe project, the Description property is not included.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new blank database called ObjDesc.mdb.
	
	2. On the Tools menu, point to SourceSafe, and then click "Add Database to
	  SourceSafe." Follow instructions on your screen to add the new database to
	  source code control.
	
	3. Create a new empty module and save it as ModTestVss. Add the module to
	  SourceSafe control when prompted.
	
	4. Save as ModTestVss and add to SourceSafe Control.
	
	5. Check out ModTestVss.
	
	6. Using the right mouse button (right-click), click ModTestVss in the Database
	  window, and then click Properties on the shortcut menu that appears.
	
	7. Type "This is a VSS test" in the Description box, and then click OK.
	
	8. Check in ModTestVss.
	
	9. Check out ModTestVss.
	
	10. Open ModTestVss in Design view and type the following line in the
	  Declarations section: 'This is a comment
	
	11. Save ModTestVss and close it.
	
	12. Undo the check out. This causes the module to be replaced by a new copy from
	  the SourceSafe project.
	
	13. Right-click ModTestVss in the Database window, and then click Properties on
	  the shortcut menu. Note that the Description property is empty.
	
	Additional query words: ACCSCC SCC VSS source safe
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbAccessSearch kbAccess97 kbAccess97Search
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
