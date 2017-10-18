---
layout: page
title: "Q153668: WD97: Mail Merge Main Document Cannot Find Data Source"
permalink: kb/153/Q153668/
---

## Q153668: WD97: Mail Merge Main Document Cannot Find Data Source

	Article: Q153668
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:7.0,97
	Operating System(s): 
	Keyword(s): kbualink97kbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Schedule+ for Windows, version 7.0 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create a mail merge main document and attach it to an Outlook 97
	(Schedule+) data source, the link to the data source is lost when you close
	Word. When you restart Word and open the mail merge main document, you will see
	one of the following error messages:
	
	If you are using Outlook 97 as your data source:
	
	  <main document file name> is a mail merge main document. Word cannot
	  find its data source, ~~~_virtual_file_~~~.olk.
	
	If you are using Schedule+ as your data source:
	
	  <main document file name> is a mail merge main document. Word cannot
	  find its data source, ~~~_virtual_file_~~~.scd.
	
	CAUSE
	=====
	
	When you attach an Outlook 97 (Schedule+) data source, Word converts the contact
	list and creates a temporary copy of the file in table format called
	~~~_virtual_file_~~~.olk (~~~_virtual_file_~~~.scd).
	
	This behavior is by design to prevent you from accidentally overwriting the
	original Outlook 97 (Schedule+) contact list with a format not recognized by
	Outlook 97 (Schedule+). Since this file is a temporary file, it is deleted when
	you exit Word.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1: Use This Method When the Error Appears
	------------------------------------------------
	
	1. Click Options in the Error dialog box, and then click Remove Data/Header
	  Source.
	
	2. With the document open, click Mail Merge on the Tools menu.
	
	3. In the Mail Merge Helper, click Get Data, click Use Address Book, select
	  Outlook Address Book (Schedule+ Contacts), and then click OK.
	
	  This creates a new virtual file, based on the current contact list
	  information.
	
	  NOTE: You need to repeat these steps each time you restart Word and open the
	  mail merge main document attached to this data source.
	
	Method 2: From Microsoft Outlook 97, Export the File as Either .csv or .tsv
	---------------------------------------------------------------------------
	
	1. On the File menu, click Import And Export.
	
	2. Select Export To A File and click Next.
	
	3. Select the folder you want to export from (for example, select the Contacts
	  folder), and click Next.
	
	4. In the Create A File Of Type list, select either Comma Separated Values
	  (Windows) or Tab Separated Values (Windows), and then click Next.
	
	5. Type the full path and filename for the new file in the Save Exported Files
	  As box, and click Next.
	
	  -or-
	
	  Click the Browse button and navigate to the folder to which to save the
	  exported file, then type a name for the file and click OK and then click
	  Next.
	
	6. Click Map Custom Fields, select the default map, and then click OK.
	
	7. Click Finish.
	
	Method 3: From Schedule+, Export the Contact List as a Text File
	----------------------------------------------------------------
	
	1. Start Schedule+.
	
	2. On the File menu, click Export, and then click Text.
	
	3. In the Text Export Wizard, choose Contact List, and then click Next.
	
	4. Select the field delimiter and the character you want to use to surround your
	  fields, and then click Next.
	
	5. Click Next
	
	6. Select each field you want to export and then click the Add button. If you
	  want to export all the fields, click the Add All button. Click Next.
	
	7. Type a name for the file that will contain the exported data, and then click
	  Finish.
	
	  NOTE: If the ODBC drivers are installed, Word attempts to use the Text ODBC
	  driver when you attach the data source. To prevent an error message such as
	  the following
	
	  Open Database Connectivity Error: <fieldname> isn't a valid name.
	
	  select the data source, click to select the Select Method check box, and then
	  click Open. Click Text Only. (If Text Only is not in the list, click Show All
	  and then select Text Files.) Word will use its own text converter.
	
	REFERENCES
	==========
	
	For additional information, please see the following article here in the
	Microsoft Knowledge Base:
	
	  Q137385 WD97: Error Using Text Data Source with ODBC Driver
	
	Additional query words: schedule + pab contact list virtual data
	
	======================================================================
	Keywords          : kbualink97 kbfaq
	Technology        : kbWordSearch kbOutlookSearch kbWord97 kbWord97Search kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:7.0,97
	
	=============================================================================
	
