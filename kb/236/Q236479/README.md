---
layout: page
title: "Q236479: ACC2000: New Tables &amp; Pages Deleted When You Undo VSS Checkout"
permalink: /kb/236/Q236479/
---

## Q236479: ACC2000: New Tables &amp; Pages Deleted When You Undo VSS Checkout

{% raw %}

	Article: Q236479
	Product(s): Microsoft SourceSafe
	Version(s): ; WINDOWS:2000
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 30-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 2000 Developer 
	- Microsoft Access 2000 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	This article applies only to a Microsoft Access database (.mdb).
	
	SYMPTOMS
	========
	
	When you undo the checkout of "Data and Misc. Objects" for a Microsoft Access
	database under Microsoft Visual SourceSafe control, you lose any tables or links
	to a data access page that you created after you checked out the object.
	
	CAUSE
	=====
	
	Visual SourceSafe stores all of the tables and links to pages in "Data and Misc.
	Objects" as a single object. Therefore, if you undo the checkout of that object,
	Visual SourceSafe reverts to the stored version.
	
	RESOLUTION
	==========
	
	The stored version of "Data and Misc. Objects" does not contain any information
	about the new table. After you undo the checkout, there's no way to recover the
	new table.
	
	However, the HTML file for the data access page is not part of "Data and Misc.
	Objects". Therefore, the HTML file of the new page remains in the folder where
	it was saved. You can create a new link to the HTML file. To do so, follow these
	steps:
	
	1. Remove the database from Visual SourceSafe control.
	
	2. Open the database.
	
	3. In the Database window, click Pages under Objects, and then click New.
	
	4. In the New Data Access Page dialog box, click Existing Web Page, and then
	  click OK.
	
	5. Locate the existing HTML file and click Open.
	
	6. On the File menu, click Save.
	
	7. Add the database back to Visual SourceSafe control.
	
	For more information about removing a database from Visual SourceSafe control,
	click Contents on the Help menu, click the Index tab in Visual SourceSafe Help,
	type the following text:
	
	  "files" (without the quotation marks)
	
	and then double-click the selected text to go to the "files, delete and recover"
	topic.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the sample database Northwind.mdb.
	
	2. On the Tools menu, point to SourceSafe, and then click "Add Database to
	  SourceSafe". Click Yes when prompted to close the database.
	
	3. If you see the Visual SourceSafe Login dialog box, type a valid user name and
	  password, and then click OK.
	
	4. In the Add to SourceSafe Project dialog box, type "Northwind" (without the
	  quotation marks) in the Project box, and then click OK. Click Yes when
	  prompted to create the project.
	
	5. In the Add Objects to SourceSafe dialog box, click Select All, and the click
	  OK.
	
	6. On the Tools menu, point to SourceSafe, and then click Check Out.
	
	7. In the Object Type list, click Other. Click to select the Data and Misc.
	  Objects check box, and then click OK.
	
	8. Create and save a new table as tblVSSTest.
	
	9. Close the table. Note that you see the tblVSSTest table in the Database
	  window.
	
	10. On the Tools menu, point to SourceSafe, and then click Undo Check Out.
	
	11. In the Object Type list, click Other. Click to select the Data and Misc.
	  Objects check box, and then click OK.
	
	12. When you see the following warning, click Yes:
	
	  The Data and Misc. Objects may have changed. Undo checkout and lose changes?
	
	Note that the new tblVSSTest table no longer exist.
	
	Additional query words: prb vss miscellaneous
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbAccess2000 kbOffice2000Search kbAccess2000Search kbOffice2000 kbOffice2000DevSearch
	Version           : :; WINDOWS:2000
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
