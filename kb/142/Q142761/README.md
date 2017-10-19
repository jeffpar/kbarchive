---
layout: page
title: "Q142761: WD97: Error Message: &quot;...Word Cannot Find Its Data Source...&quot;"
permalink: /kb/142/Q142761/
---

## Q142761: WD97: Error Message: &quot;...Word Cannot Find Its Data Source...&quot;

	Article: Q142761
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbualink97 winword word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to merge a document that was created on another computer, Word
	displays the following error message
	
	  <main document name> is a mail merge main document. Word cannot find
	  its data source, <data source name>
	
	where <main document name> is the name of the mail merge file, and <data
	source name> is the name of the data document. Word gives you the option to
	find the data source or choose other options.
	
	CAUSE
	=====
	
	Word relies on a path statement in the main document that points to the data
	document. When the mail merge is created on one computer, the path statements
	apply to that computer. If you move the files to another computer, the path
	statements may no longer be accurate, and the mail merge cannot be completed
	successfully.
	
	RESOLUTION
	==========
	
	To resolve this problem, use any of the following methods.
	
	Method 1: Click the Find Data Source Button and Locate the Data Document
	------------------------------------------------------------------------
	
	Method 2: Remove and Reattach the Data Source
	---------------------------------------------
	
	Remove the data source and then reattach the data source. This option does not
	remove the merge fields nor modify the document text. To do this, follow these
	steps.
	
	1. Click Options.
	
	2. Click Remove Data/Header Source.
	
	3. On the Tools menu, click Mail Merge.
	
	4. Click Get Data, locate the data document, and then click Open.
	
	5. Click Close.
	
	Word can now merge the two documents successfully.
	
	Method 3: Remove All Merge Information
	--------------------------------------
	
	This method restores the main document to a normal Word document. It does not
	remove the merge fields nor does it modify the document text.
	
	1. Click Options.
	
	2. Click Remove All Merge Info.
	
	3. On the Tools menu, click Mail Merge.
	
	4. Click Create, and then select the main document type.
	
	5. Click Active Window.
	
	6. Click Get Data, locate the data document, and then click Open.
	
	7. Click Close.
	
	Word can now merge the two documents successfully.
	
	Method 4: Correct the Path to the Data Document
	-----------------------------------------------
	
	With the document open, follow these steps to enter the correct path to the data
	document:
	
	1. On the Tools menu, click Mail Merge.
	
	2. Click Create.
	
	3. Select "Restore to Normal Word Document."
	
	4. Click Yes.
	
	5. Click Close.
	
	6. On the File menu, click Save.
	
	7. On the Tools menu, click Mail Merge.
	
	8. Click Create.
	
	9. Select the type of main merge document.
	
	10. Click Get Data.
	
	11. Locate the data document, and then click Open.
	
	12. Click Close.
	
	Word can now merge the two documents successfully.
	
	Additional query words: mmh print merge 8.0 8.00
	
	======================================================================
	Keywords          : kberrmsg kbualink97 winword word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
