---
layout: page
title: "Q166365: ACC97: Changing Your Data Source for a Microsoft Word Mail Merge"
permalink: /kb/166/Q166365/
---

## Q166365: ACC97: Changing Your Data Source for a Microsoft Word Mail Merge

{% raw %}

	Article: Q166365
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 01-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SUMMARY
	=======
	
	When you use the Microsoft Word Mail Merge Wizard to merge your data into a Word
	document, it is possible to use an existing Word document that has been
	previously merged with a different data source. This article demonstrates how to
	do this.
	
	MORE INFORMATION
	================
	
	To change the data source for a Microsoft Word Mail Merge document, follow these
	steps:
	
	1. Open your database in Microsoft Access.
	
	2. In the Database window, select the new data source that you want to use with
	  your existing Word document.
	
	3. On the Tools menu, click OfficeLinks, and then click "Merge It with MS Word."
	
	4. On the first screen of the Microsoft Word Mail Merge Wizard, click "Link your
	  data to an existing Microsoft Word document," and then click OK.
	
	5. In the Select Microsoft Word Document box, select the existing Microsoft Word
	  document you want to use, and then click Open.
	
	6. Microsoft Word opens with the following message:
	
	  The data source of the document you selected is different from the
	  source you selected when starting the Mail Merge Wizard. Would you
	  like the Mail Merge Wizard to change the source?
	
	7. Click Yes. The new fields for the data source are now available for you to
	  insert into your document.
	
	REFERENCES
	==========
	
	For more information about using the Microsoft Word Mail Merge feature, search
	the Help Index for "merging data with Microsoft Word Mail Merge Wizard," or ask
	the Microsoft Access 97 Office Assistant.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWordSearch kbAccessSearch kbWord97 kbWord97Search kbAccess97 kbZNotKeyword2 kbAccess97Search
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
