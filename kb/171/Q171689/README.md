---
layout: page
title: "Q171689: WD97: Mail Merge Main and Data Documents Not Saved in Background"
permalink: /kb/171/Q171689/
---

## Q171689: WD97: Mail Merge Main and Data Documents Not Saved in Background

	Article: Q171689
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): winword word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save a mail merge main document, it will be saved in the foreground
	even if the Allow Background Saves check box is selected.
	
	When you close the mail merge main document, if you receive the following message
	and if you click Yes to save, the data file is saved in the foreground:
	
	  <Main document file name> is a mail merge main document that is
	  attached to a data source <file name> that has not been saved. Do you
	  want to save <data source file name>?
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The background save option is used to continue working in Microsoft Word while
	you save a document. Keep in mind that background save uses additional system
	memory. If you need to conserve system resources, you may want to turn off
	background save. To disable the Background Save feature, do the following:
	
	1. On the Tools menu, click Options, and then click the Save tab.
	
	2. Click to clear the Allow background saves check box.
	
	NOTES:
	
	- When Microsoft Word saves a document in the background, a pulsing disk icon
	  appears on the status bar.
	
	- If Microsoft Word cannot save a document in the background, for example, if
	  you do not have enough hard disk space or if you are saving a document to a
	  floppy disk, Word saves the document in the foreground instead.
	
	
	Additional query words: 8.0 mailmerge
	
	======================================================================
	Keywords          : winword word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
