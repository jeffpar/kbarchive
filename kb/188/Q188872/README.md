---
layout: page
title: "Q188872: WD97: &quot;Header Record Delimiters&quot; Appears Repeatedly in Merge"
permalink: /kb/188/Q188872/
---

## Q188872: WD97: &quot;Header Record Delimiters&quot; Appears Repeatedly in Merge

{% raw %}

	Article: Q188872
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a single field data file is in a paragraph delimited form, the dialog box
	
	  Header Record Delimiters
	
	will appear at several points during the mail merge process. The default field
	delimiter is displayed as [none]. To properly close this dialog box, leave the
	settings as they are displayed and click OK.
	
	NOTE: The information in this article applies only to data files that consist of
	a single field. If this dialog box appears when using a data file with two or
	more fields, there is an error in the header record.
	
	CAUSE
	=====
	
	This dialog box is prompting you to select the character to separate fields and
	records in the data file. For example, in many multiple-field data files, a
	comma is used to separate each field and a paragraph (hard carriage return) is
	used to separate each record. In the case of a single field data file, there is
	no field separator.
	
	This dialog box appears every time the data file is read during the mail merge
	process. For example, the dialog box may appear in any of the following
	situations:
	
	- Immediately after you select the data file name from the Mail Merge Helper
	  Attach Data File dialog box.
	
	- After you click OK in the Data Form Window.
	
	- After you close a file opened in View Source mode.
	
	Click OK to remove this dialog box from the screen in all of these cases.
	Clicking Cancel may cause Word to open the source file in View Source mode.
	
	If you open the data file in View Source mode immediately after you cancel the
	Header Record Delimiters message, click the file and click Yes when prompted to
	save the changes. Clicking No and canceling the Header Record Delimiters message
	breaks the link between the data file and main document.
	
	WORKAROUND
	==========
	
	To convert the data file to a single column table, follow these steps:
	
	1. Open the data file.
	
	2. On the Edit menu, click Select All.
	
	3. On the Table menu, click Convert Text To Table.
	
	4. Set Number Of Columns to 1 and set Separate Text At to Paragraph.
	
	5. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: mailmerge conversion error message
	
	======================================================================
	Keywords          : kbdta word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
