---
layout: page
title: "Q198293: WD97: How to Use Mail Merge with a Microsoft Access Parameter"
permalink: /kb/198/Q198293/
---

## Q198293: WD97: How to Use Mail Merge with a Microsoft Access Parameter

{% raw %}

	Article: Q198293
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 15-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to merge a Word document with a Microsoft Access
	database using a parameter query.
	
	MORE INFORMATION
	================
	
	A Microsoft Access parameter query extends the flexibility of other Microsoft
	Access queries by prompting the user to enter certain criteria each time the
	query is run.
	
	This article assumes that there is a proper parameter query in Access. For more
	information about parameter queries, click Contents and Index on the Help menu,
	click the Index tab in Microsoft Access Help, type the following text
	
	  parameter queries
	
	and then double-click the selected text to go to the "Create a parameter query
	that prompts for criteria each time it's run" topic. If you are unable to find
	the information you need, ask the Office Assistant.
	
	To merge a Word document with a Microsoft Access query using a parameter query,
	use the following steps:
	
	1. Start a new Word document.
	
	2. On the Tools menu, click Mail Merge.
	
	3. Click the Create button on the Mail Merge Helper, and select the type of
	  document to merge (such as Form Letter or Mailing Labels).
	
	4. Click New Main Document.
	
	5. Click the Get Data button, and select Open Data Source.
	
	6. Change the List Files to MS Access Databases (*.mdb), and change to the
	  folder where Microsoft Access is located.
	
	7. Select the database you want to use, click the Select Method check box to
	  select it, and click the OK or Open button.
	
	8. In the Confirm Data Source dialog box, select MS Access Databases via DDE
	  (*.mdb), and click OK.
	
	  A Microsoft Access dialog box is displayed.
	
	9. Click the Queries tab.
	
	10. Select the parameter query from the list of queries, and click OK.
	
	11. A dialog box appears on the screen as a result of the parameter query.
	
	  If the dialog box does not appear, and Word does not seem to be responding,
	  press ALT+TAB once. The parameter query prompt dialog box should now appear.
	
	12. Type the information in the Parameter Query dialog box and click OK.
	
	13. A Word dialog box appears. Click Edit Main Document.
	
	14. Insert the merge fields in the main document, and perform the mail merge as
	  usual.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q141922 How to Start a Mail Merge
	
	  Q141992 How to Create Mailing Labels Using the Mail Merge Feature
	
	  Q141991 How to Create Envelopes Using Mail Merge
	
	  Q121109 Font Changes During Mail Merge
	
	  Q105745Unable to See List of Merge Fields
	
	Additional query words:
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbAccessSearch kbWord97 kbWord97Search kbAccess97 kbZNotKeyword2 kbAccess97Search
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
