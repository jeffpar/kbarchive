---
layout: page
title: "Q182057: WD97: Merging Documents vs. Comparing Documents"
permalink: /kb/182/Q182057/
---

## Q182057: WD97: Merging Documents vs. Comparing Documents

	Article: Q182057
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbproof word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In earlier versions of Microsoft Word, you could compare two versions of a
	document and "mark" the differences (Compare Documents). In Word 97, you can
	merge the tracked changes from several copies of a document into one document
	(Merge Documents).
	
	The Compare Documents and Merge Documents commands are quite different, but may
	be confused because of the location of the commands and their names. This
	article contains a brief explanation of their differences.
	
	MORE INFORMATION
	================
	
	Compare Documents
	-----------------
	
	The Compare Documents command marks all of the differences between two documents,
	using the current Track Changes settings. To compare documents, follow these
	steps:
	
	1. Start Word, and open one of the documents for comparison (normally the most
	  recent or current document).
	
	2. On the Tools menu, point to Track Changes and click Compare Documents.
	
	  NOTE: There should be no tracked changes in either document at the start of
	  the process.
	
	3. In the "Select File to Compare With Document" dialog box, select the file to
	  be compared with the current file.
	
	4. Click Open.
	
	Unique text in the open document (text that does not appear in the other
	document) is marked as inserted or new text. Unique text in the file selected to
	compare with the open document is marked as deleted text.
	
	Merge Documents
	---------------
	
	The Merge Documents command merges tracked changes in several copies of the same
	document. After you have edited each copy of the document, you can merge all of
	the tracked changes into one document for final editing.
	
	NOTE: To track changes in each copy of the document, point to Track Changes on
	the Tools menu, click Highlight Changes, and then click to select the "Track
	changes while editing" check box.
	
	To merge marked changes, follow these steps:
	
	1. Open one of the documents containing tracked changes.
	
	2. On the Tools menu, click Merge Documents.
	
	3. In the "Select File to Merge Into Current Document" dialog box, select a
	  document containing tracked changes to be merged, and click Open.
	
	All of the tracked changes are now in the open document. Repeat steps 2-3 until
	you have merged tracked changes from all document copies.
	
	NOTE: If there are any differences in the documents that have not been marked as
	tracked changes (unmarked changes) the merge stops at that point and Word
	displays the message:
	
	  The merged documents contain unmarked changes. Do you want to merge up to the
	  first untracked change?
	
	If you click OK, Word merges only up to the first unmarked change and highlights
	it (selects it). Word does not add new material that is not marked as inserted
	text. If you click Cancel, Word cancels the merge.
	
	At this point you can either compare these documents using the Compare Documents
	command, or mark all differences between the copies as tracked changes, to
	successfully complete the merge.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kbproof word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
