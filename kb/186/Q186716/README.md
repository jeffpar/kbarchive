---
layout: page
title: "Q186716: WD97: Not Asked to Save Data Source Closing Mail Merge Document"
permalink: kb/186/Q186716/
---

## Q186716: WD97: Not Asked to Save Data Source Closing Mail Merge Document

	Article: Q186716
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmm kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Word 97, if you save and then close your main document during a
	mail merge, Word does not prompt you to save your data source. If you have made
	any changes to your data source during the mail merge, those changes are not
	saved.
	
	NOTE: This problem does not occur if you try to close the main document and it is
	"dirty" (that is, contains unsaved changes); it only happens if you close the
	main document and it does not need to be saved. If you try to close a dirty main
	document, Word prompts you to save both documents.
	
	CAUSE
	=====
	
	This problem occurs if the default save format is Word 6.0/95 (on the Tools
	menu, click Options, click the Save tab, and then look under Save Word Files
	As).
	
	This problem does not occur if the default save format is Word Document. In this
	case, Word will always prompt you to save the data source, whether you have
	already saved the document or not.
	
	WORKAROUND
	==========
	
	To work around this problem, make a change to the main document, and close it
	without first saving it. Word will prompt you to save both documents.
	
	  -or-
	
	View the data source, make your changes, and save the data source manually. To do
	this, follow these steps:
	
	NOTE: The following workaround assumes that you are already viewing the mail
	merge main document on the screen.
	
	1. On the Tools menu, click Mail Merge.
	
	2. Under step 2 (Data Source), click Edit and then click the name of your data
	  source file.
	
	3. Click View Source.
	
	4. Make your changes to the data source.
	
	5. On the File menu, click Save to save your data source.
	
	MORE INFORMATION
	================
	
	There are two ways to change the contents of your data source:
	
	- Edit the record in the Data Form.
	
	  -or-
	
	- Click View Source in the Data Form dialog box. However, this is the only way
	  you can save the data source manually.
	
	
	For more information about mail merges, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q114483 WD: Data Records Deleted Closing Mail Merge Data Document
	
	  Q162602 WD: Questions About Saving in the Word 6.0/95 File Format
	
	  Q142756 WD: How to Design and Set Up Mail Merge Data Sources
	
	  Q141922 WD: How to Start a Mail Merge
	
	Additional query words: gone missing deleted
	
	======================================================================
	Keywords          : kbmm kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
