---
layout: page
title: "Q191264: WD97: How to Use the Outlook Express Address Book in Mail Merge"
permalink: /kb/191/Q191264/
---

## Q191264: WD97: How to Use the Outlook Express Address Book in Mail Merge

{% raw %}

	Article: Q191264
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:4.0,97
	Operating System(s): 
	Keyword(s): kbinterop kbdta word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Outlook Express version 4.0 for Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to export the Outlook Express Address Book as a text
	file to use as a mail merge data source in Microsoft Word.
	
	NOTE: The Outlook Express Address Book is not designed for use with Microsoft
	Word 97 for Windows. Therefore, when you try to perform a mail merge with the
	Outlook Express Address Book, it will not be an available address book or you
	will receive an error message.
	
	For more information about the error messages you may receive, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q178481 WD97: Errors Accessing the Address Book Icon
	
	MORE INFORMATION
	================
	
	NOTE: For more information on how to import your Outlook Express Address Book
	into the Microsoft Outlook 97/98 Contact List, please see the following articles
	in the Microsoft Knowledge Base:
	
	  Q175714 OL97: How to Import Addresses from Outlook Express
	
	  Q180197 OL98: How to Import Addresses from Outlook Express
	
	
	To export the Address Book as a text file from Outlook Express, follow these
	steps:
	
	1. Start Outlook Express.
	
	2. On the File menu, point to Export, and then click Address Book.
	
	3. In the Address Book Export Tool dialog box, click Text File (Comma Separated
	  Values) and then click Export.
	
	4. In the "Save exported file as" box, type in a file name for your exported
	  Address Book file, and then click Browse.
	
	5. Save your file.
	
	  By default, Outlook Express will save the file to your desktop. You may want
	  to save the file to the My Documents folder or to a different folder or
	  drive.
	
	  NOTE: You can save your Outlook Express Address Book in one of two formats:
	  Comma Separated Values (*.csv) or Text Files (*.txt). Word will be able to
	  use either format.
	
	6. Click Next.
	
	7. Click to select the fields that you want to export as part of your data
	  source, and then click Finish.
	
	  NOTE: All of the fields in the Outlook Express Address Book can be exported,
	  except for Gender, Conferencing Email, and Directory Servers.
	
	8. When Outlook Express has completed exporting your address book, the following
	  message will be displayed:
	
	  Address book export has completed successfully.
	
	  Click OK.
	
	9. Click Close to close the Address Book Export Tool dialog box.
	
	Note: If you receive a "Word cannot open the data source" error message do the
	following:
	
	1. From the Open Data Source dialog place a check next to "Select Method".
	
	2. Choose Text Files (*.txt) instead of the ODBC converter.
	
	For more information about performing a mail merge in Word using a text file,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q141922 WD97: How to Start a Mail Merge
	
	Additional query words: mail merge export outlook express word data source
	
	======================================================================
	Keywords          : kbinterop kbdta word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2 kbOutlookExpressSearch kbZNotKeyword3 kbOutlookExpress95Search kbOutlookExpress400Win95
	Version           : WINDOWS:4.0,97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
