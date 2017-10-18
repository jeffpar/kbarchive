---
layout: page
title: "Q163346: ACC97: Linked Table Manager Doesn't Prompt You to Check Out Data"
permalink: kb/163/Q163346/
---

## Q163346: ACC97: Linked Table Manager Doesn't Prompt You to Check Out Data

	Article: Q163346
	Product(s): Microsoft SourceSafe
	Version(s): 97
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop
	Last Modified: 15-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	If you use the Linked Table Manager to refresh the link to a table that is under
	Source Code Control, and you do not have Data and Misc. Objects checked out,
	Microsoft Access does not prompt you to check it out. When you do check out Data
	and Misc. Objects, if the data to which the table was originally linked is not
	available, you receive two error messages for each linked table:
	
	  Couldn't find file '<Database Name>' An error occurred while trying to
	  create the linked table '<Table Name>'
	
	After you click OK on the last error message, the linked tables are deleted.
	
	NOTE: If the data to which the table was originally linked is still available
	when you check out Data and Misc. Objects, the table will revert to the original
	link.
	
	This article assumes that you are familiar with using the client-side
	capabilities of Visual SourceSafe. For more information about Visual SourceSafe,
	please refer to the "Visual SourceSafe User's Guide" or Help available from the
	Visual SourceSafe Help menu.
	
	CAUSE
	=====
	
	Changes to objects that are not checked out are not saved. When you check out a
	linked table, Microsoft Access tries to refresh the link. If the data to which
	the table is linked is unavailable or has been moved to another location, the
	link cannot be refreshed and the linked table is removed.
	
	RESOLUTION
	==========
	
	Check out Data and Misc. Objects before you use the Linked Table Manager to
	modify the linked tables.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Access 97. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	NOTE: Any time you use Visual Basic for Applications code to modify an object in
	a database that is under Source Code Control, you are not prompted to check out
	the object. This behavior is by design; however wizards that modify objects
	through code should prompt you to check out the object.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new database called VssTest.mdb.
	
	2. On the Tools menu, point to SourceSafe, and then click "Add Database to
	  SourceSafe."
	
	3. Check out Data and Misc. Objects from SourceSafe.
	
	4. Link to the Customers table in the sample database Northwind.mdb.
	
	5. Check in Data and Misc. Objects, which now contains the linked table.
	
	6. Quit Microsoft Access 97.
	
	7. Locate Northwind.mdb and change its name to Northwind1.mdb.
	
	8. Start Microsoft Access and open VssTest.mdb.
	
	9. Refresh the link to the Customers table by pointing to Add-Ins on the Tools
	  menu, and then clicking Linked Table Manager.
	
	10. Check out Data and Misc. Objects from SourceSafe.
	
	11. Click OK on both error messages and note that the linked table no longer
	  appears in the Database window.
	
	REFERENCES
	==========
	
	For more information about using Microsoft Access 97 with Source Code Control,
	search the Help Index for "Source Code Control," or ask the Microsoft Access 97
	Office Assistant.
	
	For more information about using the Linked Table Manager Add-in in Microsoft
	Access 97, search the Help Index for "Linked Table Manager," or ask the
	Microsoft Access 97 Office Assistant.
	
	Additional query words: ACCSCC VSS SCC attach
	
	======================================================================
	Keywords          : kberrmsg kbinterop 
	Technology        : kbAccessSearch kbAccess97 kbAccess97Search
	Version           : 97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
