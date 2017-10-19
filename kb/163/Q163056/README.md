---
layout: page
title: "Q163056: ACC97: Access IPF Using Find on Object That Is Checked In"
permalink: /kb/163/Q163056/
---

## Q163056: ACC97: Access IPF Using Find on Object That Is Checked In

	Article: Q163056
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
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	When you use the Find command to find an object located behind a form or report
	which has not been checked out, you may receive one of the following error
	messages when you try to check out the object
	
	  MSACCESS caused an invalid page fault in module MSJET35.DLL
	
	-or-
	
	  The form name '<Garbage Characters or Blank>' is misspelled or refers
	  to a form that doesn't exist.
	
	followed by:
	
	  MSACCESS caused an invalid page fault in module VBA332.DLL
	
	
	There is no data loss or project corruption, but any changes to unsaved objects
	are lost when Microsoft Access quits.
	
	This article assumes that you are familiar with using the client-side
	capabilities of Visual SourceSafe. For more information about Visual SourceSafe,
	please refer to the "Visual SourceSafe User's Guide" or the Help topics
	available from the Visual SourceSafe menu.
	
	RESOLUTION
	==========
	
	When Microsoft Access asks if you want to check out the form or report, click
	No. Then check out the object from the Database window by pointing to SourceSafe
	on the Tools menu, and then clicking Check Out.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Access 97. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	WARNING: Following these steps will cause a general protection fault on your
	computer. Make sure you save and close any open work on your computer before
	following these steps.
	
	1. Create a new database and name it VssTest.mdb.
	
	2. Create a new form not based on any table or query in Design view.
	
	3. On the View menu, click Code.
	
	4. Type the following procedure:
	
	         Function Test()
	            dim Kaboom as String
	         End Function
	
	5. Save the form as Form1 and close it.
	
	6. Add the database to SourceSafe control by pointing to SourceSafe on the Tools
	  menu, and then click "Add Database to SourceSafe."
	
	7. Quit Microsoft Access.
	
	8. Start Microsoft Access and open VssTest.mdb.
	
	9. Create a new Module in Design view.
	
	10. On the Edit menu, click Find.
	
	11. In the Find What box, type Kaboom. Select Current Database in the Search
	  section, and then click Find Next.
	
	12. When prompted if you want to Check Out the Form, click Yes. Note that you
	  receive the error, and then Microsoft Access quits.
	
	Additional query words: VSS GPF ACCSCC SCC source safe msjet35 msjet
	
	======================================================================
	Keywords          : kberrmsg kbusage 
	Technology        : kbAccessSearch kbAccess97 kbAccess97Search
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
