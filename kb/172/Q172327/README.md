---
layout: page
title: "Q172327: WD97: Can't Merge Documents with Tracked Changes"
permalink: /kb/172/Q172327/
---

## Q172327: WD97: Can't Merge Documents with Tracked Changes

	Article: Q172327
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta kbproof kbfield word97 kbnumbering
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft Word 2000 version of this article, see Q189241.
	
	SYMPTOMS
	========
	
	If you attempt to use the Merge Documents feature to merge the tracked changes
	in two or more copies of the same document, you may receive the following error
	message:
	
	  The merged documents contain unmarked changes. Do you want to merge up to the
	  first untracked change?
	
	NOTE: If you click OK, Microsoft Word merges only up to the first unmarked change
	and selects it. Word does not add new material that is not marked as inserted
	text. If you click Cancel, Word cancels the merge.
	
	CAUSE
	=====
	
	This problem occurs when there are differences in the two documents that are not
	marked as tracked changes.
	
	WORKAROUND
	==========
	
	To complete the merge, you can either mark all differences between the copies as
	tracked changes, or compare documents by using the Compare Documents command.
	Use one of the following methods appropriate for your situation.
	
	Method 1: Create a New Original Document to Compare
	---------------------------------------------------
	
	1. In a blank, new Word document, point to Track Changes on the Tools menu, and
	  then click Highlight Changes.
	
	2. In the Highlight Changes dialog box, click to select "Track changes while
	  editing" and click OK.
	
	3. On the Insert menu, click File.
	
	4. In the Insert File dialog box, click to select the original document you want
	  to compare to and click OK.
	
	  NOTE: All of the text inserted from the original file will now appear as
	  tracked changes.
	
	5. On the Tools menu, point to Track Changes and click "Accept or Reject
	  Changes".
	
	6. In the "Accept or Reject Changes" dialog box, click Accept All. Click Yes to
	  the following message:
	
	  Do you want to accept all remaining changes without reviewing them?
	
	7. Click Close to close the "Accept or Reject Changes" dialog box.
	
	8. On the File menu, click Save and save the new file with a different name than
	  the original file.
	
	Use the new document to compare instead of the original.
	
	Method 2: Accept or Reject All Changes in Original and Changed Documents
	------------------------------------------------------------------------
	
	To compare documents correctly, you must turn off the Track Changes feature,
	accept (or reject) all tracked changes, and then run Compare Documents. To do
	this, follow these steps:
	
	1. Open the first document.
	
	2. On the Tools menu, point to Track Changes, and then click Highlight Changes.
	
	3. In the Highlight Changes dialog box, click to clear the Track Changes While
	  Editing check box, and then click OK.
	
	4. On the Tools menu, point to Track Changes, and then click Accept Or Reject
	  Changes.
	
	5. Use the Accept and Reject buttons to review the changes in the document.
	
	6. Save and close the document.
	
	7. Repeat steps 1 through 6 for the second document.
	
	You can now compare the first document with the second document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	To avoid this problem when comparing documents for changes, make sure that the
	original document to compare to does not contain tracked changes.
	
	REFERENCES
	==========
	
	For more information about comparing versions, click "Contents and Index" on the
	Help menu, click the Index tab in Microsoft Word Help, type the following text
	
	  tracking changes
	
	and then double-click the selected text to go to the "Incorporating reviewer's
	comments and changes" topic. If you are unable to find the information you need,
	ask the Office Assistant.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q182057 WD97: Merging Documents vs. Comparing Documents
	
	Additional query words: revision marks marking redline redlining
	
	======================================================================
	Keywords          : kbdta kbproof kbfield word97 kbnumbering 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
