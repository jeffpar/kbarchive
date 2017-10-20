---
layout: page
title: "Q195994: WD97: How to Force Text to Start at Same Line in Merged Letters"
permalink: /kb/195/Q195994/
---

## Q195994: WD97: How to Force Text to Start at Same Line in Merged Letters

{% raw %}

	Article: Q195994
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta winword word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to set up a mail merge main document so that the body
	of the document does not change position when some merge records contain fewer
	lines than other merge records.
	
	When you choose to suppress blank lines during a merge, Word automatically
	suppresses those fields that are empty. This feature causes the body text to
	move up when you perform the merge.
	
	MORE INFORMATION
	================
	
	To set up your document so that the body text starts at the same location for
	each document, create a table with a row set to an exact height; place your mail
	merge field codes into that row; and place all body text below the table row.
	
	The following example demonstrates steps for doing this.
	
	Enter the following mail merge codes into the top of your document with the body
	text below this area, starting at the same place for all documents produced in
	the mail merge.
	
	<<Title>> <<FirstName>> <<LastName>>
	<<Address1>>
	<<Address2>>
	<<City>>, <<State>> <<PostalCode>>
	
	There will be times that <<Address2>> is blank. You want that blank
	line to be suppressed. By default, it will be; however, in case it is not, you
	can set it by doing the following:
	
	1. On the Tools menu, click Mail Merge.
	
	2. Click the Merge button under number 3 "Merge the data with the document".
	
	  NOTE: There must be at least one mail merge field in the document for the
	  Merge button to be available.
	
	3. Under When Merging Records, select "Don't print blank line when data fields
	  are empty".
	
	If you suppress the <<Address2>> line if it is blank, the body text
	moves up one line. To prevent this from happening, you need to place the mail
	merge fields into a table row set to an exact height. To do this, follow these
	steps:
	
	1. Move the insertion point to the place where you want the mail merge fields.
	
	2. On the Table menu, click Insert Table.
	
	3. In Number of Columns, type 1. In Number of Rows, type 1, and then click OK.
	
	4. On the Table menu, click Cell Height and Width, and then select the Row tab.
	
	5. Under Height of Row 1, select Exactly. In the At box, type a measurement for
	  the height of the row, like 1", and then click OK.
	
	  NOTE: If you type in the measurement as inches ("), Word converts this
	  measurement to points (pt).
	
	6. Insert the merge field codes into the table cell, and type the body text
	  below the table.
	
	Additional query words: mailmerge conditional 8.0 8.00
	
	======================================================================
	Keywords          : kbdta winword word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
