---
layout: page
title: "Q163347: PRB: Project Created but No Objects If Add to VSS Is Canceled"
permalink: kb/163/Q163347/
---

## Q163347: PRB: Project Created but No Objects If Add to VSS Is Canceled

	Article: Q163347
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
	
	When you create a new database and add it to Source Code Control, if you click
	Cancel in the "Add Objects to SourceSafe" dialog box, the database is added to
	SourceSafe anyway, but none of the database objects are added to the SourceSafe
	project.
	
	This article assumes that you are familiar with using the client-side
	capabilities of Visual SourceSafe. For more information about Visual SourceSafe,
	please refer to the "Visual SourceSafe User's Guide" or Help topics available
	from the Visual SourceSafe Help menu.
	
	CAUSE
	=====
	
	You created the SourceSafe project, but canceled before the objects in your
	database were added to the project.
	
	You must click Cancel in the "Add to SourceSafe Project" dialog box if you want
	to prevent the database from being added to Source Code Control at all.
	
	RESOLUTION
	==========
	
	If you want to leave the database under Source Code Control, manually add the
	database objects to the SourceSafe project. On the Tools menu, point to
	SourceSafe, and then click "Add Objects to SourceSafe."
	
	If you do not want to leave the database under Source Code Control, compact the
	database and answer Yes when prompted if you want to remove the compacted
	database from Source Code Control.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Microsoft Access and create a new database called NoData.mdb.
	
	2. Create a new table in Design view called MyData: Table: MyData
	  ------------------ Field Name: Field1 Data Type: Text
	
	3. Save the MyData table. You do not need to create a primary key.
	
	4. Select the MyData table in the Database window, and then click AutoForm on
	  the Insert menu.
	
	5. Save the form as Form1, and then close it.
	
	6. On the Tools menu, point to SourceSafe, and then click "Add Database to
	  SourceSafe."
	
	7. In the "Add to SourceSafe Project" dialog box, select or create a project,
	  and then click OK.
	
	8. In the "Add Objects to SourceSafe" dialog box, click Cancel. Note that
	  Microsoft Access continues to add the database to SourceSafe.
	
	9. On the Tools menu, point to SourceSafe, and then click Check Out. Note that
	  your receive the following message:
	
	  No objects in this database are available to be checked out from source code
	  control.
	
	REFERENCES
	==========
	
	For more information about using Source Code Control in Microsoft Access, search
	the Help Index for "Source Code Control," or ask the Microsoft Access 97 Office
	Assistant.
	
	Additional query words: VSS ACCSCC SCC source safe
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbAccessSearch kbAccess97 kbAccess97Search
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
