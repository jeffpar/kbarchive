---
layout: page
title: "Q163348: ACC97: Tables That Appear to Be Checked In in VSS Are Not"
permalink: /kb/163/Q163348/
---

## Q163348: ACC97: Tables That Appear to Be Checked In in VSS Are Not

{% raw %}

	Article: Q163348
	Product(s): Microsoft SourceSafe
	Version(s): 97
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
	
	Tables that you create with macros, Visual Basic code, or make-table queries
	appear to be checked in. They display the Checked In glyph, or icon, but they
	are not a part of the SourceSafe project. When you get the latest version from
	SourceSafe, or check out Data and Misc. Objects, the tables are deleted. Also,
	you cannot check the tables in or add them to the SourceSafe project.
	
	This article assumes that you are familiar with using the client-side
	capabilities of Visual SourceSafe. For more information about Visual SourceSafe,
	please refer to the "Visual SourceSafe User's Guide" or Help topics available
	from the Visual SourceSafe Help menu.
	
	CAUSE
	=====
	
	You did not have Data and Misc. Objects checked out when you created the tables.
	
	RESOLUTION
	==========
	
	Before you create a table with macros, Visual Basic code, or make-table queries,
	be sure you check out Data and Misc. Objects. Then when you create your new
	tables, they will be saved with the SourceSafe project.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new database and add it to SourceSafe control.
	
	2. Create the following new macro:
	
	        Macro Name      Action
	        --------------------------------
	        CreateTable     TransferDatabase
	
	        CreateTable  Actions
	        -----------------------------------------
	        TransferDatabase
	           Transfer Type: Import
	           Database Type: Microsoft Access
	           Database Name: <Path to Northwind.mdb>
	           Object Type: Table
	           Source: Employees
	           Destination: tblTest
	           Structure Only: No
	
	3. Save the CreateTable macro, and add it to SourceSafe control when prompted.
	
	4. Run the CreateTable macro. The table tblTest is created, and it shows the
	  SourceSafe glyph that the table is checked into SourceSafe.
	
	5. On the Tools menu, point to SourceSafe, and click Get Latest Version. Select
	  Data and Misc. Objects, and then click OK. Note that when this is finished,
	  the tblTest table is no longer in your database.
	
	REFERENCES
	==========
	
	For more information about Source Code Control, search the Help Index for
	"Source Code Control," or refer to the Source Code Control White Paper included
	with Microsoft Office 97 Developer Edition Tools.
	
	Additional query words: ACCSCC VSS SCC
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbAccessSearch kbAccess97 kbAccess97Search
	Version           : 97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
